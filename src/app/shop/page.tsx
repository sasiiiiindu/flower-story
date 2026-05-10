import styles from "./shop.module.css";
import FlowerBouquet from "@/components/FlowerBouquet";
import { flowers } from "@/data/flowers";

export default function Shop() {
  const row1 = flowers.slice(0, 4);
  const row2 = flowers.slice(4, 7);
  const row3 = flowers.slice(7, 10);

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Pick a flower!</h1>
        <p className={styles.subtitle}>tap on any bouquet to choose it</p>
      </div>

      <div className={styles.shelvesContainer}>
        <div>
          <div className={styles.row}>
            {row1.map((flower, idx) => (
              <FlowerBouquet key={flower.id} id={flower.id} color={flower.color} name={flower.name} delay={300 + idx * 200} />
            ))}
          </div>
          <div className={styles.shelf}></div>
        </div>

        <div>
          <div className={styles.row}>
            {row2.map((flower, idx) => (
              <FlowerBouquet key={flower.id} id={flower.id} color={flower.color} name={flower.name} delay={300 + (row1.length + idx) * 200} />
            ))}
          </div>
          <div className={styles.shelf}></div>
        </div>

        <div>
          <div className={styles.row}>
            {row3.map((flower, idx) => (
              <FlowerBouquet key={flower.id} id={flower.id} color={flower.color} name={flower.name} delay={300 + (row1.length + row2.length + idx) * 200} />
            ))}
          </div>
          <div className={styles.shelf}></div>
        </div>
      </div>
    </main>
  );
}
