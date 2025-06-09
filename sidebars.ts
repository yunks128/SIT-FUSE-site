import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/overview',
        'introduction/key-concepts',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/requirements',
        'installation/setup',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/wildfire-detection',
        'tutorials/algal-bloom-analysis',
        'tutorials/multi-sensor-fusion',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/environmental-monitoring',
        'use-cases/research-applications',
        'use-cases/case-studies',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/core-functions',
        'api-reference/data-processing',
        'api-reference/model-training',
      ],
    },
    {
      type: 'category',
      label: 'Technical Guide',
      items: [
        'technical-guide/architecture',
        'technical-guide/algorithms',
        'technical-guide/performance',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/contributing',
        'community/support',
        'community/publications',
      ],
    },
  ],
};

export default sidebars;
