// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const pkg = require('../quiver/package.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'quiver',
    tagline: 'A collection of React hooks and components for Ethereum dApps',
    url: 'https://raid-guild.github.io/',
    baseUrl: '/quiver/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'raid-guild', // Usually your GitHub org/user name.
    projectName: 'quiver', // Usually your repo name.
    trailingSlash: true,
    plugins: [
        [
            'docusaurus-plugin-typedoc-api',
            {
                projectRoot: path.join(__dirname, '..', 'quiver'),
                packages: ['.'],
            },
        ],
        async function DocusaurusTailwind(context, options) {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require('tailwindcss'));
                    postcssOptions.plugins.push(require('autoprefixer'));
                    return postcssOptions;
                },
            };
        },
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/raid-guild/quiver/edit/main/website/',
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
                logo: {
                    alt: 'Quiver Logo',
                    src: 'img/quiver-logo-black.svg',
                    srcDark: 'img/quiver-logo-white.svg',
                },
                items: [
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
                        label: `v${pkg.version}`,
                        position: 'left',
                        href: `https://www.npmjs.com/package/${pkg.name}`,
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
                links: [
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/fVm6zXgC4t',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/raidguild',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Raid Guild.`,
            },
            algolia: {
                appId: 'ZZXUX8PJ0B',
                apiKey: '6aa9b990400c66b254b6fa1899fa63fb',
                indexName: 'quiver',
                contextualSearch: false,
                searchParameters: {},
            },
        }),
};

module.exports = config;
