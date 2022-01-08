const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const pkg = require('../package.json');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Quiver',
  tagline:
    'A collection of React hooks and components, making it easy to develop frontends for Ethereum dApps.',
  url: 'https://raid-guild.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Raid Guild',
  projectName: 'quiver',
  trailingSlash: true,

  plugins: [
    [
      'docusaurus-plugin-typedoc-api',
      {
        projectRoot: path.join(__dirname, '..'),
        packages: ['.'],
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/raid-guild/quiver/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Quiver',
        logo: {
          alt: 'Raid Guild Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: `v${pkg.version}`,
            position: 'left',
            href: `https://www.npmjs.com/package/${pkg.name}`,
          },
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'api',
            label: 'API',
            position: 'left',
          },
          {
            href: 'https://github.com/raid-guild/quiver',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Raid Guild.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'ZZXUX8PJ0B',
        apiKey: '6aa9b990400c66b254b6fa1899fa63fb',
        indexName: 'quiver',
        contextualSearch: false,
        searchParameters: {},
      },
    }),
});
