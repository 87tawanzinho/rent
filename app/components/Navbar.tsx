import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import rent from '@/public/images/rent.gif';
export default function NavBar() {
  return (
    <Box sx={{ padding: '20px', fontWeight: 'bold' }}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Stack>
          <Typography variant="h5">SIXT</Typography>
        </Stack>
        <Stack direction={'row'} spacing={2} gap={4}>
          <Stack direction={'row'} gap={1} alignItems={'center'}>
            <Image src={rent} alt="rent" />
            <Typography variant="h5" fontSize={20}>
              Alugar
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
