import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @types

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const ThemeAI = dynamic(() => import('@/views/landings/ai/theme'));
const MainLayout = dynamic(() => import('@/views/landings/default/layout'));

/***************************  LAYOUT - DEFAULT  ***************************/

export default function DefaultLayout({ children }) {
  return (
    <ThemeAI>
      <MainLayout>
        <>
          {children}

          {/* scroll to top section */}
          <ScrollFab />
        </>
      </MainLayout>
    </ThemeAI>
  );
}

DefaultLayout.propTypes = { children: PropTypes.any };
