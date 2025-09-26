import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/#'),
      /*links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],*/
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Community',
      links: [
        { text: 'ColorCloud', href: 'https://color.cloud/',  target: "_blank"},
        { text: 'CX User Group', href: 'https://www.linkedin.com/company/customer-experience-user-group/' , target: "_blank" },
        { text: 'DACH CI User Group', href: 'https://www.linkedin.com/company/microsoftcustomerinsightsdachcommunity/',  target: "_blank" },
        
      
        
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'About me',
          href: getPermalink('/about'),
        },
        {
          text: 'CRMK Deutschland',
          href: 'https://www.crmk.eu/',
           target: "_blank"
        },
               
      ],
    },
    
    ],
  actions: [{ text: 'Contact me', href: '/contact', target: "_blank" }],
};

export const footerData = {
  links: [
    {
      title: 'Socials',
      links: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/paulinekolde/', target: "_blank" },
        { text: 'Youtube', href: 'https://www.youtube.com/@paulinekolde', target: "_blank" },
        { text: 'MVP', href: 'https://mvp.microsoft.com/de-DE/MVP/profile/6ccc9e35-afef-49f1-88a1-e95e1e64806f' , target: "_blank"},
      ],
    },
    {
      title: 'Dynamics 365',
      links: [
        { text: 'Whats New in CI-J', href: 'https://learn.microsoft.com/en-us/dynamics365/customer-insights/journeys/whats-new-marketing',  target: '_blank'},
        { text: 'Whats New in CI-D', href: 'https://learn.microsoft.com/en-us/dynamics365/customer-insights/data/whats-new-customer-insights',  target: '_blank' },
        { text: 'MS Learn', href: 'https://learn.microsoft.com/en-us/dynamics365/customer-insights/',  target: '_blank'},
             ],
    },
    {
      title: 'Community',
      links: [
        { text: 'ColorCloud', href: 'https://color.cloud/',  target: '_blank'},
        { text: 'CX User Group', href: 'https://www.linkedin.com/company/customer-experience-user-group/' , target: "_blank"},
        { text: 'DACH CI User Group', href: 'https://www.linkedin.com/company/microsoftcustomerinsightsdachcommunity/',  target: "_blank"
          },
        
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About me', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'CRMK Deutschland', href: 'https://www.crmk.eu/' , target: "_blank"},
       
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Imprint', href: getPermalink('/imprint') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/paulinekolde/', target: "_blank" },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@paulinekolde', target: "_blank" },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/pauline-kolde', target: "_blank" },
  ],
  footNote: `
    2025 · Made with the help of <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
