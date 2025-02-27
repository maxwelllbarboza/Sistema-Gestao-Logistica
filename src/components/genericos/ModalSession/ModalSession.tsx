'use client'
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Button } from '@mui/material';
import { noSSR } from 'next/dynamic';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LOGIN } from '@/app/rotasPathname/rotasPathname';

export const ModalSession = () => {
    const router = useRouter()

    const handleModalClose = (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
        if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
            return;
        }
       ()=>{true}
    };
    const logout = async () => {
        await signOut({
            redirect: false,
        });
        router.push(LOGIN)

    }
    return (
        <Modal
            open={true }
            onClose={handleModalClose}
            aria-labelledby="inactivity-modal"
            aria-describedby="modal-for-inactivity"
            disableEscapeKeyDown
            disableEnforceFocus
        >
            <Box
            
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: '#fff4e5',
                    // bgcolor:'#ffff',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    border: 'none'
                }}
            >
                <Alert severity="warning">
                    <AlertTitle>Atenção</AlertTitle>
                    Sua Sessão Expirou. Para continuar, por favor, faça login novamente.
                </Alert>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "flex-end", mt: '1rem' }}>
                    <Button variant='contained' onClick={logout}>Entrar</Button>
                </Box>

            </Box>
        </Modal>
    );
};


