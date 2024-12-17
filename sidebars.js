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
  ]
}

export default sidebars;
