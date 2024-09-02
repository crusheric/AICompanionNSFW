// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import something from react packages
import { SearchNormal1 } from "iconsax-react";
import { Setting4 } from "iconsax-react";

// import jsons
import JsonHeader from '../../Jsons/HeaderBoxes.json';

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          <Nav />
          <BrickLayout />
          
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            <h2 className={styles["heading-header-title"]}>AI Sexting and Erotic Role Play with Your AI Companion NSFW 😎🤘</h2>
            <h1 className={styles["heading-header-second-title"]}>
            ❤ AI Sex Chat with <br />
            <a href="https://www.crush.to" target="_blank"><u>AI Companion NSFW FOR FREE</u></a>
            </h1>
          </div>
        </ContainerCard>
    </header>
  )
}

export default Header