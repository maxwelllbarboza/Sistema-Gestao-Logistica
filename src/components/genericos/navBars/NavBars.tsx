'use client'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar, Button, Link } from '@mui/material';
import { useState } from 'react';
import {  CLIENTES, COLABORADORES, HOME, LOGIN, OPERAÇOES, RECUPERAR_SENHA, TABELA_FRETE, VEICULOS, VIAGENS } from '@/app/rotasPathname/rotasPathname';
import { useMain } from '@/context/mainContext';
import { useRouter } from 'next/navigation';
import { ExitToApp, ExpandLess, ExpandMore, Person, Settings } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBars() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [cadastroAnchorEl, setCadastroAnchorEl] = useState(null);
  const [viagensAnchorEl, setViagensAnchorEl] = useState(null);
  const [relatoriosAnchorEl, setRelatoriosAnchorEl] =useState(null);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const [viagensIconOpen, setViagensIconOpen] = useState<boolean>(false);
  const [relatoriosIconOpen, setRelatoriosIconOpen] = useState<boolean>(false);
  const [cadastroIconOpen, setCadastroIconOpen] = useState<boolean>(false);
  const router = useRouter()
  const {logout}=useMain()

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  
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
    const handeSetting=()=>{
     handleClose()
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

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
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
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}