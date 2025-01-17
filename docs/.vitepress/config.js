import {defineConfig} from 'vitepress'
let reportPath = '/report'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/website',
    title: "PPS-23-Ulisse",
    description: "Ulisse an Train Infrastructure Similator",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {text: 'Intro', link: `${reportPath}/0-intro`},
            {text: 'Develop process', link: `${reportPath}/1-dev-process`},
            {text: 'Requirements', link: `${reportPath}/2-requirements`},
            {text: 'Architectural Design', link: `${reportPath}/3-arch-design`},
            {text: 'Detailed Design', link: `${reportPath}/4-details-design`},
            {text: 'Implementation',
                link: '/5-implementation',
                items: [
                    {text: 'Bravetti Federico', link: `${reportPath}/5-impl-bravetti`},
                    {text: 'Montesinos Buizo Julio Manuel', link: `${reportPath}/5-impl-buizo`},
                    {text: 'Violani Matteo', link: `${reportPath}/5-impl-violani`},
                ]
            },
            {text: 'Testing', link: `${reportPath}/5-testing`},
            {text: 'Retrospective', link: `${reportPath}/6-retrospective`},

        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/dev-pps/pps-23-ulisse'}
        ]
    }
})
