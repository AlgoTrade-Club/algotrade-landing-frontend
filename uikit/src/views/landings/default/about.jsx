'use client';

// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

// @project
import { SmallHero3 } from '@/blocks/small-hero';
import { Feature9 } from '@/blocks/feature';
import { Team1 } from '@/blocks/team';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import { smallHero4 } from './data/small-hero';
import { feature9 } from './data/feature';
import { team } from './data/team';

/***************************  PAGE - ABOUT US  ***************************/

export default function AboutUs() {
  useDataThemeMode();

  return (
    <>
      {/* Hero Section */}
      <SmallHero3 
        headLine="Tradnomic"
        captionLine="Revolutionizing Trading"
        chip={{
          label: 'We are hiring! ',
          link: { children: 'learn more', href: '#' }
        }}
      />

      {/* Mission & Vision Section */}
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3} alignItems="center" textAlign="center">
              <Typography variant="h2" sx={{ color: '#002855' }} align="center">Our Mission</Typography>
              <Typography variant="body1" align="center">
                At Tradnomic, our mission is to revolutionize high-frequency trading through innovative machine learning solutions. We combine cutting-edge LLM technology with real-time market analysis to create sophisticated trading algorithms that adapt to dynamic market conditions.
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} alignItems="center" textAlign="center">
              <Typography variant="h2" sx={{ color: '#002855' }} align="center">Our Vision</Typography>
              <Typography variant="body1" align="center">
                We envision transforming the landscape of algorithmic trading by harnessing the power of advanced machine learning and artificial intelligence. Our goal is to develop intelligent trading systems that can process vast amounts of market data and make informed decisions in milliseconds.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </ContainerWrapper>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: SECTION_COMMON_PY }}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h2" align="center" sx={{ color: '#002855' }}>Our Story</Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: 800 }}>
            In 2023, fellow UC Davis students Victor Huang and Rafael Diaz Cruz recognized the transformative potential of Large Language Models (LLMs) in revolutionizing High-Frequency Trading (HFT) Algorithms that power the market.
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: 800 }}>
            Our innovative approach combines cutting-edge Machine Learning advancements with real-time news analysis, enabling unprecedented insights into public opinion and market sentiment. Our platform is powered by custom-built neural network models designed for robust decision-making with minimal maintenance, capable of adapting to virtually any market condition.
          </Typography>
        </Stack>
      </Container>

      {/* Valuable Advisors Section */}
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY, bgcolor: 'background.neutral' }}>
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center">
            <Typography variant="h2" align="center" sx={{ color: '#002855' }}>Our Valuable Advisors</Typography>
            <Typography variant="body1" align="center" sx={{ maxWidth: 800, mb: 4 }}>
              We are privileged to have the guidance of distinguished industry experts who share our vision for innovation in algorithmic trading.
            </Typography>
            
:            <Grid container spacing={4}>
              <Grid xs={12} md={6}>
                <Box sx={{
                  textAlign: 'center',
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: 1,
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 3
                  }
                }}>
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      src="/assets/images/team/prem-jain.jpg"
                      alt="Prem Jain"
                      sx={{
                        width: 120,
                        height: 120,
                        mb: 2,
                        border: '4px solid',
                        borderColor: '#C99700'
                      }}
                    />
                    <Typography variant="h5" sx={{ color: '#002855' }}>Dr. Prem Jain</Typography>
                    <Typography variant="subtitle1" sx={{ color: '#C99700', fontWeight: 'medium' }}>
                      Technical Advisor
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Retired CEO and Co-Founder of Pensando Systems, a pioneering cloud and enterprise data center startup. As a key leader at Cisco Systems for 23 years, Dr. Jain was known as part of the "heart, soul and brains" of Cisco, leading innovative startups that created every breakout product in Cisco's portfolio for two decades.
                    </Typography>
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{
                  textAlign: 'center',
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: 1,
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 3
                  }
                }}>
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      src="/assets/images/team/dipak-ghosal.jpg"
                      alt="Dipak Ghosal"
                      sx={{
                        width: 120,
                        height: 120,
                        mb: 2,
                        border: '4px solid',
                        borderColor: '#C99700'
                      }}
                    />
                    <Typography variant="h5" sx={{ color: '#002855' }}>Dr. Dipak Ghosal</Typography>
                    <Typography variant="subtitle1" sx={{ color: '#C99700', fontWeight: 'medium' }}>
                      Research Advisor
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Distinguished Professor of Computer Science at UC Davis and holder of the Prem Chand Jain Family Presidential Chair for Innovation and Entrepreneurship. With extensive expertise in high-speed networks and distributed computing, Dr. Ghosal brings over three decades of research excellence and industry experience to our algorithmic trading strategies.
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </ContainerWrapper>

      {/* What We Do Section */}
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY, bgcolor: 'background.neutral' }}>
        <Stack spacing={4}>
          <Typography variant="h2" align="center" sx={{ color: '#002855' }}>What We Do</Typography>
          <Grid container spacing={4}>
            <Grid xs={12} md={4}>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <Typography variant="h3" sx={{ color: '#002855' }}>Workshops & Events</Typography>
                <Typography variant="body1">
                  Regular workshops on business fundamentals, entrepreneurship skills, and industry trends. Networking events connecting students with successful entrepreneurs and investors.
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <Typography variant="h3" sx={{ color: '#002855' }}>Startup Support</Typography>
                <Typography variant="body1">
                  Mentorship programs, resource sharing, and guidance on business plan development. Access to funding opportunities and pitch competition preparation.
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <Typography variant="h3" sx={{ color: '#002855' }}>Community Building</Typography>
                <Typography variant="body1">
                  Creating a supportive network of student entrepreneurs, facilitating collaborations, and fostering innovation through team projects and hackathons.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </ContainerWrapper>

      {/* Team Section */}
      <Team1 />
    </>
  );
}