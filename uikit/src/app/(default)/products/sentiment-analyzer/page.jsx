'use client';

import { useState } from 'react';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';

/***************************  SENTIMENT ANALYZER PAGE  ***************************/

const breadcrumbs = [
  { title: 'Home', to: '/' },
  { title: 'Products', to: '/products' },
  { title: 'Sentiment Analyzer' }
];

export default function SentimentAnalyzer() {
  return (
    <>
      <SectionHero heading="Crypto Sentiment Analyzer" breadcrumbs={breadcrumbs} />
      <ContainerWrapper>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Stack spacing={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Real-Time Crypto Sentiment Analysis
            </Typography>
            
            <Typography variant="body1" color="text.secondary" paragraph>
              Tradnomic's Crypto Sentiment Analyzer is a powerful tool that uses advanced AI to analyze market sentiment from news and social media sources.
              Get real-time insights into market sentiment for major cryptocurrencies to inform your trading decisions.
            </Typography>

            <Box sx={{ mb: 3, p: 3, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
              <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                About This API
              </Typography>
              <Typography variant="body2" paragraph>
                This demo showcases Tradnomic's Crypto Sentiment Analysis API, which is available through RapidAPI. 
                The API provides real-time sentiment analysis for cryptocurrencies based on news articles, Twitter, and Reddit data.
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                href="https://rapidapi.com/tradnomic-tradnomic-default/api/crypto-real-time-indicators-and-probabilities"
                target="_blank"
                sx={{ mt: 1 }}
              >
                Get API Access on RapidAPI
              </Button>
            </Box>

            {/* <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
              Data provided by a third-party API via RapidAPI. This demo is for illustrative purposes only.
            </Typography> */}
          </Stack>
        </Container>
      </ContainerWrapper>
    </>
  );
}