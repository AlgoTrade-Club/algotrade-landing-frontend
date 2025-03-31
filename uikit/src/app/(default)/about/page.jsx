import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const AboutUs = dynamic(() => import('@/views/landings/default/about'));

/***************************  METADATA - ABOUT US  ***************************/

export const metadata = { ...SEO_CONTENT.about, openGraph: { ...SEO_CONTENT.about, url: PAGE_PATH.about } };

/***************************  PAGE - ABOUT US  ***************************/

export default function AboutPage() {
  return <AboutUs />;
}