"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Bicycle from "@/components/Bicycle";
import FlowerShop from "@/components/FlowerShop";

export default function Home() {
  const [isRiding, setIsRiding] = useState(false);
  const router = useRouter();

  const handleBikeClick = () => {
    if (!isRiding) {
      setIsRiding(true);
    }
  };

  const handleShopClick = () => {
    if (isRiding) {
      router.push("/shop");
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.scene}>
        <div 
          className={`${styles.bikeWrapper} ${isRiding ? styles.riding : ""}`}
          onClick={handleBikeClick}
        >
          <Bicycle />
        </div>
        
        <div 
          className={`${styles.shopWrapper} ${isRiding ? styles.visible : ""}`}
          onClick={handleShopClick}
        >
          <FlowerShop />
        </div>
      </div>

      <div className={styles.textContainer}>
        {!isRiding ? (
          <>
            <h1 className={styles.title}>Ride to the flower shop</h1>
            <p className={styles.subtitle}>click the bicycle to start riding</p>
          </>
        ) : (
          <h1 className={styles.title}>
            <span className={styles.sparkles}>✨</span>
            tap the flower shop
            <span className={styles.sparkles}>✨</span>
          </h1>
        )}
      </div>
    </main>
  );
}
