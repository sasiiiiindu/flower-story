import styles from "./shop.module.css";
import FlowerBouquet from "@/components/FlowerBouquet";

export default function Shop() {
  const row1 = [
    { color: "#d32f2f", name: "Red Tulips" },
    { color: "#f48fb1", name: "Pink Roses" },
    { color: "#f57c00", name: "Orange Tulips" },
    { color: "#fbc02d", name: "Yellow Tulips" },
  ];

  const row2 = [
    { color: "#7b1fa2", name: "Purple Peonies" },
    { color: "#f8bbd0", name: "Blush Roses" },
    { color: "#ff8a65", name: "Coral Tulips" },
  ];

  const row3 = [
    { color: "#b71c1c", name: "Crimson Tulips" },
    { color: "#4a148c", name: "Plum Peonies" },
    { color: "#ffb74d", name: "Peach Roses" },
  ];

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
              <FlowerBouquet key={idx} color={flower.color} name={flower.name} />
            ))}
          </div>
          <div className={styles.shelf}></div>
        </div>

        <div>
          <div className={styles.row}>
            {row2.map((flower, idx) => (
              <FlowerBouquet key={idx} color={flower.color} name={flower.name} />
            ))}
          </div>
          <div className={styles.shelf}></div>
        </div>

        <div>
          <div className={styles.row}>
            {row3.map((flower, idx) => (
              <FlowerBouquet key={idx} color={flower.color} name={flower.name} />
            ))}
          </div>
          <div className={styles.shelf}></div>
        </div>
      </div>
    </main>
  );
}
