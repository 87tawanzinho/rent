import Image from 'next/image';
import styles from './page.module.css';
import Box from '@mui/material/Box';
import NavBar from './components/Navbar';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';

export default function Home() {
  return (
    <Box>
      <NavBar />
      <FirstSection />
      <SecondSection />
    </Box>
  );
}
