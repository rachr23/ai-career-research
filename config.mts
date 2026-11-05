import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Career Research',
  description: 'Research on emerging AI careers, responsibilities, skills, and career pathways.',
  base: '/ai-career-research/',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'Career Roles', link: '/roles' }, { text: 'My Direction', link: '/direction' }],
    sidebar: [
      { text: 'Research', items: [
        { text: 'Emerging AI Careers', link: '/roles' },
        { text: 'Job Description Research', link: '/job-descriptions' },
        { text: 'Skills & Qualifications', link: '/skills' },
        { text: 'Career Comparison', link: '/comparison' },
        { text: 'My Career Direction', link: '/direction' },
        { text: 'Sources & AI Usage', link: '/sources' }
      ] }
    ],
    socialLinks: []
  }
})
