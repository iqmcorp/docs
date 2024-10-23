import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Auth-Docusaurus-Test/__docusaurus/debug',
    component: ComponentCreator('/Auth-Docusaurus-Test/__docusaurus/debug', '576'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/__docusaurus/debug/config',
    component: ComponentCreator('/Auth-Docusaurus-Test/__docusaurus/debug/config', '6c0'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/__docusaurus/debug/content',
    component: ComponentCreator('/Auth-Docusaurus-Test/__docusaurus/debug/content', '780'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/__docusaurus/debug/globalData',
    component: ComponentCreator('/Auth-Docusaurus-Test/__docusaurus/debug/globalData', '84f'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/__docusaurus/debug/metadata',
    component: ComponentCreator('/Auth-Docusaurus-Test/__docusaurus/debug/metadata', 'aed'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/__docusaurus/debug/registry',
    component: ComponentCreator('/Auth-Docusaurus-Test/__docusaurus/debug/registry', '58f'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/__docusaurus/debug/routes',
    component: ComponentCreator('/Auth-Docusaurus-Test/__docusaurus/debug/routes', '8ab'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog', 'dde'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/archive',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/archive', '888'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/authors',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/authors', 'ae8'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/authors/all-sebastien-lorber-articles', 'cc0'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/authors/yangshun',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/authors/yangshun', '6a9'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/first-blog-post',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/first-blog-post', '730'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/long-blog-post',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/long-blog-post', '767'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/mdx-blog-post',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/mdx-blog-post', '498'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/tags',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/tags', '25f'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/tags/docusaurus',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/tags/docusaurus', 'ca5'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/tags/facebook',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/tags/facebook', '6cb'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/tags/hello',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/tags/hello', '45f'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/tags/hola',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/tags/hola', 'c4b'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/blog/welcome',
    component: ComponentCreator('/Auth-Docusaurus-Test/blog/welcome', 'c2c'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/markdown-page',
    component: ComponentCreator('/Auth-Docusaurus-Test/markdown-page', 'c78'),
    exact: true
  },
  {
    path: '/Auth-Docusaurus-Test/docs',
    component: ComponentCreator('/Auth-Docusaurus-Test/docs', '909'),
    routes: [
      {
        path: '/Auth-Docusaurus-Test/docs',
        component: ComponentCreator('/Auth-Docusaurus-Test/docs', 'c2e'),
        routes: [
          {
            path: '/Auth-Docusaurus-Test/docs',
            component: ComponentCreator('/Auth-Docusaurus-Test/docs', 'd75'),
            routes: [
              {
                path: '/Auth-Docusaurus-Test/docs/Authorization-Guide',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Authorization-Guide', 'cef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/Assets-API-Guidelines',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/Assets-API-Guidelines', '475'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/Bid-Model-API-Guidelines',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/Bid-Model-API-Guidelines', '95d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/Campaign-API-Guidelines',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/Campaign-API-Guidelines', '74e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/Conversion-API-Guidelines',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/Conversion-API-Guidelines', '419'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/Finance-Guidelines',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/Finance-Guidelines', '06c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/Insights-API-Guidelines',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/Insights-API-Guidelines', '6cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/Inventory-API-Guide',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/Inventory-API-Guide', 'ca2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/Master-API-Guidelines',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/Master-API-Guidelines', 'af5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/Reports-API-Guidelines',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/Reports-API-Guidelines', '669'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/User-Profile-Guidelines',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/User-Profile-Guidelines', '45c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Guidelines/Workspace-Guidelines',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Guidelines/Workspace-Guidelines', '92c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/intro',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/intro', 'dac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Quickstart Guides/Authentication-Quickstart-Guide',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Quickstart Guides/Authentication-Quickstart-Guide', '0c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Quickstart Guides/Matched-Audience-Upload-API-Quickstart-Guide',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Quickstart Guides/Matched-Audience-Upload-API-Quickstart-Guide', 'c45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Quickstart Guides/Reporting-API-Quickstart-Guide',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Quickstart Guides/Reporting-API-Quickstart-Guide', 'b4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Quickstart Guides/Schedule-Report-API-Quickstart-Guide',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Quickstart Guides/Schedule-Report-API-Quickstart-Guide', '905'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Auth-Docusaurus-Test/docs/Quickstart Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide',
                component: ComponentCreator('/Auth-Docusaurus-Test/docs/Quickstart Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide', 'b7a'),
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
    path: '/Auth-Docusaurus-Test/',
    component: ComponentCreator('/Auth-Docusaurus-Test/', '38b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
