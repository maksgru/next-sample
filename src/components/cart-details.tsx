import React from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Stack,
  Typography,
} from '@mui/material';
import CartIcon from '../../public/cart.svg';

export default function CartDetails() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box display="flex" gap="5px" alignItems="center" sx={{ cursor: 'pointer' }}>
      <CartIcon />
      <Typography
        fontWeight={700}
        fontSize={16}
        onMouseEnter={handlePopoverOpen}
        // onMouseLeave={handlePopoverClose}
      >
        Корзина
      </Typography>
      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        PaperProps={{ sx: { borderRadius: '20px' } }}
      >
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            p: 2,
          }}
        >
          {[1, 2].map((order) => (
            <React.Fragment key={order}>
              <ListItem alignItems="center" sx={{ justifyContent: 'space-between', px: 0, gap: 2 }}>
                <ListItemAvatar sx={{ minWidth: 'unset' }}>
                  <Avatar
                    variant="rounded"
                    alt="Remy Sharp"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Куртка Lassie"
                />
                <ButtonGroup sx={{ backgroundColor: 'primary.light', mx: 1 }}>
                  <Button sx={{ border: 'none', ':hover': { border: 'none' } }}>-</Button>
                  <Button sx={{ border: 'none !important', color: '#172029 !important', fontWeight: 'bold' }} disabled>2</Button>
                  <Button sx={{ border: 'none', ':hover': { border: 'none' } }}>+</Button>
                </ButtonGroup>
                <Typography variant="h5" component="div" fontWeight={800} fontSize={20}>
                  {order + 8400}
                  &nbsp;₽
                </Typography>
              </ListItem>
              <Divider sx={{ mx: 2 }} />
            </React.Fragment>
          ))}
          <Stack direction="row" justifyContent="space-between" my={2}>
            <Typography variant="h5" component="div" fontWeight={800} fontSize={20}>
              Итого
            </Typography>
            <Typography variant="h5" component="div" fontWeight={800} fontSize={20}>
              8400
              &nbsp;₽
            </Typography>
          </Stack>
          <Button
            variant="contained"
            sx={{ borderRadius: '10px', fontSize: '16px', fontWeight: 'bold' }}
            fullWidth
          >
            Оформить заказ
          </Button>
        </List>
      </Popover>
    </Box>
  );
}
