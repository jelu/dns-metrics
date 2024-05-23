export default {
    title: "DNS Metrics Documentation",
    url: "https://jelu.github.io",
    baseUrl: "/dns-metrics",
    presets: [["@docusaurus/preset-classic",
    {
        docs: {
            sidebarPath: './sidebars.js',
        },
        blog: false,
    }]],
    themes: [["docusaurus-json-schema-plugin", {}]],
};
