import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function FirstSection() {
  const url =
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <Box>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          backgroundPosition: 'bottom',
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#DCDCDC',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            background: '#fff',
            color: '#4F4F4F',
            width: { xs: '100vw', md: '500px', lg: '800px' },
            height: '400px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            justifyContent: 'space-between'
          }}
        >
          <Typography fontSize={32}>Alugue o carro que você precisar</Typography>
          <TextField variant="filled" label="Qual carro você deseja?">
            Valor
          </TextField>
          <Button sx={{ background: 'gray', color: 'white' }}>Buscar</Button>
        </Box>
      </Box>
    </Box>
  );
}
