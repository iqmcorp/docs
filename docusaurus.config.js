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

  trailingSlash: true,

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
        gtag: {
          trackingID: "G-9G69R8P56B",
          anonymizeIP: true,
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
            to: "getting-started/"
          },
          {
            label: "QUICKSTART GUIDES",
            position: "left",
            to: "/quickstart-guides/",
            className: "navbarLink",
          },
          {
            label: "TUTORIALS",
            position: "left",
            to: "/tutorials/",
            className: "navbarLink",
          },
          {
            label: "API GUIDELINES",
            position: "left",
            to: "/guidelines/",
            className: "navbarLink",
            type: "dropdown",
            items: [
              {
                label: "POLITICAL",
                type: "doc",
                docId: "political-vertical/index",
              },
              {
                label: "HEALTHCARE",
                type: "doc",
                docId: "healthcare-vertical/index",
              },
            ]
          },
          {
            label: "MIGRATION GUIDES",
            position: "left",
            to: "/migration-guides/",
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
                to: "/guidelines",
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
            to: '/tutorials/create-a-conversion',
            from: '/quickstart-guides/conversion-quickstart'
          },
          {
            to: '/tutorials/upload-a-matched-audience',
            from: '/quickstart-guides/matched-audience-upload-api-quickstart-guide/'
          },
          {
            to: '/tutorials/create-a-bid-model',
            from: '/quickstart-guides/bid-model-quickstart/'
          },
          {
            to: '/tutorials/optimize-your-inventory',
            from: '/quickstart-guides/inventory-quickstart/'
          },
          {
            to: '/tutorials/create-an-insights-report',
            from: '/quickstart-guides/insights-quickstart/'
          },
          {
            to: '/tutorials/create-a-pg-campaign',
            from: '/quickstart-guides/upload-creative-and-create-a-campaign-api-quickstart-guide'
          }
        ],
        createRedirects(existingPath) {
          // Handle folder renames with both encoded and unencoded versions
          
          // Getting Started folder
          if (existingPath.includes('/getting-started')) {
            return [
              existingPath.replace('/getting-started', '/Getting Started'),
              existingPath.replace('/getting-started', '/Getting%20Started'),
            ];
          }
          
          // Healthcare Vertical folder
          if (existingPath.includes('/healthcare-vertical')) {
            return [
              existingPath.replace('/healthcare-vertical', '/Healthcare Vertical'),
              existingPath.replace('/healthcare-vertical', '/Healthcare%20Vertical'),
            ];
          }
          
          // Political Vertical folder
          if (existingPath.includes('/political-vertical')) {
            return [
              existingPath.replace('/political-vertical', '/Political Vertical'),
              existingPath.replace('/political-vertical', '/Political%20Vertical'),
            ];
          }
          
          // Quickstart Guides folder
          if (existingPath.includes('/quickstart-guides')) {
            return [
              existingPath.replace('/quickstart-guides', '/Quickstart Guides'),
              existingPath.replace('/quickstart-guides', '/Quickstart%20Guides'),
            ];
          }
          
          // Migration Guides folder
          if (existingPath.includes('/migration-guides')) {
            return [
              existingPath.replace('/migration-guides', '/Migration Guides'),
              existingPath.replace('/migration-guides', '/Migration%20Guides'),
            ];
          }
          
          return undefined; // Return undefined when no redirect is needed
        },
      }
    ]
  ]
};

export default config;
