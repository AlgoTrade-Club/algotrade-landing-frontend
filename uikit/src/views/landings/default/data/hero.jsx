// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Trade in One Place
        </Typography>
        {/* <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Possibilities
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/UpChart.svg"
              sx={{ width: 16, height: 16 }}
              alt="celebration"
              loading="lazy"
            />
          }
        /> */}
      </>
    )
  },
  headLine: 'Trade with Ease, Trade with Tradnomic',
  captionLine: "HammerTrade is a powerful platform that combines advanced automation with machine learning to streamline every stage of algorithmic strategy development from building and backtesting to optimizing, deploying, and monitoring all within a seamless solution designed to accelerate performance and scale effortlessly.",
  primaryBtn: { children: 'Explore The Platform', href: SECTION_PATH },
  videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/saasable-intro.mp4',
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: [
    // { image: '/assets/images/shared/react.svg', title: 'React 18' },
    // { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    // { image: '/assets/images/shared/material-ui.svg', title: 'Material UI v6' },
    // { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    // { image: '/assets/images/shared/javascript.svg', title: 'JavaScript' },
    // { image: '/assets/images/shared/m3.svg', title: 'Material 3' },
    // { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
