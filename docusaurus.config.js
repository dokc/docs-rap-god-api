// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://dokc.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Data on Kuberentes", // Usually your GitHub org/user name.
  projectName: "dokc-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {},
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} **/
    {
      hideableSidebar: false,
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "How-to-DoK",
        logo: {
          alt: "How-to-Dok Logo",
          src: "img/logo.svg",
        },
        hideOnScroll: true,
        items: [
          {
            to: "docs/Tutorials/intro",
            position: "left",
            label: "Setting up",
          },
          {
            to: "docs/Documentation/introduction",
            position: "left",
            label: "Docs",
          },
          {
            to: "docs/videos/markdown-features",
            position: "left",
            label: "Videos",
          },
          {
            to: "blog",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/dokc",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/Tutorials/intro/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://go.dok.community/slack",
              },
              {
                label: "Website",
                href: "https://dok.community/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/dokcommunity/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/dokc",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
