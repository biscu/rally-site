// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rally Documentation Demo",
  staticDirectories: ["static"],
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Easypark Group", // Usually your GitHub org/user name.
  projectName: "Rally", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "app", // Change this to 'app'
          routeBasePath: "app", // Optional: change the base URL path from /docs to /app
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "web",
        path: "web",
        routeBasePath: "web",
        sidebarPath: "./sidebarsWeb.js",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/rally-logo-light.svg",
          srcDark: "img/rally-logo-dark.svg",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "intro",
            label: "App",
          },
          {
            type: "doc",
            docsPluginId: "web",
            docId: "intro",
            position: "left",
            label: "Web",
          },
          { to: "/blog", label: "What's new", position: "left" },
        ],
      },
    }),
};

export default config;
