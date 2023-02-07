import styles from "./index.module.css";
import { Inter } from "@next/font/google";
import { WebsiteOwnerInformation } from "@/components/WebsiteOwnerInformation";
import { client } from "@/infra/graphql/client";
import { gql } from "@apollo/client";
import { log } from "console";

const inter = Inter({ subsets: ["latin"] });

interface props {
  avatar: string;
  socials: {
    id: string;
    link: string;
  }[];
}

export default function Home({ avatar, socials }: props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.websiteOwnerInformation}>
          <WebsiteOwnerInformation
            avatarURL={avatar}
            socials={socials}
            name="Thalles Passos"
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users/thallesp");
  const githubInfo = await response.json();

  const {
    data: { socials },
  } = await client.query({
    query: gql`
      query {
        socials {
          id
          link
        }
      }
    `,
  });

  return {
    props: { avatar: githubInfo.avatar_url, socials },
  };
}
