// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pokenode-ts',
  tagline: 'A lightweight Node.js wrapper for the PokéAPI with built-in types.',
  url: 'https://pokenode-ts.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/red-pokeball.svg',
  organizationName: 'Gabb-c',
  projectName: 'pokenode-ts',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Gabb-c/pokenode-ts-docs/edit/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Gabb-c/pokenode-ts-docs/edit/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      Image: 'img/banner.jpg',
      navbar: {
        title: 'Pokenode-ts',
        logo: {
          alt: 'My Site Logo',
          src: 'img/red-pokeball.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Gabb-c/pokenode-ts',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Clients',
                to: '/docs/clients/berry-client',
              },
              {
                label: 'Guides',
                to: '/docs/guides/options',
              },
              {
                label: 'Typings',
                to: '/docs/typings/berry-typings',
              },
              {
                label: 'Contribuiting',
                to: '/docs/contribuiting/contributing',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/Gabb-c/pokenode-ts',
              },
              {
                label: 'Ko-fi',
                href: 'https://ko-fi.com/pokenodets',
              },
              {
                label: 'Pull Requests',
                href: 'https://github.com/Gabb-c/pokenode-ts/pulls',
              },
              {
                label: 'Issues',
                href: 'https://github.com/Gabb-c/pokenode-ts/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pokenode-ts, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
