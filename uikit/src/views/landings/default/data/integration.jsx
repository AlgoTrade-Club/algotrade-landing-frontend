// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'Tailored for Finance',
  captionLine: 'Develop and manage your models all in one place.  ',
  primaryBtn: {
    children: 'Documentation',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'Stock Market Trading' },
    { label: 'Cryptocurrency Trading' },
    { label: 'Technical Analysis' },
    { label: 'Algorithmic Trading' },
    { label: 'Portfolio Management' },
    { label: 'Risk Management' },
    { label: 'Market Analysis' },
    { label: 'Trading Automation' },
    { label: 'AI Trading Strategies' },
    { label: 'Real-time Market Data' },
    { label: 'Trading Analytics' },
    { label: 'Financial Reporting' },
    { label: 'Asset Management' },
    { label: 'Trading Education' },
    { label: 'Market Intelligence' }
  ]
};
