// @project
import branding from '@/branding.json';

export const contactUS = {
  heading: 'Get Started with Trading',
  caption: 'Connect with our team to start your trading journey or get expert support.',
  list: [
    {
      icon: 'tabler-phone',
      title: 'Trading Support',
      content: 'Get help with your trading account and platform features.',
      link: { children: 'Contact Support', href: branding.company.socialLink.support, target: '_blank', rel: 'noopener noreferrer' }
    },
    {
      icon: 'tabler-help-circle',
      title: 'Trading FAQ',
      content: 'Find answers about trading, accounts, and features',
      link: { children: 'Get Answers', href: '/faq' }
    },
    {
      icon: 'tabler-folder-check',
      title: 'Market Updates',
      content: 'Stay informed with our latest market analysis',
      link: { children: 'Market News', href: '/market-updates' }
    }
  ]
};
