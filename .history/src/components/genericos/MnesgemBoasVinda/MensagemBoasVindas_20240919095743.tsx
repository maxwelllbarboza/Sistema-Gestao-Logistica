
'use client'
import { Alert, AlertTitle, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { ModalSession } from '../ModalSession/ModalSession'
import { useMain } from '@/context/mainContext'

export const MensagemBoasVindas = () => {
  const{isLogout}=useMain()
 
  return (
    <><Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '30rem', }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}> Bem-vindo ao Sistema Transmonteiro!</Typography>
      <Typography> Estamos felizes em tê-lo(a) conosco. Obrigado por utilizar o Sistema Transmonteiro.</Typography>
      </Box>
      {isLogout &&  <ModalSession />}
     </>

  )
}
