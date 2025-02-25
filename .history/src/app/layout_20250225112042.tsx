import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Box } from '@mui/material';
import { Metadata } from 'next';
import { MainProvider } from '@/context/mainContext';
import { MensagemReset } from '@/componentes/genericos/MensagemReset/MensagemReset';
import NextAuthSessionProvider from '@/provider/SessionProvider';
import theme from '@/theme/theme';



export const metadata:Metadata={
  title:{
    default:'Transmonteiro',
    template:"%s | Transmonteiro"
  },
  description:'Gestão de transporte'
}
export default function RootLayout({

  children
 }:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>

       
          
        <NextAuthSessionProvider>
        <MainProvider>
          <ThemeProvider theme={theme}>
          
            <CssBaseline />
            
            <Box
            component="main"
            sx={{
              bgcolor: 'background.defalt',
             
              fontFamily:'roboto'
            }}
          >
         
            {children}
          </Box>
          </ThemeProvider>
          </MainProvider>
          </NextAuthSessionProvider>
        

      </body>
    </html>
  );
}
