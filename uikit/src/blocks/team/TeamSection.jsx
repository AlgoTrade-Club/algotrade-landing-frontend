'use client';
import PropTypes from 'prop-types';

// @mui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  TEAM SECTION  ***************************/

export default function TeamSection({ heading, caption, teamMembers }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {(heading || caption) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3
              }}
            >
              <Stack spacing={2} sx={{ maxWidth: 480, textAlign: 'center', mx: 'auto' }}>
                {heading && <Typography variant="h2">{heading}</Typography>}
                {caption && (
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {caption}
                  </Typography>
                )}
              </Stack>
            </motion.div>
          )}

          <Grid container spacing={3}>
            {teamMembers?.map((member, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index
                  }}
                >
                  <GraphicsCard
                    sx={{
                      p: 3,
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <Stack spacing={2.5} alignItems="center">
                      <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: 120,
                          height: 120,
                          border: '4px solid',
                          borderColor: 'primary.lighter'
                        }}
                      />
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" gutterBottom>
                          {member.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 1 }}>
                          {member.role}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {member.bio}
                        </Typography>
                      </Box>
                    </Stack>
                  </GraphicsCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </ContainerWrapper>
  );
}

TeamSection.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      bio: PropTypes.string
    })
  )
};