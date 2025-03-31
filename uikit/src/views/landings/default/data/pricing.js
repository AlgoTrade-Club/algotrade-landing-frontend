// @project
import { BUY_NOW_URL, FREEBIES_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const pricing = {
  heading: 'Pricing Plans for Every Trader',
  caption: 'Choose the plan that aligns with your trading needs and goals.',
  features: [
    { id: 1, label: 'Market Data Access' },
    { id: 2, label: 'Basic Sentiment Analysis' },
    { id: 3, label: 'Advanced Sentiment Analysis' },
    { id: 4, label: 'Technical Indicators' },
    { id: 5, label: 'Machine Learning Models' },
    { id: 6, label: 'Risk Management Tools' },
    { id: 7, label: 'Strategy Backtesting' },
    { id: 8, label: 'API Access' },
    { id: 9, label: 'Priority Support' },
    { id: 10, label: 'Custom Strategy Development' }
  ],
  plans: [
    {
      title: 'Basic',
      price: 0,
      active: false,
      featureTitle: 'Features',
      content: 'Perfect for beginners exploring algorithmic trading',
      contentLink: { children: 'Learn more', href: '#', ...linkProps },
      exploreLink: { children: 'Get Started Free', href: FREEBIES_URL, ...linkProps },
      featuresID: [1, 2, 4]
    },
    {
      title: 'Pro',
      active: true,
      price: 49,
      featureTitle: 'Features',
      content: 'For serious traders looking for an edge',
      contentLink: { children: 'Learn more', href: '#', ...linkProps },
      exploreLink: { children: 'Upgrade to Pro', href: BUY_NOW_URL, ...linkProps },
      featuresID: [1, 2, 3, 4, 5, 7, 8]
    },
    {
      title: 'Enterprise',
      active: false,
      price: 99,
      featureTitle: 'Features',
      content: 'For professional trading firms and institutions',
      contentLink: { children: 'Learn more', href: '#', ...linkProps },
      exploreLink: { children: 'Contact Sales', href: '#', ...linkProps },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ]
};
