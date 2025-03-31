'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import SvgIcon from '@/components/SvgIcon';

// @third-party
import { motion } from 'framer-motion';

const breadcrumbs = [
  { title: 'Home', to: '/' },
  { title: 'Contact Us' }
];

const contactInfo = [
  {
    icon: 'tabler-mail',
    title: 'Email',
    content: 'support@tradnomic.com',
    link: 'mailto:support@tradnomic.com'
  },
  {
    icon: 'tabler-phone',
    title: 'Phone',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: 'tabler-map-pin',
    title: 'Location',
    content: 'San Francisco, CA',
    link: 'https://maps.google.com/?q=San+Francisco,+CA'
  }
];

const socialLinks = [
  { icon: 'tabler-brand-twitter', link: 'https://twitter.com/tradnomic' },
  { icon: 'tabler-brand-linkedin', link: 'https://linkedin.com/company/tradnomic' },
  { icon: 'tabler-brand-github', link: 'https://github.com/tradnomic' }
];

export default function ContactPage() {
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <SectionHero heading="Contact Us" breadcrumbs={breadcrumbs} />
      <ContainerWrapper>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Stack spacing={3}>
                  <Typography variant="h3" sx={{ mb: 2 }}>
                    Get in Touch
                  </Typography>
                  <Typography color="text.secondary">
                    Have questions about our algorithmic trading platform or services? Our team is here to help! 
                    Reach out through any of these channels for support.
                  </Typography>

                  <Stack spacing={3} sx={{ mt: 5 }}>
                    {contactInfo.map((info, index) => (
                      <Stack key={index} direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 1,
                            bgcolor: 'primary.lighter'
                          }}
                        >
                          <SvgIcon name={info.icon} size={24} color="primary.main" />
                        </Box>
                        <Stack spacing={0.5}>
                          <Typography variant="subtitle2">{info.title}</Typography>
                          <Link
                            href={info.link}
                            color="text.secondary"
                            sx={{ '&:hover': { color: 'primary.main' } }}
                          >
                            {info.content}
                          </Link>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          p: 1,
                          borderRadius: 1,
                          bgcolor: 'grey.100',
                          display: 'flex',
                          '&:hover': { bgcolor: 'primary.lighter' }
                        }}
                      >
                        <SvgIcon name={social.icon} size={24} />
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: 2,
                    bgcolor: 'grey.100'
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 5 }}>
                    Send us a Message
                  </Typography>

                  <Stack spacing={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          required
                          type="email"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>

                    <TextField
                      fullWidth
                      label="Subject"
                      required
                      variant="outlined"
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<SvgIcon name="tabler-send" size={20} color="background.default" />}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </ContainerWrapper>
    </>
  );
}
