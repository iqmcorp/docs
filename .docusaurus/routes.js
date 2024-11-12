import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', 'e58'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '2ce'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '11b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'f13'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', 'bff'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', '830'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '13e'),
    exact: true
  },
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog', 'e9e'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive', '5ff'),
    exact: true
  },
  {
    path: '/docs/blog/authors',
    component: ComponentCreator('/docs/blog/authors', '164'),
    exact: true
  },
  {
    path: '/docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docs/blog/authors/all-sebastien-lorber-articles', '5f1'),
    exact: true
  },
  {
    path: '/docs/blog/authors/yangshun',
    component: ComponentCreator('/docs/blog/authors/yangshun', 'f7a'),
    exact: true
  },
  {
    path: '/docs/blog/first-blog-post',
    component: ComponentCreator('/docs/blog/first-blog-post', '451'),
    exact: true
  },
  {
    path: '/docs/blog/long-blog-post',
    component: ComponentCreator('/docs/blog/long-blog-post', '135'),
    exact: true
  },
  {
    path: '/docs/blog/mdx-blog-post',
    component: ComponentCreator('/docs/blog/mdx-blog-post', '369'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags', 'a37'),
    exact: true
  },
  {
    path: '/docs/blog/tags/docusaurus',
    component: ComponentCreator('/docs/blog/tags/docusaurus', '987'),
    exact: true
  },
  {
    path: '/docs/blog/tags/facebook',
    component: ComponentCreator('/docs/blog/tags/facebook', 'a94'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hello',
    component: ComponentCreator('/docs/blog/tags/hello', '941'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hola',
    component: ComponentCreator('/docs/blog/tags/hola', 'ae4'),
    exact: true
  },
  {
    path: '/docs/blog/welcome',
    component: ComponentCreator('/docs/blog/welcome', 'f3f'),
    exact: true
  },
  {
    path: '/docs/i',
    component: ComponentCreator('/docs/i', '9df'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', 'c78'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '58f'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'dc4'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'd86'),
            routes: [
              {
                path: '/docs/Guidelines/Assets-API-Guidelines',
                component: ComponentCreator('/docs/Guidelines/Assets-API-Guidelines', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guidelines/Bid-Model-API-Guidelines',
                component: ComponentCreator('/docs/Guidelines/Bid-Model-API-Guidelines', 'fda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guidelines/Campaign-API-Guidelines',
                component: ComponentCreator('/docs/Guidelines/Campaign-API-Guidelines', 'c79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guidelines/Conversion-API-Guidelines',
                component: ComponentCreator('/docs/Guidelines/Conversion-API-Guidelines', '6fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guidelines/Finance-Guidelines',
                component: ComponentCreator('/docs/Guidelines/Finance-Guidelines', '05c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guidelines/Insights-API-Guidelines',
                component: ComponentCreator('/docs/Guidelines/Insights-API-Guidelines', '93f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guidelines/Inventory-API-Guide',
                component: ComponentCreator('/docs/Guidelines/Inventory-API-Guide', '7d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guidelines/Master-API-Guidelines',
                component: ComponentCreator('/docs/Guidelines/Master-API-Guidelines', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guidelines/Reports-API-Guidelines',
                component: ComponentCreator('/docs/Guidelines/Reports-API-Guidelines', '38b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guidelines/User-Profile-Guidelines',
                component: ComponentCreator('/docs/Guidelines/User-Profile-Guidelines', '4cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guidelines/Workspace-Guidelines',
                component: ComponentCreator('/docs/Guidelines/Workspace-Guidelines', 'c39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart Guides/Authentication-Quickstart-Guide',
                component: ComponentCreator('/docs/Quickstart Guides/Authentication-Quickstart-Guide', '6b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart Guides/Matched-Audience-Upload-API-Quickstart-Guide',
                component: ComponentCreator('/docs/Quickstart Guides/Matched-Audience-Upload-API-Quickstart-Guide', '382'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart Guides/Reporting-API-Quickstart-Guide',
                component: ComponentCreator('/docs/Quickstart Guides/Reporting-API-Quickstart-Guide', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart Guides/Schedule-Report-API-Quickstart-Guide',
                component: ComponentCreator('/docs/Quickstart Guides/Schedule-Report-API-Quickstart-Guide', 'b19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide',
                component: ComponentCreator('/docs/Quickstart Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide', 'cc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
