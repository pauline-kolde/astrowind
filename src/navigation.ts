import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/#'),
          },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
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
        { text: 'ColorCloud', href: 'https://color.cloud/'},
        { text: 'CX User Group', href: 'https://www.linkedin.com/company/customer-experience-user-group/'  },
        { text: 'DACH CI User Group', href: 'https://www.linkedin.com/company/microsoftcustomerinsightsdachcommunity/'},
        
      
        
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
        {
          text: 'Contact me',
          href: getPermalink('/contact'),
        },
               
      ],
    },
    
    
    ],
  actions: [{ text: 'Subscribe', href: '/subscribe'}],
};

export const footerData = {
  links: [
    {
      title: 'Socials',
      links: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/paulinekolde/'},
        { text: 'Youtube', href: 'https://www.youtube.com/@paulinekolde' },
        { text: 'MVP', href: 'https://mvp.microsoft.com/de-DE/MVP/profile/6ccc9e35-afef-49f1-88a1-e95e1e64806f'},
      ],
    },
    {
      title: 'Dynamics 365',
      links: [
        { text: 'What is New in CI-J', href: 'https://learn.microsoft.com/en-us/dynamics365/customer-insights/journeys/whats-new-marketing'},
        { text: 'What is New in CI-D', href: 'https://learn.microsoft.com/en-us/dynamics365/customer-insights/data/whats-new-customer-insights' },
        { text: 'MS Learn', href: 'https://learn.microsoft.com/en-us/dynamics365/customer-insights/'},
             ],
    },
    {
      title: 'Community',
      links: [
        { text: 'ColorCloud', href: 'https://color.cloud/'},
        { text: 'CX User Group', href: 'https://www.linkedin.com/company/customer-experience-user-group/'},
        { text: 'DACH CI User Group', href: 'https://www.linkedin.com/company/microsoftcustomerinsightsdachcommunity/'
          },
        
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About me', href: '/about' },
        { text: 'CRMK Deutschland', href: 'https://www.crmk.eu/'},
       
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Imprint', href: getPermalink('/imprint') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
     { text: 'Contact', href: getPermalink('/contact') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/paulinekolde/'},
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@paulinekolde' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/pauline-kolde'},
  ],
  footNote: `
    2025 · Made with the help of <a class="text-[#476a30] underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
