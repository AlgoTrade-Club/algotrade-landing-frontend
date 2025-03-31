'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FEATURE - 9  ***************************/

export default function Feature9({ heading, caption, features }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {(heading || caption) && (
            <Stack spacing={2} sx={{ maxWidth: 480 }}>
              {heading && <Typography variant="h2">{heading}</Typography>}
              {caption && (
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {caption}
                </Typography>
              )}
            </Stack>
          )}

          {features && (
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <Stack spacing={2}>
                    {feature.icon && (
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 1.5,
                          bgcolor: 'primary.lighter'
                        }}
                      >
                        {feature.icon}
                      </Box>
                    )}
                    <Typography variant="h6">{feature.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {feature.description}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}
        </Stack>
      </Container>
    </ContainerWrapper>
  );
}

Feature9.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
};