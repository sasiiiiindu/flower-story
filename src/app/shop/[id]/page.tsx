import { notFound } from "next/navigation";
import Link from "next/link";
import { flowers } from "@/data/flowers";
import FlowerBouquet from "@/components/FlowerBouquet";
import styles from "./flower.module.css";

export default async function FlowerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const currentIndex = flowers.findIndex(f => f.id === id);
  if (currentIndex === -1) {
    notFound();
  }

  const flower = flowers[currentIndex];
  
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : flowers.length - 1;
  const nextIndex = currentIndex < flowers.length - 1 ? currentIndex + 1 : 0;
  
  const prevFlower = flowers[prevIndex];
  const nextFlower = flowers[nextIndex];

  return (
    <main className={styles.container}>
      <Link href="/shop" className={styles.backLink}>
        &larr; back to flowers
      </Link>

      <Link href={`/shop/${prevFlower.id}`} className={`${styles.arrow} ${styles.arrowLeft}`}>
        &larr;
      </Link>
      
      <Link href={`/shop/${nextFlower.id}`} className={`${styles.arrow} ${styles.arrowRight}`}>
        &rarr;
      </Link>

      <div className={styles.contentWrapper}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>{flower.title}</h2>
          <p className={styles.cardMessage}>{flower.message}</p>
          <p className={styles.cardSignOff}>{flower.signOff}</p>
        </div>

        <div className={styles.flowerDisplay}>
          <FlowerBouquet 
            color={flower.color} 
            name={flower.name} 
            variant="wrapped"
          />
        </div>
      </div>
    </main>
  );
}
