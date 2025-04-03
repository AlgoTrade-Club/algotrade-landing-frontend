'use client';
import { useState } from 'react';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  CircularProgress,
  OutlinedInput,
  Stack,
  Typography,
  Alert,
  Snackbar
} from '@mui/material';

// @project
import SvgIcon from '@/components/SvgIcon';

export default function WaitlistForm({ buttonText = 'Join Waitlist', stackProps }) {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong');

      setSnackbar({
        open: true,
        message: 'Thank you for joining our waitlist! We\'ll keep you updated.',
        severity: 'success'
      });
      setEmail('');
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message || 'Failed to join waitlist. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2} {...stackProps}>
        <OutlinedInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          type="email"
          required
          disabled={loading}
          endAdornment={
            <Button
              type="submit"
              disabled={loading}
              sx={{
                px: 3,
                py: 1.5,
                bgcolor: 'primary.main',
                color: 'background.default',
                borderRadius: 25,
                '&:hover': {
                  bgcolor: 'primary.dark',
                  boxShadow: 1
                }
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <>
                  {buttonText}
                  <SvgIcon
                    name="tabler-arrow-right"
                    size={20}
                    sx={{ ml: 1 }}
                  />
                </>
              )}
            </Button>
          }
          sx={{
            ...theme.typography.body1,
            color: 'text.primary',
            width: 1,
            pr: 0.5,
            '& .MuiOutlinedInput-input': {
              p: '16px 20px'
            }
          }}
        />
        <Typography variant="caption" color="text.secondary">
          Join our waitlist to receive product updates and early access opportunities.
        </Typography>
      </Stack>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

WaitlistForm.propTypes = {
  buttonText: PropTypes.string,
  stackProps: PropTypes.object
};