import { PropsMessagem } from '@/Types/Types'
import { Alert } from '@mui/material'
import React from 'react'

export const MensagemComponent = ({tipo,conteudo}:PropsMessagem) => {
  return (
    <Alert sx={{mt:'1rem'}}  severity={tipo} color={tipo}>
    {conteudo}
  </Alert>
  
 
  )
}
