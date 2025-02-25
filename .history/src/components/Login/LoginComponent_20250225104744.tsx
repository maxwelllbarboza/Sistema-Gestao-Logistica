import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { LoginForm } from './LoginFormComponent';
import { TituloSessao } from '../genericos/TituloSessao/TituloSessao';
import { MensagemComponent } from '../genericos/';





export default function LoginComponent() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          src="/caminhacert.jpg"
          alt="Background"
          fill
          priority
          
          style={{ objectFit: 'cover', objectPosition: 'left' }}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            mt: 8,
            mx: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TituloSessao title={'Sistema Transmonteiro'} />
          <LoginForm />
        </Box>
      </Grid>
    </Grid>
  );
}
