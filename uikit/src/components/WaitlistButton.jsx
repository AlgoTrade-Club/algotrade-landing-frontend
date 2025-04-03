'use client';
import { useState } from 'react';
import PropTypes from 'prop-types';

// @mui
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box
} from '@mui/material';

// @project
import SvgIcon from '@/components/SvgIcon';
import WaitlistForm from '@/components/WaitlistForm';

export default function WaitlistButton({
  buttonText = 'Join Waitlist',
  variant = 'contained',
  size = 'large',
  color = 'primary',
  sx,
  ...props
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        color={color}
        onClick={handleOpen}
        sx={sx}
        {...props}
      >
        {buttonText}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 2
          }
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center' }}>
          Join Our Waitlist
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'grey.500'
            }}
          >
            <SvgIcon name="tabler-x" />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <WaitlistForm
              buttonText="Join Now"
              stackProps={{
                spacing: 3,
                sx: { maxWidth: 480, mx: 'auto' }
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

WaitlistButton.propTypes = {
  buttonText: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error']),
  sx: PropTypes.object
};