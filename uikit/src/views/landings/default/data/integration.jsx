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
    { label: 'Project Management' },
    { label: 'Customer Relationship Management CRM' },
    { label: 'HR & Recruitment' },
    { label: 'Finance & Accounting' },
    { label: 'E-commerce Solutions' },
    { label: 'Marketing Automation' },
    { label: 'Healthcare & Telemedicine' },
    { label: 'LMS' },
    { label: 'AI & ML Platforms' },
    { label: 'Inventory & Supply Chain Management' },
    { label: 'Customer Support & Help Desk' },
    { label: 'Email Marketing and SEO Tools' },
    { label: 'Networking Platforms' },
    { label: 'Blogging Tools' },
    { label: 'Data Analytics & Business Intelligence' }
  ]
};
