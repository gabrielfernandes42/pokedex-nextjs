import Image from "next/image";
import styles from "../styles/About.module.css"

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About the project</h1>
      <p>lorem</p>
      <Image
        src="/images/charizard.png"
        width="300px"
        height="300px"
        alt="Pokemon Charizard"
      />
    </div>
  );
}
