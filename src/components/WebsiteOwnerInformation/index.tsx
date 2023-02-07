import styles from "./styles.module.css";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
export type WebsiteOwnerInformationProps = {
  name: string;
  avatarURL: string;
  socials: {
    id: string;
    link: string;
  }[];
};

export function WebsiteOwnerInformation({
  avatarURL,
  name,
  socials,
}: WebsiteOwnerInformationProps) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={avatarURL}
        width={128}
        height={128}
        alt="Avatar"
      />
      <h1>{name}</h1>
      <h2>Welcome to my place on the internet!</h2>
      <div className={styles.socialIcons}>
        {socials.map((social) => (
          <SocialIcon
            key={social.id}
            target="_blank"
            className={styles.socialIcon}
            style={{ width: 32, height: 32 }}
            bgColor="#dadada"
            url={social.link}
          />
        ))}
      </div>
    </div>
  );
}
