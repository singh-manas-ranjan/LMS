import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiVercel } from "react-icons/si";

export { FaFacebook, FaGithub, FaLinkedin, FaTwitter, CgWebsite, SiVercel };

export const getIcon = (iconName: string): JSX.Element | null => {
  switch (iconName) {
    case "facebook":
      return <FaFacebook />;
    case "github":
      return <FaGithub />;
    case "twitter":
      return <FaTwitter />;
    case "linkedin":
      return <FaLinkedin />;
    case "vercel":
      return <SiVercel />;
    case "website":
      return <CgWebsite />;
    default:
      return null;
  }
};
