'use client'


import theme from '@/theme/theme'
import { Avatar, Typography } from '@mui/material'
import React from 'react'
interface PropsTituloSessao{
    title:string
}
export const TituloSessao = ({title}:PropsTituloSessao) => {
  return (
    <>
    <Avatar sx={{ width: 50, height: 50, mb:'1rem',p:0.5, background:theme.palette.primary.main}} alt='Letra t' src='/TruckLogo.png'></Avatar>
    <Typography component="h1" variant="h5" sx={{ mb: 3, color:theme.palette.primary.main}}>
          {title}
    </Typography></>
  )
}
