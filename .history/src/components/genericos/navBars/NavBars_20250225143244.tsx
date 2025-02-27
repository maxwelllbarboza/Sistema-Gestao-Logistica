"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMain } from '@/context/mainContext';
import Link from 'next/link';
import {  CLIENTES, COLABORADORES, HOME, LOGIN, OPERAÇOES, RECUPERAR_SENHA, TABELA_FRETE, VEICULOS, VIAGENS } from '@/app/rotasPathname/rotasPathname';

const pages = ['Cadastro', 'Serviço', 'Dashboard'];
const settings = ['Profile', 'Logout'];

function NavBars() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [cadastroAnchorEl, setCadastroAnchorEl] = useState(null);
  const [viagensAnchorEl, setViagensAnchorEl] = useState(null);
  const [relatoriosAnchorEl, setRelatoriosAnchorEl] =useState(null);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const [viagensIconOpen, setViagensIconOpen] = useState<boolean>(false);
  const [relatoriosIconOpen, setRelatoriosIconOpen] = useState<boolean>(false);
  const [cadastroIconOpen, setCadastroIconOpen] = useState<boolean>(false);
  const router = useRouter()
  const {logout}=useMain()


  const handleCadastroMenu = (event:any) => {
    setCadastroAnchorEl(event.currentTarget);
    setCadastroIconOpen(true)
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

  const handleViagensMenu = (event:any) => {
    setViagensAnchorEl(event.currentTarget);
    setViagensIconOpen(true);
  };

  const handleRelatoriosMenu = (event:any) => {
    setRelatoriosAnchorEl(event.currentTarget);
    setRelatoriosIconOpen(true)
  };
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="cadastro-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
               <MenuItem onClick={handleColaboradores} >Colaboradores</MenuItem>
              <MenuItem onClick={handleClientes}>Clientes</MenuItem>
              <MenuItem onClick={handleVeiculos}>Veículos</MenuItem>
              <MenuItem onClick={handleviagem}>Viagens</MenuItem>
              <MenuItem onClick={ handleOperacao}>Operações de Transporte</MenuItem>
              <MenuItem onClick={handleTabelaFrete}>Tabela de Fretes</MenuItem>
              <MenuItem onClick={handleClose}>Comissões</MenuItem>

            </Menu>

          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>

          
            <IconButton 
              size="large" 
              aria-label="show 4 
              new mails" 
              color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
             
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ paddingRight: 4 }}>
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
            </IconButton>
            
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBars;