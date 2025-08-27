// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

/*import { Redirect } from "@docusaurus/router";*/
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IQM",
  tagline: "API Docs",
  favicon: "img/IQM-icon-black.jpg",

  // Set the production url of your site here
  url: "https://developers.iqm.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "IQM", // Usually your GitHub org/user name.
  projectName: "API Documentation", // Usually your repo name.

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
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
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
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      algolia: {
        appId: "09FZUVDE53",
        apiKey: "1e1958d8b4382c88af9bbb9291e74da9",
        indexName: "IQM API Docs",
        contextualSearch: true,
        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/'
        }
      },
      image: "img/IQM-logo-dark.jpg",
      navbar: {
        title: "API Docs",
        logo: {
          alt: "IQM Site Logo",
          src: "img/IQM.png",
        },
        items: [
          {
            position: "left",
            label: "GETTING STARTED",
            to: "Getting%20Started/"
          },
          {
            label: "QUICKSTART GUIDES",
            position: "left",
            to: "/Quickstart%20Guides/",
            className: "navbarLink",
          },
          {
            label: "TUTORIALS",
            position: "left",
            to: "/Tutorials/",
            className: "navbarLink",
          },
          {
            label: "API GUIDELINES",
            position: "left",
            to: "/Guidelines/",
            className: "navbarLink",
            type: "dropdown",
            items: [
              {
                label: "POLITICAL",
                type: "doc",
                docId: "Political Vertical/index",
              },
              {
                label: "HEALTHCARE",
                type: "doc",
                docId: "Healthcare Vertical/index",
              },
            ]
          },
          {
            label: "MIGRATION GUIDES",
            position: "left",
            to: "/Migration%20Guides/",
            className: "navbarLink",
          },
          {
            label: "MCP",
            position: "left",
            to: "/MCP/",
            className: "navbarLink",
          },
          {
            type: "search",
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
                to: "/Guidelines",
              },
              {
                label: "Help Center",
                to: "https://help.iqm.com/en/"
              },
              {
                label: "Github",
                to: "https://github.com/iqmcorp/docs"
              },
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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/Tutorials/Create-a-Conversion',
            from: '/Quickstart Guides/Conversion-Quickstart'
          },
          {
            to: '/Tutorials/Upload-a-Matched-Audience',
            from: '/Quickstart Guides/Matched-Audience-Upload-API-Quickstart-Guide/'
          },
          {
            to: '/Tutorials/Create-a-Bid-Model',
            from: '/Quickstart Guides/Bid-Model-Quickstart/'
          },
          {
            to: '/Tutorials/Optimize-Your-Inventory',
            from: '/Quickstart Guides/Inventory-Quickstart/'
          },
          {
            to: '/Tutorials/Create-an-Insights-Report',
            from: '/Quickstart Guides/Insights-Quickstart/'
          },
          {
            to: '/Tutorials/Create-a-PG-Campaign',
            from: '/Quickstart Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide'
          }
        ]
      }
    ]
  ]
};

export default config;
