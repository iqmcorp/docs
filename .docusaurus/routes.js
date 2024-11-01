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
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', 'c78'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '0ca'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', '8af'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', '19f'),
            routes: [
              {
                path: '/docs/docs/Authorization-Guide',
                component: ComponentCreator('/docs/docs/Authorization-Guide', '29f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/Assets-API-Guidelines',
                component: ComponentCreator('/docs/docs/Guidelines/Assets-API-Guidelines', 'aba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/Bid-Model-API-Guidelines',
                component: ComponentCreator('/docs/docs/Guidelines/Bid-Model-API-Guidelines', 'ac5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/Campaign-API-Guidelines',
                component: ComponentCreator('/docs/docs/Guidelines/Campaign-API-Guidelines', 'db7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/Conversion-API-Guidelines',
                component: ComponentCreator('/docs/docs/Guidelines/Conversion-API-Guidelines', '81e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/Finance-Guidelines',
                component: ComponentCreator('/docs/docs/Guidelines/Finance-Guidelines', 'a74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/Insights-API-Guidelines',
                component: ComponentCreator('/docs/docs/Guidelines/Insights-API-Guidelines', '4fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/Inventory-API-Guide',
                component: ComponentCreator('/docs/docs/Guidelines/Inventory-API-Guide', '3a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/Master-API-Guidelines',
                component: ComponentCreator('/docs/docs/Guidelines/Master-API-Guidelines', 'c0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/Reports-API-Guidelines',
                component: ComponentCreator('/docs/docs/Guidelines/Reports-API-Guidelines', 'b8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/User-Profile-Guidelines',
                component: ComponentCreator('/docs/docs/Guidelines/User-Profile-Guidelines', '81c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Guidelines/Workspace-Guidelines',
                component: ComponentCreator('/docs/docs/Guidelines/Workspace-Guidelines', '33e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/intro',
                component: ComponentCreator('/docs/docs/intro', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Quickstart Guides/Authentication-Quickstart-Guide',
                component: ComponentCreator('/docs/docs/Quickstart Guides/Authentication-Quickstart-Guide', '5fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Quickstart Guides/Matched-Audience-Upload-API-Quickstart-Guide',
                component: ComponentCreator('/docs/docs/Quickstart Guides/Matched-Audience-Upload-API-Quickstart-Guide', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Quickstart Guides/Reporting-API-Quickstart-Guide',
                component: ComponentCreator('/docs/docs/Quickstart Guides/Reporting-API-Quickstart-Guide', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Quickstart Guides/Schedule-Report-API-Quickstart-Guide',
                component: ComponentCreator('/docs/docs/Quickstart Guides/Schedule-Report-API-Quickstart-Guide', 'd14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Quickstart Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide',
                component: ComponentCreator('/docs/docs/Quickstart Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide', '123'),
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
    path: '/docs/',
    component: ComponentCreator('/docs/', '6fa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
