'use client'
import {  CLIENTES, COLABORADORES, HOME, LOGIN, OPERAÇOES, RECUPERAR_SENHA, TABELA_FRETE, VEICULOS, VIAGENS } from '@/app/rotasPathname/rotasPathname';
import { useMain } from '@/context/mainContext';


import theme from '@/theme/theme';


import { ExitToApp, ExpandLess, ExpandMore, Person, Settings } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';





export const NavBar = () => {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cadastroAnchorEl, setCadastroAnchorEl] = useState(null);
  const [viagensAnchorEl, setViagensAnchorEl] = useState(null);
  const [relatoriosAnchorEl, setRelatoriosAnchorEl] =useState(null);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const [viagensIconOpen, setViagensIconOpen] = useState<boolean>(false);
  const [relatoriosIconOpen, setRelatoriosIconOpen] = useState<boolean>(false);
  const [cadastroIconOpen, setCadastroIconOpen] = useState<boolean>(false);
  const { data: session, status } = useSession()
  const router = useRouter()
 const {logout}=useMain()


  
  const handleCadastroMenu = (event:any) => {
    setCadastroAnchorEl(event.currentTarget);
    setCadastroIconOpen(true)
  };

  const handleViagensMenu = (event:any) => {
    setViagensAnchorEl(event.currentTarget);
    setViagensIconOpen(true);
  };

  const handleRelatoriosMenu = (event:any) => {
    setRelatoriosAnchorEl(event.currentTarget);
    setRelatoriosIconOpen(true)
  };

  const handleAvatarMenu = (event:any) => {
    setAvatarAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setCadastroAnchorEl(null);
    setViagensAnchorEl(null);
    setRelatoriosAnchorEl(null);
    setAvatarAnchorEl(null);
    setViagensIconOpen(false);
    setRelatoriosIconOpen(false)
    setCadastroIconOpen(false)
  };
  const handeSetting=()=>{handleClose()
    router.push(RECUPERAR_SENHA)
    

  }
  const handleLogout=()=>{
    handleClose()
    logout()
  
  }
  const handleColaboradores=()=>{
    handleClose()
    router.push(COLABORADORES)

  }
  const handleClientes=()=>{
    handleClose()
    router.push(CLIENTES)
  }
  const handleviagem=()=>{
    handleClose()
    router.push(VIAGENS)
  }
  const handleVeiculos=()=>{
    handleClose()
    router.push(VEICULOS)
  }
  const handleOperacao=()=>{
    handleClose()
    router.push(OPERAÇOES)
  }
  const handleTabelaFrete=()=>{
    handleClose()
    router.push(TABELA_FRETE)
  }
 

  return (
    <div style={{flexGrow:1}}>
      <AppBar position='fixed' >
        <Toolbar disableGutters>
         
        <Avatar src='/TruckLogo.png' sx={{ml:'2rem'}}/>
        
        <Link href={HOME}style={{textDecoration:'none',color:'white'}}>
          <Typography variant="h6" sx={{mr:'4rem', ml:'1rem'}}>
            Sistema MaxCarga
          </Typography>
        </Link>
        
          <Button color="inherit" aria-controls="cadastro-menu" aria-haspopup="true" onClick={handleCadastroMenu} sx={{textTransform:'none', fontSize:'1rem'}}>
            Cadastro
            {cadastroIconOpen ? <ExpandLess /> : <ExpandMore />}
          </Button>
        
          <Menu
            id="cadastro-menu"
            anchorEl={cadastroAnchorEl}
            keepMounted
            open={Boolean(cadastroAnchorEl)}
            onClose={handleClose}
          
            sx={{top:'0.5rem'}}
          >
            <MenuItem onClick={handleColaboradores} >Colaboradores</MenuItem>
            <MenuItem onClick={handleClientes}>Clientes</MenuItem>
            <MenuItem onClick={handleVeiculos}>Veículos</MenuItem>
            <MenuItem onClick={handleviagem}>Viagens</MenuItem>
            <MenuItem onClick={ handleOperacao}>Operações de Transporte</MenuItem>
            <MenuItem onClick={handleTabelaFrete}>Tabela de Fretes</MenuItem>
            <MenuItem onClick={handleClose}>Comissões</MenuItem>
         

           
          </Menu>

          <Button color="inherit" aria-controls="viagens-menu" aria-haspopup="true" onClick={handleViagensMenu}sx={{textTransform:'none', fontSize:'1rem'}}>
            Viagens
            {viagensIconOpen ? <ExpandLess /> : <ExpandMore />}
          </Button>
          <Menu
            id="viagens-menu"
            anchorEl={viagensAnchorEl}
            keepMounted
            open={Boolean(viagensAnchorEl)}
            onClose={handleClose}
            sx={{top:'0.5rem'}}
          >
            <MenuItem onClick={handleClose}>Início da viagem</MenuItem>
            <MenuItem onClick={handleClose}>Coleta</MenuItem>
            <MenuItem onClick={handleClose}>Abastecimento</MenuItem>
            <MenuItem onClick={handleClose}>Descarga</MenuItem>
            <MenuItem onClick={handleClose}>Mudança na operação de transporte</MenuItem>
            <MenuItem onClick={handleClose}>Fim da viagem</MenuItem>
          </Menu>

          <Button color="inherit" aria-controls="relatorios-menu" aria-haspopup="true" onClick={handleRelatoriosMenu}sx={{textTransform:'none', fontSize:'1rem'}}>
            Relatórios
            {relatoriosIconOpen ? <ExpandLess /> : <ExpandMore />}
          </Button>
          <Menu
            id="relatorios-menu"
            anchorEl={relatoriosAnchorEl}
            keepMounted
            open={Boolean(relatoriosAnchorEl)}
            onClose={handleClose}
            sx={{top:'0.5rem'}}
           
           
          >
            <MenuItem onClick={handleClose}>Boleto</MenuItem>
            <MenuItem onClick={handleClose}>Dashboard 1</MenuItem>
            <MenuItem onClick={handleClose}>Dashboard 2</MenuItem>
          </Menu>

          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleAvatarMenu}
            color="inherit"
            sx={{ml:'auto'}}
          
          >
            <Typography sx={{mr:'1rem'}}>{session?.user  ? session.user.nome : ''}</Typography>

            <Avatar sx={{ml:'auto', mr:'2rem'}} />
            
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={avatarAnchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(avatarAnchorEl)}
            onClose={handleClose}
          >
            <Box sx={{ alignItems:'left', px:'1.5rem', py:'1rem'}}>
            <Typography sx={{ color:theme.palette.primary.main, fontSize:'1rem', fontWeight:500}}>{session?.user && typeof session.user !== 'string'  ? session.user.nome : ''}</Typography>
            <Typography sx={{fontSize:' 0.875rem', fontWeight:400}}>{session?.user  ? session.user.email : ''}</Typography>
            </Box>
            <Divider/>

            <MenuItem onClick={handeSetting}>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </MenuItem>

            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <ExitToApp fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </MenuItem>

          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}


