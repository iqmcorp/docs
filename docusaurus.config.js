// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/IQM-Q.ico",

  // Set the production url of your site here
  url: "https://iqmcorp.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "IQM", // Usually your GitHub org/user name.
  projectName: "API Guidelines", // Usually your repo name.

  /*onBrokenLinks: "ignore",*/
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    format: "detect",
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",*/
        },
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },*/
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "API Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/IQM.png",
        },
        items: [
          {
            position: "left",
            label: "Getting Started",
            to: "Getting%20Started/"
          },
          {
            label: "Quickstart",
            position: "left",
            to: "/Quickstart%20Guides/",
            className: "navbarLink",
          },
          {
            label: "API Guidelines",
            position: "left",
            to: "/Guidelines/",
            className: "navbarLink",
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "IQM",
            items: [
              {
                label: "Website",
                to: "https://iqm.com/",
              },
              {
                label: "API Guidelines",
                to: "/",
              },
              {
                label: "API Docs",
                to: "https://api.iqm.com/docs"
              },
              {
                label: "Help Center",
                to: "https://help.iqm.com/en/"
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IQM API docs. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
      },
    }),
};

export default config;
