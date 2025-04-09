// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL, PAGE_PATH } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  secondaryBtn: {
    children: <SvgIcon name="tabler-brand-github" color="primary.main" size={18} />,
    href: FREEBIES_URL,
    ...linkProps,
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Log in', href: BUY_NOW_URL, ...linkProps },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    { id: 'about', title: 'About', link: PAGE_PATH.aboutPage },
    // { id: 'components', title: 'Components', link: SECTION_PATH },
    landingMegamenu,
    // { id: 'dashboard', title: 'Dashboard', link: ADMIN_PATH, ...linkProps },
    { id: 'contact', title: 'Contact', link: PAGE_PATH.contactPage }

  ]
};
