import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About us',
      href: getPermalink('/#about'),
    },
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [{ text: 'Services', href: '#services' }],
    },
    {
      title: 'Company',
      links: [{ text: 'About', href: '#about' }],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/binary-craft-llc' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/binarycraft?igsh=MXhpbHd4aW1mcHBpbg==',
    },
  ],
  footNote: `
    Binary Craft 2024· All rights reserved.
  `,
};
