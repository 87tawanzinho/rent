import Box from '@mui/material/Box';
import Image from 'next/image';
import timer from '@/public/images/timer.gif';
import graphic from '@/public/images/graphic.gif';
import Typography from '@mui/material/Typography';
export default function SecondSection() {
  const url =
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${url})`,

        textAlign: 'center',
        gap: '4rem',
        height: '100vh',
        filter: `grayscale(100%)`,
        transition: 'filter 0.3s ease-in-out',
        width: '100%',
        ':hover': {
          filter: `grayscale(50%)`
        }
      }}
    >
      <Box sx={{ zIndex: 5 }}>
        <Image src={timer} alt="timer" width={200} />

        <Typography variant="h6" sx={{ width: { xs: '80vw', lg: '400px', color: 'gray', background: 'white' } }}>
          Pare de perder tempo e escolha um belo carro
        </Typography>
      </Box>
      <Box>
        <Image src={graphic} alt="graphic" width={200} />
        <Typography sx={{ width: { xs: '80vw', lg: '400px', color: 'gray', background: 'white' } }} variant="h6">
          São diversas pesquisas que comprovam que alugar sai mais barato que comprar!
        </Typography>
      </Box>
    </Box>
  );
}
