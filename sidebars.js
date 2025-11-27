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
        id: 'getting-started/index'
      },
      items: [
        {
          type: 'doc',
          id: 'getting-started/platform-overview',
          label: 'IQM Platform Overview',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'getting-started/rest-api-reference',
          label: 'REST API Overview',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'getting-started/before-you-begin',
          label: 'Before You Begin',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'getting-started/typescript-prerequisites',
          label: 'TypeScript Prerequisites',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'getting-started/api-pagination-guide',
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
        id: 'quickstart-guides/index'
      },
      items: [
        {
          type: 'category',
          label: 'Sign Up and Authenticate',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/authentication-quickstart-guide'
          },
          items: [
            {
              type: `link`,
              label: 'Sign Up',
              href: `/quickstart-guides/authentication-quickstart-guide#sign-up`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Log In',
              href: `/quickstart-guides/authentication-quickstart-guide#log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Refresh Token',
              href: `/quickstart-guides/authentication-quickstart-guide#refresh-token`,
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
            id: 'quickstart-guides/upload-a-creative-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Creatives',
              href: `/quickstart-guides/upload-a-creative-quickstart#about-iqm-creatives`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/quickstart-guides/upload-a-creative-quickstart#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Upload a Creative Using the IQM API',
              href: `/quickstart-guides/upload-a-creative-quickstart#upload-a-creative-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/quickstart-guides/upload-a-creative-quickstart#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Request Creative Types',
              href: `/quickstart-guides/upload-a-creative-quickstart#step-2-request-creative-types`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Upload a Creative',
              href: `/quickstart-guides/upload-a-creative-quickstart#step-3-upload-a-creative`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Check Creative Status',
              href: `/quickstart-guides/upload-a-creative-quickstart#step-4-check-creative-status`,
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
            id: 'quickstart-guides/create-a-campaign-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Creatives',
              href: `/quickstart-guides/create-a-campaign-quickstart#about-iqm-campaigns`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/quickstart-guides/create-a-campaign-quickstart#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a Campaign Using the IQM API',
              href: `/quickstart-guides/create-a-campaign-quickstart#create-a-campaign-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/quickstart-guides/create-a-campaign-quickstart#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Create an Insertion Order',
              href: `/quickstart-guides/create-a-campaign-quickstart#step-2-create-insertion-order`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Create a Campaign',
              href: `/quickstart-guides/create-a-campaign-quickstart#step-3-create-a-campaign`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Check Campaign Status',
              href: `/quickstart-guides/create-a-campaign-quickstart#step-4-check-campaign-status`,
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
            id: 'quickstart-guides/contextual-audience-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Contextual Audiences',
              href: `/quickstart-guides/contextual-audience-quickstart#about-iqm-contextual-audiences`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/quickstart-guides/contextual-audience-quickstart#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Create a Contextual Audience',
              href: `/quickstart-guides/contextual-audience-quickstart#step-2-create-a-contextual-audience`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Check Audience Status',
              href: `/quickstart-guides/contextual-audience-quickstart#step-3-check-audience-status`,
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
            id: 'quickstart-guides/reporting-api-quickstart-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Reports',
              href: `/quickstart-guides/reporting-api-quickstart-guide#about-iqm-reports`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Run a Report Using the IQM API',
              href: `/quickstart-guides/reporting-api-quickstart-guide#run-a-report-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/quickstart-guides/reporting-api-quickstart-guide#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Request Dimensions and Metrics',
              href: `/quickstart-guides/reporting-api-quickstart-guide#step-2-request-dimensions-and-metrics`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Select Timezones',
              href: `/quickstart-guides/reporting-api-quickstart-guide#step-3-select-timezones`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Execute a Report',
              href: `/quickstart-guides/reporting-api-quickstart-guide#step-4-execute-a-report`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'FAQ',
              href: `/quickstart-guides/reporting-api-quickstart-guide#faq`,
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
            id: 'quickstart-guides/schedule-report-api-quickstart-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Reports',
              href: `/quickstart-guides/schedule-report-api-quickstart-guide#about-iqm-reports`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Schedule a Report',
              href: `/quickstart-guides/schedule-report-api-quickstart-guide#schedule-a-report-1`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/quickstart-guides/schedule-report-api-quickstart-guide#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Schedule a Report',
              href: `/quickstart-guides/schedule-report-api-quickstart-guide#step-2-schedule-a-report`,
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
        id: 'tutorials/index'
      },
      items: [
        {
          type: 'category',
          label: 'Create a Bid Model',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/bid-model-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Bid Modeling',
              href: `/tutorials/create-a-bid-model#about-iqm-bid-modeling`,
              className: 'sidebarItemQS'
            },
                 {
              type: `link`,
              label: 'Before You Begin',
              href: `/tutorials/create-a-bid-model#before-you-begin`,
              className: 'sidebarItemQS'
            },
                 {
              type: `link`,
              label: 'Bid Modeling Criteria',
              href: `/tutorials/create-a-bid-model#bid-modeling-criteria`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Check Campaign for Eligibility',
              href: `/tutorials/create-a-bid-model#step-1-check-campaign-for-eligibility`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Select Dimension',
              href: `/tutorials/create-a-bid-model#step-2-select-dimension`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Create a Bid Model',
              href: `/tutorials/create-a-bid-model#step-3-create-a-bid-model`,
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
            id: 'quickstart-guides/conversion-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Conversions',
              href: `/tutorials/create-a-conversion#about-iqm-conversions`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a Conversion',
              href: `/tutorials/create-a-conversion#create-a-conversion-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/tutorials/create-a-conversion#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Create a Pixel Conversion',
              href: `/tutorials/create-a-conversion#step-2-create-a-pixel-conversion`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Assign a Conversion to a Campaign',
              href: `/tutorials/create-a-conversion#step-3-assign-a-conversion-to-a-campaign`,
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
            id: 'tutorials/deal-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Deals',
              href: `/tutorials/deal-guide#about-iqm-deals`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/tutorials/deal-guide#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Request Exchange List',
              href: `/tutorials/deal-guide#request-exchange-list`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a PG Deal',
              href: `/tutorials/deal-guide#create-a-pg-deal`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a PMP Deal',
              href: `/tutorials/deal-guide#create-a-pmp-deal`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Assign Deals to Campaign',
              href: `/tutorials/deal-guide#assign-deals-to-a-campaign`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'List of Deals and Campaigns',
              href: `/tutorials/deal-guide#get-list-of-deals-associated-with-campaigns`,
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
            id: 'quickstart-guides/insights-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Insights',
              href: `/tutorials/create-an-insights-report#about-iqm-insights`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/tutorials/create-an-insights-report#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Eligibility Requirements',
              href: `/tutorials/create-an-insights-report#eligibility-requirements`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Campaign Bidding Insights',
              href: `/tutorials/create-an-insights-report#campaign-bidding-insights`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Audience Insights Report',
              href: `/tutorials/create-an-insights-report#audience-insights-report`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Voter Level Data Report',
              href: `/tutorials/create-an-insights-report#voter-level-data-report`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Provider Level Data Report',
              href: `/tutorials/create-an-insights-report#provider-level-data-report`,
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
            id: 'quickstart-guides/upload-creative-and-create-a-campaign-api-quickstart-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM PG Campaigns',
              href: `/tutorials/create-a-pg-campaign#about-iqm-pg-campaigns`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/tutorials/create-a-pg-campaign#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a PG Campaign Using the IQM API',
              href: `/tutorials/create-a-pg-campaign#create-a-pg-campaign-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/tutorials/create-a-pg-campaign#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Create a PG Campaign',
              href: `/tutorials/create-a-pg-campaign#step-2-create-a-pg-campaign`,
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
            id: 'quickstart-guides/inventory-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Inventory',
              href: `/tutorials/optimize-your-inventory#about-iqm-inventory`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Optimize Your Inventory',
              href: `/tutorials/optimize-your-inventory#optimize-your-inventory-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/tutorials/optimize-your-inventory#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Search Inventory List ',
              href: `/tutorials/optimize-your-inventory#step-2-search-inventory-list`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Create an Inventory Group',
              href: `/tutorials/optimize-your-inventory#step-3-create-an-inventory-group`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Update an Inventory Group',
              href: `/tutorials/optimize-your-inventory#step-4-update-an-inventory-group`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 5: Campaign Inventory Group Targeting',
              href: `/tutorials/optimize-your-inventory#step-5-campaign-inventory-group-targeting`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 6: Get List of Groups by Campaign',
              href: `/tutorials/optimize-your-inventory#step-6-get-list-of-groups-by-campaign`,
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
            id: 'tutorials/customer-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Customers',
              href: `/tutorials/customer-guide#about-iqm-customers`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/tutorials/customer-guide#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Sign Up a New Customer Using the IQM API',
              href: `/tutorials/customer-guide#sign-up-a-new-customer-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Invite a Customer',
              href: `/tutorials/customer-guide#invite-a-customer`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Sign Up a Customer',
              href: `/tutorials/customer-guide#sign-up-a-customer`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Approve a Customer',
              href: `/tutorials/customer-guide#approve-a-customer`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Assign Customer to User',
              href: `/tutorials/customer-guide#assign-customer-to-user`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Add Customer App Access',
              href: `/tutorials/customer-guide#add-customer-app-access`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Add Payment for Customer',
              href: `/tutorials/customer-guide#add-payment-for-customer`,
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
            id: 'quickstart-guides/matched-audience-upload-api-quickstart-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Matched Audience',
              href: `/tutorials/upload-a-matched-audience#about-iqm-matched-audience`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/tutorials/upload-a-matched-audience#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Upload Matched Audience Using the IQM API',
              href: `/tutorials/upload-a-matched-audience#upload-matched-audience-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/tutorials/upload-a-matched-audience#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Request Column List',
              href: `/tutorials/upload-a-matched-audience#step-2-request-column-list`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Upload Matched Audience',
              href: `/tutorials/upload-a-matched-audience#step-3-upload-matched-audience`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Check Audience Status',
              href: `/tutorials/upload-a-matched-audience#step-4-check-audience-status`,
              className: 'sidebarItemQS'
            },
          ]
        },
      ]
    },
    {
      type: `doc`,
      label: `API Guidelines`,
      id: `guidelines/index`,
      className: `sidebarCategory`,
    },
    {
      type: 'category',
      label: 'Assets API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'guidelines/asset-api'
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
              href: '/guidelines/asset-api#get-a-list-of-all-assets',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Asset Details',
              href: '/guidelines/asset-api#get-asset-details',
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
              href: '/guidelines/asset-api#add-multiple-assets',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Asset Details',
              href: '/guidelines/asset-api#update-asset-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Asset',
              href: '/guidelines/asset-api#delete-asset',
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
        id: 'guidelines/audience-api'
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
              href: '/guidelines/audience-api#audience-details-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Paginated Audience Details List',
              href: '/guidelines/audience-api#paginated-audience-details-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Audience Details',
              href: '/guidelines/audience-api#matched-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Retargeted Audience Details',
              href: '/guidelines/audience-api#retargeted-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Geo-Farmed Audience Details',
              href: '/guidelines/audience-api#geo-farmed-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Audience Details',
              href: '/guidelines/audience-api#campaign-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Pre-bid Audience Details',
              href: '/guidelines/audience-api#pre-bid-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Search Pre-bid Audience Details',
              href: '/guidelines/audience-api#search-pre-bid-audience-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'DoubleVerify Pre-bid Audience Segment',
              href: '/guidelines/audience-api#doubleverify-pre-bid-audience-segment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Contextual Audience Details',
              href: '/guidelines/audience-api#contextual-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience Count by Status',
              href: '/guidelines/audience-api#audience-count-by-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience Count by Type',
              href: '/guidelines/audience-api#audience-count-by-type',
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
              href: '/guidelines/audience-api#audience-segment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Search Audience Segment',
              href: '/guidelines/audience-api#search-audience-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment Partner Provider List',
              href: '/guidelines/audience-api#segment-partner-provider-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment List by Provider/Partner IDs',
              href: '/guidelines/audience-api#segment-list-by-providerpartner-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment List by Audience IDs',
              href: '/guidelines/audience-api#segment-list-by-audience-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience Segment Insights',
              href: '/guidelines/audience-api#audience-segment-insights',
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
              href: '/guidelines/audience-api#create-matched-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Matched Audience',
              href: '/guidelines/audience-api#update-matched-audience',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Retargeted Audience',
              href: '/guidelines/audience-api#create-retargeted-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Retargeted Audience',
              href: '/guidelines/audience-api#update-retargeted-audience',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Retargeted Audience Email',
              href: '/guidelines/audience-api#retargeted-audience-email-notification',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Geo-Farmed Audience',
              href: '/guidelines/audience-api#create-geo-farmed-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Campaign Audience',
              href: '/guidelines/audience-api#create-campaign-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Audience Segment',
              href: '/guidelines/audience-api#create-audience-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Audience Segment',
              href: '/guidelines/audience-api#update-audience-segment',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Pre-bid Audience',
              href: '/guidelines/audience-api#create-pre-bid-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Pre-bid Audience',
              href: '/guidelines/audience-api#update-pre-bid-audience',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Contextual Audience',
              href: '/guidelines/audience-api#create-contextual-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create ABM Audience',
              href: '/guidelines/audience-api#create-abm-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Lookalike Audience',
              href: '/guidelines/audience-api#create-lookalike-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Audience Name',
              href: '/guidelines/audience-api#update-audience-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate Matched Audience',
              href: '/guidelines/audience-api#duplicate-matched-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Audience Insights',
              href: '/guidelines/audience-api#create-audience-insights',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send Insights Email',
              href: '/guidelines/audience-api#send-insights-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Regenerate Insights Report',
              href: '/guidelines/audience-api#regenerate-audience-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Insights Report',
              href: '/guidelines/audience-api#download-audience-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate URL for Contextual Audience',
              href: '/guidelines/audience-api#validate-url-for-contextual-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Audience',
              href: '/guidelines/audience-api#delete-audience',
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
              href: '/guidelines/audience-api#abm-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'ABM Audience Statistics',
              href: '/guidelines/audience-api#abm-audience-statistics',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Titles List',
              href: '/guidelines/audience-api#healthcare-titles-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Specialties List',
              href: '/guidelines/audience-api#healthcare-specialties-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Systems List',
              href: '/guidelines/audience-api#healthcare-systems-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Data',
              href: '/guidelines/audience-api#healthcare-data',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Statistics',
              href: '/guidelines/audience-api#healthcare-statistics',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Account Types',
              href: '/guidelines/audience-api#healthcare-account-types',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Account Subtypes',
              href: '/guidelines/audience-api#healthcare-account-subtypes',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Healthcare Account Names',
              href: '/guidelines/audience-api#healthcare-account-names',
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
              href: '/guidelines/audience-api#matched-audience-fields',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment Reach Range',
              href: '/guidelines/audience-api#reach-range-list-for-audience-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment Price Range',
              href: '/guidelines/audience-api#price-range-list-for-audience-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Data Partners',
              href: '/guidelines/audience-api#data-partners-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Data Formats',
              href: '/guidelines/audience-api#data-formats-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Column List',
              href: '/guidelines/audience-api#column-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience Type List',
              href: '/guidelines/audience-api#audience-type-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience Status List',
              href: '/guidelines/audience-api#audience-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Frequency Type List',
              href: '/guidelines/audience-api#frequency-type-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Provider Details List',
              href: '/guidelines/audience-api#provider-details-list',
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
        id: 'guidelines/bid-model-api'
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
              href: '/guidelines/bid-model-api#get-list-of-bid-model-bundles',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Modeled Entities',
              href: '/guidelines/bid-model-api#get-modeled-entities',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Dimension Statistics',
              href: '/guidelines/bid-model-api#get-campaign-dimension-statistics',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Spending by Dimension',
              href: '/guidelines/bid-model-api#get-dimension-specific-spending-for-a-campaign',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Modeled Entities for a Campaign',
              href: '/guidelines/bid-model-api#get-list-of-modeled-entities-for-a-campaign',
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
              href: '/guidelines/bid-model-api#includeexclude-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Entities',
              href: '/guidelines/bid-model-api#includeexclude-entities-from-a-campaign',
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
              href: '/guidelines/bid-model-api#bid-modeling-criteria',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Manage Bid Modeling',
              href: '/guidelines/bid-model-api#manage-bid-modeling',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Bid Model Bundle',
              href: '/guidelines/bid-model-api#create-bid-model-bundle',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Bid Model Bundle',
              href: '/guidelines/bid-model-api#update-bid-model-bundle',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Bid Model Bundle',
              href: '/guidelines/bid-model-api#delete-bid-model-bundle',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'IO Bid Modeling',
              href: '/guidelines/bid-model-api#manage-insertion-order-bid-modeling',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'IO Priority',
              href: '/guidelines/bid-model-api#manage-insertion-order-priority',
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
              href: '/guidelines/bid-model-api#get-metrics-report-for-a-given-campaign-and-dimension',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Bid Model Dimensions',
              href: '/guidelines/bid-model-api#get-list-of-bid-model-dimensions',
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
        id: 'guidelines/campaign-api'
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
              href: '/guidelines/campaign-api#campaign-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Details by ID',
              href: '/guidelines/campaign-api#get-campaign-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns',
              href: '/guidelines/campaign-api#get-list-of-campaigns',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns with Basic Details',
              href: '/guidelines/campaign-api#get-list-of-campaigns-with-basic-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Basic Details of Campaigns',
              href: '/guidelines/campaign-api#get-basic-details-of-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Audience Targeting Details',
              href: '/guidelines/campaign-api#get-campaign-audience-targeting-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns with Filters',
              href: '/guidelines/campaign-api#get-list-of-campaigns-with-filters',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Budget Details',
              href: '/guidelines/campaign-api#get-campaign-budget-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Groups',
              href: '/guidelines/campaign-api#get-list-of-campaign-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Deals',
              href: '/guidelines/campaign-api#get-deals-associated-with-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Count by Status',
              href: '/guidelines/campaign-api#get-campaign-count-by-status',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Count with Type',
              href: '/guidelines/campaign-api#get-campaign-count-with-campaign-type',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Count by Creative Type',
              href: '/guidelines/campaign-api#get-campaign-count-by-creative-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Creative Type and Campaign Count',
              href: '/guidelines/campaign-api#get-creative-type-and-campaigns-count',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          {
              type: 'link',
              label: 'Campaign Conversion List',
              href: '/guidelines/campaign-api#get-campaign-conversion-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Basic Conversion List',
              href: '/guidelines/campaign-api#get-basic-conversion-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Start Date',
              href: '/guidelines/campaign-api#get-campaign-start-date',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Start/End Dates',
              href: '/guidelines/Campaign-API-guidelines/#get-list-of-campaign-start-dates-or-end-dates',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Report Data',
              href: '/guidelines/campaign-api#get-campaign-report-data',
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
              href: '/guidelines/campaign-api#create-new-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Campaign',
              href: '/guidelines/campaign-api#update-campaign',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create New PG Campaign',
              href: '/guidelines/campaign-api#create-new-pg-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update PG Campaign',
              href: '/guidelines/campaign-api#update-pg-campaign',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change Campaign Name',
              href: '/guidelines/campaign-api#change-campaign-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change Campaign End Date',
              href: '/guidelines/campaign-api#change-campaign-end-date',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change Campaign Budget',
              href: '/guidelines/campaign-api#change-campaign-budget',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign Conversions to Campaign',
              href: '/guidelines/campaign-api#assign-conversions-to-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Audience Targeting in Campaign',
              href: '/guidelines/campaign-api#update-audience-targeting-in-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Group Targeting',
              href: '/guidelines/campaign-api#inventory-group-targeting',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign PMP Deals',
              href: '/guidelines/campaign-api#assign-pmp-deals',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign PG Deals',
              href: '/guidelines/campaign-api#assign-pg-deals',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Resend Email to Set Margin',
              href: '/guidelines/campaign-api#resend-email-to-set-margin',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Resend Email Reminder to Set Invoice Template',
              href: '/guidelines/campaign-api#resend-email-reminder-to-set-invoice-template',
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
              href: '/guidelines/campaign-api#insertion-order-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'IO Details',
              href: '/guidelines/campaign-api#get-insertion-order-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Advanced IO Details',
              href: '/guidelines/campaign-api#get-advanced-insertion-order-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Advanced IO Details',
              href: '/guidelines/campaign-api#download-advanced-io-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get IO Campaign Budget and Details',
              href: '/guidelines/campaign-api#get-io-campaign-budget-and-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Details Grouped by IO ID',
              href: '/guidelines/campaign-api#get-list-of-campaign-details-grouped-by-insertion-order-id',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Details Grouped by IO ID with Filters',
              href: '/guidelines/campaign-api#get-list-of-campaign-details-grouped-by-io-id-with-filters',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns and Report Details by IO ID',
              href: '/guidelines/campaign-api#get-list-of-campaigns-and-report-details-by-insertion-order-id',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download csv/xlsx File for IO-based Campaign Details',
              href: '/guidelines/campaign-api#download-csvxlsx-file-for-io-based-campaign-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of IO Start/End Dates',
              href: '/guidelines/campaign-api#get-list-of-io-startend-dates',
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
              href: '/guidelines/campaign-api#create-an-insertion-order',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Insertion Order Details',
              href: '/guidelines/campaign-api#update-insertion-order-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update End Date for Multiple IOs',
              href: '/guidelines/campaign-api#update-end-date-for-multiple-ios',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Budget for Multiple IOs',
              href: '/guidelines/campaign-api#update-budget-for-multiple-ios',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate an Insertion Order',
              href: '/guidelines/campaign-api#duplicate-an-insertion-order',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete an Insertion Order',
              href: '/guidelines/campaign-api#delete-an-insertion-order',
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
              href: '/guidelines/campaign-api#get-io-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaign Budget Types',
              href: '/guidelines/campaign-api#get-list-of-campaign-budget-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Budget Distribution Methods',
              href: '/guidelines/campaign-api#get-list-of-budget-distribution-methods',
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
        id: 'guidelines/conversion-api'
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
              href: '/guidelines/conversion-api#postback-conversion-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Pixel Conversion Resource Details',
              href: '/guidelines/conversion-api#pixel-conversion-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Conversion Details by ID',
              href: '/guidelines/conversion-api#get-conversion-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversions',
              href: '/guidelines/conversion-api#get-list-of-conversions',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Conversion Count by Type',
              href: '/guidelines/conversion-api#get-conversion-count-by-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Details by Conversion ID',
              href: '/guidelines/conversion-api#get-campaign-details-by-conversion-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Details by Conversion ID in Group or Basic',
              href: '/guidelines/conversion-api#get-campaign-details-by-conversion-id-in-group-or-basic',
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
              href: '/guidelines/conversion-api#create-postback-conversion',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Pixel Conversion',
              href: '/guidelines/conversion-api#create-pixel-conversion',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Conversion',
              href: '/guidelines/conversion-api#delete-conversion',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Postback Conversion',
              href: '/guidelines/conversion-api#update-postback-conversion',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Pixel Conversion',
              href: '/guidelines/conversion-api#update-pixel-conversion',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign Conversion to a Campaign',
              href: '/guidelines/conversion-api#assign-conversion-to-a-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send Email for Pixel Integration',
              href: '/guidelines/conversion-api#send-email-for-pixel-integration',
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
              href: '/guidelines/conversion-api#get-list-of-partner-types-for-postback-conversions',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Pixel Conversion Advanced Setting Default Values',
              href: '/guidelines/conversion-api#get-list-of-pixel-conversion-advanced-setting-default-values',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversion Types',
              href: '/guidelines/conversion-api#get-list-of-conversion-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversion Status',
              href: '/guidelines/conversion-api#get-list-of-conversion-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversion Piggyback Types',
              href: '/guidelines/conversion-api#get-list-of-conversion-piggyback-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversion Property Types',
              href: '/guidelines/Conversion-API-guidelines/#get-list-of-conversion-property-types',
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
        id: 'guidelines/creative-api'
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
              href: '/guidelines/creative-api#creative-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Creatives and Details',
              href: '/guidelines/creative-api#get-list-of-creatives-and-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Associated Campaigns',
              href: '/guidelines/creative-api#get-associated-campaigns',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Creative Groups',
              href: '/guidelines/creative-api#get-list-of-creative-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Creative Count by Type',
              href: '/guidelines/creative-api#get-creative-count-by-type',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Creative Count by Status',
              href: '/guidelines/creative-api#get-creative-count-by-status',
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
              href: '/guidelines/creative-api#add-new-creative',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Creative Details',
              href: '/guidelines/creative-api#update-creative-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Creative Status',
              href: '/guidelines/creative-api#update-creative-status',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create New Creative Group',
              href: '/guidelines/creative-api#create-new-creative-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Creative Group',
              href: '/guidelines/creative-api#delete-creative-group',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Creative Groups',
              href: '/guidelines/creative-api#update-creative-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Creative Group Name',
              href: '/guidelines/creative-api#update-creative-group-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate Creatives',
              href: '/guidelines/creative-api#duplicate-creatives',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate Creative Group',
              href: '/guidelines/creative-api#duplicate-creative-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Compress Image',
              href: '/guidelines/creative-api#compress-uploaded-image-creative',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Pixel URL',
              href: '/guidelines/creative-api#update-pixel-url',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Click URL',
              href: '/guidelines/creative-api#update-click-url',
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
              href: '/guidelines/creative-api#get-creative-types-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Creative Status List',
              href: '/guidelines/creative-api#get-creative-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'CTA Details',
              href: '/guidelines/creative-api#get-cta-details',
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
        id: 'guidelines/dashboard-api'
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
              href: '/guidelines/dashboard-api#dashboard-list',
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
              href: '/guidelines/dashboard-api#create-dashboard',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Dashboard',
              href: '/guidelines/dashboard-api#update-dashboard',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Dashboard',
              href: '/guidelines/dashboard-api#delete-dashboard',
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
              href: '/guidelines/dashboard-api#dashboard-reports-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Workspace Report',
              href: '/guidelines/dashboard-api#workspace-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'IO Report',
              href: '/guidelines/dashboard-api#io-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Exchange Report',
              href: '/guidelines/dashboard-api#exchange-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Report',
              href: '/guidelines/dashboard-api#customer-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Report',
              href: '/guidelines/dashboard-api#campaign-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Report',
              href: '/guidelines/dashboard-api#download-report',
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
        id: 'guidelines/finance-api'
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
              href: '/guidelines/finance-api#finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Margin Details',
              href: '/guidelines/finance-api#get-customer-margin-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer Margin Details',
              href: '/guidelines/finance-api#update-customer-margin-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Margin Details',
              href: '/guidelines/finance-api#campaign-margin-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer PG Fees Details',
              href: '/guidelines/finance-api#get-customer-pg-fees-details',
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
              href: '/guidelines/finance-api#get-customer-vld-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer VLD Details',
              href: '/guidelines/finance-api#update-customer-vld-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer PLD Finance Details',
              href: '/guidelines/finance-api#get-customer-pld-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer PLD Details',
              href: '/guidelines/finance-api#update-customer-pld-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer SLS Finance Details',
              href: '/guidelines/finance-api#get-customer-sls-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer SLS Details',
              href: '/guidelines/finance-api#update-customer-sls-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer DoubleVerify IVT Flag',
              href: '/guidelines/finance-api#get-customer-doubleverify-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer DoubleVerify IVT Flag',
              href: '/guidelines/finance-api#update-customer-doubleverify',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Basic Financial Details',
              href: '/guidelines/finance-api#get-basic-financial-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Available Balance',
              href: '/guidelines/finance-api#available-balance',
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
              href: '/guidelines/finance-api#get-invoice-for-organization',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice Payment Details',
              href: '/guidelines/finance-api#get-invoice-payment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Invoices for Customer or Organization',
              href: '/guidelines/finance-api#get-list-of-invoices-for-customer-or-organization',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Invoice Settings',
              href: '/guidelines/finance-api#update-invoice-settings',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Invoice Tax Data',
              href: '/guidelines/finance-api#delete-invoice-tax-data',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve Invoice',
              href: '/guidelines/finance-api#approve-invoice',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cancel Invoice',
              href: '/guidelines/finance-api#cancel-invoice',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Mark Invoice as Paid',
              href: '/guidelines/finance-api#mark-invoice-as-paid',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Email Invoice',
              href: '/guidelines/finance-api#email-invoice',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Invoice',
              href: '/guidelines/finance-api#download-invoice',
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
              href: '/guidelines/finance-api#credit-summary',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Offered Credits',
              href: '/guidelines/finance-api#offered-credits',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Credit List',
              href: '/guidelines/finance-api#customer-credit-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Credit to Customer',
              href: '/guidelines/finance-api#add-credit-to-customer',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Credit Offered to Customer',
              href: '/guidelines/finance-api#update-credit-offered-to-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Revoke Credit Offered to Customer',
              href: '/guidelines/finance-api#revoke-credit-offered-to-customer',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Claim Offered Credits',
              href: '/guidelines/finance-api#claim-offered-credits',
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
              href: '/guidelines/finance-api#get-list-of-payment-transactions-for-organization',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Customer Payments',
              href: '/guidelines/finance-api#get-list-of-customer-payments',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Payment for Customer',
              href: '/guidelines/finance-api#add-payment-for-customer',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit Customer Payment',
              href: '/guidelines/finance-api#edit-customer-payment',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve Payment',
              href: '/guidelines/finance-api#approve-payment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cancel Payment',
              href: '/guidelines/finance-api#cancel-payment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reject Payment',
              href: '/guidelines/finance-api#reject-payment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Payment from Organization App',
              href: '/guidelines/finance-api#add-payment-from-organization-app',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Payment with PayPal',
              href: '/guidelines/finance-api#payment-with-paypal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Initiate Refund',
              href: '/guidelines/finance-api#initiate-refund',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve Refund',
              href: '/guidelines/finance-api#approve-refund',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Email Payment Receipt',
              href: '/guidelines/finance-api#email-payment-receipt',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Payment Receipt',
              href: '/guidelines/finance-api#download-payment-receipt',
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
              href: '/guidelines/finance-api#static-details-lists',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Payment Status',
              href: '/guidelines/finance-api#payment-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice Payment Mode Types',
              href: '/guidelines/finance-api#invoice-payment-mode-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice Status',
              href: '/guidelines/finance-api#invoice-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice Payment Term',
              href: '/guidelines/finance-api#invoice-payment-term',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'PG Payment Type',
              href: '/guidelines/finance-api#pg-payment-type',
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
        id: 'guidelines/insights-api'
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
              href: '/guidelines/insights-api#get-insights-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign Bidding Insights',
              href: '/guidelines/insights-api#get-campaign-bidding-insights',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Insights Count by Type',
              href: '/guidelines/insights-api#get-insights-count-by-type',
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
              href: '/guidelines/insights-api#delete-insights-record',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Regenerate Insights Report',
              href: '/guidelines/insights-api#regenerate-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send Insights Email',
              href: '/guidelines/insights-api#send-insights-email',
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
              href: '/guidelines/insights-api#get-a-list-of-eligible-audiences',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Audience Details',
              href: '/guidelines/insights-api#get-matched-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched Audience File URL',
              href: '/guidelines/insights-api#get-matched-audience-file-url',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Audience Insights',
              href: '/guidelines/insights-api#create-audience-insights',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Insights Report',
              href: '/guidelines/insights-api#download-insights-report',
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
              href: '/guidelines/insights-api#voter-level-data-reports',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of VLD Reports',
              href: '/guidelines/insights-api#get-list-of-vld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns Eligible for VLD Reports',
              href: '/guidelines/insights-api#get-list-of-campaigns-eligible-for-vld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate VLD Report',
              href: '/guidelines/insights-api#generate-vld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cost Assessment for VLD Report',
              href: '/guidelines/insights-api#get-cost-assessment-for-vld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download VLD Insight Report',
              href: '/guidelines/insights-api#download-vld-insight-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete VLD Report',
              href: '/guidelines/insights-api#delete-vld-report',
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
              href: '/guidelines/insights-api/#pld-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of PLD Reports',
              href: '/guidelines/insights-api#get-list-of-pld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns Eligible for PLD Reports',
              href: '/guidelines/insights-api#get-list-of-campaigns-eligible-for-pld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate PLD Report',
              href: '/guidelines/insights-api#generate-pld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'PLD Reports Columns',
              href: '/guidelines/insights-api#get-pld-reports-columns',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update PLD Reports Columns',
              href: '/guidelines/insights-api#update-pld-reports-columns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download PLD Insight Report',
              href: '/guidelines/insights-api#download-pld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete PLD Report',
              href: '/guidelines/insights-api#delete-pld-report',
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
              href: '/guidelines/insights-api#sls-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of SLS Reports',
              href: '/guidelines/insights-api#get-list-of-sls-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate SLS Report',
              href: '/guidelines/insights-api#generate-sls-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'SLS Reports Computation',
              href: '/guidelines/insights-api#sls-reports-computation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate SLS Report Name',
              href: '/guidelines/insights-api#validate-sls-report-name',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaigns Eligible for SLS Reports',
              href: '/guidelines/insights-api#get-list-of-campaigns-eligible-for-sls-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download SLS Insight Report',
              href: '/guidelines/insights-api#download-sls-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete SLS Report',
              href: '/guidelines/insights-api#delete-sls-report',
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
              href: '/guidelines/insights-api#get-more-insights-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Insights Status',
              href: '/guidelines/insights-api#get-list-of-insights-status',
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
        id: 'guidelines/inventory-api'
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
              href: '/guidelines/inventory-api#get-inventory-details',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Inventories',
              href: '/guidelines/inventory-api#get-list-of-inventories',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Distribution',
              href: '/guidelines/inventory-api#get-inventory-distribution',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventories Count',
              href: '/guidelines/inventory-api#get-inventories-count',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Group Types',
              href: '/guidelines/inventory-api#get-inventory-group-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Blocked Inventories',
              href: '/guidelines/inventory-api#get-list-of-blocked-inventories',
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
              href: '/guidelines/inventory-api#campaign-inventory-targeting',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Block Inventories',
              href: '/guidelines/inventory-api#block-inventories',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download CSV Inventory List',
              href: '/guidelines/inventory-api#download-csv-inventory-list',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Based on CSV File',
              href: '/guidelines/inventory-api#get-inventory-based-on-csv-file',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Distribution of Inventory Based on CSV File',
              href: '/guidelines/inventory-api#get-distribution-of-inventory-based-on-csv-file',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Count Based on CSV File',
              href: '/guidelines/inventory-api#get-inventory-count-based-on-csv-file',
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
              href: '/guidelines/inventory-api#inventory-groups',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Inventory Groups Statistics',
              href: '/guidelines/inventory-api#get-list-of-inventory-groups-statistics',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Campaigns Attached to Group',
              href: '/guidelines/inventory-api#get-list-of-campaigns-attached-to-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of PMP Deals In an Inventory Group',
              href: '/guidelines/inventory-api#get-list-of-pmp-deals-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'CSV List of PMP Deals In an Inventory Group',
              href: '/guidelines/inventory-api#get-csv-list-of-pmp-deals-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Open Exchange Inventories In an Inventory Group',
              href: '/guidelines/inventory-api#get-list-of-open-exchange-inventories-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Distributions of Open Exchange Inventories In an Inventory Group',
              href: '/guidelines/inventory-api#get-distributions-of-open-exchange-inventories-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Count of Open Exchange Inventories In an Inventory Group',
              href: '/guidelines/inventory-api#get-count-of-open-exchange-inventories-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Contextual Inventories For an Inventory Group',
              href: '/guidelines/inventory-api#get-list-of-contextual-inventories-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Count of Contextual Inventories For an Inventory Group',
              href: '/guidelines/inventory-api#get-count-of-contextual-inventories-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'CSV File of Contextual Inventories For an Inventory Group',
              href: '/guidelines/inventory-api#get-csv-file-of-contextual-inventories-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Contextual Inventory',
              href: '/guidelines/inventory-api#contextual-inventory',
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
              href: '/guidelines/inventory-api#inventory-group-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add or Remove Mappings to an Inventory Group',
              href: '/guidelines/inventory-api#add-or-remove-mappings-to-an-inventory-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add or Remove Customers From a Shared Inventory Group',
              href: '/guidelines/inventory-api#add-or-remove-customers-from-a-shared-inventory-group',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit Inventory Group',
              href: '/guidelines/inventory-api#edit-inventory-group',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Inventory Group',
              href: '/guidelines/inventory-api#delete-inventory-group',
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
              href: '/guidelines/inventory-api#list-of-deals',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'List of Deal Types',
              href: '/guidelines/inventory-api#get-list-of-deal-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'List of Deal statuses',
              href: '/guidelines/inventory-api#get-list-of-deal-statuses',
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
              href: '/guidelines/inventory-api#get-pmp-deals-list',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'PMP Deal Details by IDs',
              href: '/guidelines/inventory-api#get-pmp-deal-details-by-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'List of Customers Associated with Campaigns for a PMP Deal',
              href: '/guidelines/inventory-api#get-list-of-customers-associated-with-campaigns-for-a-pmp-deal',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Count of PMP Deals for All statuses',
              href: '/guidelines/inventory-api#get-count-of-pmp-deals-for-all-statuses',
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
              href: '/guidelines/inventory-api#pmp-management',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create PMP Deal',
              href: '/guidelines/inventory-api#create-pmp-deal',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update PMP Deal',
              href: '/guidelines/inventory-api#update-pmp-deal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete PMP Deal',
              href: '/guidelines/inventory-api#delete-pmp-deal',
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
              href: '/guidelines/inventory-api#get-pg-deals-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'PG Deals Details by ID',
              href: '/guidelines/inventory-api#get-pg-deals-details-by-id',
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
              href: '/guidelines/inventory-api#pg-management',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create PG Deal',
              href: '/guidelines/inventory-api#create-pg-deal',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update PG Deal Details',
              href: '/guidelines/inventory-api#update-pg-deal-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete PG Deal',
              href: '/guidelines/inventory-api#delete-pg-deal',
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
        id: 'guidelines/master-api'
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
              href: '/guidelines/master-api#filtering-and-pagination',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Zip Codes and State IDs',
              href: '/guidelines/master-api#get-zip-codes-and-state-ids',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'State Segment',
              href: '/guidelines/master-api#get-state-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Senate District Segment',
              href: '/guidelines/master-api#get-senate-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'House District Segment',
              href: '/guidelines/master-api#get-house-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Gender Segment',
              href: '/guidelines/master-api#get-gender-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Age Segment',
              href: '/guidelines/master-api#get-age-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Language Segment',
              href: '/guidelines/master-api#get-language-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Interest Segment',
              href: '/guidelines/master-api#get-interest-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Income Range Segment',
              href: '/guidelines/master-api#get-income-range-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Ethnicity Segment',
              href: '/guidelines/master-api#get-ethnicity-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Ethnicity Group Segment',
              href: '/guidelines/master-api#get-ethnicity-group-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'DMA Code Segment',
              href: '/guidelines/master-api#get-dma-code-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'County Segment',
              href: '/guidelines/master-api#get-county-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Country Segment',
              href: '/guidelines/master-api#get-country-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'  
            },
            {
              type: 'link',
              label: 'Congressional District Segment',
              href: '/guidelines/master-api#get-congressional-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'City Segment',
              href: '/guidelines/master-api#get-city-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Location Types',
              href: '/guidelines/master-api#get-location-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Location Details by Location Type',
              href: '/guidelines/master-api#get-location-details-by-location-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Timezones',
              href: '/guidelines/master-api#get-timezones',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Carriers and States by Country ID',
              href: '/guidelines/master-api#get-carriers-and-states-by-country-id',
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
              href: '/guidelines/master-api#get-creative-data',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'RTB Creative Types',
              href: '/guidelines/master-api#get-rtb-creative-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Creative Sizes',
              href: '/guidelines/master-api#get-creative-sizes',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Video Skip Parameters',
              href: '/guidelines/master-api#get-video-skip-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Video Roll Position Parameters',
              href: '/guidelines/master-api#get-video-roll-position-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Video Player Size Parameters',
              href: '/guidelines/master-api#get-video-player-size-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Video Playback Method Parameters',
              href: '/guidelines/master-api#get-video-playback-method-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Video Placement Type Parameters',
              href: '/guidelines/master-api#get-video-placement-type-parameters',
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
              href: '/guidelines/master-api#get-network-types-for-targeting',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Device OS for Targeting',
              href: '/guidelines/master-api#get-device-os-for-targeting',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Manufacturers for Targeting',
              href: '/guidelines/master-api#get-manufacturers-for-targeting',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Channels for Inventory',
              href: '/guidelines/master-api#get-channels-for-inventory',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Verticals',
              href: '/guidelines/master-api#get-verticals',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Traffic Types',
              href: '/guidelines/master-api#get-traffic-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory Types',
              href: '/guidelines/master-api#get-inventory-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Exchanges',
              href: '/guidelines/master-api#get-exchanges',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Deal Curation Types',
              href: '/guidelines/master-api#get-deal-curation-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Publisher Ad Categories',
              href: '/guidelines/master-api#get-publisher-ad-categories',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Device Type',
              href: '/guidelines/master-api#get-device-type',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory',
              href: '/guidelines/master-api#get-inventory',
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
        id: 'guidelines/planner-api'
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
              href: '/guidelines/planner-api#get-proposal-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Proposals',
              href: '/guidelines/planner-api#get-list-of-proposals',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reach and Impressions Summary',
              href: '/guidelines/planner-api#proposal-reach-and-impressions-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Device Type Summary',
              href: '/guidelines/planner-api#proposal-device-type-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Channel Type Summary',
              href: '/guidelines/planner-api#proposal-channel-type-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Bid Landscape Summary',
              href: '/guidelines/planner-api#proposal-bid-landscape-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Proposal',
              href: '/guidelines/planner-api#download-proposal',
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
              href: '/guidelines/planner-api#create-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Draft Proposal',
              href: '/guidelines/planner-api#create-draft-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Proposal',
              href: '/guidelines/planner-api#update-proposal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Draft Proposal',
              href: '/guidelines/planner-api#update-draft-proposal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate Campaigns',
              href: '/guidelines/planner-api#generate-campaigns-for-ready-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Restore Proposal',
              href: '/guidelines/planner-api#restore-proposal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate Proposal',
              href: '/guidelines/planner-api#duplicate-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Proposal',
              href: '/guidelines/planner-api#delete-proposal',
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
              href: '/guidelines/planner-api#proposal-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Parameters List',
              href: '/guidelines/planner-api#proposal-summary-parameters-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Access Details',
              href: '/guidelines/planner-api#get-user-access-details',
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
        id: 'guidelines/reports-api'
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
              href: '/guidelines/reports-api#get-reports-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Report by ID',
              href: '/guidelines/reports-api#get-report-by-id',
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
              href: '/guidelines/reports-api#reports-management',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Report',
              href: '/guidelines/reports-api#create-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Execute a Report',
              href: '/guidelines/reports-api#execute-a-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete a Report',
              href: '/guidelines/reports-api#delete-a-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit a Report',
              href: '/guidelines/reports-api#edit-a-report',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate a Report',
              href: '/guidelines/reports-api#duplicate-a-report',
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
              href: '/guidelines/reports-api#scheduling-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update a Report Schedule',
              href: '/guidelines/reports-api#update-a-report-schedule',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete a Report Schedule',
              href: '/guidelines/reports-api#delete-report-schedule',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Unsubscribe an Email from All Scheduled Reports',
              href: '/guidelines/reports-api#unsubscribe-an-email-from-all-scheduled-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Unsubscribe an Email from a Report Schedule',
              href: '/guidelines/reports-api#unsubscribe-an-email-from-a-report-schedule',
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
              href: '/guidelines/reports-api#get-more-report-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Conversion\'s Custom Fields',
              href: '/guidelines/reports-api#get-a-list-of-conversions-custom-fields',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Report Request Types',
              href: '/guidelines/reports-api#get-report-request-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Report File Types',
              href: '/guidelines/reports-api#get-report-file-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Report Delivery Frequency Types',
              href: '/guidelines/reports-api#get-report-delivery-frequency-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Dimensions and Metrics Details',
              href: '/guidelines/reports-api#get-dimensions-and-metrics-details',
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
        id: 'guidelines/user-api'
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
                href: '/guidelines/user-api#get-list-of-users',
                customProps: { method: 'GET' },
                className: "sidebarItem"
              },
              {
                type: 'link',
                label: 'User Profile Details',
                href: '/guidelines/user-api#get-user-profile-details',
                customProps: { method: 'GET' },
                className: "sidebarItem"
              },
              {
                type: 'link',
                label: 'User Config Details',
                href: '/guidelines/user-api#user-config-details',
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
              href: '/guidelines/user-api#send-user-invitation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Sign-Up',
              href: '/guidelines/user-api#user-sign-up',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Login',
              href: '/guidelines/user-api#login',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'OAuth Token',
              href: '/guidelines/user-api#oauth-token',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Logout',
              href: '/guidelines/user-api#user-logout',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change Password',
              href: '/guidelines/user-api#change-password',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reset User Password',
              href: '/guidelines/user-api#reset-user-password',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reset Password Email',
              href: '/guidelines/user-api#reset-password-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update User Profile',
              href: '/guidelines/user-api#update-user-profile',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update User Status',
              href: '/guidelines/user-api#update-user-status',
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
              href: '/guidelines/user-api#allowed-applications-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User App Access List',
              href: '/guidelines/user-api#user-app-access-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add App Access for User',
              href: '/guidelines/user-api#add-app-access-for-user',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Revoke App Access for User',
              href: '/guidelines/user-api#revoke-app-access-for-user',
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
              href: '/guidelines/user-api/#validate-user-invite',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Password Reset Hash',
              href: '/guidelines/user-api/#validate-password-reset-hash',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Email',
              href: '/guidelines/user-api/#validate-user-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Workspace Domain',
              href: '/guidelines/user-api/#validate-workspace-domain',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Email for Sign-Up',
              href: '/guidelines/user-api/#validate-user-email-for-signup',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User Password',
              href: '/guidelines/user-api/#validate-user-password',
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
        id: 'guidelines/workspace-api'
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
              href: '/guidelines/workspace-api#organization-details',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Allowed Organizations',
              href: '/guidelines/workspace-api#get-list-of-allowed-organizations',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Organization Details',
              href: '/guidelines/workspace-api#get-organization-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Check for Available Domain',
              href: '/guidelines/workspace-api#check-for-available-domain',
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
              href: '/guidelines/workspace-api#organization-management',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Organization Email',
              href: '/guidelines/workspace-api#update-organization-email',
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
              href: '/guidelines/workspace-api#workspace-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Workspace Domain',
              href: '/guidelines/workspace-api#update-workspace-domain',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate Workspace Domain',
              href: '/guidelines/workspace-api#validate-workspace-domain',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Workspaces',
              href: '/guidelines/workspace-api#get-list-of-workspaces',
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
              href: '/guidelines/workspace-api#customer-details',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Operations Resource Properties',
              href: '/guidelines/workspace-api#customer-operations-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Details',
              href: '/guidelines/workspace-api#get-customer-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Basic Customer Details',
              href: '/guidelines/workspace-api#get-basic-customer-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Multi-level Customers List',
              href: '/guidelines/workspace-api#get-multi-level-customers-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Immediate Customers List',
              href: '/guidelines/workspace-api#get-immediate-customers-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Operations Details',
              href: '/guidelines/workspace-api#get-customer-operations-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Operations Label List',
              href: '/guidelines/workspace-api#get-customer-operations-label-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Count of Customers by Status',
              href: '/guidelines/workspace-api#get-count-of-customers-by-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Users for Selected Customer',
              href: '/guidelines/workspace-api#get-list-of-users-for-selected-customer',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of User Assigned Customers',
              href: '/guidelines/workspace-api#get-list-of-user-assigned-customers',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User\'s Remaining Customers',
              href: '/guidelines/workspace-api#get-users-remaining-customers',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Customer\'s Allowed Applications',
              href: '/guidelines/workspace-api#get-list-of-customers-allowed-applications',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Remaining Apps for Customer',
              href: '/guidelines/workspace-api#get-list-of-remaining-apps-for-customer',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Advertisers for Customer',
              href: '/guidelines/workspace-api#get-list-of-advertisers-for-customer',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Config Details',
              href: '/guidelines/workspace-api#get-customer-config-details',
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
              href: '/guidelines/workspace-api#customer-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Resend Customer Invite',
              href: '/guidelines/workspace-api#resend-customer-invite',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cancel Customer Invite',
              href: '/guidelines/workspace-api#cancel-customer-invite',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Signup',
              href: '/guidelines/workspace-api#customer-signup',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Signup Form',
              href: '/guidelines/workspace-api#get-customer-signup-form',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign Customer to User',
              href: '/guidelines/workspace-api#assign-customer-to-user',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Unassign Customer from User',
              href: '/guidelines/workspace-api#unassign-customer-from-user',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve Customer',
              href: '/guidelines/workspace-api#approve-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reject Customer',
              href: '/guidelines/workspace-api#reject-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Customer App Access',
              href: '/guidelines/workspace-api#add-customer-app-access',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Revoke Customer App Access',
              href: '/guidelines/workspace-api#revoke-customer-app-access',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Put Customer On-Hold',
              href: '/guidelines/workspace-api#put-customer-on-hold',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Re-Activate Customer',
              href: '/guidelines/workspace-api#re-activate-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Label for Customer Operation',
              href: '/guidelines/workspace-api#add-label-for-customer-operation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Enable Bid Shading for Customer',
              href: '/guidelines/workspace-api#enable-bid-shading-for-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer Operations Details',
              href: '/guidelines/workspace-api#update-customer-operations-details',
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
              href: '/guidelines/workspace-api#advertiser-management',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'List of Advertiser Profile and Details',
              href: '/guidelines/workspace-api#get-list-of-advertiser-profile-and-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Advertiser Profile',
              href: '/guidelines/workspace-api#add-advertiser-profile',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit Advertiser Profile',
              href: '/guidelines/workspace-api#edit-advertiser-profile',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Advertiser Profile',
              href: '/guidelines/workspace-api#delete-advertiser-profile',
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
              href: '/guidelines/workspace-api#application-ids',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Organization Workspace Status',
              href: '/guidelines/workspace-api#organization-workspace-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Type',
              href: '/guidelines/workspace-api#customer-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Payment Type',
              href: '/guidelines/workspace-api#customer-payment-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer Account Type',
              href: '/guidelines/workspace-api#customer-account-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer List Sortable Fields',
              href: '/guidelines/workspace-api#customer-list-sortable-fields',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Organization Expertise',
              href: '/guidelines/workspace-api#organization-expertise',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Company Size',
              href: '/guidelines/workspace-api#company-size',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Industries',
              href: '/guidelines/workspace-api#industries',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Media Budget',
              href: '/guidelines/workspace-api#media-budget',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Verticals',
              href: '/guidelines/workspace-api#verticals',
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
      id: `guidelines/openapi-spec`,
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
        id: 'migration-guides/index'
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
              id: `migration-guides/beeswax/overview`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Audience',
              id: `migration-guides/beeswax/audience-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Campaigns',
              id: `migration-guides/beeswax/campaign-migration-guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Bid Model',
              id: `migration-guides/beeswax/bid-model-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Conversions',
              id: `migration-guides/beeswax/conversions-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Inventories',
              id: `migration-guides/beeswax/inventories-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Reports',
              id: `migration-guides/beeswax/reports-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Workspace',
              id: `migration-guides/beeswax/workspace-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Finances',
              id: `migration-guides/beeswax/finance-migration`,
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
              id: `migration-guides/dv360/overview`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Audience',
              id: `migration-guides/dv360/audience-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Campaigns',
              id: `migration-guides/dv360/campaign-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Bid Model',
              id: `migration-guides/dv360/bid-model-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Conversions',
              id: `migration-guides/dv360/conversions-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Inventories',
              id: `migration-guides/dv360/inventories-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Reports',
              id: `migration-guides/dv360/reports-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Workspace',
              id: `migration-guides/dv360/workspace-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Finances',
              id: `migration-guides/dv360/finance-migration`,
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
              id: `migration-guides/the-trade-desk/overview`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Audiences',
              id: `migration-guides/the-trade-desk/audience-migration-guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Campaigns',
              id: `migration-guides/the-trade-desk/campaign-migration-guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Bid Model',
              id: `migration-guides/the-trade-desk/bid-model-migration-guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Conversions',
              id: `migration-guides/the-trade-desk/conversions-migration-guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Inventories',
              id: `migration-guides/the-trade-desk/inventories-migration-guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Reports',
              id: `migration-guides/the-trade-desk/reports-migration-guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Workspace',
              id: `migration-guides/the-trade-desk/workspace-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Finances',
              id: `migration-guides/the-trade-desk/finance-migration`,
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
              id: `migration-guides/xandr/overview`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Audience',
              id: `migration-guides/xandr/audience-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Campaigns',
              id: `migration-guides/xandr/campaign-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Bid Model',
              id: `migration-guides/xandr/bid-model-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Conversions',
              id: `migration-guides/xandr/conversions-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Inventories',
              id: `migration-guides/xandr/inventories-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Reports',
              id: `migration-guides/xandr/reports-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Workspace',
              id: `migration-guides/xandr/workspace-migration`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Finances',
              id: `migration-guides/xandr/finance-migration`,
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
      id: 'political-vertical/index',
      label: 'Political',
      className: 'sidebarCategory'
    },
    {
      type: 'category',
      label: 'Audience API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'political-vertical/audience-segments'
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
              href: '/political-vertical/audience-segments#audience-details-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Matched Audience Details',
              href: '/political-vertical/audience-segments#matched-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Geo-Farmed Audience Details',
              href: '/political-vertical/audience-segments#geo-farmed-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Contextual Audience Details',
              href: '/political-vertical/audience-segments#contextual-audience-details',
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
              href: '/political-vertical/audience-segments#audience-segment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Search Audience Segment',
              href: '/political-vertical/audience-segments#search-audience-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Segment Partner Provider List',
              href: '/political-vertical/audience-segments#segment-partner-provider-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Segment List by Provider/Partner IDs',
              href: '/political-vertical/audience-segments#segment-list-by-providerpartner-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Segment List by Audience IDs',
              href: '/political-vertical/audience-segments#segment-list-by-audience-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Audience Segment Insights',
              href: '/political-vertical/audience-segments#audience-segment-insights',
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
              href: '/political-vertical/audience-segments#create-matched-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update Matched Audience',
              href: '/political-vertical/audience-segments#update-matched-audience',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Audience Segment',
              href: '/political-vertical/audience-segments#create-audience-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update Audience Segment',
              href: '/political-vertical/audience-segments#update-audience-segment',
              customProps: { method: 'PUT' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Geo-Farmed Audience',
              href: '/political-vertical/audience-segments#create-geo-farmed-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Contextual Audience',
              href: '/political-vertical/audience-segments#create-contextual-audience',
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
              href: '/political-vertical/audience-segments#data-partners-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Provider Details List',
              href: '/political-vertical/audience-segments#provider-details-list',
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
        id: 'political-vertical/finance'
      },
      items: [
            {
              type: 'link',
              label: 'Customer VLD Finance Details',
              href: '/political-vertical/finance#get-customer-vld-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update Customer VLD Details',
              href: '/political-vertical/finance#update-customer-vld-details',
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
        id: 'political-vertical/insights-vld'
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
          href: '/guidelines/master-api',
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
              href: '/guidelines/master-api#request-schema',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Zip Codes and State IDs',
              href: '/guidelines/master-api#get-zip-codes-and-state-ids',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'State Segment',
              href: '/guidelines/master-api#get-state-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Senate District Segment',
              href: '/guidelines/master-api#get-senate-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'House District Segment',
              href: '/guidelines/master-api#get-house-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Gender Segment',
              href: '/guidelines/master-api#get-gender-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Age Segment',
              href: '/guidelines/master-api#get-age-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Language Segment',
              href: '/guidelines/master-api#get-language-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Interest Segment',
              href: '/guidelines/master-api#get-interest-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Income Range Segment',
              href: '/guidelines/master-api#get-income-range-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Ethnicity Segment',
              href: '/guidelines/master-api#get-ethnicity-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Ethnicity Group Segment',
              href: '/guidelines/master-api#get-ethnicity-group-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'DMA Code Segment',
              href: '/guidelines/master-api#get-dma-code-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'County Segment',
              href: '/guidelines/master-api#get-county-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Country Segment',
              href: '/guidelines/master-api#get-country-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Congressional District Segment',
              href: '/guidelines/master-api#get-congressional-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'City Segment',
              href: '/guidelines/master-api#get-city-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Location Types',
              href: '/guidelines/master-api#get-location-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Location Details by Location Type',
              href: '/guidelines/master-api#get-location-details-by-location-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Timezones',
              href: '/guidelines/master-api#get-timezones',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Carriers and States by Country ID',
              href: '/guidelines/master-api#get-carriers-and-states-by-country-id',
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
      id: 'healthcare-vertical/index',
      label: 'Healthcare',
      className: 'sidebarCategory'
    },
    {
      type: 'category',
      label: 'Audience API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'healthcare-vertical/audience-healthcare'
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
              href: '/healthcare-vertical/audience-healthcare#matched-audience-details',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Create Matched Audience',
              href: '/healthcare-vertical/audience-healthcare#create-matched-audience',
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
              href: '/healthcare-vertical/audience-healthcare#abm-audience-details',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'ABM Audience Statistics',
              href: '/healthcare-vertical/audience-healthcare#abm-audience-statistics',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare Titles List',
              href: '/healthcare-vertical/audience-healthcare#healthcare-titles-list',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare Specialties List',
              href: '/healthcare-vertical/audience-healthcare#healthcare-specialties-list',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare Systems List',
              href: '/healthcare-vertical/audience-healthcare#healthcare-systems-list',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare Data',
              href: '/healthcare-vertical/audience-healthcare#healthcare-data',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare Statistics',
              href: '/healthcare-vertical/audience-healthcare#healthcare-statistics',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare Account Types',
              href: '/healthcare-vertical/audience-healthcare#healthcare-account-types',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare Account Subtypes',
              href: '/healthcare-vertical/audience-healthcare#healthcare-account-subtypes',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare Account Names',
              href: '/healthcare-vertical/audience-healthcare#healthcare-account-names',
              customProps: { method: 'POST' },
            },
          ]
        },
        {
          type: 'link',
          label: 'Create ABM Audience',
          href: '/healthcare-vertical/audience-healthcare#create-abm-audience',
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
        id: 'healthcare-vertical/finance'
      },
      items: [
            {
              type: 'link',
              label: 'Customer PLD Finance Details',
              href: '/healthcare-vertical/finance#get-customer-pld-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer PLD Details',
              href: '/healthcare-vertical/finance#update-customer-pld-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer SLS Finance Details',
              href: '/healthcare-vertical/finance#get-customer-sls-finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer SLS Details',
              href: '/healthcare-vertical/finance#update-customer-sls-details',
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
        id: 'healthcare-vertical/insights-pld'
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
              href: '/healthcare-vertical/insights-pld#pld-resource-properties'
            },
            {
              type: 'link',
              label: 'List of PLD Reports',
              href: '/healthcare-vertical/insights-pld#get-list-of-pld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'List of Campaigns Eligible for PLD Reports',
              href: '/healthcare-vertical/insights-pld#get-list-of-campaigns-eligible-for-pld-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Generate PLD Report',
              href: '/healthcare-vertical/insights-pld#generate-pld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'PLD Reports Columns',
              href: '/healthcare-vertical/insights-pld#get-pld-reports-columns',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update PLD Reports Columns',
              href: '/healthcare-vertical/insights-pld#update-pld-reports-columns',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Download PLD Insight Report',
              href: '/healthcare-vertical/insights-pld#download-pld-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete PLD Report',
              href: '/healthcare-vertical/insights-pld#delete-pld-report',
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
              href: '/healthcare-vertical/insights-pld#sls-resource-properties',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'List of SLS Reports',
              href: '/healthcare-vertical/insights-pld#get-list-of-sls-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Generate SLS Report',
              href: '/healthcare-vertical/insights-pld#generate-sls-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'SLS Reports Computation',
              href: '/healthcare-vertical/insights-pld#sls-reports-computation',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Validate SLS Report Name',
              href: '/healthcare-vertical/insights-pld#validate-sls-report-name',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Campaigns Eligible for SLS Reports',
              href: '/healthcare-vertical/insights-pld#get-list-of-campaigns-eligible-for-sls-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Download SLS Insight Report',
              href: '/healthcare-vertical/insights-pld#download-sls-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete SLS Report',
              href: '/healthcare-vertical/insights-pld#delete-sls-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem',
            },
          ]
        },
      ]
    }
  ],
  mcpSidebar: [
    {
      type: 'doc',
      id: 'mcp/index',
      label: 'IQM MCP',
      className: 'sidebarCategory'
    },
    {
      type: "category",
      label: 'Getting Started',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'mcp/mcp-getting-started/index'
      },
      items: [
        {
          type: `doc`,
          label: 'Introduction',
          id: `mcp/mcp-getting-started/introduction`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          label: 'Setup Guide',
          id: `mcp/mcp-getting-started/setup-guide`,
          className: 'sidebarItem'
        },
      ],
    },
    {
      type: "category",
      label: 'MCP Actions',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'mcp/mcp-actions/index'
      },
      items: [
        {
          type: `doc`,
          label: 'Dashboard',
          id: `mcp/mcp-actions/dashboard`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          label: 'Bid Model',
          id: `mcp/mcp-actions/bid-model`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          label: 'Reports',
          id: `mcp/mcp-actions/reports`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          label: 'Master API',
          id: `mcp/mcp-actions/master`,
          className: 'sidebarItem'
        },
      ],
    }
  ],
}

export default sidebars;
