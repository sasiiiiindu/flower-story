"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Bicycle from "@/components/Bicycle";
import FlowerShop from "@/components/FlowerShop";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "riding" | "parked">("idle");
  const router = useRouter();

  const handleBikeClick = () => {
    if (status === "idle") {
      setStatus("riding");
      setTimeout(() => {
        setStatus("parked");
      }, 4000); // Wait for 4s CSS transition to finish
    }
  };

  const handleShopClick = () => {
    if (status === "parked") {
      router.push("/shop");
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.scene}>
        <div className={`${styles.camera} ${status !== "idle" ? styles.riding : ""}`}>
          <div 
            className={`${styles.bikeWrapper} ${status !== "idle" ? styles.riding : ""}`}
            onClick={handleBikeClick}
          >
            <Bicycle />
          </div>
          
          <div 
            className={styles.shopWrapper}
            onClick={handleShopClick}
          >
            <FlowerShop />
          </div>
        </div>
      </div>

      <div className={styles.textContainer}>
        {status === "idle" && (
          <>
            <h1 className={styles.title}>Ride to the flower shop</h1>
            <p className={styles.subtitle}>click the bicycle to start riding</p>
          </>
        )}
        {status === "parked" && (
          <h1 className={`${styles.title} ${styles.fadeIn}`}>
            tap the flower shop
          </h1>
        )}
      </div>
    </main>
  );
}
