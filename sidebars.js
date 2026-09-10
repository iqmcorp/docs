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
      label: 'Getting started',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'getting-started/index'
      },
      items: [
        {
          type: 'doc',
          id: 'getting-started/platform-overview',
          label: 'IQM platform overview',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'getting-started/rest-api-reference',
          label: 'REST API overview',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'getting-started/before-you-begin',
          label: 'Before you begin',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'getting-started/typescript-prerequisites',
          label: 'TypeScript prerequisites',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'getting-started/api-pagination-guide',
          label: 'API filtering and pagination',
          className: 'sidebarItem',
        },
      ],
    },
    {
      type: "category",
      label: 'Quickstart guides',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'quickstart-guides/index'
      },
      items: [
        {
          type: 'category',
          label: 'Sign up and authenticate',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/authentication-quickstart-guide'
          },
          items: [
            {
              type: `link`,
              label: 'Sign up',
              href: `/quickstart-guides/authentication-quickstart-guide#sign-up`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Log in',
              href: `/quickstart-guides/authentication-quickstart-guide#log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Refresh token',
              href: `/quickstart-guides/authentication-quickstart-guide#refresh-token`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Upload a creative',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/upload-a-creative-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM creatives',
              href: `/quickstart-guides/upload-a-creative-quickstart#about-iqm-creatives`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before you begin',
              href: `/quickstart-guides/upload-a-creative-quickstart#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Upload a creative using the IQM API',
              href: `/quickstart-guides/upload-a-creative-quickstart#upload-a-creative-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/quickstart-guides/upload-a-creative-quickstart#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Request creative types',
              href: `/quickstart-guides/upload-a-creative-quickstart#step-2-request-creative-types`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Upload a creative',
              href: `/quickstart-guides/upload-a-creative-quickstart#step-3-upload-a-creative`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Check creative status',
              href: `/quickstart-guides/upload-a-creative-quickstart#step-4-check-creative-status`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create a campaign',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/create-a-campaign-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM campaigns',
              href: `/quickstart-guides/create-a-campaign-quickstart#about-iqm-campaigns`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before you begin',
              href: `/quickstart-guides/create-a-campaign-quickstart#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a campaign using the IQM API',
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
              label: 'Step 2: Create an insertion order',
              href: `/quickstart-guides/create-a-campaign-quickstart#step-2-create-an-insertion-order`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Create a campaign',
              href: `/quickstart-guides/create-a-campaign-quickstart#step-3-create-a-campaign`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Check campaign status',
              href: `/quickstart-guides/create-a-campaign-quickstart#step-4-check-campaign-status`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create a Contextual audience',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/contextual-audience-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Contextual audiences',
              href: `/quickstart-guides/contextual-audience-quickstart#about-iqm-contextual-audiences`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/quickstart-guides/contextual-audience-quickstart#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Create a Contextual audience',
              href: `/quickstart-guides/contextual-audience-quickstart#step-2-create-a-contextual-audience`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Check audience status',
              href: `/quickstart-guides/contextual-audience-quickstart#step-3-check-audience-status`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Run a report',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/reporting-api-quickstart-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM reports',
              href: `/quickstart-guides/reporting-api-quickstart-guide#about-iqm-reports`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Run a report using the IQM API',
              href: `/quickstart-guides/reporting-api-quickstart-guide#run-a-report-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/quickstart-guides/reporting-api-quickstart-guide#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Request dimensions and metrics',
              href: `/quickstart-guides/reporting-api-quickstart-guide#step-2-request-dimensions-and-metrics`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Select timezones',
              href: `/quickstart-guides/reporting-api-quickstart-guide#step-3-select-timezones`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Execute a report',
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
          label: 'Schedule a report',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/schedule-report-api-quickstart-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM reports',
              href: `/quickstart-guides/schedule-report-api-quickstart-guide#about-iqm-reports`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Schedule a report',
              href: `/quickstart-guides/schedule-report-api-quickstart-guide#schedule-a-report-1`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/quickstart-guides/schedule-report-api-quickstart-guide#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Schedule a report',
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
              label: 'About IQM Bid Model',
              href: `/tutorials/create-a-bid-model#about-iqm-bid-model`,
              className: 'sidebarItemQS'
            },
                 {
              type: `link`,
              label: 'Before you begin',
              href: `/tutorials/create-a-bid-model#before-you-begin`,
              className: 'sidebarItemQS'
            },
                 {
              type: `link`,
              label: 'Bid Model criteria',
              href: `/tutorials/create-a-bid-model#bid-model-criteria`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Check campaign for eligibility',
              href: `/tutorials/create-a-bid-model#step-1-check-campaign-for-eligibility`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Select dimension',
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
          label: 'Create a conversion',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/conversion-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM conversions',
              href: `/tutorials/create-a-conversion#about-iqm-conversions`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a conversion using the IQM API',
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
              label: 'Step 2: Create a Pixel conversion',
              href: `/tutorials/create-a-conversion#step-2-create-a-pixel-conversion`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Assign a conversion to a campaign',
              href: `/tutorials/create-a-conversion#step-3-assign-a-conversion-to-a-campaign`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create a deal',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'tutorials/deal-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM deals',
              href: `/tutorials/deal-guide#about-iqm-deals`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before you begin',
              href: `/tutorials/deal-guide#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Request exchange list',
              href: `/tutorials/deal-guide#request-exchange-list`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a PG deal',
              href: `/tutorials/deal-guide#create-a-pg-deal`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a PMP deal',
              href: `/tutorials/deal-guide#create-a-pmp-deal`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Assign deals to a campaign',
              href: `/tutorials/deal-guide#assign-deals-to-a-campaign`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Get list of deals associated with campaigns',
              href: `/tutorials/deal-guide#get-list-of-deals-associated-with-campaigns`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create an Insights report',
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
              label: 'Before you begin',
              href: `/tutorials/create-an-insights-report#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Eligibility requirements',
              href: `/tutorials/create-an-insights-report#eligibility-requirements`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Campaign Bidding Insights report',
              href: `/tutorials/create-an-insights-report#campaign-bidding-insights-report`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Audience Insights report',
              href: `/tutorials/create-an-insights-report#audience-insights-report`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'VLD Insights report',
              href: `/tutorials/create-an-insights-report#vld-insights-report`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'PLD Insights report',
              href: `/tutorials/create-an-insights-report#pld-insights-report`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create a PG campaign',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/upload-creative-and-create-a-campaign-api-quickstart-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM PG campaigns',
              href: `/tutorials/create-a-pg-campaign#about-iqm-pg-campaigns`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before you begin',
              href: `/tutorials/create-a-pg-campaign#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Create a PG campaign using the IQM API',
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
              label: 'Step 2: Create a PG campaign',
              href: `/tutorials/create-a-pg-campaign#step-2-create-a-pg-campaign`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Optimize your inventory',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/inventory-quickstart'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM inventory',
              href: `/tutorials/optimize-your-inventory#about-iqm-inventory`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Optimize your inventory using the IQM API',
              href: `/tutorials/optimize-your-inventory#optimize-your-inventory-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/tutorials/optimize-your-inventory#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Search inventory list',
              href: `/tutorials/optimize-your-inventory#step-2-search-inventory-list`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Create an inventory group',
              href: `/tutorials/optimize-your-inventory#step-3-create-an-inventory-group`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Update an inventory group',
              href: `/tutorials/optimize-your-inventory#step-4-update-an-inventory-group`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 5: Target campaigns with an inventory group',
              href: `/tutorials/optimize-your-inventory#step-5-target-campaigns-with-an-inventory-group`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 6: Get list of campaigns by group',
              href: `/tutorials/optimize-your-inventory#step-6-get-list-of-campaigns-by-group`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Sign up a new Customer',
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
              label: 'Before you begin',
              href: `/tutorials/customer-guide#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Sign up a new Customer using the IQM API',
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
              label: 'Sign up a Customer',
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
              label: 'Assign Customer to user',
              href: `/tutorials/customer-guide#assign-customer-to-user`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Add Customer app access',
              href: `/tutorials/customer-guide#add-customer-app-access`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Add payment for Customer',
              href: `/tutorials/customer-guide#add-payment-for-customer`,
              className: 'sidebarItemQS'
            },
          ]
        },
        {
          type: 'category',
          label: 'Upload a Matched audience',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'quickstart-guides/matched-audience-upload-api-quickstart-guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Matched audience',
              href: `/tutorials/upload-a-matched-audience#about-iqm-matched-audience`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Before you begin',
              href: `/tutorials/upload-a-matched-audience#before-you-begin`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Upload a Matched audience using the IQM API',
              href: `/tutorials/upload-a-matched-audience#upload-a-matched-audience-using-the-iqm-api`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/tutorials/upload-a-matched-audience#step-1-log-in`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 2: Get audience request properties',
              href: `/tutorials/upload-a-matched-audience#step-2-get-audience-request-properties`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 3: Upload a Matched audience',
              href: `/tutorials/upload-a-matched-audience#step-3-upload-a-matched-audience`,
              className: 'sidebarItemQS'
            },
            {
              type: `link`,
              label: 'Step 4: Check audience status',
              href: `/tutorials/upload-a-matched-audience#step-4-check-audience-status`,
              className: 'sidebarItemQS'
            },
          ]
        },
      ]
    },
    {
      type: `doc`,
      label: `API guidelines`,
      id: `guidelines/index`,
      className: `sidebarCategory`,
    },
    {
      type: 'category',
      label: 'Asset API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'guidelines/asset-api'
      },
      items: [
        {
          type: 'category',
          label: 'Assets details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get a list of all assets',
              href: '/guidelines/asset-api#get-a-list-of-all-assets',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get asset details',
              href: '/guidelines/asset-api#get-asset-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Assets management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Add multiple assets',
              href: '/guidelines/asset-api#add-multiple-assets',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update asset details',
              href: '/guidelines/asset-api#update-asset-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete asset',
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
          label: 'Audience details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Audience details list',
              href: '/guidelines/audience-api#audience-details-list',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Basic audience details',
              href: '/guidelines/audience-api#basic-audience-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience count by status',
              href: '/guidelines/audience-api#audience-count-by-status',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience count by type',
              href: '/guidelines/audience-api#audience-count-by-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience count by data partner',
              href: '/guidelines/audience-api#audience-count-by-data-partner',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Audience management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Update audience name',
              href: '/guidelines/audience-api#update-audience-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Regenerate audience',
              href: '/guidelines/audience-api#regenerate-audience',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get audience Insights',
              href: '/guidelines/audience-api#get-audience-insights',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Audience Insights report',
              href: '/guidelines/audience-api#create-audience-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Attach data partner',
              href: '/guidelines/audience-api#attach-data-partner',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete audience',
              href: '/guidelines/audience-api#delete-audience',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Matched audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Matched audience details',
              href: '/guidelines/audience-api#matched-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Matched audience',
              href: '/guidelines/audience-api#create-matched-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Matched audience',
              href: '/guidelines/audience-api#update-matched-audience',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Refresh Matched audience',
              href: '/guidelines/audience-api/#refresh-matched-audience',
              customProps: { method: 'PUT' },
            },
            {
              type: 'link',
              label: 'Data partners list for Matched audience',
              href: '/guidelines/audience-api#data-partners-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Data formats list for Matched audience',
              href: '/guidelines/audience-api#data-formats-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched column list',
              href: '/guidelines/audience-api#matched-column-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Matched column combinations',
              href: '/guidelines/audience-api#matched-column-combinations',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Matched audience file',
              href: '/guidelines/audience-api#download-matched-audience-file',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Segmented audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Segmented audience details',
              href: '/guidelines/audience-api#segmented-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Search Segmented audiences',
              href: '/guidelines/audience-api#search-segmented-audiences',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Segmented audience',
              href: '/guidelines/audience-api#create-segmented-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Segmented audience',
              href: '/guidelines/audience-api#update-segmented-audience',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment partner provider list',
              href: '/guidelines/audience-api#segment-partner-provider-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Segment list by provider/partner IDs',
              href: '/guidelines/audience-api#segment-list-by-providerpartner-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Retargeted audiences`,
          className: 'sidebarItem',
          items: [
          {
              type: 'link',
              label: 'Create Retargeted audience',
              href: '/guidelines/audience-api#create-retargeted-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Retargeted audience',
              href: '/guidelines/audience-api#update-retargeted-audience',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Retargeted audience email notification',
              href: '/guidelines/audience-api#retargeted-audience-email-notification',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Geofarmed audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Geofarmed audience details',
              href: '/guidelines/audience-api#geofarmed-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Geofarmed audience',
              href: '/guidelines/audience-api#create-geofarmed-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Contextual audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Contextual audience details',
              href: '/guidelines/audience-api#contextual-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Contextual audience',
              href: '/guidelines/audience-api#create-contextual-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate URL for Contextual audience',
              href: '/guidelines/audience-api#validate-url-for-contextual-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Lookalike audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get Lookalike audience details',
              href: '/guidelines/audience-api#get-lookalike-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Lookalike audience',
              href: '/guidelines/audience-api#create-lookalike-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Campaign audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Campaign audience details',
              href: '/guidelines/audience-api#campaign-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Campaign audience',
              href: '/guidelines/audience-api#create-campaign-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Campaign audience history',
              href: '/guidelines/audience-api#get-campaign-audience-history',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Pre-bid audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Pre-bid audience details',
              href: '/guidelines/audience-api#pre-bid-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Search Pre-bid audience details',
              href: '/guidelines/audience-api#search-pre-bid-audience-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Pre-bid audience',
              href: '/guidelines/audience-api#create-pre-bid-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Pre-bid audience',
              href: '/guidelines/audience-api#update-pre-bid-audience',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get pre-bid provider child segment details',
              href: '/guidelines/audience-api#get-pre-bid-provider-child-segment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get pre-bid child segment details',
              href: '/guidelines/audience-api#get-pre-bid-child-segment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'DoubleVerify Pre-bid audience segment details',
              href: '/guidelines/audience-api#doubleverify-pre-bid-audience-segment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `More audience details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Reach range list for Segmented audiences',
              href: '/guidelines/audience-api#reach-range-list-for-segmented-audiences',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Price range list for Segmented audiences',
              href: '/guidelines/audience-api#price-range-list-for-segmented-audiences',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience type list',
              href: '/guidelines/audience-api#audience-type-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience subtype list',
              href: '/guidelines/audience-api#audience-subtype-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience status list',
              href: '/guidelines/audience-api#audience-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Frequency type list',
              href: '/guidelines/audience-api#frequency-type-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            }
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
          label: 'Bid Model settings details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get list of Bid Model Bundles',
              href: '/guidelines/bid-model-api#get-list-of-bid-model-bundles',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get modeled entities',
              href: '/guidelines/bid-model-api#get-modeled-entities',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign dimension statistics',
              href: '/guidelines/bid-model-api#get-campaign-dimension-statistics',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get dimension specific spending for a campaign',
              href: '/guidelines/bid-model-api#get-dimension-specific-spending-for-a-campaign',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of modeled entities for a campaign',
              href: '/guidelines/bid-model-api#get-list-of-modeled-entities-for-a-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Include/exclude management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Include/exclude management',
              href: '/guidelines/bid-model-api#includeexclude-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Include/exclude entities from a campaign',
              href: '/guidelines/bid-model-api#includeexclude-entities-from-a-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Bid Model settings management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Bid Model settings criteria',
              href: '/guidelines/bid-model-api#bid-model-settings-criteria',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Manage Bid Model settings',
              href: '/guidelines/bid-model-api#manage-bid-model-settings',
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
              label: 'Manage insertion order Bid Model settings',
              href: '/guidelines/bid-model-api#manage-insertion-order-bid-model-settings',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Manage insertion order Priority',
              href: '/guidelines/bid-model-api#manage-insertion-order-priority',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Bid Model metrics and dimensions`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get metrics report for a given campaign and dimension',
              href: '/guidelines/bid-model-api#get-metrics-report-for-a-given-campaign-and-dimension',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Bid Model dimensions',
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
          label: 'Campaign details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Campaign resource properties',
              href: '/guidelines/campaign-api#campaign-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign details by ID',
              href: '/guidelines/campaign-api#get-campaign-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaigns',
              href: '/guidelines/campaign-api#get-list-of-campaigns',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaigns with basic details',
              href: '/guidelines/campaign-api#get-list-of-campaigns-with-basic-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get basic details of campaigns',
              href: '/guidelines/campaign-api#get-basic-details-of-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign audience targeting details',
              href: '/guidelines/campaign-api#get-campaign-audience-targeting-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaigns with filters',
              href: '/guidelines/campaign-api#get-list-of-campaigns-with-filters',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign budget details',
              href: '/guidelines/campaign-api#get-campaign-budget-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaign groups',
              href: '/guidelines/campaign-api#get-list-of-campaign-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get deals associated with campaigns',
              href: '/guidelines/campaign-api#get-deals-associated-with-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign count by status',
              href: '/guidelines/campaign-api#get-campaign-count-by-status',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign count with campaign type',
              href: '/guidelines/campaign-api#get-campaign-count-with-campaign-type',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign count by creative type',
              href: '/guidelines/campaign-api#get-campaign-count-by-creative-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get creative type and campaigns count',
              href: '/guidelines/campaign-api#get-creative-type-and-campaigns-count',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          {
              type: 'link',
              label: 'Get campaign conversion list',
              href: '/guidelines/campaign-api#get-campaign-conversion-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get basic conversion list',
              href: '/guidelines/campaign-api#get-basic-conversion-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign start date',
              href: '/guidelines/campaign-api#get-campaign-start-date',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaign start dates or end dates',
              href: '/guidelines/campaign-api/#get-list-of-campaign-start-dates-or-end-dates',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign report data',
              href: '/guidelines/campaign-api#get-campaign-report-data',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Campaign management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create new campaign',
              href: '/guidelines/campaign-api#create-new-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update campaign',
              href: '/guidelines/campaign-api#update-campaign',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create new PG campaign',
              href: '/guidelines/campaign-api#create-new-pg-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update PG campaign',
              href: '/guidelines/campaign-api#update-pg-campaign',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change campaign name',
              href: '/guidelines/campaign-api#change-campaign-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change campaign end date',
              href: '/guidelines/campaign-api#change-campaign-end-date',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change campaign budget',
              href: '/guidelines/campaign-api#change-campaign-budget',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update campaign status',
              href: '/guidelines/campaign-api#update-campaign-status',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate campaigns',
              href: '/guidelines/campaign-api#duplicate-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign cost details',
              href: '/guidelines/campaign-api#get-campaign-cost-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get audience reach estimation',
              href: '/guidelines/campaign-api#get-audience-reach-estimation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get bid landscape estimation',
              href: '/guidelines/campaign-api#get-bid-landscape-estimation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Resend email to set margin',
              href: '/guidelines/campaign-api#resend-email-to-set-margin',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Resend email reminder to set invoice template',
              href: '/guidelines/campaign-api#resend-email-reminder-to-set-invoice-template',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Campaign templates`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get list of campaign templates',
              href: '/guidelines/campaign-api#get-list-of-campaign-templates',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign template details',
              href: '/guidelines/campaign-api#get-campaign-template-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create campaign template',
              href: '/guidelines/campaign-api#create-campaign-template',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Campaign targeting`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Update audience targeting in campaigns',
              href: '/guidelines/campaign-api#update-audience-targeting-in-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update creative targeting in campaigns',
              href: '/guidelines/campaign-api#update-creative-targeting-in-campaigns',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Inventory group targeting',
              href: '/guidelines/campaign-api#inventory-group-targeting',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign PMP deals',
              href: '/guidelines/campaign-api#assign-pmp-deals',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign PG deals',
              href: '/guidelines/campaign-api#assign-pg-deals',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Insertion order details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Insertion order resource properties',
              href: '/guidelines/campaign-api#insertion-order-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get insertion order details by ID',
              href: '/guidelines/campaign-api#get-insertion-order-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get insertion order details',
              href: '/guidelines/campaign-api#get-insertion-order-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get advanced insertion order details',
              href: '/guidelines/campaign-api#get-advanced-insertion-order-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download advanced IO details',
              href: '/guidelines/campaign-api#download-advanced-io-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get IO campaign budget and details',
              href: '/guidelines/campaign-api#get-io-campaign-budget-and-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaign details grouped by insertion order ID',
              href: '/guidelines/campaign-api#get-list-of-campaign-details-grouped-by-insertion-order-id',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaign details grouped by IO ID with filters',
              href: '/guidelines/campaign-api#get-list-of-campaign-details-grouped-by-io-id-with-filters',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaigns and report details by insertion order ID',
              href: '/guidelines/campaign-api#get-list-of-campaigns-and-report-details-by-insertion-order-id',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download CSV/XLSX file for IO-based campaign details',
              href: '/guidelines/campaign-api#download-csvxlsx-file-for-io-based-campaign-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of IO start/end dates',
              href: '/guidelines/campaign-api#get-list-of-io-startend-dates',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Insertion order management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create an insertion order',
              href: '/guidelines/campaign-api#create-an-insertion-order',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update insertion order details',
              href: '/guidelines/campaign-api#update-insertion-order-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update end date for multiple IOs',
              href: '/guidelines/campaign-api#update-end-date-for-multiple-ios',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update budget for multiple IOs',
              href: '/guidelines/campaign-api#update-budget-for-multiple-ios',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate an insertion order',
              href: '/guidelines/campaign-api#duplicate-an-insertion-order',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete an insertion order',
              href: '/guidelines/campaign-api#delete-an-insertion-order',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Get more details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get frequency cap types',
              href: '/guidelines/campaign-api#get-frequency-cap-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'AI-Based Optimization Campaign Goals and Objectives',
              href: '/guidelines/campaign-api/#ai-based-optimization-campaign-goals-and-objectives',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get estimator dimension list',
              href: '/guidelines/campaign-api#get-estimator-dimension-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get IO status list',
              href: '/guidelines/campaign-api#get-io-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaign budget types',
              href: '/guidelines/campaign-api#get-list-of-campaign-budget-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of budget distribution methods',
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
          label: 'Get conversion details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Postback conversion resource properties',
              href: '/guidelines/conversion-api#postback-conversion-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Pixel conversion resource properties',
              href: '/guidelines/conversion-api#pixel-conversion-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get conversion details by ID',
              href: '/guidelines/conversion-api#get-conversion-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of conversions',
              href: '/guidelines/conversion-api#get-list-of-conversions',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get conversion count by type',
              href: '/guidelines/conversion-api#get-conversion-count-by-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign details by conversion ID',
              href: '/guidelines/conversion-api#get-campaign-details-by-conversion-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign details by conversion ID in group or basic',
              href: '/guidelines/conversion-api#get-campaign-details-by-conversion-id-in-group-or-basic',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Conversions management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create Pixel conversion',
              href: '/guidelines/conversion-api#create-pixel-conversion',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Pixel conversion',
              href: '/guidelines/conversion-api#update-pixel-conversion',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Postback conversion',
              href: '/guidelines/conversion-api#create-postback-conversion',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Postback conversion',
              href: '/guidelines/conversion-api#update-postback-conversion',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create a Universal Pixel conversion',
              href: '/guidelines/conversion-api#create-a-universal-pixel-conversion',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update a Universal Pixel conversion',
              href: '/guidelines/conversion-api#update-a-universal-pixel-conversion',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete conversion',
              href: '/guidelines/conversion-api#delete-conversion',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign conversion to a campaign',
              href: '/guidelines/conversion-api#assign-conversion-to-a-campaign',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send email for Pixel integration',
              href: '/guidelines/conversion-api#send-email-for-pixel-integration',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send email for Universal Pixel integration',
              href: '/guidelines/conversion-api#send-email-for-universal-pixel-integration',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `More conversion details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get list of partner types for Postback conversions',
              href: '/guidelines/conversion-api#get-list-of-partner-types-for-postback-conversions',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Pixel conversion advanced setting default values',
              href: '/guidelines/conversion-api#get-list-of-pixel-conversion-advanced-setting-default-values',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of conversion types',
              href: '/guidelines/conversion-api#get-list-of-conversion-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of conversion status',
              href: '/guidelines/conversion-api#get-list-of-conversion-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of conversion piggyback types',
              href: '/guidelines/conversion-api#get-list-of-conversion-piggyback-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of conversion property types',
              href: '/guidelines/conversion-api/#get-list-of-conversion-property-types',
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
          label: 'Creative details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Creative details by ID',
              href: '/guidelines/creative-api#creative-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of creatives and details',
              href: '/guidelines/creative-api#get-list-of-creatives-and-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get associated campaigns',
              href: '/guidelines/creative-api#get-associated-campaigns',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of creative groups',
              href: '/guidelines/creative-api#get-list-of-creative-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get creative count by type',
              href: '/guidelines/creative-api#get-creative-count-by-type',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get creative count by status',
              href: '/guidelines/creative-api#get-creative-count-by-status',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Creative management',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Add new creative',
              href: '/guidelines/creative-api#add-new-creative',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update creative details',
              href: '/guidelines/creative-api#update-creative-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update creative status',
              href: '/guidelines/creative-api#update-creative-status',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create new creative group',
              href: '/guidelines/creative-api#create-new-creative-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete creative group',
              href: '/guidelines/creative-api#delete-creative-group',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update creative groups',
              href: '/guidelines/creative-api#update-creative-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update creative group name',
              href: '/guidelines/creative-api#update-creative-group-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate creatives',
              href: '/guidelines/creative-api#duplicate-creatives',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate creative group',
              href: '/guidelines/creative-api#duplicate-creative-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Compress uploaded image creative',
              href: '/guidelines/creative-api#compress-uploaded-image-creative',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update pixel URL',
              href: '/guidelines/creative-api#update-pixel-url',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update click URL',
              href: '/guidelines/creative-api#update-click-url',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get HTML5 creative content',
              href: '/guidelines/creative-api#get-html5-creative-content',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update HTML5 creative content',
              href: '/guidelines/creative-api#update-html5-creative-content',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Submit creatives for validation',
              href: '/guidelines/creative-api#submit-creatives-for-validation',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve creative',
              href: '/guidelines/creative-api#approve-creative',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'More creative details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get creative types list',
              href: '/guidelines/creative-api#get-creative-types-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get creative status list',
              href: '/guidelines/creative-api#get-creative-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get CTA details',
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
          label: 'Dashboard details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Dashboard list',
              href: '/guidelines/dashboard-api#dashboard-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign AI-Based Optimization graph data',
              href: '/guidelines/dashboard-api#get-campaign-ai-based-optimization-graph-data',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get campaign AI-Based Optimization activity',
              href: '/guidelines/dashboard-api#get-campaign-ai-based-optimization-activity',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Dashboard management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create dashboard',
              href: '/guidelines/dashboard-api#create-dashboard',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update dashboard',
              href: '/guidelines/dashboard-api#update-dashboard',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete dashboard',
              href: '/guidelines/dashboard-api#delete-dashboard',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'CampaignPulse',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get CampaignPulse categories',
              href: '/guidelines/dashboard-api#get-campaignpulse-categories',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get CampaignPulse diagnosis results',
              href: '/guidelines/dashboard-api#get-campaignpulse-diagnosis-results',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get CampaignPulse severity counts',
              href: '/guidelines/dashboard-api#get-campaignpulse-severity-counts',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Run CampaignPulse now',
              href: '/guidelines/dashboard-api#run-campaignpulse-now',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Run CampaignPulse severity check now',
              href: '/guidelines/dashboard-api#run-campaignpulse-severity-check-now',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Dashboard reports`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Dashboard reports resource properties',
              href: '/guidelines/dashboard-api#dashboard-reports-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Date range requirement',
              href: '/guidelines/dashboard-api#date-range-requirement',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Workspace report',
              href: '/guidelines/dashboard-api#workspace-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'IO report',
              href: '/guidelines/dashboard-api#io-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Exchange report',
              href: '/guidelines/dashboard-api#exchange-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer report',
              href: '/guidelines/dashboard-api#customer-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign report',
              href: '/guidelines/dashboard-api#campaign-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Metrics timeline',
              href: '/guidelines/dashboard-api#metrics-timeline',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Metrics comparison',
              href: '/guidelines/dashboard-api#metrics-comparison',
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
          label: 'Finance details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Finance details',
              href: '/guidelines/finance-api#finance-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Customer margin details',
              href: '/guidelines/finance-api#get-customer-margin-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer margin details',
              href: '/guidelines/finance-api#update-customer-margin-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Organization margin settings',
              href: '/guidelines/finance-api#get-organization-margin-settings',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Organization margin settings',
              href: '/guidelines/finance-api#update-organization-margin-settings',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Campaign margin details',
              href: '/guidelines/finance-api#campaign-margin-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Customer PG fees details',
              href: '/guidelines/finance-api#get-customer-pg-fees-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit Customer PG fees',
              href: '/guidelines/finance-api#edit-customer-pg-fees',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Customer Insights fees details',
              href: '/guidelines/finance-api/#get-customer-insights-fees-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer Insights fees details',
              href: '/guidelines/finance-api/#update-customer-insights-fees-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Customer DoubleVerify details',
              href: '/guidelines/finance-api#get-customer-doubleverify-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer DoubleVerify',
              href: '/guidelines/finance-api#update-customer-doubleverify',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get basic financial details',
              href: '/guidelines/finance-api#get-basic-financial-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Available balance',
              href: '/guidelines/finance-api#available-balance',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add ad serving cost',
              href: '/guidelines/finance-api#add-ad-serving-cost',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get ad serving cost',
              href: '/guidelines/finance-api#get-ad-serving-cost',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add or update third party cost',
              href: '/guidelines/finance-api#add-or-update-third-party-cost',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get third party cost',
              href: '/guidelines/finance-api#get-third-party-cost',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Disable third party cost',
              href: '/guidelines/finance-api#disable-third-party-cost',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Invoice management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get invoice for Organization',
              href: '/guidelines/finance-api#get-invoice-for-organization',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get invoice payment details',
              href: '/guidelines/finance-api#get-invoice-payment-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of invoices for Customer or Organization',
              href: '/guidelines/finance-api#get-list-of-invoices-for-customer-or-organization',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update invoice settings',
              href: '/guidelines/finance-api#update-invoice-settings',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete invoice tax data',
              href: '/guidelines/finance-api#delete-invoice-tax-data',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve invoice',
              href: '/guidelines/finance-api#approve-invoice',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cancel invoice',
              href: '/guidelines/finance-api#cancel-invoice',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Mark invoice as paid',
              href: '/guidelines/finance-api#mark-invoice-as-paid',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Email invoice',
              href: '/guidelines/finance-api#email-invoice',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download invoice',
              href: '/guidelines/finance-api#download-invoice',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get invoice template margin details',
              href: '/guidelines/finance-api#get-invoice-template-margin-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get invoice template margin pre-requisite',
              href: '/guidelines/finance-api#get-invoice-template-margin-pre-requisite',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Credit management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Credit summary',
              href: '/guidelines/finance-api#credit-summary',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Offered credits',
              href: '/guidelines/finance-api#offered-credits',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer credit list',
              href: '/guidelines/finance-api#customer-credit-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add credit to Customer',
              href: '/guidelines/finance-api#add-credit-to-customer',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update credit offered to Customer',
              href: '/guidelines/finance-api#update-credit-offered-to-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Revoke credit offered to Customer',
              href: '/guidelines/finance-api#revoke-credit-offered-to-customer',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Claim offered credits',
              href: '/guidelines/finance-api#claim-offered-credits',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Payment management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get list of payment transactions for Organization',
              href: '/guidelines/finance-api#get-list-of-payment-transactions-for-organization',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Customer payments',
              href: '/guidelines/finance-api#get-list-of-customer-payments',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add payment for Customer',
              href: '/guidelines/finance-api#add-payment-for-customer',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit Customer payment',
              href: '/guidelines/finance-api#edit-customer-payment',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve payment',
              href: '/guidelines/finance-api#approve-payment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cancel payment',
              href: '/guidelines/finance-api#cancel-payment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reject payment',
              href: '/guidelines/finance-api#reject-payment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add payment from Organization app',
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
              label: 'PayPal payment success callback',
              href: '/guidelines/finance-api#paypal-payment-success-callback',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'PayPal payment cancel callback',
              href: '/guidelines/finance-api#paypal-payment-cancel-callback',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Complete PayPal payment',
              href: '/guidelines/finance-api#complete-paypal-payment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Initiate refund',
              href: '/guidelines/finance-api#initiate-refund',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Approve refund',
              href: '/guidelines/finance-api#approve-refund',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Email payment receipt',
              href: '/guidelines/finance-api#email-payment-receipt',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download payment receipt',
              href: '/guidelines/finance-api#download-payment-receipt',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add or update payment comment',
              href: '/guidelines/finance-api#add-or-update-payment-comment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Static details lists`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Payment types',
              href: '/guidelines/finance-api#payment-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Payment status',
              href: '/guidelines/finance-api#payment-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice payment mode types',
              href: '/guidelines/finance-api#invoice-payment-mode-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice status',
              href: '/guidelines/finance-api#invoice-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Invoice payment term',
              href: '/guidelines/finance-api#invoice-payment-term',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'PG payment type',
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
          label: 'Insights report details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Insights report details',
              href: '/guidelines/insights-api#insights-report-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Campaign Bidding Insights',
              href: '/guidelines/insights-api#get-campaign-bidding-insights',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Insights reports count by type',
              href: '/guidelines/insights-api#get-insights-reports-count-by-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get eligible campaigns',
              href: '/guidelines/insights-api#get-eligible-campaigns',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Calculate Insights computation',
              href: '/guidelines/insights-api#calculate-insights-computation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Insights report management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Delete Insights report record',
              href: '/guidelines/insights-api#delete-insights-report-record',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Regenerate Insights report',
              href: '/guidelines/insights-api#regenerate-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send Insights report email',
              href: '/guidelines/insights-api#send-insights-report-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Audience Insights report`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get a list of eligible audiences',
              href: '/guidelines/insights-api#get-a-list-of-eligible-audiences',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Matched audience details',
              href: '/guidelines/insights-api#get-matched-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Matched audience file URL',
              href: '/guidelines/insights-api#get-matched-audience-file-url',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Audience Insights report',
              href: '/guidelines/insights-api#create-audience-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Insights report',
              href: '/guidelines/insights-api#download-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Power Segment Insights`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Generate PSI report',
              href: '/guidelines/insights-api#generate-psi-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Power Segment Insights list',
              href: '/guidelines/insights-api#get-power-segment-insights-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download PSI report',
              href: '/guidelines/insights-api#download-psi-report',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Email PSI report',
              href: '/guidelines/insights-api#email-psi-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Power Segment Insights category types',
              href: '/guidelines/insights-api#get-power-segment-insights-category-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
                {
          type: 'category',
          label: 'Audience Quality (AQ) Insights report',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'AQ Insights report eligibility requirements',
              href: '/guidelines/insights-api#aq-insights-report-eligibility-requirements',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'AQ Insights report resource properties',
              href: '/guidelines/insights-api#aq-insights-report-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of AQ Insights reports',
              href: '/guidelines/insights-api#get-list-of-aq-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaigns eligible for AQ Insights reports',
              href: '/guidelines/insights-api#get-list-of-campaigns-eligible-for-aq-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate AQ Insights report name',
              href: '/guidelines/insights-api#validate-aq-insights-report-name',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Compute AQ Insights report cost',
              href: '/guidelines/insights-api#compute-aq-insights-report-cost',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate AQ Insights report',
              href: '/guidelines/insights-api#generate-aq-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get AQ Insights report types',
              href: '/guidelines/insights-api#get-aq-insights-report-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download AQ Insights report',
              href: '/guidelines/insights-api#download-aq-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete AQ Insights report',
              href: '/guidelines/insights-api#delete-aq-insights-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Voter Level Data (VLD) Insights report`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'VLD Insights eligibility requirements',
              href: '/guidelines/insights-api#vld-insights-eligibility-requirements',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'VLD Insights resource properties',
              href: '/guidelines/insights-api#vld-insights-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of VLD Insights reports',
              href: '/guidelines/insights-api#get-list-of-vld-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaigns eligible for VLD Insights reports',
              href: '/guidelines/insights-api#get-list-of-campaigns-eligible-for-vld-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate VLD Insights report',
              href: '/guidelines/insights-api#generate-vld-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get cost assessment for VLD Insights report',
              href: '/guidelines/insights-api#get-cost-assessment-for-vld-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download VLD Insights report',
              href: '/guidelines/insights-api#download-vld-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete VLD Insights report',
              href: '/guidelines/insights-api#delete-vld-insights-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
                {
          type: 'category',
          label: 'Script Lift Study (SLS) Insights report',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'SLS Insights eligibility requirements',
              href: '/guidelines/insights-api#sls-insights-eligibility-requirements',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'SLS Insights resource properties',
              href: '/guidelines/insights-api#sls-insights-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of SLS Insights reports',
              href: '/guidelines/insights-api#get-list-of-sls-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate SLS Insights report',
              href: '/guidelines/insights-api#generate-sls-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'SLS Insights reports computation',
              href: '/guidelines/insights-api#sls-insights-reports-computation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate SLS Insights report name',
              href: '/guidelines/insights-api#validate-sls-insights-report-name',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaigns eligible for SLS Insights reports',
              href: '/guidelines/insights-api#get-list-of-campaigns-eligible-for-sls-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download SLS Insights report',
              href: '/guidelines/insights-api#download-sls-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete SLS Insights report',
              href: '/guidelines/insights-api#delete-sls-insights-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Report templates`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'PLD Insights eligibility requirements',
              href: '/guidelines/insights-api#pld-insights-eligibility-requirements',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'NLD Insights eligibility requirements',
              href: '/guidelines/insights-api#nld-insights-eligibility-requirements',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'ICT Insights eligibility requirements',
              href: '/guidelines/insights-api#ict-insights-eligibility-requirements',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of templates',
              href: '/guidelines/insights-api#get-list-of-templates',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get template details',
              href: '/guidelines/insights-api#get-template-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get template reports',
              href: '/guidelines/insights-api#get-template-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate template name',
              href: '/guidelines/insights-api#validate-template-name',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create report template',
              href: '/guidelines/insights-api#create-report-template',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update report template',
              href: '/guidelines/insights-api#update-report-template',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Report management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Download report',
              href: '/guidelines/insights-api#download-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete report',
              href: '/guidelines/insights-api#delete-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Email report',
              href: '/guidelines/insights-api#email-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Regenerate report',
              href: '/guidelines/insights-api#regenerate-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Get more Insights reports details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get list of Insights types',
              href: '/guidelines/insights-api#get-list-of-insights-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Insights status types',
              href: '/guidelines/insights-api#get-list-of-insights-status-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of template status types',
              href: '/guidelines/insights-api#get-list-of-template-status-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get scheduling frequencies',
              href: '/guidelines/insights-api#get-scheduling-frequencies',
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
          label: 'Get inventory details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get inventory details',
              href: '/guidelines/inventory-api#get-inventory-details',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of inventories',
              href: '/guidelines/inventory-api#get-list-of-inventories',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get inventory distribution',
              href: '/guidelines/inventory-api#get-inventory-distribution',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get inventories count',
              href: '/guidelines/inventory-api#get-inventories-count',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get inventory group types',
              href: '/guidelines/inventory-api#get-inventory-group-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Inventory management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Campaign inventory targeting',
              href: '/guidelines/inventory-api#campaign-inventory-targeting',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download CSV inventory list',
              href: '/guidelines/inventory-api#download-csv-inventory-list',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get inventory based on CSV file',
              href: '/guidelines/inventory-api#get-inventory-based-on-csv-file',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get distribution of inventory based on CSV file',
              href: '/guidelines/inventory-api#get-distribution-of-inventory-based-on-csv-file',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get inventory count based on CSV file',
              href: '/guidelines/inventory-api#get-inventory-count-based-on-csv-file',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Fetch Contextual inventories',
              href: '/guidelines/inventory-api#fetch-contextual-inventories',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Contextual inventories',
              href: '/guidelines/inventory-api#add-contextual-inventories',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Remove Contextual inventories',
              href: '/guidelines/inventory-api#remove-contextual-inventories',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Contextual inventories to inventory groups',
              href: '/guidelines/inventory-api#add-contextual-inventories-to-inventory-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Blocked inventories`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get list of blocked inventories',
              href: '/guidelines/inventory-api#get-list-of-blocked-inventories',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Block inventories',
              href: '/guidelines/inventory-api#block-inventories',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Unblock inventories',
              href: '/guidelines/inventory-api#unblock-inventories',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add comment for blocked inventory',
              href: '/guidelines/inventory-api#add-comment-for-blocked-inventory',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Block inventory file',
              href: '/guidelines/inventory-api#block-inventory-file',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `CTV inventories`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get CTV inventory list',
              href: '/guidelines/inventory-api#get-ctv-inventory-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get CTV inventories count',
              href: '/guidelines/inventory-api#get-ctv-inventories-count',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get CTV inventories distribution',
              href: '/guidelines/inventory-api#get-ctv-inventories-distribution',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download CTV inventory list',
              href: '/guidelines/inventory-api#download-ctv-inventory-list',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of streaming devices',
              href: '/guidelines/inventory-api#get-list-of-streaming-devices',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Inventory groups`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Inventory groups',
              href: '/guidelines/inventory-api#inventory-groups',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of shared group Customer details',
              href: '/guidelines/inventory-api#get-list-of-shared-group-customer-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of inventory groups statistics',
              href: '/guidelines/inventory-api#get-list-of-inventory-groups-statistics',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of PMP deals in an inventory group',
              href: '/guidelines/inventory-api#get-list-of-pmp-deals-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get CSV list of PMP deals in an inventory group',
              href: '/guidelines/inventory-api#get-csv-list-of-pmp-deals-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Open Exchange inventories in an inventory group',
              href: '/guidelines/inventory-api#get-list-of-open-exchange-inventories-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get distributions of Open Exchange inventories in an inventory group',
              href: '/guidelines/inventory-api#get-distributions-of-open-exchange-inventories-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get count of Open Exchange inventories in an inventory group',
              href: '/guidelines/inventory-api#get-count-of-open-exchange-inventories-in-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Contextual inventories for an inventory group',
              href: '/guidelines/inventory-api#get-list-of-contextual-inventories-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get count of Contextual inventories for an inventory group',
              href: '/guidelines/inventory-api#get-count-of-contextual-inventories-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get CSV file of Contextual inventories for an inventory group',
              href: '/guidelines/inventory-api#get-csv-file-of-contextual-inventories-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Contextual inventory',
              href: '/guidelines/inventory-api#contextual-inventory',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get inventory groups count',
              href: '/guidelines/inventory-api#get-inventory-groups-count',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download Open Exchange inventories for group',
              href: '/guidelines/inventory-api#download-open-exchange-inventories-for-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get CTV inventories for an inventory group',
              href: '/guidelines/inventory-api#get-ctv-inventories-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get CTV inventories statistics for an inventory group',
              href: '/guidelines/inventory-api#get-ctv-inventories-statistics-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get CTV inventories distributions for an inventory group',
              href: '/guidelines/inventory-api#get-ctv-inventories-distributions-for-an-inventory-group',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download CTV inventories for an inventory group',
              href: '/guidelines/inventory-api#download-ctv-inventories-for-an-inventory-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Inventory group management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Inventory group management',
              href: '/guidelines/inventory-api#inventory-group-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add or remove mappings to an inventory group',
              href: '/guidelines/inventory-api#add-or-remove-mappings-to-an-inventory-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add or remove Customers from a shared inventory group',
              href: '/guidelines/inventory-api#add-or-remove-customers-from-a-shared-inventory-group',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit inventory group',
              href: '/guidelines/inventory-api#edit-inventory-group',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete inventory group',
              href: '/guidelines/inventory-api#delete-inventory-group',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Bulk delete inventory groups',
              href: '/guidelines/inventory-api#bulk-delete-inventory-groups',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Contextual inventories to group',
              href: '/guidelines/inventory-api#add-contextual-inventories-to-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Remove Contextual inventories from group',
              href: '/guidelines/inventory-api#remove-contextual-inventories-from-group',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate inventory group',
              href: '/guidelines/inventory-api#validate-inventory-group',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Deals details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'List of deals',
              href: '/guidelines/inventory-api#list-of-deals',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get list of deal types',
              href: '/guidelines/inventory-api#get-list-of-deal-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get list of deal statuses',
              href: '/guidelines/inventory-api#get-list-of-deal-statuses',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
          ]
        },

        {
          type: `category`,
          label: `Private Marketplace (PMP) deals details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get PMP deals list',
              href: '/guidelines/inventory-api#get-pmp-deals-list',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get PMP deal details by IDs',
              href: '/guidelines/inventory-api#get-pmp-deal-details-by-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get list of Customers associated with campaigns for a PMP deal',
              href: '/guidelines/inventory-api#get-list-of-customers-associated-with-campaigns-for-a-pmp-deal',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get count of PMP deals for all statuses',
              href: '/guidelines/inventory-api#get-count-of-pmp-deals-for-all-statuses',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            }
          ]
        },
        {
          type: `category`,
          label: `PMP management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'PMP management',
              href: '/guidelines/inventory-api#pmp-management',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create PMP deal',
              href: '/guidelines/inventory-api#create-pmp-deal',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update PMP deal',
              href: '/guidelines/inventory-api#update-pmp-deal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete PMP deal',
              href: '/guidelines/inventory-api#delete-pmp-deal',
              customProps: { method: 'DEL' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `Programmatic Guaranteed (PG) deals details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get PG deals list',
              href: '/guidelines/inventory-api#get-pg-deals-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get PG deals details by ID',
              href: '/guidelines/inventory-api#get-pg-deals-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `PG management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'PG management',
              href: '/guidelines/inventory-api#pg-management',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create PG deal',
              href: '/guidelines/inventory-api#create-pg-deal',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update PG deal details',
              href: '/guidelines/inventory-api#update-pg-deal-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete PG deal',
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
          label: 'Get geographical data',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Filtering and pagination',
              href: '/guidelines/master-api#filtering-and-pagination',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get zip codes and state IDs',
              href: '/guidelines/master-api#get-zip-codes-and-state-ids',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get state segment',
              href: '/guidelines/master-api#get-state-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get senate district segment',
              href: '/guidelines/master-api#get-senate-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get house district segment',
              href: '/guidelines/master-api#get-house-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get gender segment',
              href: '/guidelines/master-api#get-gender-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get age segment',
              href: '/guidelines/master-api#get-age-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get language segment',
              href: '/guidelines/master-api#get-language-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get interest segment',
              href: '/guidelines/master-api#get-interest-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get income range segment',
              href: '/guidelines/master-api#get-income-range-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get ethnicity segment',
              href: '/guidelines/master-api#get-ethnicity-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get ethnicity group segment',
              href: '/guidelines/master-api#get-ethnicity-group-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get DMA code segment',
              href: '/guidelines/master-api#get-dma-code-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get county segment',
              href: '/guidelines/master-api#get-county-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get country segment',
              href: '/guidelines/master-api#get-country-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'  
            },
            {
              type: 'link',
              label: 'Get congressional district segment',
              href: '/guidelines/master-api#get-congressional-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get city segment',
              href: '/guidelines/master-api#get-city-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get location types',
              href: '/guidelines/master-api#get-location-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get location details by location type',
              href: '/guidelines/master-api#get-location-details-by-location-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get timezones',
              href: '/guidelines/master-api#get-timezones',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get carriers and states by country ID',
              href: '/guidelines/master-api#get-carriers-and-states-by-country-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Get creative data`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get creative data',
              href: '/guidelines/master-api#get-creative-data',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get RTB creative types',
              href: '/guidelines/master-api#get-rtb-creative-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get creative sizes',
              href: '/guidelines/master-api#get-creative-sizes',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get video skip parameters',
              href: '/guidelines/master-api#get-video-skip-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get video roll position parameters',
              href: '/guidelines/master-api#get-video-roll-position-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get video player size parameters',
              href: '/guidelines/master-api#get-video-player-size-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get video playback method parameters',
              href: '/guidelines/master-api#get-video-playback-method-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get video placement type parameters',
              href: '/guidelines/master-api#get-video-placement-type-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Get more data`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get network types for targeting',
              href: '/guidelines/master-api#get-network-types-for-targeting',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get device OS for targeting',
              href: '/guidelines/master-api#get-device-os-for-targeting',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get manufacturers for targeting',
              href: '/guidelines/master-api#get-manufacturers-for-targeting',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get channels for inventory',
              href: '/guidelines/master-api#get-channels-for-inventory',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get traffic types',
              href: '/guidelines/master-api#get-traffic-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get inventory types',
              href: '/guidelines/master-api#get-inventory-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get exchanges',
              href: '/guidelines/master-api#get-exchanges',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get deal curation types',
              href: '/guidelines/master-api#get-deal-curation-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get publisher ad categories',
              href: '/guidelines/master-api#get-publisher-ad-categories',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get device type',
              href: '/guidelines/master-api#get-device-type',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get inventory',
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
          label: 'Proposal details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get proposal details by ID',
              href: '/guidelines/planner-api#get-proposal-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of proposals',
              href: '/guidelines/planner-api#get-list-of-proposals',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Proposal reach and impressions summary',
              href: '/guidelines/planner-api#proposal-reach-and-impressions-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Proposal device type summary',
              href: '/guidelines/planner-api#proposal-device-type-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Proposal channel type summary',
              href: '/guidelines/planner-api#proposal-channel-type-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Proposal bid landscape summary',
              href: '/guidelines/planner-api#proposal-bid-landscape-summary',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download proposal',
              href: '/guidelines/planner-api#download-proposal',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Proposal management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create proposal',
              href: '/guidelines/planner-api#create-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create draft proposal',
              href: '/guidelines/planner-api#create-draft-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update proposal',
              href: '/guidelines/planner-api#update-proposal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update draft proposal',
              href: '/guidelines/planner-api#update-draft-proposal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate campaigns for ready proposal',
              href: '/guidelines/planner-api#generate-campaigns-for-ready-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Restore proposal',
              href: '/guidelines/planner-api#restore-proposal',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate proposal',
              href: '/guidelines/planner-api#duplicate-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete proposal',
              href: '/guidelines/planner-api#delete-proposal',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `More details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Proposal status list',
              href: '/guidelines/planner-api#proposal-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Proposal summary parameters list',
              href: '/guidelines/planner-api#proposal-summary-parameters-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get user access details',
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
          label: 'Get reports details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get reports details',
              href: '/guidelines/reports-api#get-reports-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get report by ID',
              href: '/guidelines/reports-api#get-report-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Reports management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Reports management',
              href: '/guidelines/reports-api#reports-management',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create report',
              href: '/guidelines/reports-api#create-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Execute a report',
              href: '/guidelines/reports-api#execute-a-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete a report',
              href: '/guidelines/reports-api#delete-a-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit a report',
              href: '/guidelines/reports-api#edit-a-report',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Duplicate a report',
              href: '/guidelines/reports-api#duplicate-a-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Scheduling management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Scheduling management',
              href: '/guidelines/reports-api#scheduling-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update a report schedule',
              href: '/guidelines/reports-api#update-a-report-schedule',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete report schedule',
              href: '/guidelines/reports-api#delete-report-schedule',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Unsubscribe an email from all scheduled reports',
              href: '/guidelines/reports-api#unsubscribe-an-email-from-all-scheduled-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Unsubscribe an email from a report schedule',
              href: '/guidelines/reports-api#unsubscribe-an-email-from-a-report-schedule',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Get more report details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get more report details',
              href: '/guidelines/reports-api#get-more-report-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get a list of conversion\'s custom fields',
              href: '/guidelines/reports-api#get-a-list-of-conversions-custom-fields',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get report request types',
              href: '/guidelines/reports-api#get-report-request-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get report file types',
              href: '/guidelines/reports-api#get-report-file-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get report delivery frequency types',
              href: '/guidelines/reports-api#get-report-delivery-frequency-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get dimensions and metrics details',
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
          label: 'Authentication',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Login',
              href: '/guidelines/user-api#login',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'OAuth token',
              href: '/guidelines/user-api#oauth-token',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User logout',
              href: '/guidelines/user-api#user-logout',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Change password',
              href: '/guidelines/user-api#change-password',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reset user password',
              href: '/guidelines/user-api#reset-user-password',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Reset password email',
              href: '/guidelines/user-api#reset-password-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send MFA code',
              href: '/guidelines/user-api#send-mfa-code',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Verify MFA code',
              href: '/guidelines/user-api#verify-mfa-code',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: 'category',
          label: 'User details',
          className: 'sidebarItem',
          items: [
              {
                type: 'link',
                label: 'Get list of users',
                href: '/guidelines/user-api#get-list-of-users',
                customProps: { method: 'GET' },
                className: "sidebarItem"
              },
              {
                type: 'link',
                label: 'Basic user list',
                href: '/guidelines/user-api#basic-user-list',
                customProps: { method: 'GET' },
                className: "sidebarItem"
              },
              {
                type: 'link',
                label: 'Users for Customer sharing',
                href: '/guidelines/user-api#users-for-customer-sharing',
                customProps: { method: 'GET' },
                className: "sidebarItem"
              },
              {
                type: 'link',
                label: 'Get user profile details',
                href: '/guidelines/user-api#get-user-profile-details',
                customProps: { method: 'GET' },
                className: "sidebarItem"
              },
              {
                type: 'link',
                label: 'User config details',
                href: '/guidelines/user-api#user-config-details',
                customProps: { method: 'GET' },
                className: "sidebarItem"
              },
          ]
        },
        {
          type: 'category',
          label: 'User management',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Send user invitation',
              href: '/guidelines/user-api#send-user-invitation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Resend user invitation',
              href: '/guidelines/user-api#resend-user-invitation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User sign-up',
              href: '/guidelines/user-api#user-sign-up',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update user profile',
              href: '/guidelines/user-api#update-user-profile',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update user status',
              href: '/guidelines/user-api#update-user-status',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Enable MFA',
              href: '/guidelines/user-api#enable-mfa',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Disable MFA',
              href: '/guidelines/user-api#disable-mfa',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: 'category',
          label: 'User application access',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Allowed applications list',
              href: '/guidelines/user-api#allowed-applications-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User app access list',
              href: '/guidelines/user-api#user-app-access-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add app access for user',
              href: '/guidelines/user-api#add-app-access-for-user',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Revoke app access for user',
              href: '/guidelines/user-api#revoke-app-access-for-user',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Remaining applications',
              href: '/guidelines/user-api#remaining-applications',
              customProps: { method: 'GET' },
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
              label: 'Validate user invite',
              href: '/guidelines/user-api/#validate-user-invite',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate password reset hash',
              href: '/guidelines/user-api/#validate-password-reset-hash',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate user email',
              href: '/guidelines/user-api/#validate-user-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate Workspace domain',
              href: '/guidelines/user-api/#validate-workspace-domain',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate user email for signup',
              href: '/guidelines/user-api/#validate-user-email-for-signup',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate user password',
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
          label: 'Organization details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Organization details',
              href: '/guidelines/workspace-api#organization-details',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of allowed Organizations',
              href: '/guidelines/workspace-api#get-list-of-allowed-organizations',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Organization details',
              href: '/guidelines/workspace-api#get-organization-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Check for available domain',
              href: '/guidelines/workspace-api#check-for-available-domain',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Organization applications list',
              href: '/guidelines/workspace-api#organization-applications-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of user interaction events',
              href: '/guidelines/workspace-api#get-list-of-user-interaction-events',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Upsert interaction event',
              href: '/guidelines/workspace-api#upsert-interaction-event',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Organization management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Organization management',
              href: '/guidelines/workspace-api#organization-management',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Organization email',
              href: '/guidelines/workspace-api#update-organization-email',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of admin users',
              href: '/guidelines/workspace-api#get-list-of-admin-users',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Whitelabel settings`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get whitelabel settings',
              href: '/guidelines/workspace-api#get-whitelabel-settings',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update whitelabel settings',
              href: '/guidelines/workspace-api#update-whitelabel-settings',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add whitelabel domain',
              href: '/guidelines/workspace-api#add-whitelabel-domain',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Verify whitelabel domain',
              href: '/guidelines/workspace-api#verify-whitelabel-domain',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add whitelabel pixel URL',
              href: '/guidelines/workspace-api#add-whitelabel-pixel-url',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Workspace management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Workspace management',
              href: '/guidelines/workspace-api#workspace-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Workspace domain',
              href: '/guidelines/workspace-api#update-workspace-domain',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Validate Workspace domain',
              href: '/guidelines/workspace-api#validate-workspace-domain',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Workspaces',
              href: '/guidelines/workspace-api#get-list-of-workspaces',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Workspace initialization details',
              href: '/guidelines/workspace-api#get-workspace-initialization-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Workspace Organization logo',
              href: '/guidelines/workspace-api#get-workspace-organization-logo',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Workspace chatbot app ID',
              href: '/guidelines/workspace-api#get-workspace-chatbot-app-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Workspace chatbot app ID by domain',
              href: '/guidelines/workspace-api#get-workspace-chatbot-app-id-by-domain',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Send find my Workspace email',
              href: '/guidelines/workspace-api#send-find-my-workspace-email',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Customer details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Customer details',
              href: '/guidelines/workspace-api#customer-details',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer operations resource properties',
              href: '/guidelines/workspace-api#customer-operations-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Customer details',
              href: '/guidelines/workspace-api#get-customer-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get basic Customer details',
              href: '/guidelines/workspace-api#get-basic-customer-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get multi-level Customers list',
              href: '/guidelines/workspace-api#get-multi-level-customers-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get immediate Customers list',
              href: '/guidelines/workspace-api#get-immediate-customers-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Customer operations details',
              href: '/guidelines/workspace-api#get-customer-operations-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Customer operations label list',
              href: '/guidelines/workspace-api#get-customer-operations-label-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get count of Customers by status',
              href: '/guidelines/workspace-api#get-count-of-customers-by-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of users for selected Customer',
              href: '/guidelines/workspace-api#get-list-of-users-for-selected-customer',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of user assigned Customers',
              href: '/guidelines/workspace-api#get-list-of-user-assigned-customers',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get user\'s remaining Customers',
              href: '/guidelines/workspace-api#get-users-remaining-customers',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Customer\'s allowed applications',
              href: '/guidelines/workspace-api#get-list-of-customers-allowed-applications',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get allowed Customer OW IDs',
              href: '/guidelines/workspace-api#get-allowed-customer-ow-ids',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of remaining apps for Customer',
              href: '/guidelines/workspace-api#get-list-of-remaining-apps-for-customer',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get remaining applications for user',
              href: '/guidelines/workspace-api#get-remaining-applications-for-user',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Metabase client credentials',
              href: '/guidelines/workspace-api#get-metabase-client-credentials',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Advertisers for Customer',
              href: '/guidelines/workspace-api#get-list-of-advertisers-for-customer',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Customer config details',
              href: '/guidelines/workspace-api#get-customer-config-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Customer management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Invitation pre-requisite details',
              href: '/guidelines/workspace-api#invitation-pre-requisite-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer management',
              href: '/guidelines/workspace-api#customer-management',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Resend Customer invite',
              href: '/guidelines/workspace-api#resend-customer-invite',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Cancel Customer invite',
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
              label: 'Get Customer signup form',
              href: '/guidelines/workspace-api#get-customer-signup-form',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Assign Customer to user',
              href: '/guidelines/workspace-api#assign-customer-to-user',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Share Customer with users',
              href: '/guidelines/workspace-api#share-customer-with-users',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Unassign Customer from user',
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
              label: 'Add Customer app access',
              href: '/guidelines/workspace-api#add-customer-app-access',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Revoke Customer app access',
              href: '/guidelines/workspace-api#revoke-customer-app-access',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Put Customer on-hold',
              href: '/guidelines/workspace-api#put-customer-on-hold',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Re-activate Customer',
              href: '/guidelines/workspace-api#re-activate-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add label for Customer operation',
              href: '/guidelines/workspace-api#add-label-for-customer-operation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Enable bid shading for Customer',
              href: '/guidelines/workspace-api#enable-bid-shading-for-customer',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer operations details',
              href: '/guidelines/workspace-api#update-customer-operations-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Advertiser management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Advertiser management',
              href: '/guidelines/workspace-api#advertiser-management',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Advertiser profile and details',
              href: '/guidelines/workspace-api#get-list-of-advertiser-profile-and-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Add Advertiser profile',
              href: '/guidelines/workspace-api#add-advertiser-profile',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit Advertiser profile',
              href: '/guidelines/workspace-api#edit-advertiser-profile',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete Advertiser profile',
              href: '/guidelines/workspace-api#delete-advertiser-profile',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Static details lists`,
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
              label: 'Organization Workspace status',
              href: '/guidelines/workspace-api#organization-workspace-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User status',
              href: '/guidelines/workspace-api#user-status',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer type',
              href: '/guidelines/workspace-api#customer-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer payment type',
              href: '/guidelines/workspace-api#customer-payment-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer account type',
              href: '/guidelines/workspace-api#customer-account-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Customer list sortable fields',
              href: '/guidelines/workspace-api#customer-list-sortable-fields',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'User sort by options',
              href: '/guidelines/workspace-api#user-sort-by-options',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Organization expertise',
              href: '/guidelines/workspace-api#organization-expertise',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Company size',
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
              label: 'Media budget',
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
      label: 'Migration guides',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'migration-guides/index'
      },
      items: [
        {
          type: 'category',
          label: 'Beeswax migration guide',
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
          label: 'DV360 migration guide',
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
          label: 'The Trade Desk migration guide',
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
          label: 'Xandr migration guide',
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
          label: 'Audience details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Audience details list',
              href: '/political-vertical/audience-segments#audience-details-list',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Basic audience details',
              href: '/political-vertical/audience-segments#basic-audience-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Audience count by status',
              href: '/political-vertical/audience-segments#audience-count-by-status',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Audience count by type',
              href: '/political-vertical/audience-segments#audience-count-by-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Audience count by data partner',
              href: '/political-vertical/audience-segments#audience-count-by-data-partner',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: 'category',
          label: 'Matched audience',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Matched audience details',
              href: '/political-vertical/audience-segments#matched-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Matched audience',
              href: '/political-vertical/audience-segments#create-matched-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update Matched audience',
              href: '/political-vertical/audience-segments#update-matched-audience',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Refresh Matched audience',
              href: '/political-vertical/audience-segments#refresh-matched-audience',
              customProps: { method: 'PUT' },
            },
          ]
        },
        {
          type: 'category',
          label: 'Geofarmed audience',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Geofarmed audience details',
              href: '/political-vertical/audience-segments#geofarmed-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Geofarmed audience',
              href: '/political-vertical/audience-segments#create-geofarmed-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: 'category',
          label: 'Segmented audience',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Segmented audience details',
              href: '/political-vertical/audience-segments#segmented-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Search Segmented audiences',
              href: '/political-vertical/audience-segments#search-segmented-audiences',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Segmented audience',
              href: '/political-vertical/audience-segments#create-segmented-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update Segmented audience',
              href: '/political-vertical/audience-segments#update-segmented-audience',
              customProps: { method: 'PUT' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: 'category',
          label: 'Contextual audience',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Contextual audience details',
              href: '/political-vertical/audience-segments#contextual-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Contextual audience',
              href: '/political-vertical/audience-segments#create-contextual-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: 'category',
          label: 'CVA Audience',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get Custom Voter Audience details',
              href: '/political-vertical/audience-segments#get-custom-voter-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get available states for Custom Voter Audiences',
              href: '/political-vertical/audience-segments#get-available-states-for-custom-voter-audiences',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get Custom Voter Audience segment details',
              href: '/political-vertical/audience-segments#get-custom-voter-audience-segment-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create Custom Voter Audience',
              href: '/political-vertical/audience-segments#create-custom-voter-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get CVA reach',
              href: '/political-vertical/audience-segments#get-cva-reach',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get CVA Insights',
              href: '/political-vertical/audience-segments#get-cva-insights',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            }
          ]
        },
        {
          type: 'category',
          label: 'More audience details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Data partners list for Matched audience',
              href: '/political-vertical/audience-segments#data-partners-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Reach range list for Segmented audiences',
              href: '/political-vertical/audience-segments#reach-range-list-for-segmented-audiences',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Price range list for Segmented audiences',
              href: '/political-vertical/audience-segments#price-range-list-for-segmented-audiences',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience type list',
              href: '/political-vertical/audience-segments#audience-type-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience subtype list',
              href: '/political-vertical/audience-segments#audience-subtype-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Audience status list',
              href: '/political-vertical/audience-segments#audience-status-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Frequency type list',
              href: '/political-vertical/audience-segments#frequency-type-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            }
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
              label: 'Get Customer Insights fees details',
              href: '/political-vertical/finance/#get-customer-insights-fees-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update Customer Insights fees details',
              href: '/political-vertical/finance/#update-customer-insights-fees-details',
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
          label: `Power Segment Insights`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Generate PSI report',
              href: '/political-vertical/insights-vld/#generate-psi-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Power Segment Insights list',
              href: '/political-vertical/insights-vld/#get-power-segment-insights-list',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download PSI report',
              href: '/political-vertical/insights-vld/#download-psi-report',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Email PSI report',
              href: '/political-vertical/insights-vld/#email-psi-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Power Segment Insights category types',
              href: '/political-vertical/insights-vld/#get-power-segment-insights-category-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `Voter Level Data (VLD) Insights report`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'VLD Insights eligibility requirements',
              href: '/political-vertical/insights-vld/#vld-insights-eligibility-requirements',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'VLD Insights resource properties',
              href: '/political-vertical/insights-vld/#vld-insights-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of VLD Insights reports',
              href: '/political-vertical/insights-vld/#get-list-of-vld-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of campaigns eligible for VLD Insights reports',
              href: '/political-vertical/insights-vld/#get-list-of-campaigns-eligible-for-vld-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate VLD Insights report',
              href: '/political-vertical/insights-vld/#generate-vld-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get cost assessment for VLD Insights report',
              href: '/political-vertical/insights-vld/#get-cost-assessment-for-vld-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download VLD Insights report',
              href: '/political-vertical/insights-vld/#download-vld-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete VLD Insights report',
              href: '/political-vertical/insights-vld/#delete-vld-insights-report',
              customProps: { method: 'DEL' },
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
        id: 'political-vertical/planner'
      },
      items: [
        {
          type: 'category',
          label: 'Political proposal Planner details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Political Planner resource properties',
              href: '/political-vertical/planner#political-planner-resource-properties',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get plan details by ID',
              href: '/political-vertical/planner#get-plan-details-by-id',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download plan',
              href: '/political-vertical/planner#download-plan',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Political plans',
              href: '/political-vertical/planner#get-list-of-political-plans',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of proposals',
              href: '/political-vertical/planner#get-list-of-proposals',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get proposal details',
              href: '/political-vertical/planner#get-proposal-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Download proposal',
              href: '/political-vertical/planner#download-proposal',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get proposal summary',
              href: '/political-vertical/planner#get-proposal-summary',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of strategies',
              href: '/political-vertical/planner#get-list-of-strategies',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get strategy details',
              href: '/political-vertical/planner#get-strategy-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: 'category',
          label: 'Political proposal Planner management',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Create plan',
              href: '/political-vertical/planner#create-plan',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit plan',
              href: '/political-vertical/planner#edit-plan',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit plan name',
              href: '/political-vertical/planner#edit-plan-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete plans',
              href: '/political-vertical/planner#delete-plans',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Activate proposal',
              href: '/political-vertical/planner#activate-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit proposal',
              href: '/political-vertical/planner#edit-proposal',
              customProps: { method: 'PUT' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Edit proposal name',
              href: '/political-vertical/planner#edit-proposal-name',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate IO and campaigns',
              href: '/political-vertical/planner#generate-io-and-campaigns',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete proposals',
              href: '/political-vertical/planner#delete-proposals',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Restore proposals',
              href: '/political-vertical/planner#restore-proposals',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create CVA details',
              href: '/political-vertical/planner#create-cva-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update CVA details',
              href: '/political-vertical/planner#update-cva-details',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Estimate plan reach',
              href: '/political-vertical/planner#estimate-plan-reach',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Generate custom strategies',
              href: '/political-vertical/planner#generate-custom-strategies',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Delete strategy',
              href: '/political-vertical/planner#delete-strategy',
              customProps: { method: 'DEL' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'More Political Planner details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get supported parameters',
              href: '/political-vertical/planner#get-supported-parameters',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get targeting types',
              href: '/political-vertical/planner#get-targeting-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get strategy types',
              href: '/political-vertical/planner#get-strategy-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get split types',
              href: '/political-vertical/planner#get-split-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get plan statuses',
              href: '/political-vertical/planner#get-plan-statuses',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get plan objectives',
              href: '/political-vertical/planner#get-plan-objectives',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Cross-screen Planner',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get reach saturation graph',
              href: '/political-vertical/planner#get-reach-saturation-graph',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get demographics keys',
              href: '/political-vertical/planner#get-demographics-keys',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Split proposal',
              href: '/political-vertical/planner#split-proposal',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
          ]
        },
      ]
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
          label: 'Get geographical data',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Filtering and pagination',
              href: '/guidelines/master-api#filtering-and-pagination',
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get zip codes and state IDs',
              href: '/guidelines/master-api#get-zip-codes-and-state-ids',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get state segment',
              href: '/guidelines/master-api#get-state-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get senate district segment',
              href: '/guidelines/master-api#get-senate-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get house district segment',
              href: '/guidelines/master-api#get-house-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get gender segment',
              href: '/guidelines/master-api#get-gender-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get age segment',
              href: '/guidelines/master-api#get-age-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get language segment',
              href: '/guidelines/master-api#get-language-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get interest segment',
              href: '/guidelines/master-api#get-interest-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get income range segment',
              href: '/guidelines/master-api#get-income-range-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get ethnicity segment',
              href: '/guidelines/master-api#get-ethnicity-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get ethnicity group segment',
              href: '/guidelines/master-api#get-ethnicity-group-segment',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get DMA code segment',
              href: '/guidelines/master-api#get-dma-code-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get county segment',
              href: '/guidelines/master-api#get-county-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get country segment',
              href: '/guidelines/master-api#get-country-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get congressional district segment',
              href: '/guidelines/master-api#get-congressional-district-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get city segment',
              href: '/guidelines/master-api#get-city-segment',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get location types',
              href: '/guidelines/master-api#get-location-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get location details by location type',
              href: '/guidelines/master-api#get-location-details-by-location-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get timezones',
              href: '/guidelines/master-api#get-timezones',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get carriers and states by country ID',
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
          label: `Audience details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Audience details list',
              href: '/healthcare-vertical/audience-healthcare#audience-details-list',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Basic audience details',
              href: '/healthcare-vertical/audience-healthcare#basic-audience-details',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Audience count by status',
              href: '/healthcare-vertical/audience-healthcare#audience-count-by-status',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Audience count by type',
              href: '/healthcare-vertical/audience-healthcare#audience-count-by-type',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Audience count by data partner',
              href: '/healthcare-vertical/audience-healthcare#audience-count-by-data-partner',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `Healthcare data details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Healthcare titles list',
              href: '/healthcare-vertical/audience-healthcare#healthcare-titles-list',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare specialties list',
              href: '/healthcare-vertical/audience-healthcare#healthcare-specialties-list',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare systems list',
              href: '/healthcare-vertical/audience-healthcare#healthcare-systems-list',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Healthcare data',
              href: '/healthcare-vertical/audience-healthcare#healthcare-data',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare statistics',
              href: '/healthcare-vertical/audience-healthcare#healthcare-statistics',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare account types',
              href: '/healthcare-vertical/audience-healthcare#healthcare-account-types',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare account subtypes',
              href: '/healthcare-vertical/audience-healthcare#healthcare-account-subtypes',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Healthcare account names',
              href: '/healthcare-vertical/audience-healthcare#healthcare-account-names',
              customProps: { method: 'POST' },
            },
          ]
        },
        {
          type: `category`,
          label: `Matched audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Matched audience details',
              href: '/healthcare-vertical/audience-healthcare#matched-audience-details',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Create Matched audience',
              href: '/healthcare-vertical/audience-healthcare#create-matched-audience',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Update Matched audience',
              href: '/healthcare-vertical/audience-healthcare#update-matched-audience',
              customProps: { method: 'PATCH' },
            },
            {
              type: 'link',
              label: 'Refresh Matched audience',
              href: '/healthcare-vertical/audience-healthcare#refresh-matched-audience',
              customProps: { method: 'PUT' },
            },
            {
              type: 'link',
              label: 'Data partners list for Matched audience',
              href: '/healthcare-vertical/audience-healthcare#data-partners-list-for-matched-audience',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: `category`,
          label: `ABM audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'ABM audience details',
              href: '/healthcare-vertical/audience-healthcare#abm-audience-details',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'ABM audience statistics',
              href: '/healthcare-vertical/audience-healthcare#abm-audience-statistics',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Create ABM audience',
              href: '/healthcare-vertical/audience-healthcare#create-abm-audience',
              customProps: { method: 'POST' },
            },
            {
              type: 'link',
              label: 'Upload ABM filter file',
              href: '/healthcare-vertical/audience-healthcare#upload-abm-filter-file',
              customProps: { method: 'POST' },
            }
          ]
        },
        {
          type: `category`,
          label: `ICT audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get ICT audience details',
              href: '/healthcare-vertical/audience-healthcare#get-ict-audience-details',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'ICT audience subtypes and extensions',
              href: '/healthcare-vertical/audience-healthcare#ict-audience-subtypes-and-extensions',
              customProps: { method: 'GET' },
            },
            {
              type: 'link',
              label: 'Create ICT audience',
              href: '/healthcare-vertical/audience-healthcare#create-ict-audience',
              customProps: { method: 'POST' },
            }
          ]
        },
        {
          type: `category`,
          label: `Geofarmed audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Geofarmed audience details',
              href: '/healthcare-vertical/audience-healthcare#geofarmed-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Geofarmed audience',
              href: '/healthcare-vertical/audience-healthcare#create-geofarmed-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Contextual audience`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Contextual audience details',
              href: '/healthcare-vertical/audience-healthcare#contextual-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Contextual audience',
              href: '/healthcare-vertical/audience-healthcare#create-contextual-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {
          type: `category`,
          label: `Campaign audiences`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Campaign audience details',
              href: '/healthcare-vertical/audience-healthcare#campaign-audience-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Create Campaign audience',
              href: '/healthcare-vertical/audience-healthcare#create-campaign-audience',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get Campaign audience history',
              href: '/healthcare-vertical/audience-healthcare#get-campaign-audience-history',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
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
              label: 'Get Customer Insights fees details',
              href: '/healthcare-vertical/finance/#get-customer-insights-fees-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Update Customer Insights fees details',
              href: '/healthcare-vertical/finance/#update-customer-insights-fees-details',
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
          label: `Insights details`,
          className: 'sidebarItem',
          items: [
              {
              type: 'link',
              label: 'Get eligible campaigns',
              href: '/healthcare-vertical/insights-pld#get-eligible-campaigns',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Calculate Insights computation',
              href: '/healthcare-vertical/insights-pld#calculate-insights-computation',
              customProps: { method: 'POST' },
              className: 'sidebarItem'
            }
          ]
        },
        {  
          type: 'category',
          label: 'Audience Quality (AQ) Insights report',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'AQ Insights report eligibility requirements',
              href: '/healthcare-vertical/insights-pld#aq-insights-report-eligibility-requirements',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'AQ Insights report resource properties',
              href: '/healthcare-vertical/insights-pld#aq-insights-report-resource-properties',
            },
            {
              type: 'link',
              label: 'Get list of AQ Insights reports',
              href: '/healthcare-vertical/insights-pld#get-list-of-aq-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get list of campaigns eligible for AQ Insights reports',
              href: '/healthcare-vertical/insights-pld#get-list-of-campaigns-eligible-for-aq-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Validate AQ Insights report name',
              href: '/healthcare-vertical/insights-pld#validate-aq-insights-report-name',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Compute AQ Insights report cost',
              href: '/healthcare-vertical/insights-pld#compute-aq-insights-report-cost',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Generate AQ Insights report',
              href: '/healthcare-vertical/insights-pld#generate-aq-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get AQ Insights report types',
              href: '/healthcare-vertical/insights-pld#get-aq-insights-report-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Download AQ Insights report',
              href: '/healthcare-vertical/insights-pld#download-aq-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete AQ Insights report',
              href: '/healthcare-vertical/insights-pld#delete-aq-insights-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: 'category',
          label: 'Script Lift Study (SLS) Insights report',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'SLS Insights eligibility requirements',
              href: '/healthcare-vertical/insights-pld#sls-insights-eligibility-requirements',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'SLS Insights resource properties',
              href: '/healthcare-vertical/insights-pld#sls-insights-resource-properties',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get list of SLS Insights reports',
              href: '/healthcare-vertical/insights-pld#get-list-of-sls-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Generate SLS Insights report',
              href: '/healthcare-vertical/insights-pld#generate-sls-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'SLS Insights reports computation',
              href: '/healthcare-vertical/insights-pld#sls-insights-reports-computation',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Validate SLS Insights report name',
              href: '/healthcare-vertical/insights-pld#validate-sls-insights-report-name',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get list of campaigns eligible for SLS Insights reports',
              href: '/healthcare-vertical/insights-pld#get-list-of-campaigns-eligible-for-sls-insights-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Download SLS Insights report',
              href: '/healthcare-vertical/insights-pld#download-sls-insights-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete SLS Insights report',
              href: '/healthcare-vertical/insights-pld#delete-sls-insights-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `Report templates`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'PLD Insights eligibility requirements',
              href: '/healthcare-vertical/insights-pld#pld-insights-eligibility-requirements',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'NLD Insights eligibility requirements',
              href: '/healthcare-vertical/insights-pld#nld-insights-eligibility-requirements',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'ICT Insights eligibility requirements',
              href: '/healthcare-vertical/insights-pld#ict-insights-eligibility-requirements',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get list of templates',
              href: '/healthcare-vertical/insights-pld#get-list-of-templates',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get template details',
              href: '/healthcare-vertical/insights-pld#get-template-details',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Get template reports',
              href: '/healthcare-vertical/insights-pld#get-template-reports',
              customProps: { method: 'GET' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Validate template name',
              href: '/healthcare-vertical/insights-pld#validate-template-name',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Create report template',
              href: '/healthcare-vertical/insights-pld#create-report-template',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Update report template',
              href: '/healthcare-vertical/insights-pld#update-report-template',
              customProps: { method: 'PATCH' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `Report management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Download report',
              href: '/healthcare-vertical/insights-pld#download-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Delete report',
              href: '/healthcare-vertical/insights-pld#delete-report',
              customProps: { method: 'DEL' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Email report',
              href: '/healthcare-vertical/insights-pld#email-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Regenerate report',
              href: '/healthcare-vertical/insights-pld#regenerate-report',
              customProps: { method: 'POST' },
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: `category`,
          label: `Get more Insights details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get list of Insights types',
              href: '/healthcare-vertical/insights-pld#get-list-of-insights-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of Insights status types',
              href: '/healthcare-vertical/insights-pld#get-list-of-insights-status-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get list of template status types',
              href: '/healthcare-vertical/insights-pld#get-list-of-template-status-types',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
            },
            {
              type: 'link',
              label: 'Get scheduling frequencies',
              href: '/healthcare-vertical/insights-pld#get-scheduling-frequencies',
              customProps: { method: 'GET' },
              className: 'sidebarItem'
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
        id: 'healthcare-vertical/planner'
      },
      items: [
            {
              type: 'category',
              label: 'Healthcare proposal Planner details',
              className: 'sidebarItem',
              items: [
                  {
                    type: 'link',
                    label: 'HCP planner resource properties',
                    href: '/healthcare-vertical/planner/#hcp-planner-resource-properties',
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Targeting consistency rule',
                    href: '/healthcare-vertical/planner/#targeting-consistency-rule',
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'HCP planner details by ID',
                    href: '/healthcare-vertical/planner/#hcp-planner-details-by-id',
                    customProps: { method: 'GET' },
                    className: 'sidebarItem',
                  },    
                  {
                    type: 'link',
                    label: 'Get list of HCP planners',
                    href: '/healthcare-vertical/planner/#get-list-of-hcp-planners',
                    customProps: { method: 'GET' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Get list of accounts',
                    href: '/healthcare-vertical/planner/#get-list-of-accounts',
                    customProps: { method: 'GET' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Download HCP planner',
                    href: '/healthcare-vertical/planner/#download-hcp-planner',
                    customProps: { method: 'POST' },
                    className: 'sidebarItem',
                  }
               ]
            },
            {
              type: 'category',
              label: 'Healthcare proposal Planner management',
              className: 'sidebarItem',
              items: [
                  {
                    type: 'link',
                    label: 'Create HCP planner',
                    href: '/healthcare-vertical/planner/#create-hcp-planner',
                    customProps: { method: 'POST' },
                    className: 'sidebarItem',
                  },    
                  {
                    type: 'link',
                    label: 'Update HCP planner',
                    href: '/healthcare-vertical/planner/#update-hcp-planner',
                    customProps: { method: 'PUT' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Delete HCP planner',
                    href: '/healthcare-vertical/planner/#delete-hcp-planner',
                    customProps: { method: 'DEL' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Validate planner name',
                    href: '/healthcare-vertical/planner/#validate-planner-name',
                    customProps: { method: 'POST' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Get targeting graphs',
                    href: '/healthcare-vertical/planner/#get-targeting-graphs',
                    customProps: { method: 'POST' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Get audience graph',
                    href: '/healthcare-vertical/planner/#get-audience-graph',
                    customProps: { method: 'POST' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Get audience summary',
                    href: '/healthcare-vertical/planner/#get-audience-summary',
                    customProps: { method: 'POST' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Generate campaigns plan',
                    href: '/healthcare-vertical/planner/#generate-campaigns-plan',
                    customProps: { method: 'POST' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Publish campaigns plan',
                    href: '/healthcare-vertical/planner/#publish-campaigns-plan',
                    customProps: { method: 'POST' },
                    className: 'sidebarItem',
                  }
               ]
            },
            {
              type: 'category',
              label: 'More HCP details',
              className: 'sidebarItem',
              items: [
                  {
                    type: 'link',
                    label: 'Get split strategy list',
                    href: '/healthcare-vertical/planner/#get-split-strategy-list',
                    customProps: { method: 'GET' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'NPI type list',
                    href: '/healthcare-vertical/planner/#npi-type-list',
                    customProps: { method: 'GET' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Get geography segments',
                    href: '/healthcare-vertical/planner/#get-geography-segments',
                    customProps: { method: 'GET' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Get data partners list',
                    href: '/healthcare-vertical/planner/#get-data-partners-list',
                    customProps: { method: 'GET' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Get audience selection methods list',
                    href: '/healthcare-vertical/planner/#get-audience-selection-methods-list',
                    customProps: { method: 'GET' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Get specialties list',
                    href: '/healthcare-vertical/planner/#get-specialties-list',
                    customProps: { method: 'GET' },
                    className: 'sidebarItem',
                  },
                  {
                    type: 'link',
                    label: 'Get account types',
                    href: '/healthcare-vertical/planner/#get-account-types',
                    customProps: { method: 'GET' },
                    className: 'sidebarItem',
                  }
              ]
            }          
          ]
    }
  ],
  partnershipsSidebar: [
    {
      type: 'category',
      label: 'Partnerships & integrations',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'partnerships/index'
      },
      items: [
        {
          type: 'category',
          label: 'Reporting integrations',
          className: 'sidebarItem',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'partnerships/google-looker-studio',
              label: 'Google Looker Studio',
              className: 'sidebarItem',
            },
            {
              type: 'doc',
              id: 'partnerships/google-sheets',
              label: 'Google Sheets',
              className: 'sidebarItem',
            },
            {
              type: 'doc',
              id: 'partnerships/microsoft-power-bi',
              label: 'Microsoft Power BI',
              className: 'sidebarItem',
            },
            {
              type: 'doc',
              id: 'partnerships/tableau',
              label: 'Tableau',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Supermetrics',
              href: 'https://docs.supermetrics.com/docs/iqm',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'TapClicks',
              href: 'https://www.tapclicks.com/resources/connectors/iqm-reports/',
              className: 'sidebarItem',
            },
            {
              type: 'doc',
              id: 'partnerships/improvado',
              label: 'Improvado',
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: 'category',
          label: 'CRM integrations',
          className: 'sidebarItem',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'partnerships/hubspot',
              label: 'HubSpot',
              className: 'sidebarItem',
            },
          ]
        },
        {
          type: 'category',
          label: 'Automation integrations',
          className: 'sidebarItem',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'partnerships/zapier',
              label: 'Zapier',
              className: 'sidebarItem',
            },
            {
              type: 'link',
              label: 'Make',
              href: 'https://www.make.com/en/integrations/iqmreports',
              className: 'sidebarItem',
            },
          ]
        },
      ]
    }
  ]
}

export default sidebars;
