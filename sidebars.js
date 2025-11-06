/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Getting Started/index'
      },
      items: [
        {
          type: 'doc',
          id: 'Getting Started/Platform-overview',
          label: 'IQM Platform Overview',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'Getting Started/REST-API-Reference',
          label: 'REST API Overview',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'Getting Started/Before-You-Begin',
          label: 'Before You Begin',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'Getting Started/Typescript-Prerequisites',
          label: 'TypeScript Prerequisites',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'Getting Started/API-Pagination-Guide',
          label: 'API Filtering and Pagination',
          className: 'sidebarItem',
        },
      ],
    },
    {
      type: "category",
      label: 'Quickstart Guides',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Quickstart Guides/index'
      },
      items: [
        {
          type: 'category',
          label: 'Sign Up and Authenticate',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Authentication-Quickstart-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'Sign Up',
              href: `/Quickstart%20Guides/Authentication-Quickstart-Guide#sign-up`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Log In',
              href: `/Quickstart%20Guides/Authentication-Quickstart-Guide#log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Refresh Token',
              href: `/Quickstart%20Guides/Authentication-Quickstart-Guide#refresh-token`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Upload a Creative',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Upload-a-Creative-Quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Creatives',
              href: `/Quickstart%20Guides/Upload-a-Creative-Quickstart#about-iqm-creatives`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/Quickstart%20Guides/Upload-a-Creative-Quickstart#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Upload a Creative Using the IQM API',
              href: `/Quickstart%20Guides/Upload-a-Creative-Quickstart#upload-a-creative-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/Quickstart%20Guides/Upload-a-Creative-Quickstart#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Request Creative Types',
              href: `/Quickstart%20Guides/Upload-a-Creative-Quickstart#step-2-request-creative-types`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Upload a Creative',
              href: `/Quickstart%20Guides/Upload-a-Creative-Quickstart#step-3-upload-a-creative`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Check Creative Status',
              href: `/Quickstart%20Guides/Upload-a-Creative-Quickstart#step-4-check-creative-status`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create a Campaign',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Create-a-Campaign-Quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Creatives',
              href: `/Quickstart%20Guides/Create-a-Campaign-Quickstart#about-iqm-campaigns`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/Quickstart%20Guides/Create-a-Campaign-Quickstart#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a Campaign Using the IQM API',
              href: `/Quickstart%20Guides/Create-a-Campaign-Quickstart#create-a-campaign-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/Quickstart%20Guides/Create-a-Campaign-Quickstart#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Create an Insertion Order',
              href: `/Quickstart%20Guides/Create-a-Campaign-Quickstart#step-2-create-insertion-order`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Create a Campaign',
              href: `/Quickstart%20Guides/Create-a-Campaign-Quickstart#step-3-create-a-campaign`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Check Campaign Status',
              href: `/Quickstart%20Guides/Create-a-Campaign-Quickstart#step-4-check-campaign-status`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create a Contextual Audience',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Contextual-Audience-Quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Contextual Audiences',
              href: `/Quickstart%20Guides/Contextual-Audience-Quickstart#about-iqm-contextual-audiences`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/Quickstart%20Guides/Contextual-Audience-Quickstart#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Create a Contextual Audience',
              href: `/Quickstart%20Guides/Contextual-Audience-Quickstart#step-2-create-a-contextual-audience`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Check Audience Status',
              href: `/Quickstart%20Guides/Contextual-Audience-Quickstart#step-3-check-audience-status`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Run a Report',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Reporting-API-Quickstart-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Reports',
              href: `/Quickstart%20Guides/Reporting-API-Quickstart-Guide#about-iqm-reports`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Run a Report Using the IQM API',
              href: `/Quickstart%20Guides/Reporting-API-Quickstart-Guide#run-a-report-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/Quickstart%20Guides/Reporting-API-Quickstart-Guide#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Request Dimensions and Metrics',
              href: `/Quickstart%20Guides/Reporting-API-Quickstart-Guide#step-2-request-dimensions-and-metrics`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Select Timezones',
              href: `/Quickstart%20Guides/Reporting-API-Quickstart-Guide#step-3-select-timezones`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Execute a Report',
              href: `/Quickstart%20Guides/Reporting-API-Quickstart-Guide#step-4-execute-a-report`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'FAQ',
              href: `/Quickstart%20Guides/Reporting-API-Quickstart-Guide#faq`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Schedule a Report',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Schedule-Report-API-Quickstart-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Reports',
              href: `/Quickstart%20Guides/Schedule-Report-API-Quickstart-Guide#about-iqm-reports`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Schedule a Report',
              href: `/Quickstart%20Guides/Schedule-Report-API-Quickstart-Guide#schedule-a-report`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/Quickstart%20Guides/Schedule-Report-API-Quickstart-Guide#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Schedule a Report',
              href: `/Quickstart%20Guides/Schedule-Report-API-Quickstart-Guide#step-2-schedule-a-report`,
              className: 'sidebarItemQS'
            },
          ]
        },
      ],
    },
    {
      type: "category",
      label: 'Tutorials',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Tutorials/index'
      },
      items: [
        {
          type: 'category',
          label: 'Create a Bid Model',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Bid-Model-Quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Bid Modeling',
              href: `/Tutorials/Create-a-Bid-Model#about-iqm-bid-modeling`,
              className: 'sidebarItemQS'
            },
                 {
              type: `link`,
              label: 'Before You Begin',
              href: `/Tutorials/Create-a-Bid-Model#before-you-begin`,
              className: 'sidebarItemQS'
            },
                 {
              type: `link`,
              label: 'Bid Modeling Criteria',
              href: `/Tutorials/Create-a-Bid-Model#bid-modeling-criteria`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Check Campaign for Eligibility',
              href: `/Tutorials/Create-a-Bid-Model#step-1-check-campaign-for-eligibility`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Select Dimension',
              href: `/Tutorials/Create-a-Bid-Model#step-2-select-dimension`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Create a Bid Model',
              href: `/Tutorials/Create-a-Bid-Model#step-3-create-a-bid-model`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create a Conversion',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Conversion-Quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Conversions',
              href: `/Tutorials/Create-a-Conversion#about-iqm-conversions`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a Conversion',
              href: `/Tutorials/Create-a-Conversion#create-a-conversion-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/Tutorials/Create-a-Conversion#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Create a Pixel Conversion',
              href: `/Tutorials/Create-a-Conversion#step-2-create-a-pixel-conversion`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Assign a Conversion to a Campaign',
              href: `/Tutorials/Create-a-Conversion#step-3-assign-a-conversion-to-a-campaign`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create a Deal',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Tutorials/Deal-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Deals',
              href: `/Tutorials/Deal-Guide#about-iqm-deals`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/Tutorials/Deal-Guide#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Request Exchange List',
              href: `/Tutorials/Deal-Guide#request-exchange-list`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a PG Deal',
              href: `/Tutorials/Deal-Guide#create-a-pg-deal`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a PMP Deal',
              href: `/Tutorials/Deal-Guide#create-a-pmp-deal`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Assign Deals to Campaign',
              href: `/Tutorials/Deal-Guide#assign-deals-to-a-campaign`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'List of Deals and Campaigns',
              href: `/Tutorials/Deal-Guide#get-list-of-deals-associated-with-campaigns`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create an Insights Report',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Insights-Quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Insights',
              href: `/Tutorials/Create-an-Insights-Report#about-iqm-insights`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/Tutorials/Create-an-Insights-Report#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Eligibility Requirements',
              href: `/Tutorials/Create-an-Insights-Report#eligibility-requirements`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Campaign Bidding Insights',
              href: `/Tutorials/Create-an-Insights-Report#campaign-bidding-insights`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Audience Insights Report',
              href: `/Tutorials/Create-an-Insights-Report#audience-insights-report`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Voter Level Data Report',
              href: `/Tutorials/Create-an-Insights-Report#voter-level-data-report`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Provider Level Data Report',
              href: `/Tutorials/Create-an-Insights-Report#provider-level-data-report`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create a PG Campaign',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM PG Campaigns',
              href: `/Tutorials/Create-a-PG-Campaign#about-iqm-pg-campaigns`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/Tutorials/Create-a-PG-Campaign#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a PG Campaign Using the IQM API',
              href: `/Tutorials/Create-a-PG-Campaign#create-a-pg-campaign-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/Tutorials/Create-a-PG-Campaign#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Create a PG Campaign',
              href: `/Tutorials/Create-a-PG-Campaign#step-2-create-a-pg-campaign`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Optimize Your Inventory',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Inventory-Quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Inventory',
              href: `/Tutorials/Optimize-Your-Inventory#about-iqm-inventory`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Optimize Your Inventory',
              href: `/Tutorials/Optimize-Your-Inventory#optimize-your-inventory-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/Tutorials/Optimize-Your-Inventory#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Search Inventory List ',
              href: `/Tutorials/Optimize-Your-Inventory#step-2-search-inventory-list`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Create an Inventory Group',
              href: `/Tutorials/Optimize-Your-Inventory#step-3-create-an-inventory-group`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Update an Inventory Group',
              href: `/Tutorials/Optimize-Your-Inventory#step-4-update-an-inventory-group`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 5: Campaign Inventory Group Targeting',
              href: `/Tutorials/Optimize-Your-Inventory#step-5-campaign-inventory-group-targeting`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 6: Get List of Groups by Campaign',
              href: `/Tutorials/Optimize-Your-Inventory#step-6-get-list-of-groups-by-campaign`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Sign Up a New Customer',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Tutorials/Customer-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Customers',
              href: `/Tutorials/Customer-Guide#about-iqm-customers`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/Tutorials/Customer-Guide#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Sign Up a New Customer Using the IQM API',
              href: `/Tutorials/Customer-Guide#sign-up-a-new-customer-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Invite a Customer',
              href: `/Tutorials/Customer-Guide#invite-a-customer`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Sign Up a Customer',
              href: `/Tutorials/Customer-Guide#sign-up-a-customer`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Approve a Customer',
              href: `/Tutorials/Customer-Guide#approve-a-customer`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Assign Customer to User',
              href: `/Tutorials/Customer-Guide#assign-customer-to-user`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Add Customer App Access',
              href: `/Tutorials/Customer-Guide#add-customer-app-access`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Add Payment for Customer',
              href: `/Tutorials/Customer-Guide#add-payment-for-customer`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Upload a Matched Audience',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Matched-Audience-Upload-API-Quickstart-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Matched Audience',
              href: `/Tutorials/Upload-a-Matched-Audience#about-iqm-matched-audience`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/Tutorials/Upload-a-Matched-Audience#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Upload Matched Audience Using the IQM API',
              href: `/Tutorials/Upload-a-Matched-Audience#upload-matched-audience-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/Tutorials/Upload-a-Matched-Audience#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Request Column List',
              href: `/Tutorials/Upload-a-Matched-Audience#step-2-request-column-list`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Upload Matched Audience',
              href: `/Tutorials/Upload-a-Matched-Audience#step-3-upload-matched-audience`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Check Audience Status',
              href: `/Tutorials/Upload-a-Matched-Audience#step-4-check-audience-status`,
              className: 'sidebarItemQS'
            },
          ]
        },
      ]
    },
    {
      type: `doc`,
      label: `API Guidelines`,
      id: `Guidelines/index`,
      className: `sidebarCategory`,
    },
    {
      type: 'category',
      label: 'Assets API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Assets-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Assets Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of All Assets',
              href: '/Guidelines/Assets-API-Guidelines#get-a-list-of-all-assets',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Asset Details',
              href: '/Guidelines/Assets-API-Guidelines#get-asset-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Assets Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Add Multiple Assets',
              href: '/Guidelines/Assets-API-Guidelines#add-multiple-assets',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Asset Details',
              href: '/Guidelines/Assets-API-Guidelines#update-asset-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Asset',
              href: '/Guidelines/Assets-API-Guidelines#delete-asset',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Audience API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Audience-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Audience Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Audience Details List',
              href: '/Guidelines/Audience-API-Guidelines#audience-details-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Paginated Audience Details List',
              href: '/Guidelines/Audience-API-Guidelines#paginated-audience-details-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Audience Details',
              href: '/Guidelines/Audience-API-Guidelines#matched-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Retargeted Audience Details',
              href: '/Guidelines/Audience-API-Guidelines#retargeted-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Geo-Farmed Audience Details',
              href: '/Guidelines/Audience-API-Guidelines#geo-farmed-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Audience Details',
              href: '/Guidelines/Audience-API-Guidelines#campaign-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Pre-bid Audience Details',
              href: '/Guidelines/Audience-API-Guidelines#pre-bid-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Search Pre-bid Audience Details',
              href: '/Guidelines/Audience-API-Guidelines#search-pre-bid-audience-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'DoubleVerify Pre-bid Audience Segment',
              href: '/Guidelines/Audience-API-Guidelines#doubleverify-pre-bid-audience-segment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Contextual Audience Details',
              href: '/Guidelines/Audience-API-Guidelines#contextual-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience Count by Status',
              href: '/Guidelines/Audience-API-Guidelines#audience-count-by-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience Count by Type',
              href: '/Guidelines/Audience-API-Guidelines#audience-count-by-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Audience Segment Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Audience Segment Details',
              href: '/Guidelines/Audience-API-Guidelines#audience-segment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Search Audience Segment',
              href: '/Guidelines/Audience-API-Guidelines#search-audience-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment Partner Provider List',
              href: '/Guidelines/Audience-API-Guidelines#segment-partner-provider-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment List by Provider/Partner IDs',
              href: '/Guidelines/Audience-API-Guidelines#segment-list-by-providerpartner-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment List by Audience IDs',
              href: '/Guidelines/Audience-API-Guidelines#segment-list-by-audience-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience Segment Insights',
              href: '/Guidelines/Audience-API-Guidelines#audience-segment-insights',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Audience Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create Matched Audience',
              href: '/Guidelines/Audience-API-Guidelines#create-matched-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Matched Audience',
              href: '/Guidelines/Audience-API-Guidelines#update-matched-audience',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Retargeted Audience',
              href: '/Guidelines/Audience-API-Guidelines#create-retargeted-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Retargeted Audience',
              href: '/Guidelines/Audience-API-Guidelines#update-retargeted-audience',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Retargeted Audience Email',
              href: '/Guidelines/Audience-API-Guidelines#retargeted-audience-email-notification',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Geo-Farmed Audience',
              href: '/Guidelines/Audience-API-Guidelines#create-geo-farmed-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Campaign Audience',
              href: '/Guidelines/Audience-API-Guidelines#create-campaign-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Audience Segment',
              href: '/Guidelines/Audience-API-Guidelines#create-audience-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Audience Segment',
              href: '/Guidelines/Audience-API-Guidelines#update-audience-segment',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Pre-bid Audience',
              href: '/Guidelines/Audience-API-Guidelines#create-pre-bid-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Pre-bid Audience',
              href: '/Guidelines/Audience-API-Guidelines#update-pre-bid-audience',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Contextual Audience',
              href: '/Guidelines/Audience-API-Guidelines#create-contextual-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create ABM Audience',
              href: '/Guidelines/Audience-API-Guidelines#create-abm-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Lookalike Audience',
              href: '/Guidelines/Audience-API-Guidelines#create-lookalike-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Audience Name',
              href: '/Guidelines/Audience-API-Guidelines#update-audience-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate Matched Audience',
              href: '/Guidelines/Audience-API-Guidelines#duplicate-matched-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Audience Insights',
              href: '/Guidelines/Audience-API-Guidelines#create-audience-insights',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send Insights Email',
              href: '/Guidelines/Audience-API-Guidelines#send-insights-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Regenerate Insights Report',
              href: '/Guidelines/Audience-API-Guidelines#regenerate-audience-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Insights Report',
              href: '/Guidelines/Audience-API-Guidelines#download-audience-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate URL for Contextual Audience',
              href: '/Guidelines/Audience-API-Guidelines#validate-url-for-contextual-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Audience',
              href: '/Guidelines/Audience-API-Guidelines#delete-audience',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Healthcare Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'ABM Audience Details',
              href: '/Guidelines/Audience-API-Guidelines#abm-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'ABM Audience Statistics',
              href: '/Guidelines/Audience-API-Guidelines#abm-audience-statistics',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Titles List',
              href: '/Guidelines/Audience-API-Guidelines#healthcare-titles-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Specialties List',
              href: '/Guidelines/Audience-API-Guidelines#healthcare-specialties-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Systems List',
              href: '/Guidelines/Audience-API-Guidelines#healthcare-systems-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Data',
              href: '/Guidelines/Audience-API-Guidelines#healthcare-data',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Statistics',
              href: '/Guidelines/Audience-API-Guidelines#healthcare-statistics',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Account Types',
              href: '/Guidelines/Audience-API-Guidelines#healthcare-account-types',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Account Subtypes',
              href: '/Guidelines/Audience-API-Guidelines#healthcare-account-subtypes',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Account Names',
              href: '/Guidelines/Audience-API-Guidelines#healthcare-account-names',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `More Audience Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Matched Audience Fields',
              href: '/Guidelines/Audience-API-Guidelines#matched-audience-fields',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment Reach Range',
              href: '/Guidelines/Audience-API-Guidelines#reach-range-list-for-audience-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment Price Range',
              href: '/Guidelines/Audience-API-Guidelines#price-range-list-for-audience-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Data Partners',
              href: '/Guidelines/Audience-API-Guidelines#data-partners-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Data Formats',
              href: '/Guidelines/Audience-API-Guidelines#data-formats-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Column List',
              href: '/Guidelines/Audience-API-Guidelines#column-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience Type List',
              href: '/Guidelines/Audience-API-Guidelines#audience-type-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience Status List',
              href: '/Guidelines/Audience-API-Guidelines#audience-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Frequency Type List',
              href: '/Guidelines/Audience-API-Guidelines#frequency-type-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Provider Details List',
              href: '/Guidelines/Audience-API-Guidelines#provider-details-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Bid Model API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Bid-Model-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Bid Model Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Bid Model Bundles List',
              href: '/Guidelines/Bid-Model-API-Guidelines#get-list-of-bid-model-bundles',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Modeled Entities',
              href: '/Guidelines/Bid-Model-API-Guidelines#get-modeled-entities',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Dimension Statistics',
              href: '/Guidelines/Bid-Model-API-Guidelines#get-campaign-dimension-statistics',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Spending by Dimension',
              href: '/Guidelines/Bid-Model-API-Guidelines#get-dimension-specific-spending-for-a-campaign',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Modeled Entities for a Campaign',
              href: '/Guidelines/Bid-Model-API-Guidelines#get-list-of-modeled-entities-for-a-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Include/Exclude Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Devices, Exchanges, Traffic',
              href: '/Guidelines/Bid-Model-API-Guidelines#includeexclude-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Entities',
              href: '/Guidelines/Bid-Model-API-Guidelines#includeexclude-entities-from-a-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Bid Model Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Bid Modeling Criteria',
              href: '/Guidelines/Bid-Model-API-Guidelines#bid-modeling-criteria',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Manage Bid Modeling',
              href: '/Guidelines/Bid-Model-API-Guidelines#manage-bid-modeling',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Bid Model Bundle',
              href: '/Guidelines/Bid-Model-API-Guidelines#create-bid-model-bundle',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Bid Model Bundle',
              href: '/Guidelines/Bid-Model-API-Guidelines#update-bid-model-bundle',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Bid Model Bundle',
              href: '/Guidelines/Bid-Model-API-Guidelines#delete-bid-model-bundle',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'IO Bid Modeling',
              href: '/Guidelines/Bid-Model-API-Guidelines#manage-insertion-order-bid-modeling',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'IO Priority',
              href: '/Guidelines/Bid-Model-API-Guidelines#manage-insertion-order-priority',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Bid Model Metrics and Dimensions`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Metrics Report for a Given Campaign & Dimension',
              href: '/Guidelines/Bid-Model-API-Guidelines#get-metrics-report-for-a-given-campaign-and-dimension',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Bid Model Dimensions',
              href: '/Guidelines/Bid-Model-API-Guidelines#get-list-of-bid-model-dimensions',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Campaign API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Campaign-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Campaign Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Campaign Resource Details',
              href: '/Guidelines/Campaign-API-Guidelines#campaign-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Details by ID',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns with Basic Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-with-basic-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Basic Details of Campaigns',
              href: '/Guidelines/Campaign-API-Guidelines#get-basic-details-of-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Audience Targeting Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-audience-targeting-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns with Filters',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-with-filters',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Budget Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-budget-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Groups',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Deals',
              href: '/Guidelines/Campaign-API-Guidelines#get-deals-associated-with-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Count by Status',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-count-by-status',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Count with Type',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-count-with-campaign-type',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Count by Creative Type',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-count-by-creative-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Creative Type and Campaign Count',
              href: '/Guidelines/Campaign-API-Guidelines#get-creative-type-and-campaigns-count',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          {
              type: 'link',
              label: 'Campaign Conversion List',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-conversion-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Basic Conversion List',
              href: '/Guidelines/Campaign-API-Guidelines#get-basic-conversion-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Start Date',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-start-date',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Start/End Dates',
              href: '/Guidelines/Campaign-API-Guidelines/#get-list-of-campaign-start-dates-or-end-dates',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Report Data',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-report-data',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Campaign Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create New Campaign',
              href: '/Guidelines/Campaign-API-Guidelines#create-new-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Campaign',
              href: '/Guidelines/Campaign-API-Guidelines#update-campaign',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create New PG Campaign',
              href: '/Guidelines/Campaign-API-Guidelines#create-new-pg-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update PG Campaign',
              href: '/Guidelines/Campaign-API-Guidelines#update-pg-campaign',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change Campaign Name',
              href: '/Guidelines/Campaign-API-Guidelines#change-campaign-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change Campaign End Date',
              href: '/Guidelines/Campaign-API-Guidelines#change-campaign-end-date',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change Campaign Budget',
              href: '/Guidelines/Campaign-API-Guidelines#change-campaign-budget',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign Conversions to Campaign',
              href: '/Guidelines/Campaign-API-Guidelines#assign-conversions-to-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Audience Targeting in Campaign',
              href: '/Guidelines/Campaign-API-Guidelines#update-audience-targeting-in-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Group Targeting',
              href: '/Guidelines/Campaign-API-Guidelines#inventory-group-targeting',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign PMP Deals',
              href: '/Guidelines/Campaign-API-Guidelines#assign-pmp-deals',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign PG Deals',
              href: '/Guidelines/Campaign-API-Guidelines#assign-pg-deals',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Resend Email to Set Margin',
              href: '/Guidelines/Campaign-API-Guidelines#resend-email-to-set-margin',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Resend Email Reminder to Set Invoice Template',
              href: '/Guidelines/Campaign-API-Guidelines#resend-email-reminder-to-set-invoice-template',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Insertion Order Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'IO Resource Properties',
              href: '/Guidelines/Campaign-API-Guidelines#insertion-order-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'IO Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-insertion-order-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Advanced IO Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-advanced-insertion-order-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Advanced IO Details',
              href: '/Guidelines/Campaign-API-Guidelines#download-advanced-io-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get IO Campaign Budget and Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-io-campaign-budget-and-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Details Grouped by IO ID',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-details-grouped-by-insertion-order-id',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Details Grouped by IO ID with Filters',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-details-grouped-by-io-id-with-filters',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns and Report Details by IO ID',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-and-report-details-by-insertion-order-id',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download csv/xlsx File for IO-based Campaign Details',
              href: '/Guidelines/Campaign-API-Guidelines#download-csvxlsx-file-for-io-based-campaign-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of IO Start/End Dates',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-io-startend-dates',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Insertion Order Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create an Insertion Order',
              href: '/Guidelines/Campaign-API-Guidelines#create-an-insertion-order',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Insertion Order Details',
              href: '/Guidelines/Campaign-API-Guidelines#update-insertion-order-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update End Date for Multiple IOs',
              href: '/Guidelines/Campaign-API-Guidelines#update-end-date-for-multiple-ios',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Budget for Multiple IOs',
              href: '/Guidelines/Campaign-API-Guidelines#update-budget-for-multiple-ios',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate an Insertion Order',
              href: '/Guidelines/Campaign-API-Guidelines#duplicate-an-insertion-order',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete an Insertion Order',
              href: '/Guidelines/Campaign-API-Guidelines#delete-an-insertion-order',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Get More Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of IO Status',
              href: '/Guidelines/Campaign-API-Guidelines#get-io-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Budget Types',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-budget-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Budget Distribution Methods',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-budget-distribution-methods',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Conversions API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Conversion-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Conversion Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Postback Conversion Resource Details',
              href: '/Guidelines/Conversion-API-Guidelines#postback-conversion-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Pixel Conversion Resource Details',
              href: '/Guidelines/Conversion-API-Guidelines#pixel-conversion-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Conversion Details by ID',
              href: '/Guidelines/Conversion-API-Guidelines#get-conversion-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversions',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversions',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Conversion Count by Type',
              href: '/Guidelines/Conversion-API-Guidelines#get-conversion-count-by-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Details by Conversion ID',
              href: '/Guidelines/Conversion-API-Guidelines#get-campaign-details-by-conversion-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Details by Conversion ID in Group or Basic',
              href: '/Guidelines/Conversion-API-Guidelines#get-campaign-details-by-conversion-id-in-group-or-basic',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Conversions Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create Postback Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#create-postback-conversion',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Pixel Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#create-pixel-conversion',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#delete-conversion',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Postback Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#update-postback-conversion',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Pixel Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#update-pixel-conversion',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign Conversion to a Campaign',
              href: '/Guidelines/Conversion-API-Guidelines#assign-conversion-to-a-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send Email for Pixel Integration',
              href: '/Guidelines/Conversion-API-Guidelines#send-email-for-pixel-integration',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `More Conversion Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of Partner Types for Postback Conversions',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-partner-types-for-postback-conversions',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Pixel Conversion Advanced Setting Default Values',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-pixel-conversion-advanced-setting-default-values',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversion Types',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversion Status',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversion Piggyback Types',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-piggyback-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversion Property Types',
              href: '/Guidelines/Conversion-API-Guidelines/#get-list-of-conversion-property-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Creative API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Creative-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Creative Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Creative Details by ID',
              href: '/Guidelines/Creative-API-Guidelines#creative-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Creatives and Details',
              href: '/Guidelines/Creative-API-Guidelines#get-list-of-creatives-and-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Associated Campaigns',
              href: '/Guidelines/Creative-API-Guidelines#get-associated-campaigns',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Creative Groups',
              href: '/Guidelines/Creative-API-Guidelines#get-list-of-creative-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Creative Count by Type',
              href: '/Guidelines/Creative-API-Guidelines#get-creative-count-by-type',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Creative Count by Status',
              href: '/Guidelines/Creative-API-Guidelines#get-creative-count-by-status',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Creative Management',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Add New Creative',
              href: '/Guidelines/Creative-API-Guidelines#add-new-creative',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Creative Details',
              href: '/Guidelines/Creative-API-Guidelines#update-creative-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Creative Status',
              href: '/Guidelines/Creative-API-Guidelines#update-creative-status',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create New Creative Group',
              href: '/Guidelines/Creative-API-Guidelines#create-new-creative-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Creative Group',
              href: '/Guidelines/Creative-API-Guidelines#delete-creative-group',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Creative Groups',
              href: '/Guidelines/Creative-API-Guidelines#update-creative-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Creative Group Name',
              href: '/Guidelines/Creative-API-Guidelines#update-creative-group-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate Creatives',
              href: '/Guidelines/Creative-API-Guidelines#duplicate-creatives',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate Creative Group',
              href: '/Guidelines/Creative-API-Guidelines#duplicate-creative-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Compress Image',
              href: '/Guidelines/Creative-API-Guidelines#compress-uploaded-image-creative',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Pixel URL',
              href: '/Guidelines/Creative-API-Guidelines#update-pixel-url',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Click URL',
              href: '/Guidelines/Creative-API-Guidelines#update-click-url',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'More Creative Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Creative Types List',
              href: '/Guidelines/Creative-API-Guidelines#get-creative-types-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Creative Status List',
              href: '/Guidelines/Creative-API-Guidelines#get-creative-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'CTA Details',
              href: '/Guidelines/Creative-API-Guidelines#get-cta-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Dashboard API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Dashboard-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Dashboard Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Dashboard List',
              href: '/Guidelines/Dashboard-API-Guidelines#dashboard-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Dashboard Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create Dashboard',
              href: '/Guidelines/Dashboard-API-Guidelines#create-dashboard',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Dashboard',
              href: '/Guidelines/Dashboard-API-Guidelines#update-dashboard',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Dashboard',
              href: '/Guidelines/Dashboard-API-Guidelines#delete-dashboard',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Dashboard Reports`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Resource Properties',
              href: '/Guidelines/Dashboard-API-Guidelines#dashboard-reports-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Workspace Report',
              href: '/Guidelines/Dashboard-API-Guidelines#workspace-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'IO Report',
              href: '/Guidelines/Dashboard-API-Guidelines#io-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Exchange Report',
              href: '/Guidelines/Dashboard-API-Guidelines#exchange-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Report',
              href: '/Guidelines/Dashboard-API-Guidelines#customer-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Report',
              href: '/Guidelines/Dashboard-API-Guidelines#campaign-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Report',
              href: '/Guidelines/Dashboard-API-Guidelines#download-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Finance API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Finance-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Finance Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Customer Finance Details',
              href: '/Guidelines/Finance-Guidelines#finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Margin Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-margin-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer Margin Details',
              href: '/Guidelines/Finance-Guidelines#update-customer-margin-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Margin Details',
              href: '/Guidelines/Finance-Guidelines#campaign-margin-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer PG Fees Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-pg-fees-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit Customer PG Fees',
              href: '#edit-customer-pg-fees',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer VLD Finance Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-vld-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer VLD Details',
              href: '/Guidelines/Finance-Guidelines#update-customer-vld-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer PLD Finance Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-pld-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer PLD Details',
              href: '/Guidelines/Finance-Guidelines#update-customer-pld-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer SLS Finance Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-sls-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer SLS Details',
              href: '/Guidelines/Finance-Guidelines#update-customer-sls-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer DoubleVerify IVT Flag',
              href: '/Guidelines/Finance-Guidelines#get-customer-doubleverify-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer DoubleVerify IVT Flag',
              href: '/Guidelines/Finance-Guidelines#update-customer-doubleverify',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Basic Financial Details',
              href: '/Guidelines/Finance-Guidelines#get-basic-financial-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Available Balance',
              href: '/Guidelines/Finance-Guidelines#available-balance',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Invoice Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Invoice for Organization',
              href: '/Guidelines/Finance-Guidelines#get-invoice-for-organization',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice Payment Details',
              href: '/Guidelines/Finance-Guidelines#get-invoice-payment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Invoices for Customer or Organization',
              href: '/Guidelines/Finance-Guidelines#get-list-of-invoices-for-customer-or-organization',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Invoice Settings',
              href: '/Guidelines/Finance-Guidelines#update-invoice-settings',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Invoice Tax Data',
              href: '/Guidelines/Finance-Guidelines#delete-invoice-tax-data',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve Invoice',
              href: '/Guidelines/Finance-Guidelines#approve-invoice',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cancel Invoice',
              href: '/Guidelines/Finance-Guidelines#cancel-invoice',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Mark Invoice as Paid',
              href: '/Guidelines/Finance-Guidelines#mark-invoice-as-paid',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Email Invoice',
              href: '/Guidelines/Finance-Guidelines#email-invoice',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Invoice',
              href: '/Guidelines/Finance-Guidelines#download-invoice',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Credit Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Credit Summary',
              href: '/Guidelines/Finance-Guidelines#credit-summary',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Offered Credits',
              href: '/Guidelines/Finance-Guidelines#offered-credits',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Credit List',
              href: '/Guidelines/Finance-Guidelines#customer-credit-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Credit to Customer',
              href: '/Guidelines/Finance-Guidelines#add-credit-to-customer',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Credit Offered to Customer',
              href: '/Guidelines/Finance-Guidelines#update-credit-offered-to-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Revoke Credit Offered to Customer',
              href: '/Guidelines/Finance-Guidelines#revoke-credit-offered-to-customer',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Claim Offered Credits',
              href: '/Guidelines/Finance-Guidelines#claim-offered-credits',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Payment Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of Payment Transactions for Organization',
              href: '/Guidelines/Finance-Guidelines#get-list-of-payment-transactions-for-organization',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Customer Payments',
              href: '/Guidelines/Finance-Guidelines#get-list-of-customer-payments',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Payment for Customer',
              href: '/Guidelines/Finance-Guidelines#add-payment-for-customer',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit Customer Payment',
              href: '/Guidelines/Finance-Guidelines#edit-customer-payment',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve Payment',
              href: '/Guidelines/Finance-Guidelines#approve-payment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cancel Payment',
              href: '/Guidelines/Finance-Guidelines#cancel-payment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reject Payment',
              href: '/Guidelines/Finance-Guidelines#reject-payment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Payment from Organization App',
              href: '/Guidelines/Finance-Guidelines#add-payment-from-organization-app',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Payment with PayPal',
              href: '/Guidelines/Finance-Guidelines#payment-with-paypal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Initiate Refund',
              href: '/Guidelines/Finance-Guidelines#initiate-refund',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve Refund',
              href: '/Guidelines/Finance-Guidelines#approve-refund',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Email Payment Receipt',
              href: '/Guidelines/Finance-Guidelines#email-payment-receipt',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Payment Receipt',
              href: '/Guidelines/Finance-Guidelines#download-payment-receipt',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Static Details Lists`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Payment Types',
              href: '/Guidelines/Finance-Guidelines#static-details-lists',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Payment Status',
              href: '/Guidelines/Finance-Guidelines#payment-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice Payment Mode Types',
              href: '/Guidelines/Finance-Guidelines#invoice-payment-mode-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice Status',
              href: '/Guidelines/Finance-Guidelines#invoice-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice Payment Term',
              href: '/Guidelines/Finance-Guidelines#invoice-payment-term',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'PG Payment Type',
              href: '/Guidelines/Finance-Guidelines#pg-payment-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Insights API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Insights-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Insights Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of Insights',
              href: '/Guidelines/Insights-API-Guidelines#get-insights-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Bidding Insights',
              href: '/Guidelines/Insights-API-Guidelines#get-campaign-bidding-insights',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Insights Count by Type',
              href: '/Guidelines/Insights-API-Guidelines#get-insights-count-by-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Insights Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Delete Insights Record',
              href: '/Guidelines/Insights-API-Guidelines#delete-insights-record',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Regenerate Insights Report',
              href: '/Guidelines/Insights-API-Guidelines#regenerate-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send Insights Email',
              href: '/Guidelines/Insights-API-Guidelines#send-insights-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Audience Insights`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of Eligible Audiences',
              href: '/Guidelines/Insights-API-Guidelines#get-a-list-of-eligible-audiences',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Audience Details',
              href: '/Guidelines/Insights-API-Guidelines#get-matched-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Audience File URL',
              href: '/Guidelines/Insights-API-Guidelines#get-matched-audience-file-url',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Audience Insights',
              href: '/Guidelines/Insights-API-Guidelines#create-audience-insights',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Insights Report',
              href: '/Guidelines/Insights-API-Guidelines#download-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Voter Level Data Reports`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'VLD Resource Properties',
              href: '/Guidelines/Insights-API-Guidelines#voter-level-data-reports',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of VLD Reports',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-vld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns Eligible for VLD Reports',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-campaigns-eligible-for-vld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate VLD Report',
              href: '/Guidelines/Insights-API-Guidelines#generate-vld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cost Assessment for VLD Report',
              href: '/Guidelines/Insights-API-Guidelines#get-cost-assessment-for-vld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download VLD Insight Report',
              href: '/Guidelines/Insights-API-Guidelines#download-vld-insight-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete VLD Report',
              href: '/Guidelines/Insights-API-Guidelines#delete-vld-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Provider Level Data Reports`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'PLD Resource Properties',
              href: '/Guidelines/Insights-API-Guidelines/#pld-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of PLD Reports',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-pld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns Eligible for PLD Reports',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-campaigns-eligible-for-pld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate PLD Report',
              href: '/Guidelines/Insights-API-Guidelines#generate-pld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'PLD Reports Columns',
              href: '/Guidelines/Insights-API-Guidelines#get-pld-reports-columns',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update PLD Reports Columns',
              href: '/Guidelines/Insights-API-Guidelines#update-pld-reports-columns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download PLD Insight Report',
              href: '/Guidelines/Insights-API-Guidelines#download-pld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete PLD Report',
              href: '/Guidelines/Insights-API-Guidelines#delete-pld-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'ScriptLift Studies Reports',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'SLS Resource Properties',
              href: '/Guidelines/Insights-API-Guidelines#sls-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of SLS Reports',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-sls-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate SLS Report',
              href: '/Guidelines/Insights-API-Guidelines#generate-sls-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'SLS Reports Computation',
              href: '/Guidelines/Insights-API-Guidelines#sls-reports-computation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate SLS Report Name',
              href: '/Guidelines/Insights-API-Guidelines#validate-sls-report-name',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaigns Eligible for SLS Reports',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-campaigns-eligible-for-sls-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download SLS Insight Report',
              href: '/Guidelines/Insights-API-Guidelines#download-sls-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete SLS Report',
              href: '/Guidelines/Insights-API-Guidelines#delete-sls-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `More Insights Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of Insights Types',
              href: '/Guidelines/Insights-API-Guidelines#get-more-insights-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Insights Status',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-insights-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Inventory API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Inventory-API-Guide'
      },
      items: [
        {
          type: 'category',
          label: 'Inventory Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Query Parameters',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-details',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Inventories',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-inventories',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Distribution',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-distribution',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventories Count',
              href: '/Guidelines/Inventory-API-Guide#get-inventories-count',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Group Types',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-group-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Blocked Inventories',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-blocked-inventories',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Inventory Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Campaign Inventory Targeting',
              href: '/Guidelines/Inventory-API-Guide#campaign-inventory-targeting',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Block Inventories',
              href: '/Guidelines/Inventory-API-Guide#block-inventories',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download CSV Inventory List',
              href: '/Guidelines/Inventory-API-Guide#download-csv-inventory-list',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Based on CSV File',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-based-on-csv-file',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Distribution of Inventory Based on CSV File',
              href: '/Guidelines/Inventory-API-Guide#get-distribution-of-inventory-based-on-csv-file',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Count Based on CSV File',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-count-based-on-csv-file',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Inventory Groups`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of Inventory Groups',
              href: '/Guidelines/Inventory-API-Guide#inventory-groups',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Inventory Groups Statistics',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-inventory-groups-statistics',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns Attached to Group',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-campaigns-attached-to-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of PMP Deals In an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-pmp-deals-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'CSV List of PMP Deals In an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#get-csv-list-of-pmp-deals-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Open Exchange Inventories In an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-open-exchange-inventories-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Distributions of Open Exchange Inventories In an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#get-distributions-of-open-exchange-inventories-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Count of Open Exchange Inventories In an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#get-count-of-open-exchange-inventories-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Contextual Inventories For an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-contextual-inventories-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Count of Contextual Inventories For an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#get-count-of-contextual-inventories-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'CSV File of Contextual Inventories For an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#get-csv-file-of-contextual-inventories-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Contextual Inventory',
              href: '/Guidelines/Inventory-API-Guide#contextual-inventory',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Inventory Group Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create a New Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#inventory-group-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add or Remove Mappings to an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#add-or-remove-mappings-to-an-inventory-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add or Remove Customers From a Shared Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#add-or-remove-customers-from-a-shared-inventory-group',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#edit-inventory-group',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#delete-inventory-group',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Deals Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of Deals',
              href: '/Guidelines/Inventory-API-Guide#list-of-deals',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'List of Deal Types',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-deal-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'List of Deal statuses',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-deal-statuses',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
          ]
        },

        {
          type: `category`,
          label: `Private Marketplace (PMP) Deals Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of PMP Deals',
              href: '/Guidelines/Inventory-API-Guide#get-pmp-deals-list',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'PMP Deal Details by IDs',
              href: '/Guidelines/Inventory-API-Guide#get-pmp-deal-details-by-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'List of Customers Associated with Campaigns for a PMP Deal',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-customers-associated-with-campaigns-for-a-pmp-deal',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Count of PMP Deals for All statuses',
              href: '/Guidelines/Inventory-API-Guide#get-count-of-pmp-deals-for-all-statuses',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            }
          ]
        },
        {
          type: `category`,
          label: `PMP Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Resource Properties',
              href: '/Guidelines/Inventory-API-Guide#pmp-management',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create PMP Deal',
              href: '/Guidelines/Inventory-API-Guide#create-pmp-deal',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update PMP Deal',
              href: '/Guidelines/Inventory-API-Guide#update-pmp-deal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete PMP Deal',
              href: '/Guidelines/Inventory-API-Guide#delete-pmp-deal',
              customProps: { method: 'DEL' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `Programmatic Guaranteed (PG) Deals Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of PG Deals',
              href: '/Guidelines/Inventory-API-Guide#get-pg-deals-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'PG Deals Details by ID',
              href: '/Guidelines/Inventory-API-Guide#get-pg-deals-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `PG Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Resource Properties',
              href: '/Guidelines/Inventory-API-Guide#pg-management',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create PG Deal',
              href: '/Guidelines/Inventory-API-Guide#create-pg-deal',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update PG Deal Details',
              href: '/Guidelines/Inventory-API-Guide#update-pg-deal-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete PG Deal',
              href: '/Guidelines/Inventory-API-Guide#delete-pg-deal',
              customProps: { method: 'DEL' },
              className: 'sidebarItem',
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Master API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Master-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Geographical Data',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Filtering and Pagination',
              href: '/Guidelines/Master-API-Guidelines#filtering-and-pagination',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Zip Codes and State IDs',
              href: '/Guidelines/Master-API-Guidelines#get-zip-codes-and-state-ids',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'State Segment',
              href: '/Guidelines/Master-API-Guidelines#get-state-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Senate District Segment',
              href: '/Guidelines/Master-API-Guidelines#get-senate-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'House District Segment',
              href: '/Guidelines/Master-API-Guidelines#get-house-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Gender Segment',
              href: '/Guidelines/Master-API-Guidelines#get-gender-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Age Segment',
              href: '/Guidelines/Master-API-Guidelines#get-age-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Language Segment',
              href: '/Guidelines/Master-API-Guidelines#get-language-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Interest Segment',
              href: '/Guidelines/Master-API-Guidelines#get-interest-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Income Range Segment',
              href: '/Guidelines/Master-API-Guidelines#get-income-range-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Ethnicity Segment',
              href: '/Guidelines/Master-API-Guidelines#get-ethnicity-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Ethnicity Group Segment',
              href: '/Guidelines/Master-API-Guidelines#get-ethnicity-group-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'DMA Code Segment',
              href: '/Guidelines/Master-API-Guidelines#get-dma-code-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'County Segment',
              href: '/Guidelines/Master-API-Guidelines#get-county-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Country Segment',
              href: '/Guidelines/Master-API-Guidelines#get-country-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'  
            },
            {
              type: 'link',
              label: 'Congressional District Segment',
              href: '/Guidelines/Master-API-Guidelines#get-congressional-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'City Segment',
              href: '/Guidelines/Master-API-Guidelines#get-city-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Location Types',
              href: '/Guidelines/Master-API-Guidelines#get-location-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Location Details by Location Type',
              href: '/Guidelines/Master-API-Guidelines#get-location-details-by-location-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Timezones',
              href: '/Guidelines/Master-API-Guidelines#get-timezones',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Carriers and States by Country ID',
              href: '/Guidelines/Master-API-Guidelines#get-carriers-and-states-by-country-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Creative Data`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Query Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-creative-data',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'RTB Creative Types',
              href: '/Guidelines/Master-API-Guidelines#get-rtb-creative-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Creative Sizes',
              href: '/Guidelines/Master-API-Guidelines#get-creative-sizes',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Video Skip Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-skip-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Video Roll Position Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-roll-position-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Video Player Size Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-player-size-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Video Playback Method Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-playback-method-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Video Placement Type Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-placement-type-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `More Data`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Network Types for Targeting',
              href: '/Guidelines/Master-API-Guidelines#get-network-types-for-targeting',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Device OS for Targeting',
              href: '/Guidelines/Master-API-Guidelines#get-device-os-for-targeting',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Manufacturers for Targeting',
              href: '/Guidelines/Master-API-Guidelines#get-manufacturers-for-targeting',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Channels for Inventory',
              href: '/Guidelines/Master-API-Guidelines#get-channels-for-inventory',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Verticals',
              href: '/Guidelines/Master-API-Guidelines#get-verticals',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Traffic Types',
              href: '/Guidelines/Master-API-Guidelines#get-traffic-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Types',
              href: '/Guidelines/Master-API-Guidelines#get-inventory-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Exchanges',
              href: '/Guidelines/Master-API-Guidelines#get-exchanges',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Deal Curation Types',
              href: '/Guidelines/Master-API-Guidelines#get-deal-curation-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Publisher Ad Categories',
              href: '/Guidelines/Master-API-Guidelines#get-publisher-ad-categories',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Device Type',
              href: '/Guidelines/Master-API-Guidelines#get-device-type',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory',
              href: '/Guidelines/Master-API-Guidelines#get-inventory',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Planner API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Planner-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Proposal Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Proposal Details by ID',
              href: '/Guidelines/Planner-API-Guidelines#get-proposal-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Proposals',
              href: '/Guidelines/Planner-API-Guidelines#get-list-of-proposals',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reach and Impressions Summary',
              href: '/Guidelines/Planner-API-Guidelines#proposal-reach-and-impressions-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Device Type Summary',
              href: '/Guidelines/Planner-API-Guidelines#proposal-device-type-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Channel Type Summary',
              href: '/Guidelines/Planner-API-Guidelines#proposal-channel-type-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Bid Landscape Summary',
              href: '/Guidelines/Planner-API-Guidelines#proposal-bid-landscape-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Proposal',
              href: '/Guidelines/Planner-API-Guidelines#download-proposal',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Proposal Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create Proposal',
              href: '/Guidelines/Planner-API-Guidelines#create-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Draft Proposal',
              href: '/Guidelines/Planner-API-Guidelines#create-draft-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Proposal',
              href: '/Guidelines/Planner-API-Guidelines#update-proposal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Draft Proposal',
              href: '/Guidelines/Planner-API-Guidelines#update-draft-proposal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate Campaigns',
              href: '/Guidelines/Planner-API-Guidelines#generate-campaigns-for-ready-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Restore Proposal',
              href: '/Guidelines/Planner-API-Guidelines#restore-proposal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate Proposal',
              href: '/Guidelines/Planner-API-Guidelines#duplicate-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Proposal',
              href: '/Guidelines/Planner-API-Guidelines#delete-proposal',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `More Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Proposal Status List',
              href: '/Guidelines/Planner-API-Guidelines#proposal-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Parameters List',
              href: '/Guidelines/Planner-API-Guidelines#proposal-summary-parameters-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Access Details',
              href: '/Guidelines/Planner-API-Guidelines#get-user-access-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Reports API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Reports-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Reports Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of Reports',
              href: '/Guidelines/Reports-API-Guidelines#get-reports-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Report by ID',
              href: '/Guidelines/Reports-API-Guidelines#get-report-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Reports Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Resource Properties',
              href: '/Guidelines/Reports-API-Guidelines#reports-management',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Report',
              href: '/Guidelines/Reports-API-Guidelines#create-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Execute a Report',
              href: '/Guidelines/Reports-API-Guidelines#execute-a-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete a Report',
              href: '/Guidelines/Reports-API-Guidelines#delete-a-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit a Report',
              href: '/Guidelines/Reports-API-Guidelines#edit-a-report',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate a Report',
              href: '/Guidelines/Reports-API-Guidelines#duplicate-a-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Scheduling Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Schedule a Report',
              href: '/Guidelines/Reports-API-Guidelines#scheduling-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update a Report Schedule',
              href: '/Guidelines/Reports-API-Guidelines#update-a-report-schedule',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete a Report Schedule',
              href: '/Guidelines/Reports-API-Guidelines#delete-report-schedule',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Unsubscribe an Email from All Scheduled Reports',
              href: '/Guidelines/Reports-API-Guidelines#unsubscribe-an-email-from-all-scheduled-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Unsubscribe an Email from a Report Schedule',
              href: '/Guidelines/Reports-API-Guidelines#unsubscribe-an-email-from-a-report-schedule',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Get More Report Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'URL for Report Download',
              href: '/Guidelines/Reports-API-Guidelines#get-more-report-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversion\'s Custom Fields',
              href: '/Guidelines/Reports-API-Guidelines#get-a-list-of-conversions-custom-fields',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Report Request Types',
              href: '/Guidelines/Reports-API-Guidelines#get-report-request-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Report File Types',
              href: '/Guidelines/Reports-API-Guidelines#get-report-file-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Report Delivery Frequency Types',
              href: '/Guidelines/Reports-API-Guidelines#get-report-delivery-frequency-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Dimensions and Metrics Details',
              href: '/Guidelines/Reports-API-Guidelines#get-dimensions-and-metrics-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'User Management API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/User-Profile-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'User Details',
          className: 'sidebarItem',
          items: [
              {
                type: 'link',
                label: 'List of Users',
                href: '/Guidelines/User-Profile-Guidelines#get-list-of-users',
                customProps: { method: 'GET' },
                className: "sidebarItem"
              },
              {
                type: 'link',
                label: 'User Profile Details',
                href: '/Guidelines/User-Profile-Guidelines#get-user-profile-details',
                customProps: { method: 'GET' },
                className: "sidebarItem"
              },
              {
                type: 'link',
                label: 'User Config Details',
                href: '/Guidelines/User-Profile-Guidelines#user-config-details',
                customProps: { method: 'GET' },
                className: "sidebarItem"
              },
          ]
        },
        {
          type: 'category',
          label: 'User Management',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Send User Invitation',
              href: '/Guidelines/User-Profile-Guidelines#send-user-invitation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Sign-Up',
              href: '/Guidelines/User-Profile-Guidelines#user-sign-up',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Login',
              href: '/Guidelines/User-Profile-Guidelines#login',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'OAuth Token',
              href: '/Guidelines/User-Profile-Guidelines#oauth-token',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Logout',
              href: '/Guidelines/User-Profile-Guidelines#user-logout',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change Password',
              href: '/Guidelines/User-Profile-Guidelines#change-password',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reset User Password',
              href: '/Guidelines/User-Profile-Guidelines#reset-user-password',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reset Password Email',
              href: '/Guidelines/User-Profile-Guidelines#reset-password-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update User Profile',
              href: '/Guidelines/User-Profile-Guidelines#update-user-profile',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update User Status',
              href: '/Guidelines/User-Profile-Guidelines#update-user-status',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'User Application Access',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Allowed Applications List',
              href: '/Guidelines/User-Profile-Guidelines#allowed-applications-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User App Access List',
              href: '/Guidelines/User-Profile-Guidelines#user-app-access-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add App Access for User',
              href: '/Guidelines/User-Profile-Guidelines#add-app-access-for-user',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Revoke App Access for User',
              href: '/Guidelines/User-Profile-Guidelines#revoke-app-access-for-user',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Validations',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'User Invite',
              href: '/Guidelines/User-Profile-Guidelines/#validate-user-invite',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Password Reset Hash',
              href: '/Guidelines/User-Profile-Guidelines/#validate-password-reset-hash',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Email',
              href: '/Guidelines/User-Profile-Guidelines/#validate-user-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Workspace Domain',
              href: '/Guidelines/User-Profile-Guidelines/#validate-workspace-domain',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Email for Sign-Up',
              href: '/Guidelines/User-Profile-Guidelines/#validate-user-email-for-signup',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Password',
              href: '/Guidelines/User-Profile-Guidelines/#validate-user-password',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Workspace API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Workspace-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Organization Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Resource Properties',
              href: '/Guidelines/Workspace-Guidelines#organization-details',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Allowed Organizations',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-allowed-organizations',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Organization Details',
              href: '/Guidelines/Workspace-Guidelines#get-organization-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Check for Available Domain',
              href: '/Guidelines/Workspace-Guidelines#check-for-available-domain',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Organization Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Update Organization Profile',
              href: '/Guidelines/Workspace-Guidelines#organization-management',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Organization Email',
              href: '/Guidelines/Workspace-Guidelines#update-organization-email',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Workspace Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create a Workspace',
              href: '/Guidelines/Workspace-Guidelines#workspace-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Workspace Domain',
              href: '/Guidelines/Workspace-Guidelines#update-workspace-domain',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate Workspace Domain',
              href: '/Guidelines/Workspace-Guidelines#validate-workspace-domain',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Workspaces',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-workspaces',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Customer Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Customer Resource Properties',
              href: '/Guidelines/Workspace-Guidelines#customer-details',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Operations Resource Properties',
              href: '/Guidelines/Workspace-Guidelines#customer-operations-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Details',
              href: '/Guidelines/Workspace-Guidelines#get-customer-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Basic Customer Details',
              href: '/Guidelines/Workspace-Guidelines#get-basic-customer-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Multi-level Customers List',
              href: '/Guidelines/Workspace-Guidelines#get-multi-level-customers-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Immediate Customers List',
              href: '/Guidelines/Workspace-Guidelines#get-immediate-customers-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Operations Details',
              href: '/Guidelines/Workspace-Guidelines#get-customer-operations-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Operations Label List',
              href: '/Guidelines/Workspace-Guidelines#get-customer-operations-label-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Count of Customers by Status',
              href: '/Guidelines/Workspace-Guidelines#get-count-of-customers-by-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Users for Selected Customer',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-users-for-selected-customer',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of User Assigned Customers',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-user-assigned-customers',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User\'s Remaining Customers',
              href: '/Guidelines/Workspace-Guidelines#get-users-remaining-customers',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Customer\'s Allowed Applications',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-customers-allowed-applications',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Remaining Apps for Customer',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-remaining-apps-for-customer',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Advertisers for Customer',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-advertisers-for-customer',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Config Details',
              href: '/Guidelines/Workspace-Guidelines#get-customer-config-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Customer Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Invite Customer to Platform',
              href: '/Guidelines/Workspace-Guidelines#customer-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Resend Customer Invite',
              href: '/Guidelines/Workspace-Guidelines#resend-customer-invite',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cancel Customer Invite',
              href: '/Guidelines/Workspace-Guidelines#cancel-customer-invite',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Signup',
              href: '/Guidelines/Workspace-Guidelines#customer-signup',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Signup Form',
              href: '/Guidelines/Workspace-Guidelines#get-customer-signup-form',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign Customer to User',
              href: '/Guidelines/Workspace-Guidelines#assign-customer-to-user',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Unassign Customer from User',
              href: '/Guidelines/Workspace-Guidelines#unassign-customer-from-user',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve Customer',
              href: '/Guidelines/Workspace-Guidelines#approve-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reject Customer',
              href: '/Guidelines/Workspace-Guidelines#reject-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Customer App Access',
              href: '/Guidelines/Workspace-Guidelines#add-customer-app-access',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Revoke Customer App Access',
              href: '/Guidelines/Workspace-Guidelines#revoke-customer-app-access',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Put Customer On-Hold',
              href: '/Guidelines/Workspace-Guidelines#put-customer-on-hold',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Re-Activate Customer',
              href: '/Guidelines/Workspace-Guidelines#re-activate-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Label for Customer Operation',
              href: '/Guidelines/Workspace-Guidelines#add-label-for-customer-operation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Enable Bid Shading for Customer',
              href: '/Guidelines/Workspace-Guidelines#enable-bid-shading-for-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer Operations Details',
              href: '/Guidelines/Workspace-Guidelines#update-customer-operations-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Advertiser Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Advertiser Resource Properties',
              href: '/Guidelines/Workspace-Guidelines#advertiser-management',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Advertiser Profile and Details',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-advertiser-profile-and-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Advertiser Profile',
              href: '/Guidelines/Workspace-Guidelines#add-advertiser-profile',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit Advertiser Profile',
              href: '/Guidelines/Workspace-Guidelines#edit-advertiser-profile',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Advertiser Profile',
              href: '/Guidelines/Workspace-Guidelines#delete-advertiser-profile',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Static Details Lists`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Application IDs',
              href: '/Guidelines/Workspace-Guidelines#application-ids',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Organization Workspace Status',
              href: '/Guidelines/Workspace-Guidelines#organization-workspace-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Type',
              href: '/Guidelines/Workspace-Guidelines#customer-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Payment Type',
              href: '/Guidelines/Workspace-Guidelines#customer-payment-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Account Type',
              href: '/Guidelines/Workspace-Guidelines#customer-account-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer List Sortable Fields',
              href: '/Guidelines/Workspace-Guidelines#customer-list-sortable-fields',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Organization Expertise',
              href: '/Guidelines/Workspace-Guidelines#organization-expertise',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Company Size',
              href: '/Guidelines/Workspace-Guidelines#company-size',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Industries',
              href: '/Guidelines/Workspace-Guidelines#industries',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Media Budget',
              href: '/Guidelines/Workspace-Guidelines#media-budget',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Verticals',
              href: '/Guidelines/Workspace-Guidelines#verticals',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: `doc`,
      label: `OpenAPI Spec`,
      id: `Guidelines/API-JSON-File`,
      className: `sidebarCategory`,
    }
  ],
  migrationSidebar: [
    {
      type: "category",
      label: 'Migration Guides',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Migration Guides/index'
      },
      items: [
        {
          type: 'category',
          label: 'Beeswax Migration Guide',
          className: 'sidebarItem',
          items: [
            {
              type: `doc`,
              label: 'Overview',
              id: `Migration Guides/Beeswax/Overview`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Audience',
              id: `Migration Guides/Beeswax/Audience-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Campaigns',
              id: `Migration Guides/Beeswax/Campaign-Migration-Guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Bid Model',
              id: `Migration Guides/Beeswax/Bid-Model-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Conversions',
              id: `Migration Guides/Beeswax/Conversions-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Inventories',
              id: `Migration Guides/Beeswax/Inventories-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Reports',
              id: `Migration Guides/Beeswax/Reports-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Workspace',
              id: `Migration Guides/Beeswax/Workspace-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Finances',
              id: `Migration Guides/Beeswax/Finance-Migration`,
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'DV360 Migration Guide',
          className: 'sidebarItem',
          items: [
            {
              type: `doc`,
              label: 'Overview',
              id: `Migration Guides/DV360/Overview`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Audience',
              id: `Migration Guides/DV360/Audience-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Campaigns',
              id: `Migration Guides/DV360/Campaign-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Bid Model',
              id: `Migration Guides/DV360/Bid-Model-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Conversions',
              id: `Migration Guides/DV360/Conversions-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Inventories',
              id: `Migration Guides/DV360/Inventories-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Reports',
              id: `Migration Guides/DV360/Reports-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Workspace',
              id: `Migration Guides/DV360/Workspace-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Finances',
              id: `Migration Guides/DV360/Finance-Migration`,
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'The Trade Desk Migration Guide',
          className: 'sidebarItem',
          items: [
            {
              type: `doc`,
              label: 'Overview',
              id: `Migration Guides/The Trade Desk/Overview`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Audiences',
              id: `Migration Guides/The Trade Desk/Audience-Migration-Guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Campaigns',
              id: `Migration Guides/The Trade Desk/Campaign-Migration-Guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Bid Model',
              id: `Migration Guides/The Trade Desk/Bid-Model-Migration-Guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Conversions',
              id: `Migration Guides/The Trade Desk/Conversions-Migration-Guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Inventories',
              id: `Migration Guides/The Trade Desk/Inventories-Migration-Guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Reports',
              id: `Migration Guides/The Trade Desk/Reports-Migration-Guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Workspace',
              id: `Migration Guides/The Trade Desk/Workspace-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Finances',
              id: `Migration Guides/The Trade Desk/Finance-Migration`,
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Xandr Migration',
          className: 'sidebarItem',
          items: [
            {
              type: `doc`,
              label: 'Overview',
              id: `Migration Guides/Xandr/Overview`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Audience',
              id: `Migration Guides/Xandr/Audience-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Campaigns',
              id: `Migration Guides/Xandr/Campaign-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Bid Model',
              id: `Migration Guides/Xandr/Bid-Model-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Conversions',
              id: `Migration Guides/Xandr/Conversions-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Inventories',
              id: `Migration Guides/Xandr/Inventories-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Reports',
              id: `Migration Guides/Xandr/Reports-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Workspace',
              id: `Migration Guides/Xandr/Workspace-Migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Finances',
              id: `Migration Guides/Xandr/Finance-Migration`,
              className: 'sidebarItem'
            },
          ]
        }
      ],
    },
  ],
  politicalSidebar: [
    {
      type: 'doc',
      id: 'Political Vertical/index',
      label: 'Political',
      className: 'sidebarCategory'
    },
    {
      type: 'category',
      label: 'Audience API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Political Vertical/Audience-Segments'
      },
      items: [
        {
          type: 'category',
          label: 'Audience Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Audience Details List',
              href: '/Political%20Vertical/Audience-Segments#audience-details-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Matched Audience Details',
              href: '/Political%20Vertical/Audience-Segments#matched-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Geo-Farmed Audience Details',
              href: '/Political%20Vertical/Audience-Segments#geo-farmed-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Contextual Audience Details',
              href: '/Political%20Vertical/Audience-Segments#contextual-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `Audience Segment Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Audience Segment Details',
              href: '/Political%20Vertical/Audience-Segments#audience-segment-details-1',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Search Audience Segment',
              href: '/Political%20Vertical/Audience-Segments#search-audience-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Segment Partner Provider List',
              href: '/Political%20Vertical/Audience-Segments#segment-partner-provider-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Segment List by Provider/Partner IDs',
              href: '/Political%20Vertical/Audience-Segments#segment-list-by-providerpartner-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Segment List by Audience IDs',
              href: '/Political%20Vertical/Audience-Segments#segment-list-by-audience-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Audience Segment Insights',
              href: '/Political%20Vertical/Audience-Segments#audience-segment-insights',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `Audience Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create Matched Audience',
              href: '/Political%20Vertical/Audience-Segments#create-matched-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update Matched Audience',
              href: '/Political%20Vertical/Audience-Segments#update-matched-audience',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Audience Segment',
              href: '/Political%20Vertical/Audience-Segments#create-audience-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update Audience Segment',
              href: '/Political%20Vertical/Audience-Segments#update-audience-segment',
              customProps: { method: 'PUT' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Geo-Farmed Audience',
              href: '/Political%20Vertical/Audience-Segments#create-geo-farmed-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Contextual Audience',
              href: '/Political%20Vertical/Audience-Segments#create-contextual-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `More Audience Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Matched Data Partners',
              href: '/Political%20Vertical/Audience-Segments#data-partners-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Provider Details List',
              href: '/Political%20Vertical/Audience-Segments#provider-details-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Finance API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Political Vertical/Finance'
      },
      items: [
            {
              type: 'link',
              label: 'Customer VLD Finance Details',
              href: '/Political%20Vertical/Finance#get-customer-vld-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update Customer VLD Details',
              href: '/Political%20Vertical/Finance#update-customer-vld-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
          ]
    },
    {
      type: 'category',
      label: 'Insights API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Political Vertical/insights-vld'
      },
      items: [
        {
          type: `category`,
          label: `Voter Level Data Reports`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'VLD Resource Properties',
              href: '/political-vertical/insights-vld/#vld-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of VLD Reports',
              href: '/political-vertical/insights-vld/#get-list-of-vld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns Eligible for VLD Reports',
              href: '/political-vertical/insights-vld/#get-list-of-campaigns-eligible-for-vld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate VLD Report',
              href: '/political-vertical/insights-vld/#generate-vld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cost Assessment for VLD Report',
              href: '/political-vertical/insights-vld/#get-cost-assessment-for-vld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download VLD Insight Report',
              href: '/political-vertical/insights-vld/#download-vld-insight-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete VLD Report',
              href: '/political-vertical/insights-vld/#delete-vld-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Master API',
      className: 'sidebarCategory',
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/Guidelines/Master-API-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Geographical Data',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Request Schema',
              href: '/Guidelines/Master-API-Guidelines#request-schema',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Zip Codes and State IDs',
              href: '/Guidelines/Master-API-Guidelines#get-zip-codes-and-state-ids',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'State Segment',
              href: '/Guidelines/Master-API-Guidelines#get-state-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Senate District Segment',
              href: '/Guidelines/Master-API-Guidelines#get-senate-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'House District Segment',
              href: '/Guidelines/Master-API-Guidelines#get-house-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Gender Segment',
              href: '/Guidelines/Master-API-Guidelines#get-gender-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Age Segment',
              href: '/Guidelines/Master-API-Guidelines#get-age-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Language Segment',
              href: '/Guidelines/Master-API-Guidelines#get-language-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Interest Segment',
              href: '/Guidelines/Master-API-Guidelines#get-interest-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Income Range Segment',
              href: '/Guidelines/Master-API-Guidelines#get-income-range-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Ethnicity Segment',
              href: '/Guidelines/Master-API-Guidelines#get-ethnicity-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Ethnicity Group Segment',
              href: '/Guidelines/Master-API-Guidelines#get-ethnicity-group-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'DMA Code Segment',
              href: '/Guidelines/Master-API-Guidelines#get-dma-code-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'County Segment',
              href: '/Guidelines/Master-API-Guidelines#get-county-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Country Segment',
              href: '/Guidelines/Master-API-Guidelines#get-country-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Congressional District Segment',
              href: '/Guidelines/Master-API-Guidelines#get-congressional-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'City Segment',
              href: '/Guidelines/Master-API-Guidelines#get-city-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Location Types',
              href: '/Guidelines/Master-API-Guidelines#get-location-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Location Details by Location Type',
              href: '/Guidelines/Master-API-Guidelines#get-location-details-by-location-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Timezones',
              href: '/Guidelines/Master-API-Guidelines#get-timezones',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Carriers and States by Country ID',
              href: '/Guidelines/Master-API-Guidelines#get-carriers-and-states-by-country-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
      ]
    }
  ],
  healthcareSidebar: [
    {
      type: 'doc',
      id: 'Healthcare Vertical/index',
      label: 'Healthcare',
      className: 'sidebarCategory'
    },
    {
      type: 'category',
      label: 'Audience API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Healthcare Vertical/Audience-Healthcare'
      },
      items: [
        {
          type: `category`,
          label: `Matched Audience`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Matched Audience Details',
              href: '/Healthcare%20Vertical/Audience-Healthcare#matched-audience-details',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Create Matched Audience',
              href: '/Healthcare%20Vertical/Audience-Healthcare#create-matched-audience',
              customProps: { method: 'POST' },
            },
          ]
        },
        {
          type: `category`,
          label: `Healthcare Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'ABM Audience Details',
              href: '/Healthcare%20Vertical/Audience-Healthcare#abm-audience-details',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'ABM Audience Statistics',
              href: '/Healthcare%20Vertical/Audience-Healthcare#abm-audience-statistics',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare Titles List',
              href: '/Healthcare%20Vertical/Audience-Healthcare#healthcare-titles-list',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare Specialties List',
              href: '/Healthcare%20Vertical/Audience-Healthcare#healthcare-specialties-list',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare Systems List',
              href: '/Healthcare%20Vertical/Audience-Healthcare#healthcare-systems-list',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare Data',
              href: '/Healthcare%20Vertical/Audience-Healthcare#healthcare-data',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare Statistics',
              href: '/Healthcare%20Vertical/Audience-Healthcare#healthcare-statistics',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare Account Types',
              href: '/Healthcare%20Vertical/Audience-Healthcare#healthcare-account-types',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare Account Subtypes',
              href: '/Healthcare%20Vertical/Audience-Healthcare#healthcare-account-subtypes',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare Account Names',
              href: '/Healthcare%20Vertical/Audience-Healthcare#healthcare-account-names',
              customProps: { method: 'POST' },
            },
          ]
        },
        {
          type: 'link',
          label: 'Create ABM Audience',
          href: '/Healthcare%20Vertical/Audience-Healthcare#create-abm-audience',
          customProps: { method: 'POST' },
          className: 'sidebarItem',
        }
      ]
    },
    {
      type: 'category',
      label: 'Finance API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Healthcare Vertical/Finance'
      },
      items: [
            {
              type: 'link',
              label: 'Customer PLD Finance Details',
              href: '/Healthcare%20Vertical/Finance#get-customer-pld-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer PLD Details',
              href: '/Healthcare%20Vertical/Finance#update-customer-pld-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer SLS Finance Details',
              href: '/Healthcare%20Vertical/Finance#get-customer-sls-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer SLS Details',
              href: '/Healthcare%20Vertical/Finance#update-customer-sls-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            }
          ]
    },
    {
      type: 'category',
      label: 'Insights API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Healthcare Vertical/Insights-PLD'
      },
      items: [
        {
          type: `category`,
          label: `Provider Level Data Reports`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'PLD Resource Properties',
              href: '/Healthcare%20Vertical/Insights-PLD#pld-resource-properties'
            },
            {
              type: 'link',
              label: 'List of PLD Reports',
              href: '/Healthcare%20Vertical/Insights-PLD#get-list-of-pld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'List of Campaigns Eligible for PLD Reports',
              href: '/Healthcare%20Vertical/Insights-PLD#get-list-of-campaigns-eligible-for-pld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Generate PLD Report',
              href: '/Healthcare%20Vertical/Insights-PLD#generate-pld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'PLD Reports Columns',
              href: '/Healthcare%20Vertical/Insights-PLD#get-pld-reports-columns',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update PLD Reports Columns',
              href: '/Healthcare%20Vertical/Insights-PLD#update-pld-reports-columns',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Download PLD Insight Report',
              href: '/Healthcare%20Vertical/Insights-PLD#download-pld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete PLD Report',
              href: '/Healthcare%20Vertical/Insights-PLD#delete-pld-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: 'category',
          label: 'ScriptLift Studies Reports',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'SLS Resource Properties',
              href: '/Healthcare%20Vertical/Insights-PLD#sls-resource-properties',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'List of SLS Reports',
              href: '/Healthcare%20Vertical/Insights-PLD#get-list-of-sls-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Generate SLS Report',
              href: '/Healthcare%20Vertical/Insights-PLD#generate-sls-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'SLS Reports Computation',
              href: '/Healthcare%20Vertical/Insights-PLD#sls-reports-computation',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Validate SLS Report Name',
              href: '/Healthcare%20Vertical/Insights-PLD#validate-sls-report-name',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Campaigns Eligible for SLS Reports',
              href: '/Healthcare%20Vertical/Insights-PLD#get-list-of-campaigns-eligible-for-sls-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Download SLS Insight Report',
              href: '/Healthcare%20Vertical/Insights-PLD#download-sls-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete SLS Report',
              href: '/Healthcare%20Vertical/Insights-PLD#delete-sls-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem',
            },
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Planner API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Healthcare Vertical/Planner'
      },
      items: [
            {
              type: 'link',
              label: 'Healthcare Proposal Planner Details',
              href: '/Healthcare%20Vertical/Planner-API#healthcare-proposal-planner-details',
              className: 'sidebarItem',
            },
          ]
    }
  ]
}

export default sidebars;
