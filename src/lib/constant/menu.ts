interface MenuLink {
  title: string;
  link: string;
}

export const menuLinks: MenuLink[] = [
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "About",
    link: "/about",
  },
];

export const quickLinks: MenuLink[] = [
  { title: "About Us", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Features", link: "/about#features" },
];

export const legalLinks: MenuLink[] = [
  { title: "Terms of Service", link: "/terms" },
  { title: "Privacy Policy", link: "/privacy" },
  { title: "Cookie Policy", link: "/cookies" },
];

