
'use client'
import { useMain } from '@/context/mainContext'
import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { RecuperaSenhaComponent } from './RecuperaSenha/RecuperaSenhaComponent'
import theme from '@/theme/theme'
import { useSession } from 'next-auth/react'

export const PerfilComponent = () => {
  const { data: session, status } = useSession()

  return (

    
   <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
   
      <Card sx={{width:'35%'}} variant='outlined'>
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            <Avatar  sx={{ height: '80px', width: '80px' }} />
          </div>
          <Stack spacing={1} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{color:theme.palette.primary.main}}>{session?.user.nome}</Typography>
            <Typography color="text.secondary" variant="body2">
              {session?.user.email}
            </Typography>
          
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions>
   
         <RecuperaSenhaComponent/>
       
      </CardActions>
    </Card>
    </Box>
   

    
  )
}
