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
          type: `doc`,
          id: `Getting Started/Before-You-Begin`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          id: `Getting Started/Error-Handling`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          id: `Getting Started/Request-Methods`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          id: `Getting Started/Typescript-Prerequisites`,
          className: 'sidebarItem'
        }
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
          type: `doc`,
          id: `Quickstart Guides/Authentication-Quickstart-Guide`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          id: `Quickstart Guides/Matched-Audience-Upload-API-Quickstart-Guide`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          id: `Quickstart Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          id: `Quickstart Guides/Reporting-API-Quickstart-Guide`,
          className: 'sidebarItem'
        },
        {
          type: `doc`,
          id: `Quickstart Guides/Schedule-Report-API-Quickstart-Guide`,
          className: 'sidebarItem'
        },
      ],
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
          label: 'Get Assets Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get List of All Assets',
              href: '/Guidelines/Assets-API-Guidelines#get-a-list-of-all-assets'
            },
            {
              type: 'link',
              label: 'Get Asset Details',
              href: '/Guidelines/Assets-API-Guidelines#get-asset-details'
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
              href: '/Guidelines/Assets-API-Guidelines#add-multiple-assets'
            },
            {
              type: 'link',
              label: 'Update Asset Details',
              href: '/Guidelines/Assets-API-Guidelines#update-asset-details'
            },
            {
              type: 'link',
              label: 'Delete Asset',
              href: '/Guidelines/Assets-API-Guidelines#delete-asset'
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
          label: 'Get Bid Modelling Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get Campaign Dimension Counts',
              href: '/Guidelines/Bid-Model-API-Guidelines#get-campaign-dimension-counts'
            },
            {
              type: 'link',
              label: 'Get Dimension Specific Spending for a Campaign',
              href: '/Guidelines/Bid-Model-API-Guidelines#get-dimension-specific-spending-for-a-campaign'
            },
            {
              type: 'link',
              label: 'Get Total and Dimension Specific Count of Modelled Items for a Campaign',
              href: '/Guidelines/Bid-Model-API-Guidelines#get-total-and-dimension-specific-count-of-modelled-items-for-a-campaign'
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
              href: '/Guidelines/Bid-Model-API-Guidelines#includeexclude-management'
            },
            {
              type: 'link',
              label: 'Campaign Entities',
              href: '/Guidelines/Bid-Model-API-Guidelines#includeexclude-entities-from-a-campaign'
            },
            {
              type: 'link',
              label: 'Delete Asset',
              href: '/Guidelines/Assets-API-Guidelines#delete-asset'
            },
          ]
        },
        {
          type: `category`,
          label: `Campaign Priority Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Assign Priority to Multiple Campaigns',
              href: '/Guidelines/Bid-Model-API-Guidelines#assign-priority-to-multiple-campaigns'
            },
            {
              type: 'link',
              label: 'More Campaign Priority Management',
              href: '/Guidelines/Bid-Model-API-Guidelines#more-priority-management-for-multiple-campaigns'
            },
          ]
        },
        {
          type: `category`,
          label: `Bid Modelling Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Add Bid Modelling',
              href: '/Guidelines/Bid-Model-API-Guidelines#add-bid-modelling'
            },
            {
              type: 'link',
              label: 'Update Bid Modelling Actions',
              href: '/Guidelines/Bid-Model-API-Guidelines#update-bid-modelling-actions'
            },
            {
              type: 'link',
              label: 'Update Bid Modelling Actions',
              href: '/Guidelines/Bid-Model-API-Guidelines#update-bid-modelling-dimensions'
            },
            {
              type: 'link',
              label: 'Delete Bid Modelling Data',
              href: '/Guidelines/Bid-Model-API-Guidelines#delete-bid-modelling-data'
            },
          ]
        },
        {
          type: `link`,
          label: `Get Metrics Report For a Given Campaign and Dimension`,
          href: '/Guidelines/Bid-Model-API-Guidelines#get-metrics-report-for-a-given-campaign-and-dimension',
          className: 'sidebarItem',
        },
        {
          type: `link`,
          label: `Get List of Bid Model Dimensions`,
          href: '/Guidelines/Bid-Model-API-Guidelines#get-list-of-bid-model-dimensions',
          className: 'sidebarItem',
        },
      ],
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
              href: '/Guidelines/Campaign-API-Guidelines#campaign-resource-properties'
            },
            {
              type: 'link',
              label: 'Get Campaign Details by ID',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-details-by-id'
            },
            {
              type: 'link',
              label: 'Get List of Campaigns',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns'
            },
            {
              type: 'link',
              label: 'Get List of Campaigns with Basic Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-with-basic-details'
            },
            {
              type: 'link',
              label: 'Get Basic Details of Campaigns',
              href: '/Guidelines/Campaign-API-Guidelines#get-basic-details-of-campaigns'
            },
            {
              type: 'link',
              label: 'Get List of Campaigns With Filters',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-with-filters'
            },
            {
              type: 'link',
              label: 'Get Campaign Budget Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-budget-details'
            },
            {
              type: 'link',
              label: 'Get List of Campaign Groups',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-groups'
            },
            {
              type: 'link',
              label: 'Get Campaign Count by Status',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-count-by-status'
            },
            {
              type: 'link',
              label: 'Get Campaign Count With Campaign Type',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-count-with-campaign-type'
            },
            {
              type: 'link',
              label: 'Get Campaign Count by Creative Type',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-count-by-creative-type'
            },
            {
              type: 'link',
              label: 'Get Creative Type and Campaign Count',
              href: '/Guidelines/Campaign-API-Guidelines#get-creative-type-and-campaigns-count'
            },
            {
              type: 'link',
              label: 'Get Campaign Start Date',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-start-date'
            },
            {
              type: 'link',
              label: 'Get List of Campaign Start Dates or End Dates',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-start-date'
            },
            {
              type: 'link',
              label: 'Get Campaign Report Data',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-report-data'
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
              label: 'Create New PG Campaign',
              href: '/Guidelines/Campaign-API-Guidelines#create-new-pg-campaign'
            },
            {
              type: 'link',
              label: 'Update PG Campaign',
              href: '/Guidelines/Campaign-API-Guidelines#update-pg-campaign'
            },
            {
              type: 'link',
              label: 'Update Campaign by Field',
              href: '/Guidelines/Campaign-API-Guidelines#update-campaign-by-field'
            },
            {
              type: 'link',
              label: 'Change Campaign Name',
              href: '/Guidelines/Campaign-API-Guidelines#change-campaign-name'
            },
            {
              type: 'link',
              label: 'Change Campaign End Date',
              href: '/Guidelines/Campaign-API-Guidelines#change-campaign-end-date'
            },
            {
              type: 'link',
              label: 'Change Campaign Budget',
              href: '/Guidelines/Campaign-API-Guidelines#change-campaign-budget'
            },
            {
              type: 'link',
              label: 'Target Campaign With Conversions',
              href: '/Guidelines/Campaign-API-Guidelines#target-campaigns-with-conversions'
            },
            {
              type: 'link',
              label: 'Update Audience Targeting in Campaigns',
              href: '/Guidelines/Campaign-API-Guidelines#update-audience-targeting-in-campaigns'
            },
            {
              type: 'link',
              label: 'Assign PMP Deals',
              href: '/Guidelines/Campaign-API-Guidelines#assign-pmp-deals'
            },
            {
              type: 'link',
              label: 'Assign PG Deals',
              href: '/Guidelines/Campaign-API-Guidelines#assign-pg-deals'
            },
            {
              type: 'link',
              label: 'Resend Email to Set Margin',
              href: '/Guidelines/Campaign-API-Guidelines#resend-email-to-set-margin'
            },
            {
              type: 'link',
              label: 'Resend Email Reminder to Set Invoice Template',
              href: '/Guidelines/Campaign-API-Guidelines#resend-email-reminder-to-set-invoice-template'
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
              label: 'Insertion Order Resource Properties',
              href: '/Guidelines/Campaign-API-Guidelines#insertion-order-resource-properties'
            },
            {
              type: 'link',
              label: 'Get Insertion Order Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-insertion-order-details'
            },
            {
              type: 'link',
              label: 'Get Advanced Insertion Order Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-advanced-insertion-order-details'
            },
            {
              type: 'link',
              label: 'Get IO Campaign Budget and Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-io-campaign-budget-and-details'
            },
            {
              type: 'link',
              label: 'Get List of Campaign Details Grouped by Insertion Order ID',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-details-grouped-by-insertion-order-id'
            },
            {
              type: 'link',
              label: 'Get List of Campaign Details Grouped by IO ID With Filters',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-details-grouped-by-io-id-with-filters'
            },
            {
              type: 'link',
              label: 'Get List of Campaigns and Report Details by Insertion Order ID',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-and-report-details-by-insertion-order-id'
            },
            {
              type: 'link',
              label: 'Download csv/xlsx File for IO-based Campaign Details',
              href: '/Guidelines/Campaign-API-Guidelines#download-csvxlsx-file-for-io-based-campaign-details'
            },
            {
              type: 'link',
              label: 'Get List of IO Start/End Dates',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-io-startend-dates'
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
              href: '/Guidelines/Campaign-API-Guidelines#create-an-insertion-order'
            },
            {
              type: 'link',
              label: 'Update Insertion Order Details',
              href: '/Guidelines/Campaign-API-Guidelines#update-insertion-order-details'
            },
            {
              type: 'link',
              label: 'Update End Date for Multiple IOs',
              href: '/Guidelines/Campaign-API-Guidelines#update-end-date-for-multiple-ios'
            },
            {
              type: 'link',
              label: 'Update Budget for Multiple IOs',
              href: '/Guidelines/Campaign-API-Guidelines#update-budget-for-multiple-ios'
            },
            {
              type: 'link',
              label: 'Duplicate an Insertion Order',
              href: '/Guidelines/Campaign-API-Guidelines#duplicate-an-insertion-order'
            },
            {
              type: 'link',
              label: 'Delete an Insertion Order',
              href: '/Guidelines/Campaign-API-Guidelines#delete-an-insertion-order'
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
              label: 'Get IO Status List',
              href: '/Guidelines/Campaign-API-Guidelines#get-io-status-list'
            },
            {
              type: 'link',
              label: 'Get List of Campaign Budget Types',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-budget-types'
            },
            {
              type: 'link',
              label: 'Get List of Budget Distribution Methods',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-budget-distribution-methods'
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
              href: '/Guidelines/Conversion-API-Guidelines#postback-conversion-resource-properties'
            },
            {
              type: 'link',
              label: 'Pixel Conversion Resource Details',
              href: '/Guidelines/Conversion-API-Guidelines#pixel-conversion-resource-properties'
            },
            {
              type: 'link',
              label: 'Get Conversion Details by ID',
              href: '/Guidelines/Conversion-API-Guidelines#get-conversion-details-by-id'
            },
            {
              type: 'link',
              label: 'Get List of Conversions',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversions'
            },
            {
              type: 'link',
              label: 'Get Conversion Count by Type',
              href: '/Guidelines/Conversion-API-Guidelines#get-conversion-count-by-type'
            },
            {
              type: 'link',
              label: 'Get Campaign Details by Conversion ID',
              href: '/Guidelines/Conversion-API-Guidelines#get-campaign-details-by-conversion-id'
            },
            {
              type: 'link',
              label: 'Get Campaign Details by Conversion ID in Group or Basic',
              href: '/Guidelines/Conversion-API-Guidelines#get-campaign-details-by-conversion-id-in-group-or-basic'
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
              href: '/Guidelines/Conversion-API-Guidelines#create-postback-conversion'
            },
            {
              type: 'link',
              label: 'Create Pixel Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#create-pixel-conversion'
            },
            {
              type: 'link',
              label: 'Delete Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#delete-conversion'
            },
            {
              type: 'link',
              label: 'Update Postback Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#update-postback-conversion'
            },
            {
              type: 'link',
              label: 'Update Pixel Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#update-pixel-conversion'
            },
            {
              type: 'link',
              label: 'Assign Conversion to a Campaign',
              href: '/Guidelines/Conversion-API-Guidelines#assign-conversion-to-a-campaign'
            },
            {
              type: 'link',
              label: 'Assign Email for Pixel Integration',
              href: '/Guidelines/Conversion-API-Guidelines#send-email-for-pixel-integration'
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
              label: 'Get List of Partner Types for Postback Conversions',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-partner-types-for-postback-conversions'
            },
            {
              type: 'link',
              label: 'Get List of Pixel Conversion Advanced Setting Default Values',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-pixel-conversion-advanced-setting-default-values'
            },
            {
              type: 'link',
              label: 'Get List of Conversion Types',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-types'
            },
            {
              type: 'link',
              label: 'Get List of Conversion Status',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-status'
            },
            {
              type: 'link',
              label: 'Get List of Conversion Piggyback Types',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-piggyback-types'
            },
            {
              type: 'link',
              label: 'Get List of Conversion Attribute Types',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-attribute-types'
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
              label: 'Get Customer Finance Details',
              href: '/Guidelines/Finance-Guidelines#finance-details'
            },
            {
              type: 'link',
              label: 'Get List of Payment Transactions for Organization',
              href: '/Guidelines/Finance-Guidelines#get-list-of-payment-transactions-for-organization'
            },
            {
              type: 'link',
              label: 'Get List of Customer Payments',
              href: '/Guidelines/Finance-Guidelines#get-list-of-customer-payments'
            },
            {
              type: 'link',
              label: 'Get Invoice for Organization',
              href: '/Guidelines/Finance-Guidelines#get-invoice-for-organization'
            },
            {
              type: 'link',
              label: 'Get Invoice Payment Details',
              href: '/Guidelines/Finance-Guidelines#get-invoice-payment-details'
            },
            {
              type: 'link',
              label: 'Get List of Invoices for Customer or Organization',
              href: '/Guidelines/Finance-Guidelines#get-list-of-invoices-for-customer-or-organization'
            },
            {
              type: 'link',
              label: 'Get Customer Margin Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-margin-details'
            },
            {
              type: 'link',
              label: 'Update Customer Margin Details',
              href: '/Guidelines/Finance-Guidelines#update-customer-margin-details'
            },
            {
              type: 'link',
              label: 'Get Customer PG Fees Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-pg-fees-details'
            },
            {
              type: 'link',
              label: 'Edit Customer PG Fees',
              href: '/Guidelines/Finance-Guidelines#edit-customer-pg-fees'
            },
            {
              type: 'link',
              label: 'Get Customer VLD Finance Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-vld-finance-details'
            },
            {
              type: 'link',
              label: 'Updates Customer VLD Details',
              href: '/Guidelines/Finance-Guidelines#updates-customer-vld-details'
            },
            {
              type: 'link',
              label: 'Get Basic Financial Details',
              href: '/Guidelines/Finance-Guidelines#get-basic-financial-details'
            },
            {
              type: 'link',
              label: 'Available Balance',
              href: '/Guidelines/Finance-Guidelines#available-balance'
            },
            {
              type: 'link',
              label: 'Credit Summary',
              href: '/Guidelines/Finance-Guidelines#credit-summary'
            },
            {
              type: 'link',
              label: 'Offered Credits',
              href: '/Guidelines/Finance-Guidelines#offered-credits'
            },
            {
              type: 'link',
              label: 'Download Invoice',
              href: '/Guidelines/Finance-Guidelines#download-invoice'
            },
            {
              type: 'link',
              label: 'Download Payment Receipt',
              href: '/Guidelines/Finance-Guidelines#download-payment-receipt'
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
              label: 'Update Invoice Settings',
              href: '/Guidelines/Finance-Guidelines#invoice-management'
            },
            {
              type: 'link',
              label: 'Delete Invoice Tax Data',
              href: '/Guidelines/Finance-Guidelines#delete-invoice-tax-data'
            },
            {
              type: 'link',
              label: 'Approve Invoice',
              href: '/Guidelines/Finance-Guidelines#approve-invoice'
            },
            {
              type: 'link',
              label: 'Cancel Invoice',
              href: '/Guidelines/Finance-Guidelines#cancel-invoice'
            },
            {
              type: 'link',
              label: 'Mark Invoice as Paid',
              href: '/Guidelines/Finance-Guidelines#mark-invoice-as-paid'
            },
            {
              type: 'link',
              label: 'Email Invoice',
              href: '/Guidelines/Finance-Guidelines#email-invoice'
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
              label: 'Add Credit to Customer',
              href: '/Guidelines/Finance-Guidelines#credit-management'
            },
            {
              type: 'link',
              label: 'Update Credit Offered to Customer',
              href: '/Guidelines/Finance-Guidelines#update-credit-offered-to-customer'
            },
            {
              type: 'link',
              label: 'Revoke Credit Offered to Customer',
              href: '/Guidelines/Finance-Guidelines#revoke-credit-offered-to-customer'
            },
            {
              type: 'link',
              label: 'Claim Offered Credits',
              href: '/Guidelines/Finance-Guidelines#claim-offered-credits'
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
              label: 'Add Payment for Customer',
              href: '/Guidelines/Finance-Guidelines#payment-management'
            },
            {
              type: 'link',
              label: 'Edit Customer Payment',
              href: '/Guidelines/Finance-Guidelines#edit-customer-payment'
            },
            {
              type: 'link',
              label: 'Approve Payment',
              href: '/Guidelines/Finance-Guidelines#approve-payment'
            },
            {
              type: 'link',
              label: 'Cancel Payment',
              href: '/Guidelines/Finance-Guidelines#cancel-payment'
            },
            {
              type: 'link',
              label: 'Reject Payment',
              href: '/Guidelines/Finance-Guidelines#reject-payment'
            },
            {
              type: 'link',
              label: 'Add Payment from Organization App',
              href: '/Guidelines/Finance-Guidelines#add-payment-from-organization-app'
            },
            {
              type: 'link',
              label: 'Payment with PayPal',
              href: '/Guidelines/Finance-Guidelines#payment-with-paypal'
            },
            {
              type: 'link',
              label: 'Initiate Refund',
              href: '/Guidelines/Finance-Guidelines#initiate-refund'
            },
            {
              type: 'link',
              label: 'Approve Refund',
              href: '/Guidelines/Finance-Guidelines#approve-refund'
            },
            {
              type: 'link',
              label: 'Email Payment Receipt',
              href: '/Guidelines/Finance-Guidelines#email-payment-receipt'
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
              href: '/Guidelines/Finance-Guidelines#static-details-lists'
            },
            {
              type: 'link',
              label: 'Payment Status',
              href: '/Guidelines/Finance-Guidelines#payment-status'
            },
            {
              type: 'link',
              label: 'Invoice Payment Mode Types',
              href: '/Guidelines/Finance-Guidelines#invoice-payment-mode-types'
            },
            {
              type: 'link',
              label: 'Invoice Status',
              href: '/Guidelines/Finance-Guidelines#invoice-status'
            },
            {
              type: 'link',
              label: 'Invoice Payment Term',
              href: '/Guidelines/Finance-Guidelines#invoice-payment-term'
            },
            {
              type: 'link',
              label: 'PG Payment Type',
              href: '/Guidelines/Finance-Guidelines#pg-payment-type'
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
              label: 'Get a List of Insights',
              href: '/Guidelines/Insights-API-Guidelines#get-insights-details'
            },
            {
              type: 'link',
              label: 'Get Campaign Bidding Insights',
              href: '/Guidelines/Insights-API-Guidelines#get-campaign-bidding-insights'
            },
            {
              type: 'link',
              label: 'Get a List of Eligible Audiences',
              href: '/Guidelines/Insights-API-Guidelines#get-a-list-of-eligible-audiences'
            },
            {
              type: 'link',
              label: 'Get Insights Count by Type',
              href: '/Guidelines/Insights-API-Guidelines#get-insights-count-by-type'
            },
            {
              type: 'link',
              label: 'Get Matched Audience Details',
              href: '/Guidelines/Insights-API-Guidelines#get-matched-audience-details'
            },
            {
              type: 'link',
              label: 'Get Matched Audience File URL',
              href: '/Guidelines/Insights-API-Guidelines#get-matched-audience-file-url'
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
              label: 'Create Insights for a Given Audience',
              href: '/Guidelines/Insights-API-Guidelines#insights-management'
            },
            {
              type: 'link',
              label: 'Delete Insights Record',
              href: '/Guidelines/Insights-API-Guidelines#delete-insights-record'
            },
            {
              type: 'link',
              label: 'Regenerate Insights Report',
              href: '/Guidelines/Insights-API-Guidelines#regenerate-insights-report'
            },
            {
              type: 'link',
              label: 'Download Insights Report',
              href: '/Guidelines/Insights-API-Guidelines#download-insights-report'
            },
            {
              type: 'link',
              label: 'Send Insights Email',
              href: '/Guidelines/Insights-API-Guidelines#send-insights-email'
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
              href: '/Guidelines/Insights-API-Guidelines#voter-level-data-reports'
            },
            {
              type: 'link',
              label: 'Get List of VLD Reports',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-vld-reports'
            },
            {
              type: 'link',
              label: 'Get List of Campaigns Eligible for VLD Reports',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-campaigns-eligible-for-vld-reports'
            },
            {
              type: 'link',
              label: 'Generate VLD Report',
              href: '/Guidelines/Insights-API-Guidelines#generate-vld-report'
            },
            {
              type: 'link',
              label: 'Get Cost Assessment for VLD Report',
              href: '/Guidelines/Insights-API-Guidelines#get-cost-assessment-for-vld-report'
            },
            {
              type: 'link',
              label: 'Download VLD Insight Report',
              href: '/Guidelines/Insights-API-Guidelines#download-vld-insight-report'
            },
            {
              type: 'link',
              label: 'Delete VLD Report',
              href: '/Guidelines/Insights-API-Guidelines#delete-vld-report'
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
              label: 'Get List of Insights Types',
              href: '/Guidelines/Insights-API-Guidelines#get-more-insights-details'
            },
            {
              type: 'link',
              label: 'Get List of Insights Status',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-insights-status'
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
              href: '/Guidelines/Inventory-API-Guide#get-inventory-details'
            },
            {
              type: 'link',
              label: 'Get List of Inventories',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-inventories'
            },
            {
              type: 'link',
              label: 'Get Inventory Distribution',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-distribution'
            },
            {
              type: 'link',
              label: 'Get Inventories Count',
              href: '/Guidelines/Inventory-API-Guide#get-inventories-count'
            },
            {
              type: 'link',
              label: 'Get Inventory Group Types',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-group-types'
            },
            {
              type: 'link',
              label: 'Get List of Blocked Inventories',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-blocked-inventories'
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
              label: 'Campaign Inventory Optimization',
              href: '/Guidelines/Inventory-API-Guide#inventory-management'
            },
            {
              type: 'link',
              label: 'Block Inventories',
              href: '/Guidelines/Inventory-API-Guide#block-inventories'
            },
            {
              type: 'link',
              label: 'Get Inventory Lists in or from CSV Format',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-lists-in-or-from-csv-format'
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
              label: 'Get List of Inventory Groups',
              href: '/Guidelines/Inventory-API-Guide#inventory-groups'
            },
            {
              type: 'link',
              label: 'Get More Inventory Groups Details',
              href: '/Guidelines/Inventory-API-Guide#get-more-inventory-groups-details'
            },
            {
              type: 'link',
              label: 'Contextual Inventory',
              href: '/Guidelines/Inventory-API-Guide#contextual-inventory'
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
              href: '/Guidelines/Inventory-API-Guide#inventory-group-management'
            },
            {
              type: 'link',
              label: 'Add or Remove Mappings to an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#add-or-remove-mappings-to-an-inventory-group'
            },
            {
              type: 'link',
              label: 'Add or Remove Customers From a Shared Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#add-or-remove-customers-from-a-shared-inventory-group'
            },
            {
              type: 'link',
              label: 'Edit Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#edit-inventory-group'
            },
            {
              type: 'link',
              label: 'Delete Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#delete-inventory-group'
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
              label: 'Get PMP Deals List',
              href: '/Guidelines/Inventory-API-Guide#private-marketplace-pmp-deals-details'
            },
            {
              type: 'link',
              label: 'Get More PMP Details',
              href: '/Guidelines/Inventory-API-Guide#get-more-pmp-details'
            },
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
              href: '/Guidelines/Inventory-API-Guide#pmp-management'
            },
            {
              type: 'link',
              label: 'Create PMP Deal',
              href: '/Guidelines/Inventory-API-Guide#create-pmp-deal'
            },
            {
              type: 'link',
              label: 'Update PMP Deal',
              href: '/Guidelines/Inventory-API-Guide#update-pmp-deal'
            },
            {
              type: 'link',
              label: 'Delete PMP Deal',
              href: '/Guidelines/Inventory-API-Guide#delete-pmp-deal'
            },
          ]
        },
        {
          type: `category`,
          label: `Programmatic Guarantee (PG) Deals Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get PG Deals List',
              href: '/Guidelines/Inventory-API-Guide#programmatic-guarantee-pg-deals-details'
            },
            {
              type: 'link',
              label: 'Get More PG Deals Details',
              href: '/Guidelines/Inventory-API-Guide#get-more-pg-deals-details'
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
              href: '/Guidelines/Inventory-API-Guide#pg-management'
            },
            {
              type: 'link',
              label: 'Create PG Deal',
              href: '/Guidelines/Inventory-API-Guide#create-pg-deal'
            },
            {
              type: 'link',
              label: 'Update PG Deal Details',
              href: '/Guidelines/Inventory-API-Guide#update-pg-deal-details'
            },
            {
              type: 'link',
              label: 'Delete PG Deal',
              href: '/Guidelines/Inventory-API-Guide#delete-pg-dea'
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
              label: 'Get Geographical Data',
              href: '/Guidelines/Master-API-Guidelines#get-geographical-data'
            },
            {
              type: 'link',
              label: 'Get Zip Codes and State IDs',
              href: '/Guidelines/Master-API-Guidelines#get-zip-codes-and-state-ids'
            },
            {
              type: 'link',
              label: 'Get State segment',
              href: '/Guidelines/Master-API-Guidelines#get-state-segment'
            },
            {
              type: 'link',
              label: 'Get Senate District segment',
              href: '/Guidelines/Master-API-Guidelines#get-senate-district-segment'
            },
            {
              type: 'link',
              label: 'Get House District segment',
              href: '/Guidelines/Master-API-Guidelines#get-house-district-segment'
            },
            {
              type: 'link',
              label: 'Get Gender segment',
              href: '/Guidelines/Master-API-Guidelines#get-gender-segment'
            },
            {
              type: 'link',
              label: 'Get Age Segment',
              href: '/Guidelines/Master-API-Guidelines#get-age-segment'
            },
            {
              type: 'link',
              label: 'Get Language Segment',
              href: '/Guidelines/Master-API-Guidelines#get-language-segment'
            },
            {
              type: 'link',
              label: 'Get Interest Segment',
              href: '/Guidelines/Master-API-Guidelines#get-interest-segment'
            },
            {
              type: 'link',
              label: 'Get Income Range Segment',
              href: '/Guidelines/Master-API-Guidelines#get-income-range-segment'
            },
            {
              type: 'link',
              label: 'Get Ethnicity Segment',
              href: '/Guidelines/Master-API-Guidelines#get-ethnicity-segment'
            },
            {
              type: 'link',
              label: 'Get Ethnicity Group Segment',
              href: '/Guidelines/Master-API-Guidelines#get-ethnicity-group-segment'
            },
            {
              type: 'link',
              label: 'Get DMA Code Segment',
              href: '/Guidelines/Master-API-Guidelines#get-dma-code-segment'
            },
            {
              type: 'link',
              label: 'Get County Segment',
              href: '/Guidelines/Master-API-Guidelines#get-county-segment'
            },
            {
              type: 'link',
              label: 'Get Country Segment',
              href: '/Guidelines/Master-API-Guidelines#get-country-segment'
            },
            {
              type: 'link',
              label: 'Get Congressional District Segment',
              href: '/Guidelines/Master-API-Guidelines#get-congressional-district-segment'
            },
            {
              type: 'link',
              label: 'Get City Segment',
              href: '/Guidelines/Master-API-Guidelines#get-city-segment'
            },
            {
              type: 'link',
              label: 'Get Location Types',
              href: '/Guidelines/Master-API-Guidelines#get-location-types'
            },
            {
              type: 'link',
              label: 'Get Location Details by Location Type',
              href: '/Guidelines/Master-API-Guidelines#get-location-details-by-location-type'
            },
            {
              type: 'link',
              label: 'Get Timezones',
              href: '/Guidelines/Master-API-Guidelines#get-timezones'
            },
            {
              type: 'link',
              label: 'Get Carriers and States by Country ID',
              href: '/Guidelines/Master-API-Guidelines#get-carriers-and-states-by-country-id'
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
              href: '/Guidelines/Master-API-Guidelines#get-creative-data'
            },
            {
              type: 'link',
              label: 'Get Creative Types',
              href: '/Guidelines/Master-API-Guidelines#get-creative-types'
            },
            {
              type: 'link',
              label: 'Get RTB Creative Types',
              href: '/Guidelines/Master-API-Guidelines#get-rtb-creative-types'
            },
            {
              type: 'link',
              label: 'Get Creative sizes',
              href: '/Guidelines/Master-API-Guidelines#get-creative-sizes'
            },
            {
              type: 'link',
              label: 'Get Video Skip Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-skip-parameters'
            },
            {
              type: 'link',
              label: 'Get Video Roll Position Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-roll-position-parameters'
            },
            {
              type: 'link',
              label: 'Get Video Player Size Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-player-size-parameters'
            },
            {
              type: 'link',
              label: 'Get Video Playback Method Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-playback-method-parameters'
            },
            {
              type: 'link',
              label: 'Get Video Placement Type Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-placement-type-parameters'
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
              label: 'Get Network Types for targeting',
              href: '/Guidelines/Master-API-Guidelines#get-more-data'
            },
            {
              type: 'link',
              label: 'Get Device OS for targeting',
              href: '/Guidelines/Master-API-Guidelines#get-device-os-for-targeting'
            },
            {
              type: 'link',
              label: 'Get Manufacturers for Targeting',
              href: '/Guidelines/Master-API-Guidelines#get-manufacturers-for-targeting'
            },
            {
              type: 'link',
              label: 'Get Channels for Inventory',
              href: '/Guidelines/Master-API-Guidelines#get-channels-for-inventory'
            },
            {
              type: 'link',
              label: 'Get Verticals',
              href: '/Guidelines/Master-API-Guidelines#get-verticals'
            },
            {
              type: 'link',
              label: 'Get Traffic Types',
              href: '/Guidelines/Master-API-Guidelines#get-traffic-types'
            },
            {
              type: 'link',
              label: 'Get Inventory Types',
              href: '/Guidelines/Master-API-Guidelines#get-inventory-types'
            },
            {
              type: 'link',
              label: 'Get Exchanges',
              href: '/Guidelines/Master-API-Guidelines#get-exchanges'
            },
            {
              type: 'link',
              label: 'Get Deal Curation Types',
              href: '/Guidelines/Master-API-Guidelines#get-deal-curation-types'
            },
            {
              type: 'link',
              label: 'Get Publisher Ad categories',
              href: '/Guidelines/Master-API-Guidelines#get-publisher-ad-categories'
            },
            {
              type: 'link',
              label: 'Get Device Type',
              href: '/Guidelines/Master-API-Guidelines#get-device-type'
            },
            {
              type: 'link',
              label: 'Get Inventory',
              href: '/Guidelines/Master-API-Guidelines#get-inventory'
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
              label: 'Get a List of Reports',
              href: '/Guidelines/Reports-API-Guidelines#get-reports-details'
            },
            {
              type: 'link',
              label: 'Get Report by ID',
              href: '/Guidelines/Reports-API-Guidelines#get-report-by-id'
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
              href: '/Guidelines/Reports-API-Guidelines#reports-management'
            },
            {
              type: 'link',
              label: 'Create Report',
              href: '/Guidelines/Reports-API-Guidelines#create-report'
            },
            {
              type: 'link',
              label: 'Execute a Report',
              href: '/Guidelines/Reports-API-Guidelines#execute-a-report'
            },
            {
              type: 'link',
              label: 'Delete a Report',
              href: '/Guidelines/Reports-API-Guidelines#delete-a-report'
            },
            {
              type: 'link',
              label: 'Edit a Report',
              href: '/Guidelines/Reports-API-Guidelines#edit-a-report'
            },
            {
              type: 'link',
              label: 'Duplicate a Report',
              href: '/Guidelines/Reports-API-Guidelines#duplicate-a-report'
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
              href: '/Guidelines/Reports-API-Guidelines#scheduling-management'
            },
            {
              type: 'link',
              label: 'Update a Report Schedule',
              href: '/Guidelines/Reports-API-Guidelines#update-a-report-schedule'
            },
            {
              type: 'link',
              label: 'Delete Report Schedule',
              href: '/Guidelines/Reports-API-Guidelines#delete-report-schedule'
            },
            {
              type: 'link',
              label: 'Unsubscribe an Email from All Scheduled Reports',
              href: '/Guidelines/Reports-API-Guidelines#unsubscribe-an-email-from-all-scheduled-reports'
            },
            {
              type: 'link',
              label: 'Unsubscribe an Email from a Report Schedule',
              href: '/Guidelines/Reports-API-Guidelines#unsubscribe-an-email-from-a-report-schedule'
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
              label: 'Get URL for Report Download',
              href: '/Guidelines/Reports-API-Guidelines#get-more-report-details'
            },
            {
              type: 'link',
              label: 'Get a List of Conversion\'s Custom Fields',
              href: '/Guidelines/Reports-API-Guidelines#get-a-list-of-conversions-custom-fields'
            },
            {
              type: 'link',
              label: 'Get Report Request Types',
              href: '/Guidelines/Reports-API-Guidelines#get-report-request-types'
            },
            {
              type: 'link',
              label: 'Get Report File Types',
              href: '/Guidelines/Reports-API-Guidelines#get-report-file-types'
            },
            {
              type: 'link',
              label: 'Get Report Delivery Frequency Types',
              href: '/Guidelines/Reports-API-Guidelines#get-report-delivery-frequency-types'
            },
            {
              type: 'link',
              label: 'Get Dimensions and Metrics Details',
              href: '/Guidelines/Reports-API-Guidelines#get-dimensions-and-metrics-details'
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
          type: 'link',
          label: 'Send User Invitation',
          href: '/Guidelines/User-Profile-Guidelines#send-user-invitation',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Validate User Invite',
          href: '/Guidelines/User-Profile-Guidelines#validate-user-invite',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'User Sign-Up',
          href: '/Guidelines/User-Profile-Guidelines#user-sign-up',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Login',
          href: '/Guidelines/User-Profile-Guidelines#login',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'User Logout',
          href: '/Guidelines/User-Profile-Guidelines#user-logout',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Change Password',
          href: '/Guidelines/User-Profile-Guidelines#change-password',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Update User Profile',
          href: '/Guidelines/User-Profile-Guidelines#update-user-profile',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Get List of Users',
          href: '/Guidelines/User-Profile-Guidelines#get-list-of-users',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'User App Access List',
          href: '/Guidelines/User-Profile-Guidelines#user-app-access-list',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Add App Access for User',
          href: '/Guidelines/User-Profile-Guidelines#add-app-access-for-user',
          className: "sidebarItem"
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
              href: '/Guidelines/Workspace-Guidelines#organization-details'
            },
            {
              type: 'link',
              label: 'Get List of Allowed Organizations',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-allowed-organizations'
            },
            {
              type: 'link',
              label: 'Get Organization Details',
              href: '/Guidelines/Workspace-Guidelines#get-organization-details'
            },
            {
              type: 'link',
              label: 'Check for Available Domain',
              href: '/Guidelines/Workspace-Guidelines#check-for-available-domain'
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
              href: '/Guidelines/Workspace-Guidelines#organization-management'
            },
            {
              type: 'link',
              label: 'Update Organization Email',
              href: '/Guidelines/Workspace-Guidelines#update-organization-email'
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
              href: '/Guidelines/Workspace-Guidelines#workspace-management'
            },
            {
              type: 'link',
              label: 'Update Workspace Domain',
              href: '/Guidelines/Workspace-Guidelines#update-workspace-domain'
            },
            {
              type: 'link',
              label: 'Validate Workspace Domain',
              href: '/Guidelines/Workspace-Guidelines#validate-workspace-domain'
            },
            {
              type: 'link',
              label: 'Get List of Workspaces',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-workspaces'
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
              href: '/Guidelines/Workspace-Guidelines#customer-details'
            },
            {
              type: 'link',
              label: 'Get Customer Details',
              href: '/Guidelines/Workspace-Guidelines#get-customer-details'
            },
            {
              type: 'link',
              label: 'Get Basic Customer Details',
              href: '/Guidelines/Workspace-Guidelines#get-basic-customer-details'
            },
            {
              type: 'link',
              label: 'Get Multi-level Customers List',
              href: '/Guidelines/Workspace-Guidelines#get-multi-level-customers-list'
            },
            {
              type: 'link',
              label: 'Get Immediate Customers List',
              href: '/Guidelines/Workspace-Guidelines#get-immediate-customers-list'
            },
            {
              type: 'link',
              label: 'Customer Operations Resource Properties',
              href: '/Guidelines/Workspace-Guidelines#customer-operations-resource-properties'
            },
            {
              type: 'link',
              label: 'Get Customer Operations Details',
              href: '/Guidelines/Workspace-Guidelines#get-customer-operations-details'
            },
            {
              type: 'link',
              label: 'Get Customer Operations Label List',
              href: '/Guidelines/Workspace-Guidelines#get-customer-operations-label-list'
            },
            {
              type: 'link',
              label: 'Get Count of Customers by Status',
              href: '/Guidelines/Workspace-Guidelines#get-count-of-customers-by-status'
            },
            {
              type: 'link',
              label: 'Get List of Users for Selected Customer',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-users-for-selected-customer'
            },
            {
              type: 'link',
              label: 'Get List of User Assigned Customers',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-user-assigned-customers'
            },
            {
              type: 'link',
              label: 'Get User\'s Remaining Customers',
              href: '/Guidelines/Workspace-Guidelines#get-users-remaining-customers'
            },
            {
              type: 'link',
              label: 'Get List of Customer\'s Allowed Applications',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-customers-allowed-applications'
            },
            {
              type: 'link',
              label: 'Get List of Remaining Apps for Customer',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-remaining-apps-for-customer'
            },
            {
              type: 'link',
              label: 'Get List of Advertisers for Customer',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-advertisers-for-customer'
            },
            {
              type: 'link',
              label: 'Get Customer Config Details',
              href: '/Guidelines/Workspace-Guidelines#get-customer-config-details'
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
              href: '/Guidelines/Workspace-Guidelines#customer-management'
            },
            {
              type: 'link',
              label: 'Resend Customer Invite',
              href: '/Guidelines/Workspace-Guidelines#resend-customer-invite'
            },
            {
              type: 'link',
              label: 'Cancel Customer Invite',
              href: '/Guidelines/Workspace-Guidelines#cancel-customer-invite'
            },
            {
              type: 'link',
              label: 'Customer Signup',
              href: '/Guidelines/Workspace-Guidelines#customer-signup'
            },
            {
              type: 'link',
              label: 'Get Customer Signup Form',
              href: '/Guidelines/Workspace-Guidelines#get-customer-signup-form'
            },
            {
              type: 'link',
              label: 'Assign Customer to User',
              href: '/Guidelines/Workspace-Guidelines#assign-customer-to-user'
            },
            {
              type: 'link',
              label: 'Unassign Customer from User',
              href: '/Guidelines/Workspace-Guidelines#unassign-customer-from-user'
            },
            {
              type: 'link',
              label: 'Approve Customer',
              href: '/Guidelines/Workspace-Guidelines#approve-customer'
            },
            {
              type: 'link',
              label: 'Reject Customer',
              href: '/Guidelines/Workspace-Guidelines#reject-customer'
            },
            {
              type: 'link',
              label: 'Add or Revoke Customer App Access',
              href: '/Guidelines/Workspace-Guidelines#add-or-revoke-customer-app-access'
            },
            {
              type: 'link',
              label: 'Put Customer On-Hold',
              href: '/Guidelines/Workspace-Guidelines#put-customer-on-hold'
            },
            {
              type: 'link',
              label: 'Re-Activate Customer',
              href: '/Guidelines/Workspace-Guidelines#re-activate-customer'
            },
            {
              type: 'link',
              label: 'Add Label for Customer Operation',
              href: '/Guidelines/Workspace-Guidelines#add-label-for-customer-operation'
            },
            {
              type: 'link',
              label: 'Enable Bid Shading for Customer',
              href: '/Guidelines/Workspace-Guidelines#enable-bid-shading-for-customer'
            },
            {
              type: 'link',
              label: 'Update Customer Operations Details',
              href: '/Guidelines/Workspace-Guidelines#update-customer-operations-details'
            },
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
              href: '/Guidelines/Workspace-Guidelines#get-list-of-advertiser-profile-and-details'
            },
            {
              type: 'link',
              label: 'Get List of Advertiser Profile and Details',
              href: '/Guidelines/Workspace-Guidelines#resend-customer-invite'
            },
            {
              type: 'link',
              label: 'Add Advertiser Profile',
              href: '/Guidelines/Workspace-Guidelines#add-advertiser-profile'
            },
            {
              type: 'link',
              label: 'Edit Advertiser Profile',
              href: '/Guidelines/Workspace-Guidelines#edit-advertiser-profile'
            },
            {
              type: 'link',
              label: 'Delete Advertiser Profile',
              href: '/Guidelines/Workspace-Guidelines#delete-advertiser-profile'
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
              label: 'Organization Workspace Status',
              href: '/Guidelines/Workspace-Guidelines#static-details-lists'
            },
            {
              type: 'link',
              label: 'Customer Type',
              href: '/Guidelines/Workspace-Guidelines#customer-type'
            },
            {
              type: 'link',
              label: 'Customer Payment Type',
              href: '/Guidelines/Workspace-Guidelines#customer-payment-type'
            },
            {
              type: 'link',
              label: 'Customer Account Type',
              href: '/Guidelines/Workspace-Guidelines#customer-account-type'
            },
            {
              type: 'link',
              label: 'Customer List Sortable Fields',
              href: '/Guidelines/Workspace-Guidelines#customer-list-sortable-fields'
            },
            {
              type: 'link',
              label: 'Organization Expertise',
              href: '/Guidelines/Workspace-Guidelines#organization-expertise'
            },
            {
              type: 'link',
              label: 'Company Size',
              href: '/Guidelines/Workspace-Guidelines#company-size'
            },
            {
              type: 'link',
              label: 'Industries',
              href: '/Guidelines/Workspace-Guidelines#industries'
            },
            {
              type: 'link',
              label: 'Media Budget',
              href: '/Guidelines/Workspace-Guidelines#media-budget'
            },
            {
              type: 'link',
              label: 'Verticals',
              href: '/Guidelines/Workspace-Guidelines#verticals'
            },
          ]
        },
      ],
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
              href: '/Guidelines/Campaign-API-Guidelines#campaign-resource-properties'
            },
            {
              type: 'link',
              label: 'Get Campaign Details by ID',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-details-by-id'
            },
            {
              type: 'link',
              label: 'Get List of Campaigns',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns'
            },
            {
              type: 'link',
              label: 'Get List of Campaigns with Basic Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-with-basic-details'
            },
            {
              type: 'link',
              label: 'Get Basic Details of Campaigns',
              href: '/Guidelines/Campaign-API-Guidelines#get-basic-details-of-campaigns'
            },
            {
              type: 'link',
              label: 'Get List of Campaigns With Filters',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-with-filters'
            },
            {
              type: 'link',
              label: 'Get Campaign Budget Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-budget-details'
            },
            {
              type: 'link',
              label: 'Get List of Campaign Groups',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-groups'
            },
            {
              type: 'link',
              label: 'Get Campaign Count by Status',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-count-by-status'
            },
            {
              type: 'link',
              label: 'Get Campaign Count With Campaign Type',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-count-with-campaign-type'
            },
            {
              type: 'link',
              label: 'Get Campaign Count by Creative Type',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-count-by-creative-type'
            },
            {
              type: 'link',
              label: 'Get Creative Type and Campaign Count',
              href: '/Guidelines/Campaign-API-Guidelines#get-creative-type-and-campaigns-count'
            },
            {
              type: 'link',
              label: 'Get Campaign Start Date',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-start-date'
            },
            {
              type: 'link',
              label: 'Get List of Campaign Start Dates or End Dates',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-start-date'
            },
            {
              type: 'link',
              label: 'Get Campaign Report Data',
              href: '/Guidelines/Campaign-API-Guidelines#get-campaign-report-data'
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
              label: 'Create New PG Campaign',
              href: '/Guidelines/Campaign-API-Guidelines#create-new-pg-campaign'
            },
            {
              type: 'link',
              label: 'Update PG Campaign',
              href: '/Guidelines/Campaign-API-Guidelines#update-pg-campaign'
            },
            {
              type: 'link',
              label: 'Update Campaign by Field',
              href: '/Guidelines/Campaign-API-Guidelines#update-campaign-by-field'
            },
            {
              type: 'link',
              label: 'Change Campaign Name',
              href: '/Guidelines/Campaign-API-Guidelines#change-campaign-name'
            },
            {
              type: 'link',
              label: 'Change Campaign End Date',
              href: '/Guidelines/Campaign-API-Guidelines#change-campaign-end-date'
            },
            {
              type: 'link',
              label: 'Change Campaign Budget',
              href: '/Guidelines/Campaign-API-Guidelines#change-campaign-budget'
            },
            {
              type: 'link',
              label: 'Target Campaign With Conversions',
              href: '/Guidelines/Campaign-API-Guidelines#target-campaigns-with-conversions'
            },
            {
              type: 'link',
              label: 'Update Audience Targeting in Campaigns',
              href: '/Guidelines/Campaign-API-Guidelines#update-audience-targeting-in-campaigns'
            },
            {
              type: 'link',
              label: 'Assign PMP Deals',
              href: '/Guidelines/Campaign-API-Guidelines#assign-pmp-deals'
            },
            {
              type: 'link',
              label: 'Assign PG Deals',
              href: '/Guidelines/Campaign-API-Guidelines#assign-pg-deals'
            },
            {
              type: 'link',
              label: 'Resend Email to Set Margin',
              href: '/Guidelines/Campaign-API-Guidelines#resend-email-to-set-margin'
            },
            {
              type: 'link',
              label: 'Resend Email Reminder to Set Invoice Template',
              href: '/Guidelines/Campaign-API-Guidelines#resend-email-reminder-to-set-invoice-template'
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
              label: 'Insertion Order Resource Properties',
              href: '/Guidelines/Campaign-API-Guidelines#insertion-order-resource-properties'
            },
            {
              type: 'link',
              label: 'Get Insertion Order Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-insertion-order-details'
            },
            {
              type: 'link',
              label: 'Get Advanced Insertion Order Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-advanced-insertion-order-details'
            },
            {
              type: 'link',
              label: 'Get IO Campaign Budget and Details',
              href: '/Guidelines/Campaign-API-Guidelines#get-io-campaign-budget-and-details'
            },
            {
              type: 'link',
              label: 'Get List of Campaign Details Grouped by Insertion Order ID',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-details-grouped-by-insertion-order-id'
            },
            {
              type: 'link',
              label: 'Get List of Campaign Details Grouped by IO ID With Filters',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-details-grouped-by-io-id-with-filters'
            },
            {
              type: 'link',
              label: 'Get List of Campaigns and Report Details by Insertion Order ID',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-and-report-details-by-insertion-order-id'
            },
            {
              type: 'link',
              label: 'Download csv/xlsx File for IO-based Campaign Details',
              href: '/Guidelines/Campaign-API-Guidelines#download-csvxlsx-file-for-io-based-campaign-details'
            },
            {
              type: 'link',
              label: 'Get List of IO Start/End Dates',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-io-startend-dates'
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
              href: '/Guidelines/Campaign-API-Guidelines#create-an-insertion-order'
            },
            {
              type: 'link',
              label: 'Update Insertion Order Details',
              href: '/Guidelines/Campaign-API-Guidelines#update-insertion-order-details'
            },
            {
              type: 'link',
              label: 'Update End Date for Multiple IOs',
              href: '/Guidelines/Campaign-API-Guidelines#update-end-date-for-multiple-ios'
            },
            {
              type: 'link',
              label: 'Update Budget for Multiple IOs',
              href: '/Guidelines/Campaign-API-Guidelines#update-budget-for-multiple-ios'
            },
            {
              type: 'link',
              label: 'Duplicate an Insertion Order',
              href: '/Guidelines/Campaign-API-Guidelines#duplicate-an-insertion-order'
            },
            {
              type: 'link',
              label: 'Delete an Insertion Order',
              href: '/Guidelines/Campaign-API-Guidelines#delete-an-insertion-order'
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
              label: 'Get IO Status List',
              href: '/Guidelines/Campaign-API-Guidelines#get-io-status-list'
            },
            {
              type: 'link',
              label: 'Get List of Campaign Budget Types',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-budget-types'
            },
            {
              type: 'link',
              label: 'Get List of Budget Distribution Methods',
              href: '/Guidelines/Campaign-API-Guidelines#get-list-of-budget-distribution-methods'
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
              href: '/Guidelines/Conversion-API-Guidelines#postback-conversion-resource-properties'
            },
            {
              type: 'link',
              label: 'Pixel Conversion Resource Details',
              href: '/Guidelines/Conversion-API-Guidelines#pixel-conversion-resource-properties'
            },
            {
              type: 'link',
              label: 'Get Conversion Details by ID',
              href: '/Guidelines/Conversion-API-Guidelines#get-conversion-details-by-id'
            },
            {
              type: 'link',
              label: 'Get List of Conversions',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversions'
            },
            {
              type: 'link',
              label: 'Get Conversion Count by Type',
              href: '/Guidelines/Conversion-API-Guidelines#get-conversion-count-by-type'
            },
            {
              type: 'link',
              label: 'Get Campaign Details by Conversion ID',
              href: '/Guidelines/Conversion-API-Guidelines#get-campaign-details-by-conversion-id'
            },
            {
              type: 'link',
              label: 'Get Campaign Details by Conversion ID in Group or Basic',
              href: '/Guidelines/Conversion-API-Guidelines#get-campaign-details-by-conversion-id-in-group-or-basic'
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
              href: '/Guidelines/Conversion-API-Guidelines#create-postback-conversion'
            },
            {
              type: 'link',
              label: 'Create Pixel Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#create-pixel-conversion'
            },
            {
              type: 'link',
              label: 'Delete Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#delete-conversion'
            },
            {
              type: 'link',
              label: 'Update Postback Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#update-postback-conversion'
            },
            {
              type: 'link',
              label: 'Update Pixel Conversion',
              href: '/Guidelines/Conversion-API-Guidelines#update-pixel-conversion'
            },
            {
              type: 'link',
              label: 'Assign Conversion to a Campaign',
              href: '/Guidelines/Conversion-API-Guidelines#assign-conversion-to-a-campaign'
            },
            {
              type: 'link',
              label: 'Assign Email for Pixel Integration',
              href: '/Guidelines/Conversion-API-Guidelines#send-email-for-pixel-integration'
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
              label: 'Get List of Partner Types for Postback Conversions',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-partner-types-for-postback-conversions'
            },
            {
              type: 'link',
              label: 'Get List of Pixel Conversion Advanced Setting Default Values',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-pixel-conversion-advanced-setting-default-values'
            },
            {
              type: 'link',
              label: 'Get List of Conversion Types',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-types'
            },
            {
              type: 'link',
              label: 'Get List of Conversion Status',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-status'
            },
            {
              type: 'link',
              label: 'Get List of Conversion Piggyback Types',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-piggyback-types'
            },
            {
              type: 'link',
              label: 'Get List of Conversion Attribute Types',
              href: '/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-attribute-types'
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
              label: 'Get Customer Finance Details',
              href: '/Guidelines/Finance-Guidelines#finance-details'
            },
            {
              type: 'link',
              label: 'Get List of Payment Transactions for Organization',
              href: '/Guidelines/Finance-Guidelines#get-list-of-payment-transactions-for-organization'
            },
            {
              type: 'link',
              label: 'Get List of Customer Payments',
              href: '/Guidelines/Finance-Guidelines#get-list-of-customer-payments'
            },
            {
              type: 'link',
              label: 'Get Invoice for Organization',
              href: '/Guidelines/Finance-Guidelines#get-invoice-for-organization'
            },
            {
              type: 'link',
              label: 'Get Invoice Payment Details',
              href: '/Guidelines/Finance-Guidelines#get-invoice-payment-details'
            },
            {
              type: 'link',
              label: 'Get List of Invoices for Customer or Organization',
              href: '/Guidelines/Finance-Guidelines#get-list-of-invoices-for-customer-or-organization'
            },
            {
              type: 'link',
              label: 'Get Customer Margin Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-margin-details'
            },
            {
              type: 'link',
              label: 'Update Customer Margin Details',
              href: '/Guidelines/Finance-Guidelines#update-customer-margin-details'
            },
            {
              type: 'link',
              label: 'Get Campaign Margin Details',
              href: '/Guidelines/Finance-Guidelines#get-campaign-margin-details'
            },
            {
              type: 'link',
              label: 'Get Customer PG Fees Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-pg-fees-details'
            },
            {
              type: 'link',
              label: 'Edit Customer PG Fees',
              href: '/Guidelines/Finance-Guidelines#edit-customer-pg-fees'
            },
            {
              type: 'link',
              label: 'Get Customer VLD Finance Details',
              href: '/Guidelines/Finance-Guidelines#get-customer-vld-finance-details'
            },
            {
              type: 'link',
              label: 'Updates Customer VLD Details',
              href: '/Guidelines/Finance-Guidelines#updates-customer-vld-details'
            },
            {
              type: 'link',
              label: 'Get Basic Financial Details',
              href: '/Guidelines/Finance-Guidelines#get-basic-financial-details'
            },
            {
              type: 'link',
              label: 'Available Balance',
              href: '/Guidelines/Finance-Guidelines#available-balance'
            },
            {
              type: 'link',
              label: 'Credit Summary',
              href: '/Guidelines/Finance-Guidelines#credit-summary'
            },
            {
              type: 'link',
              label: 'Offered Credits',
              href: '/Guidelines/Finance-Guidelines#offered-credits'
            },
            {
              type: 'link',
              label: 'Download Invoice',
              href: '/Guidelines/Finance-Guidelines#download-invoice'
            },
            {
              type: 'link',
              label: 'Download Payment Receipt',
              href: '/Guidelines/Finance-Guidelines#download-payment-receipt'
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
              label: 'Update Invoice Settings',
              href: '/Guidelines/Finance-Guidelines#invoice-management'
            },
            {
              type: 'link',
              label: 'Delete Invoice Tax Data',
              href: '/Guidelines/Finance-Guidelines#delete-invoice-tax-data'
            },
            {
              type: 'link',
              label: 'Approve Invoice',
              href: '/Guidelines/Finance-Guidelines#approve-invoice'
            },
            {
              type: 'link',
              label: 'Cancel Invoice',
              href: '/Guidelines/Finance-Guidelines#cancel-invoice'
            },
            {
              type: 'link',
              label: 'Mark Invoice as Paid',
              href: '/Guidelines/Finance-Guidelines#mark-invoice-as-paid'
            },
            {
              type: 'link',
              label: 'Email Invoice',
              href: '/Guidelines/Finance-Guidelines#email-invoice'
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
              label: 'Add Credit to Customer',
              href: '/Guidelines/Finance-Guidelines#credit-management'
            },
            {
              type: 'link',
              label: 'Update Credit Offered to Customer',
              href: '/Guidelines/Finance-Guidelines#update-credit-offered-to-customer'
            },
            {
              type: 'link',
              label: 'Revoke Credit Offered to Customer',
              href: '/Guidelines/Finance-Guidelines#revoke-credit-offered-to-customer'
            },
            {
              type: 'link',
              label: 'Claim Offered Credits',
              href: '/Guidelines/Finance-Guidelines#claim-offered-credits'
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
              label: 'Add Payment for Customer',
              href: '/Guidelines/Finance-Guidelines#payment-management'
            },
            {
              type: 'link',
              label: 'Edit Customer Payment',
              href: '/Guidelines/Finance-Guidelines#edit-customer-payment'
            },
            {
              type: 'link',
              label: 'Approve Payment',
              href: '/Guidelines/Finance-Guidelines#approve-payment'
            },
            {
              type: 'link',
              label: 'Cancel Payment',
              href: '/Guidelines/Finance-Guidelines#cancel-payment'
            },
            {
              type: 'link',
              label: 'Reject Payment',
              href: '/Guidelines/Finance-Guidelines#reject-payment'
            },
            {
              type: 'link',
              label: 'Add Payment from Organization App',
              href: '/Guidelines/Finance-Guidelines#add-payment-from-organization-app'
            },
            {
              type: 'link',
              label: 'Payment with PayPal',
              href: '/Guidelines/Finance-Guidelines#payment-with-paypal'
            },
            {
              type: 'link',
              label: 'Initiate Refund',
              href: '/Guidelines/Finance-Guidelines#initiate-refund'
            },
            {
              type: 'link',
              label: 'Approve Refund',
              href: '/Guidelines/Finance-Guidelines#approve-refund'
            },
            {
              type: 'link',
              label: 'Email Payment Receipt',
              href: '/Guidelines/Finance-Guidelines#email-payment-receipt'
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
              href: '/Guidelines/Finance-Guidelines#static-details-lists'
            },
            {
              type: 'link',
              label: 'Payment Status',
              href: '/Guidelines/Finance-Guidelines#payment-status'
            },
            {
              type: 'link',
              label: 'Invoice Payment Mode Types',
              href: '/Guidelines/Finance-Guidelines#invoice-payment-mode-types'
            },
            {
              type: 'link',
              label: 'Invoice Status',
              href: '/Guidelines/Finance-Guidelines#invoice-status'
            },
            {
              type: 'link',
              label: 'Invoice Payment Term',
              href: '/Guidelines/Finance-Guidelines#invoice-payment-term'
            },
            {
              type: 'link',
              label: 'PG Payment Type',
              href: '/Guidelines/Finance-Guidelines#pg-payment-type'
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
              label: 'Get a List of Insights',
              href: '/Guidelines/Insights-API-Guidelines#get-insights-details'
            },
            {
              type: 'link',
              label: 'Get Campaign Bidding Insights',
              href: '/Guidelines/Insights-API-Guidelines#get-campaign-bidding-insights'
            },
            {
              type: 'link',
              label: 'Get a List of Eligible Audiences',
              href: '/Guidelines/Insights-API-Guidelines#get-a-list-of-eligible-audiences'
            },
            {
              type: 'link',
              label: 'Get Insights Count by Type',
              href: '/Guidelines/Insights-API-Guidelines#get-insights-count-by-type'
            },
            {
              type: 'link',
              label: 'Get Matched Audience Details',
              href: '/Guidelines/Insights-API-Guidelines#get-matched-audience-details'
            },
            {
              type: 'link',
              label: 'Get Matched Audience File URL',
              href: '/Guidelines/Insights-API-Guidelines#get-matched-audience-file-url'
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
              label: 'Create Insights for a Given Audience',
              href: '/Guidelines/Insights-API-Guidelines#insights-management'
            },
            {
              type: 'link',
              label: 'Delete Insights Record',
              href: '/Guidelines/Insights-API-Guidelines#delete-insights-record'
            },
            {
              type: 'link',
              label: 'Regenerate Insights Report',
              href: '/Guidelines/Insights-API-Guidelines#regenerate-insights-report'
            },
            {
              type: 'link',
              label: 'Download Insights Report',
              href: '/Guidelines/Insights-API-Guidelines#download-insights-report'
            },
            {
              type: 'link',
              label: 'Send Insights Email',
              href: '/Guidelines/Insights-API-Guidelines#send-insights-email'
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
              href: '/Guidelines/Insights-API-Guidelines#voter-level-data-reports'
            },
            {
              type: 'link',
              label: 'Get List of VLD Reports',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-vld-reports'
            },
            {
              type: 'link',
              label: 'Get List of Campaigns Eligible for VLD Reports',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-campaigns-eligible-for-vld-reports'
            },
            {
              type: 'link',
              label: 'Generate VLD Report',
              href: '/Guidelines/Insights-API-Guidelines#generate-vld-report'
            },
            {
              type: 'link',
              label: 'Get Cost Assessment for VLD Report',
              href: '/Guidelines/Insights-API-Guidelines#get-cost-assessment-for-vld-report'
            },
            {
              type: 'link',
              label: 'Download VLD Insight Report',
              href: '/Guidelines/Insights-API-Guidelines#download-vld-insight-report'
            },
            {
              type: 'link',
              label: 'Delete VLD Report',
              href: '/Guidelines/Insights-API-Guidelines#delete-vld-report'
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
              label: 'Get List of Insights Types',
              href: '/Guidelines/Insights-API-Guidelines#get-more-insights-details'
            },
            {
              type: 'link',
              label: 'Get List of Insights Status',
              href: '/Guidelines/Insights-API-Guidelines#get-list-of-insights-status'
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
              href: '/Guidelines/Inventory-API-Guide#get-inventory-details'
            },
            {
              type: 'link',
              label: 'Get List of Inventories',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-inventories'
            },
            {
              type: 'link',
              label: 'Get Inventory Distribution',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-distribution'
            },
            {
              type: 'link',
              label: 'Get Inventories Count',
              href: '/Guidelines/Inventory-API-Guide#get-inventories-count'
            },
            {
              type: 'link',
              label: 'Get Inventory Group Types',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-group-types'
            },
            {
              type: 'link',
              label: 'Get List of Blocked Inventories',
              href: '/Guidelines/Inventory-API-Guide#get-list-of-blocked-inventories'
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
              label: 'Campaign Inventory Optimization',
              href: '/Guidelines/Inventory-API-Guide#inventory-management'
            },
            {
              type: 'link',
              label: 'Block Inventories',
              href: '/Guidelines/Inventory-API-Guide#block-inventories'
            },
            {
              type: 'link',
              label: 'Get Inventory Lists in or from CSV Format',
              href: '/Guidelines/Inventory-API-Guide#get-inventory-lists-in-or-from-csv-format'
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
              label: 'Get List of Inventory Groups',
              href: '/Guidelines/Inventory-API-Guide#inventory-groups'
            },
            {
              type: 'link',
              label: 'Get More Inventory Groups Details',
              href: '/Guidelines/Inventory-API-Guide#get-more-inventory-groups-details'
            },
            {
              type: 'link',
              label: 'Contextual Inventory',
              href: '/Guidelines/Inventory-API-Guide#contextual-inventory'
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
              href: '/Guidelines/Inventory-API-Guide#inventory-group-management'
            },
            {
              type: 'link',
              label: 'Add or Remove Mappings to an Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#add-or-remove-mappings-to-an-inventory-group'
            },
            {
              type: 'link',
              label: 'Add or Remove Customers From a Shared Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#add-or-remove-customers-from-a-shared-inventory-group'
            },
            {
              type: 'link',
              label: 'Edit Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#edit-inventory-group'
            },
            {
              type: 'link',
              label: 'Delete Inventory Group',
              href: '/Guidelines/Inventory-API-Guide#delete-inventory-group'
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
              label: 'Get PMP Deals List',
              href: '/Guidelines/Inventory-API-Guide#private-marketplace-pmp-deals-details'
            },
            {
              type: 'link',
              label: 'Get More PMP Details',
              href: '/Guidelines/Inventory-API-Guide#get-more-pmp-details'
            },
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
              href: '/Guidelines/Inventory-API-Guide#pmp-management'
            },
            {
              type: 'link',
              label: 'Create PMP Deal',
              href: '/Guidelines/Inventory-API-Guide#create-pmp-deal'
            },
            {
              type: 'link',
              label: 'Update PMP Deal',
              href: '/Guidelines/Inventory-API-Guide#update-pmp-deal'
            },
            {
              type: 'link',
              label: 'Delete PMP Deal',
              href: '/Guidelines/Inventory-API-Guide#delete-pmp-deal'
            },
          ]
        },
        {
          type: `category`,
          label: `Programmatic Guarantee (PG) Deals Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'link',
              label: 'Get PG Deals List',
              href: '/Guidelines/Inventory-API-Guide#programmatic-guarantee-pg-deals-details'
            },
            {
              type: 'link',
              label: 'Get More PG Deals Details',
              href: '/Guidelines/Inventory-API-Guide#get-more-pg-deals-details'
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
              href: '/Guidelines/Inventory-API-Guide#pg-management'
            },
            {
              type: 'link',
              label: 'Create PG Deal',
              href: '/Guidelines/Inventory-API-Guide#create-pg-deal'
            },
            {
              type: 'link',
              label: 'Update PG Deal Details',
              href: '/Guidelines/Inventory-API-Guide#update-pg-deal-details'
            },
            {
              type: 'link',
              label: 'Delete PG Deal',
              href: '/Guidelines/Inventory-API-Guide#delete-pg-dea'
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
              label: 'Get Geographical Data',
              href: '/Guidelines/Master-API-Guidelines#get-geographical-data'
            },
            {
              type: 'link',
              label: 'Get Zip Codes and State IDs',
              href: '/Guidelines/Master-API-Guidelines#get-zip-codes-and-state-ids'
            },
            {
              type: 'link',
              label: 'Get State segment',
              href: '/Guidelines/Master-API-Guidelines#get-state-segment'
            },
            {
              type: 'link',
              label: 'Get Senate District segment',
              href: '/Guidelines/Master-API-Guidelines#get-senate-district-segment'
            },
            {
              type: 'link',
              label: 'Get House District segment',
              href: '/Guidelines/Master-API-Guidelines#get-house-district-segment'
            },
            {
              type: 'link',
              label: 'Get Gender segment',
              href: '/Guidelines/Master-API-Guidelines#get-gender-segment'
            },
            {
              type: 'link',
              label: 'Get Age Segment',
              href: '/Guidelines/Master-API-Guidelines#get-age-segment'
            },
            {
              type: 'link',
              label: 'Get Language Segment',
              href: '/Guidelines/Master-API-Guidelines#get-language-segment'
            },
            {
              type: 'link',
              label: 'Get Interest Segment',
              href: '/Guidelines/Master-API-Guidelines#get-interest-segment'
            },
            {
              type: 'link',
              label: 'Get Income Range Segment',
              href: '/Guidelines/Master-API-Guidelines#get-income-range-segment'
            },
            {
              type: 'link',
              label: 'Get Ethnicity Segment',
              href: '/Guidelines/Master-API-Guidelines#get-ethnicity-segment'
            },
            {
              type: 'link',
              label: 'Get Ethnicity Group Segment',
              href: '/Guidelines/Master-API-Guidelines#get-ethnicity-group-segment'
            },
            {
              type: 'link',
              label: 'Get DMA Code Segment',
              href: '/Guidelines/Master-API-Guidelines#get-dma-code-segment'
            },
            {
              type: 'link',
              label: 'Get County Segment',
              href: '/Guidelines/Master-API-Guidelines#get-county-segment'
            },
            {
              type: 'link',
              label: 'Get Country Segment',
              href: '/Guidelines/Master-API-Guidelines#get-country-segment'
            },
            {
              type: 'link',
              label: 'Get Congressional District Segment',
              href: '/Guidelines/Master-API-Guidelines#get-congressional-district-segment'
            },
            {
              type: 'link',
              label: 'Get City Segment',
              href: '/Guidelines/Master-API-Guidelines#get-city-segment'
            },
            {
              type: 'link',
              label: 'Get Location Types',
              href: '/Guidelines/Master-API-Guidelines#get-location-types'
            },
            {
              type: 'link',
              label: 'Get Location Details by Location Type',
              href: '/Guidelines/Master-API-Guidelines#get-location-details-by-location-type'
            },
            {
              type: 'link',
              label: 'Get Timezones',
              href: '/Guidelines/Master-API-Guidelines#get-timezones'
            },
            {
              type: 'link',
              label: 'Get Carriers and States by Country ID',
              href: '/Guidelines/Master-API-Guidelines#get-carriers-and-states-by-country-id'
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
              href: '/Guidelines/Master-API-Guidelines#get-creative-data'
            },
            {
              type: 'link',
              label: 'Get Creative Types',
              href: '/Guidelines/Master-API-Guidelines#get-creative-types'
            },
            {
              type: 'link',
              label: 'Get RTB Creative Types',
              href: '/Guidelines/Master-API-Guidelines#get-rtb-creative-types'
            },
            {
              type: 'link',
              label: 'Get Creative sizes',
              href: '/Guidelines/Master-API-Guidelines#get-creative-sizes'
            },
            {
              type: 'link',
              label: 'Get Video Skip Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-skip-parameters'
            },
            {
              type: 'link',
              label: 'Get Video Roll Position Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-roll-position-parameters'
            },
            {
              type: 'link',
              label: 'Get Video Player Size Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-player-size-parameters'
            },
            {
              type: 'link',
              label: 'Get Video Playback Method Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-playback-method-parameters'
            },
            {
              type: 'link',
              label: 'Get Video Placement Type Parameters',
              href: '/Guidelines/Master-API-Guidelines#get-video-placement-type-parameters'
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
              label: 'Get Network Types for targeting',
              href: '/Guidelines/Master-API-Guidelines#get-more-data'
            },
            {
              type: 'link',
              label: 'Get Device OS for targeting',
              href: '/Guidelines/Master-API-Guidelines#get-device-os-for-targeting'
            },
            {
              type: 'link',
              label: 'Get Manufacturers for Targeting',
              href: '/Guidelines/Master-API-Guidelines#get-manufacturers-for-targeting'
            },
            {
              type: 'link',
              label: 'Get Channels for Inventory',
              href: '/Guidelines/Master-API-Guidelines#get-channels-for-inventory'
            },
            {
              type: 'link',
              label: 'Get Verticals',
              href: '/Guidelines/Master-API-Guidelines#get-verticals'
            },
            {
              type: 'link',
              label: 'Get Traffic Types',
              href: '/Guidelines/Master-API-Guidelines#get-traffic-types'
            },
            {
              type: 'link',
              label: 'Get Inventory Types',
              href: '/Guidelines/Master-API-Guidelines#get-inventory-types'
            },
            {
              type: 'link',
              label: 'Get Exchanges',
              href: '/Guidelines/Master-API-Guidelines#get-exchanges'
            },
            {
              type: 'link',
              label: 'Get Deal Curation Types',
              href: '/Guidelines/Master-API-Guidelines#get-deal-curation-types'
            },
            {
              type: 'link',
              label: 'Get Publisher Ad categories',
              href: '/Guidelines/Master-API-Guidelines#get-publisher-ad-categories'
            },
            {
              type: 'link',
              label: 'Get Device Type',
              href: '/Guidelines/Master-API-Guidelines#get-device-type'
            },
            {
              type: 'link',
              label: 'Get Inventory',
              href: '/Guidelines/Master-API-Guidelines#get-inventory'
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
              label: 'Get a List of Reports',
              href: '/Guidelines/Reports-API-Guidelines#get-reports-details'
            },
            {
              type: 'link',
              label: 'Get Report by ID',
              href: '/Guidelines/Reports-API-Guidelines#get-report-by-id'
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
              href: '/Guidelines/Reports-API-Guidelines#reports-management'
            },
            {
              type: 'link',
              label: 'Create Report',
              href: '/Guidelines/Reports-API-Guidelines#create-report'
            },
            {
              type: 'link',
              label: 'Execute a Report',
              href: '/Guidelines/Reports-API-Guidelines#execute-a-report'
            },
            {
              type: 'link',
              label: 'Delete a Report',
              href: '/Guidelines/Reports-API-Guidelines#delete-a-report'
            },
            {
              type: 'link',
              label: 'Edit a Report',
              href: '/Guidelines/Reports-API-Guidelines#edit-a-report'
            },
            {
              type: 'link',
              label: 'Duplicate a Report',
              href: '/Guidelines/Reports-API-Guidelines#duplicate-a-report'
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
              href: '/Guidelines/Reports-API-Guidelines#scheduling-management'
            },
            {
              type: 'link',
              label: 'Update a Report Schedule',
              href: '/Guidelines/Reports-API-Guidelines#update-a-report-schedule'
            },
            {
              type: 'link',
              label: 'Delete Report Schedule',
              href: '/Guidelines/Reports-API-Guidelines#delete-report-schedule'
            },
            {
              type: 'link',
              label: 'Unsubscribe an Email from All Scheduled Reports',
              href: '/Guidelines/Reports-API-Guidelines#unsubscribe-an-email-from-all-scheduled-reports'
            },
            {
              type: 'link',
              label: 'Unsubscribe an Email from a Report Schedule',
              href: '/Guidelines/Reports-API-Guidelines#unsubscribe-an-email-from-a-report-schedule'
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
              label: 'Get URL for Report Download',
              href: '/Guidelines/Reports-API-Guidelines#get-more-report-details'
            },
            {
              type: 'link',
              label: 'Get a List of Conversion\'s Custom Fields',
              href: '/Guidelines/Reports-API-Guidelines#get-a-list-of-conversions-custom-fields'
            },
            {
              type: 'link',
              label: 'Get Report Request Types',
              href: '/Guidelines/Reports-API-Guidelines#get-report-request-types'
            },
            {
              type: 'link',
              label: 'Get Report File Types',
              href: '/Guidelines/Reports-API-Guidelines#get-report-file-types'
            },
            {
              type: 'link',
              label: 'Get Report Delivery Frequency Types',
              href: '/Guidelines/Reports-API-Guidelines#get-report-delivery-frequency-types'
            },
            {
              type: 'link',
              label: 'Get Dimensions and Metrics Details',
              href: '/Guidelines/Reports-API-Guidelines#get-dimensions-and-metrics-details'
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
          type: 'link',
          label: 'Send User Invitation',
          href: '/Guidelines/User-Profile-Guidelines#send-user-invitation',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Validate User Invite',
          href: '/Guidelines/User-Profile-Guidelines#validate-user-invite',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'User Sign-Up',
          href: '/Guidelines/User-Profile-Guidelines#user-sign-up',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Login',
          href: '/Guidelines/User-Profile-Guidelines#login',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'User Logout',
          href: '/Guidelines/User-Profile-Guidelines#user-logout',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Change Password',
          href: '/Guidelines/User-Profile-Guidelines#change-password',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Update User Profile',
          href: '/Guidelines/User-Profile-Guidelines#update-user-profile',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Get List of Users',
          href: '/Guidelines/User-Profile-Guidelines#get-list-of-users',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'User App Access List',
          href: '/Guidelines/User-Profile-Guidelines#user-app-access-list',
          className: "sidebarItem"
        },
        {
          type: 'link',
          label: 'Add App Access for User',
          href: '/Guidelines/User-Profile-Guidelines#add-app-access-for-user',
          className: "sidebarItem"
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
              href: '/Guidelines/Workspace-Guidelines#organization-details'
            },
            {
              type: 'link',
              label: 'Get List of Allowed Organizations',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-allowed-organizations'
            },
            {
              type: 'link',
              label: 'Get Organization Details',
              href: '/Guidelines/Workspace-Guidelines#get-organization-details'
            },
            {
              type: 'link',
              label: 'Check for Available Domain',
              href: '/Guidelines/Workspace-Guidelines#check-for-available-domain'
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
              href: '/Guidelines/Workspace-Guidelines#organization-management'
            },
            {
              type: 'link',
              label: 'Update Organization Email',
              href: '/Guidelines/Workspace-Guidelines#update-organization-email'
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
              href: '/Guidelines/Workspace-Guidelines#workspace-management'
            },
            {
              type: 'link',
              label: 'Update Workspace Domain',
              href: '/Guidelines/Workspace-Guidelines#update-workspace-domain'
            },
            {
              type: 'link',
              label: 'Validate Workspace Domain',
              href: '/Guidelines/Workspace-Guidelines#validate-workspace-domain'
            },
            {
              type: 'link',
              label: 'Get List of Workspaces',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-workspaces'
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
              href: '/Guidelines/Workspace-Guidelines#customer-details'
            },
            {
              type: 'link',
              label: 'Get Customer Details',
              href: '/Guidelines/Workspace-Guidelines#get-customer-details'
            },
            {
              type: 'link',
              label: 'Get Basic Customer Details',
              href: '/Guidelines/Workspace-Guidelines#get-basic-customer-details'
            },
            {
              type: 'link',
              label: 'Get Multi-level Customers List',
              href: '/Guidelines/Workspace-Guidelines#get-multi-level-customers-list'
            },
            {
              type: 'link',
              label: 'Get Immediate Customers List',
              href: '/Guidelines/Workspace-Guidelines#get-immediate-customers-list'
            },
            {
              type: 'link',
              label: 'Customer Operations Resource Properties',
              href: '/Guidelines/Workspace-Guidelines#customer-operations-resource-properties'
            },
            {
              type: 'link',
              label: 'Get Customer Operations Details',
              href: '/Guidelines/Workspace-Guidelines#get-customer-operations-details'
            },
            {
              type: 'link',
              label: 'Get Customer Operations Label List',
              href: '/Guidelines/Workspace-Guidelines#get-customer-operations-label-list'
            },
            {
              type: 'link',
              label: 'Get Count of Customers by Status',
              href: '/Guidelines/Workspace-Guidelines#get-count-of-customers-by-status'
            },
            {
              type: 'link',
              label: 'Get List of Users for Selected Customer',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-users-for-selected-customer'
            },
            {
              type: 'link',
              label: 'Get List of User Assigned Customers',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-user-assigned-customers'
            },
            {
              type: 'link',
              label: 'Get User\'s Remaining Customers',
              href: '/Guidelines/Workspace-Guidelines#get-users-remaining-customers'
            },
            {
              type: 'link',
              label: 'Get List of Customer\'s Allowed Applications',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-customers-allowed-applications'
            },
            {
              type: 'link',
              label: 'Get List of Remaining Apps for Customer',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-remaining-apps-for-customer'
            },
            {
              type: 'link',
              label: 'Get List of Advertisers for Customer',
              href: '/Guidelines/Workspace-Guidelines#get-list-of-advertisers-for-customer'
            },
            {
              type: 'link',
              label: 'Get Customer Config Details',
              href: '/Guidelines/Workspace-Guidelines#get-customer-config-details'
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
              href: '/Guidelines/Workspace-Guidelines#customer-management'
            },
            {
              type: 'link',
              label: 'Resend Customer Invite',
              href: '/Guidelines/Workspace-Guidelines#resend-customer-invite'
            },
            {
              type: 'link',
              label: 'Cancel Customer Invite',
              href: '/Guidelines/Workspace-Guidelines#cancel-customer-invite'
            },
            {
              type: 'link',
              label: 'Customer Signup',
              href: '/Guidelines/Workspace-Guidelines#customer-signup'
            },
            {
              type: 'link',
              label: 'Get Customer Signup Form',
              href: '/Guidelines/Workspace-Guidelines#get-customer-signup-form'
            },
            {
              type: 'link',
              label: 'Assign Customer to User',
              href: '/Guidelines/Workspace-Guidelines#assign-customer-to-user'
            },
            {
              type: 'link',
              label: 'Unassign Customer from User',
              href: '/Guidelines/Workspace-Guidelines#unassign-customer-from-user'
            },
            {
              type: 'link',
              label: 'Approve Customer',
              href: '/Guidelines/Workspace-Guidelines#approve-customer'
            },
            {
              type: 'link',
              label: 'Reject Customer',
              href: '/Guidelines/Workspace-Guidelines#reject-customer'
            },
            {
              type: 'link',
              label: 'Add or Revoke Customer App Access',
              href: '/Guidelines/Workspace-Guidelines#add-or-revoke-customer-app-access'
            },
            {
              type: 'link',
              label: 'Put Customer On-Hold',
              href: '/Guidelines/Workspace-Guidelines#put-customer-on-hold'
            },
            {
              type: 'link',
              label: 'Re-Activate Customer',
              href: '/Guidelines/Workspace-Guidelines#re-activate-customer'
            },
            {
              type: 'link',
              label: 'Add Label for Customer Operation',
              href: '/Guidelines/Workspace-Guidelines#add-label-for-customer-operation'
            },
            {
              type: 'link',
              label: 'Enable Bid Shading for Customer',
              href: '/Guidelines/Workspace-Guidelines#enable-bid-shading-for-customer'
            },
            {
              type: 'link',
              label: 'Update Customer Operations Details',
              href: '/Guidelines/Workspace-Guidelines#update-customer-operations-details'
            },
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
              href: '/Guidelines/Workspace-Guidelines#get-list-of-advertiser-profile-and-details'
            },
            {
              type: 'link',
              label: 'Get List of Advertiser Profile and Details',
              href: '/Guidelines/Workspace-Guidelines#resend-customer-invite'
            },
            {
              type: 'link',
              label: 'Add Advertiser Profile',
              href: '/Guidelines/Workspace-Guidelines#add-advertiser-profile'
            },
            {
              type: 'link',
              label: 'Edit Advertiser Profile',
              href: '/Guidelines/Workspace-Guidelines#edit-advertiser-profile'
            },
            {
              type: 'link',
              label: 'Delete Advertiser Profile',
              href: '/Guidelines/Workspace-Guidelines#delete-advertiser-profile'
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
              label: 'Organization Workspace Status',
              href: '/Guidelines/Workspace-Guidelines#static-details-lists'
            },
            {
              type: 'link',
              label: 'Customer Type',
              href: '/Guidelines/Workspace-Guidelines#customer-type'
            },
            {
              type: 'link',
              label: 'Customer Payment Type',
              href: '/Guidelines/Workspace-Guidelines#customer-payment-type'
            },
            {
              type: 'link',
              label: 'Customer Account Type',
              href: '/Guidelines/Workspace-Guidelines#customer-account-type'
            },
            {
              type: 'link',
              label: 'Customer List Sortable Fields',
              href: '/Guidelines/Workspace-Guidelines#customer-list-sortable-fields'
            },
            {
              type: 'link',
              label: 'Organization Expertise',
              href: '/Guidelines/Workspace-Guidelines#organization-expertise'
            },
            {
              type: 'link',
              label: 'Company Size',
              href: '/Guidelines/Workspace-Guidelines#company-size'
            },
            {
              type: 'link',
              label: 'Industries',
              href: '/Guidelines/Workspace-Guidelines#industries'
            },
            {
              type: 'link',
              label: 'Media Budget',
              href: '/Guidelines/Workspace-Guidelines#media-budget'
            },
            {
              type: 'link',
              label: 'Verticals',
              href: '/Guidelines/Workspace-Guidelines#verticals'
            },
          ]
        },
      ],
    },
  ]
}

export default sidebars;
