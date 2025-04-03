'use client';

import { useState } from 'react';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import SvgIcon from '@/components/SvgIcon';

// @next
import NextLink from 'next/link';

/***************************  HAMMERTRADE PLATFORM PAGE  ***************************/

const breadcrumbs = [
  { title: 'Home', to: '/' },
  { title: 'Products', to: '/products' },
  { title: 'HammerTrade Platform' }
];

const features = [
  {
    icon: 'tabler-code',
    title: 'Strategy Development',
    description: 'Focus solely on writing trading strategies with our intuitive interface and powerful scripting tools.'
  },
  {
    icon: 'tabler-database',
    title: 'Data Management',
    description: 'We handle all market data collection, cleaning, and storage so you can focus on strategy logic.'
  },
  {
    icon: 'tabler-chart-bar',
    title: 'Backtesting',
    description: 'Comprehensive backtesting with detailed performance metrics and visualization tools.'
  },
  {
    icon: 'tabler-settings',
    title: 'Optimization',
    description: 'Advanced parameter optimization using machine learning to fine-tune your strategies.'
  },
  {
    icon: 'tabler-rocket',
    title: 'Deployment',
    description: 'One-click deployment to live markets with robust execution infrastructure.'
  },
  {
    icon: 'tabler-device-analytics',
    title: 'Monitoring',
    description: 'Real-time monitoring and alerts to keep track of your strategy performance.'
  }
];

const workflow = [
  {
    number: '01',
    title: 'Write Your Strategy',
    description: 'Focus on your trading logic using our simple yet powerful scripting language.'
  },
  {
    number: '02',
    title: 'Test & Optimize',
    description: 'Our platform handles backtesting and optimization to ensure your strategy performs well.'
  },
  {
    number: '03',
    title: 'Deploy & Monitor',
    description: 'With one click, deploy your strategy to live markets and monitor its performance.'
  }
];

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Quantitative Trader',
    feedback: 'HammerTrade has transformed my workflow. I can focus entirely on strategy development while the platform handles everything else. The backtesting and optimization tools are particularly impressive.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Algorithmic Developer',
    feedback: 'The deployment and monitoring capabilities are game-changing. I used to spend hours setting up infrastructure, but now I can deploy strategies with just one click and monitor them in real-time.'
  }
];

export default function HammerTradePlatformPage() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
  
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Submission failed');
  
      setSuccess(true);
      setName('');
      setEmail('');
      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SectionHero heading="HammerTrade Platform" breadcrumbs={breadcrumbs} />
      <ContainerWrapper>
        {/* Introduction Section */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                Trade with Ease, Focus on Strategy
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                HammerTrade is a powerful platform that simplifies algorithmic trading by handling all the technical aspects. Strategy developers can focus solely on writing trading strategies while our platform takes care of data management, backtesting, optimization, deployment, and monitoring.
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ mt: 2 }}
                onClick={handleOpen}
              >
                Join Waitlist
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/assets/images/graphics/default/code_editor.png"
                alt="HammerTrade Platform"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: theme.shadows[10]
                }}
              />
            </Grid>
          </Grid>
        </Container>

        {/* Modal for Join Waitlist */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2
          }}>
            {success ? (
              <Stack alignItems="center" spacing={2}>
                <SvgIcon name="tabler-circle-check" size={48} color="success.main" />
                <Typography variant="h6" align="center">
                  Successfully joined waitlist!
                </Typography>
              </Stack>
            ) : (
              <form onSubmit={handleSubmit}>
                <Typography variant="h6" gutterBottom>
                  Join Waitlist
                </Typography>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && (
                  <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                    {error}
                  </Typography>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2, width: '100%' }}
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Join Waitlist'}
                </Button>
              </form>
            )}
          </Box>
        </Modal>

        {/* Features Section */}
        <Box sx={{ bgcolor: 'background.neutral', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
              Platform Features
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
              Our comprehensive platform handles every aspect of algorithmic trading, allowing you to focus on what matters most - your trading strategy.
            </Typography>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 1.5,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: 'primary.main',
                          mr: 2
                        }}
                      >
                        <SvgIcon name={feature.icon} size={24} />
                      </Box>
                      <Typography variant="h6">{feature.title}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* How It Works Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
            Our streamlined workflow makes algorithmic trading accessible to everyone, from beginners to experienced traders.
          </Typography>

          <Grid container spacing={4}>
            {workflow.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      fontWeight: 'bold'
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Testimonials Section */}
        <Box sx={{ bgcolor: 'background.neutral', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
              What Our Users Say
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
              Hear from strategy developers who have transformed their trading workflow with HammerTrade.
            </Typography>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
                      "{testimonial.feedback}"
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: 'primary.contrastText',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1">{testimonial.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Transform Your Trading Workflow?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
            Join the waitlist to be among the first to experience the HammerTrade platform and revolutionize your algorithmic trading strategy development.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={handleOpen}
          >
            Join Waitlist
          </Button>
        </Container>
      </ContainerWrapper>
    </>
  );
}