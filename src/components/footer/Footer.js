import React from "react";
import styles from "./Footer.module.css";
import Logo from "../logo/logo.svg";
import SocialBtn from "./SocialBtn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="logo do SAP" />
      </div>
      <div>
        <div className={styles.social}>
          <SocialBtn label={<InstagramIcon />} />
          <SocialBtn label={<WhatsAppIcon />} />
          <SocialBtn label={<FacebookRoundedIcon />} />
          <SocialBtn label={<FaXTwitter fontSize={20} />} />
        </div>
        <div className={styles.email}>
          <p>sapcontato@gmail.com</p>
        </div>
        <div className={styles.info}>
          <p>
            &copy; 2023 SAP Copyrigth &nbsp; <a href="#">Info</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
