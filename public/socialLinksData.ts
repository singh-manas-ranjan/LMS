export type TSocialLinks = {
  name: string;
  iconName: string;
  placeHolder: string;
};

const socialLinksData: TSocialLinks[] = [
  { name: "Github", iconName: "github", placeHolder: "github.com/username" },
  { name: "Vercel", iconName: "vercel", placeHolder: "vercel.com/team-url" },
  { name: "Twitter", iconName: "twitter", placeHolder: "twitter.com/username" },
  {
    name: "Linkedin",
    iconName: "linkedin",
    placeHolder: "linkedin.com/username",
  },
  {
    name: "Facebook",
    iconName: "facebook",
    placeHolder: "facebook.com/username",
  },
  { name: "Website", iconName: "website", placeHolder: "example.com/" },
];

export default socialLinksData;
