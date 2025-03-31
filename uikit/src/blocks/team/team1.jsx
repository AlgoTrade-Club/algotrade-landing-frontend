// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// @project
import branding from '@/branding.json';
import { SECTION_COMMON_PY } from '@/utils/constant';

export default function Team1() {
  const teamMembers = [
    {
      name: 'LeBron James',
      role: 'President',
      image: '/assets/team/LeBron.jpg',
      bio: 'Computer Science major at UC Davis, passionate about algorithmic trading and entrepreneurship.'
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      image: '/assets/team/jane.jpg',
      bio: 'Economics major at UC Davis, focused on startup strategy and market analysis.'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Lead',
      image: '/assets/team/michael.jpg',
      bio: 'Computer Engineering major at UC Davis, experienced in full-stack development.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      image: '/assets/team/sarah.jpg',
      bio: 'Business major at UC Davis, specializing in digital marketing and brand development.'
    },
    {
      name: 'David Lee',
      role: 'Events Coordinator',
      image: '/assets/team/david.jpg',
      bio: 'Management major at UC Davis, organizing entrepreneurship workshops and networking events.'
    },
    {
      name: 'Emily Wang',
      role: 'Treasurer',
      image: '/assets/team/emily.jpg',
      bio: 'Economics major at UC Davis, managing club finances and fundraising initiatives.'
    }
  ];

  return (
    <Box component="section" sx={{ py: SECTION_COMMON_PY, bgcolor: 'background.neutral' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography variant="h2" sx={{ mb: 2, color: '#002855' }}> {/* UC Davis blue */}
            Meet Our Team
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            Passionate students from UC Davis Startup Club, dedicated to fostering entrepreneurship and innovation on campus
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: 1,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 3
                  }
                }}
              >
                <Stack spacing={2} alignItems="center">
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      border: '4px solid',
                      borderColor: '#C99700' /* UC Davis gold */
                    }}
                  />
                  <Typography variant="h5" sx={{ color: '#002855' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#C99700', fontWeight: 'medium' }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {member.bio}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}