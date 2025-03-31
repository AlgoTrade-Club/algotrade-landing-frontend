'use client';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import { Themes } from '@/config';

// @next
import NextLink from 'next/link';

/***************************  PRODUCTS PAGE  ***************************/

const breadcrumbs = [
  { title: 'Home', to: '/' },
  { title: 'Products' }
];

const products = [
  {
    title: 'Sentiment Analyzer',
    description: 'Real-time sentiment analysis for cryptocurrencies based on news and social media data.',
    image: '/assets/images/mega-menu/ai-light.svg',
    theme: Themes.THEME_AI,
    link: '/products/sentiment-analyzer',
    status: 'Live'
  },
  {
    title: 'Machine Learning Trading Model',
    description: 'Advanced machine learning models that predict market movements with high accuracy.',
    image: '/assets/images/mega-menu/ai-light.svg',
    theme: Themes.THEME_AI,
    status: 'Coming Soon'
  },
  {
    title: 'Technical Trading Model',
    description: 'Sophisticated technical analysis tools for identifying trading opportunities.',
    image: '/assets/images/mega-menu/crypto-light.svg',
    theme: Themes.THEME_CRYPTO,
    status: 'Coming Soon'
  },
  {
    title: 'Risk Management Tools',
    description: 'Comprehensive risk assessment and management tools to protect your investments.',
    image: '/assets/images/mega-menu/pms-light.svg',
    theme: Themes.THEME_PMS,
    status: 'Coming Soon'
  },
  {
    title: 'All-in-One Strategy Developer',
    description: 'Complete platform for developing, testing, and deploying trading strategies.',
    image: '/assets/images/mega-menu/crm-light.svg',
    theme: Themes.THEME_CRM,
    status: 'Coming Soon'
  }
];

export default function ProductsPage() {
  const theme = useTheme();

  return (
    <>
      <SectionHero heading="AlgoTrade Products" breadcrumbs={breadcrumbs} />
      <ContainerWrapper>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Stack spacing={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Trading Tools & Solutions
            </Typography>
            
            <Typography variant="body1" color="text.secondary" paragraph>
              Our suite of algorithmic trading tools and solutions helps traders make data-driven decisions
              and execute strategies with precision. From sentiment analysis to machine learning models,
              we provide the technology you need to gain an edge in the markets.
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              {products.map((product, index) => (
                <Grid key={index} xs={12} md={6} lg={4}>
                  <Card 
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                    component={product.link ? NextLink : 'div'}
                    href={product.link || undefined}
                  >
                    <Box
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'center',
                        bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100'
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.title}
                        sx={{ width: 48, height: 48, mr: 2 }}
                      />
                      <Typography variant="h6">{product.title}</Typography>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {product.description}
                      </Typography>
                      <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {product.status === 'Live' ? (
                          <Button variant="contained" size="small" component={NextLink} href={product.link}>
                            Try Now
                          </Button>
                        ) : (
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: 'text.secondary',
                              bgcolor: 'background.neutral',
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1
                            }}
                          >
                            {product.status}
                          </Typography>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </ContainerWrapper>
    </>
  );
}