import React from 'react';
import { Container, Typography, Grid, Box, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import SvgIcon from '@/components/SvgIcon';

const features = [
  {
    icon: 'tabler-code',
    title: 'No Coding Required',
    description: 'Focus on strategy creation without worrying about coding. Tradnomic handles all the technical aspects for you.'
  },
  {
    icon: 'tabler-server',
    title: 'Robust Hosting Solutions',
    description: 'Enjoy seamless hosting solutions that ensure your strategies are always available and running smoothly.'
  },
  {
    icon: 'tabler-monitor',
    title: 'Comprehensive Monitoring',
    description: 'Monitor your strategies effortlessly with our advanced monitoring tools, providing real-time insights and alerts.'
  }
];

const testimonials = [
  {
    name: 'John Doe',
    role: 'Strategy Developer',
    feedback: 'Tradnomic has transformed the way I develop strategies. I can focus entirely on strategy creation, knowing that all technical aspects are covered.'
  },
  {
    name: 'Jane Smith',
    role: 'Algorithmic Trader',
    feedback: 'The hosting and monitoring services are top-notch. My strategies are always running smoothly, and I receive timely alerts when needed.'
  }
];

export default function StrategyDeveloperProductPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <Typography variant="h2" align="center" gutterBottom>
        All-in-One Strategy Developer Product
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Focus solely on strategy creation while Tradnomic takes care of coding, hosting, and monitoring.
      </Typography>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ p: 3, borderRadius: 2, bgcolor: 'grey.100', textAlign: 'center' }}>
                <SvgIcon name={feature.icon} size={48} color="primary.main" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ p: 3, borderRadius: 2, bgcolor: 'grey.100' }}>
                <Typography variant="subtitle1" gutterBottom>
                  {testimonial.name} - {testimonial.role}
                </Typography>
                <Typography color="text.secondary">
                  "{testimonial.feedback}"
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Stack direction="row" justifyContent="center" sx={{ mt: 8 }}>
        <Button variant="contained" size="large" href="/contact">
          Get Started
        </Button>
      </Stack>
    </Container>
  );
}