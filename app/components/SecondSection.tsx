import Box from '@mui/material/Box';
import Image from 'next/image';
import timer from '@/public/images/timer.gif';
import graphic from '@/public/images/graphic.gif';
import Typography from '@mui/material/Typography';
export default function SecondSection() {
  const url =
    'https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        textAlign: 'center',
        gap: '4rem',
        height: '100vh',

        width: '100%'
      }}
    >
      <Box>
        <Image src={timer} alt="timer" width={300} />

        <Typography variant="h6" sx={{ width: { xs: '80vw', lg: '400px', color: 'gray', background: 'white' } }}>
          Pare de perder tempo e alugue um belo carro
        </Typography>
      </Box>
      <Box>
        <Image src={graphic} alt="graphic" width={300} />
        <Typography sx={{ width: { xs: '80vw', lg: '400px', color: 'gray', background: 'white' } }} variant="h6">
          São diversas pesquisas que comprovam que alugar sai mais barato que comprar!
        </Typography>
      </Box>
    </Box>
  );
}
