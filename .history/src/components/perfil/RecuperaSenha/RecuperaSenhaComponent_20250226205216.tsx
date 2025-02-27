'use client'
import { ValidateSenha } from '@/functions/ValidacaoInput';
import theme from '@/theme/theme';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Divider, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import CopyrightComponent from '../../genericos/Copyright/Copyright';
import { useMain } from '@/context/mainContext';
import { MensagemComponent } from '@/components/genericos/Mensagem/Mensagem';
import { useRouter } from 'next/navigation';
import { HOME, LOGIN } from '@/app/rotasPathname/rotasPathname';
import { atualizarSenha } from '@/';
import { useSession } from 'next-auth/react';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';


interface FormData{
    senhaantiga:string,
    novasenha:string,
    confirmarsenha:string
}




export const RecuperaSenhaComponent = () => {


const [showPasswordSenhaAntiga, setShowPasswordSenhaAntiga] = useState(false);
const [showPasswordNovaSenha, setShowPasswordNovaSenha] = useState(false);
const [showPasswordConfirmarSenha, setShowPasswordConfirmarSenha] = useState(false);
  const { data: session, status } = useSession()
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<FormData>();

    const {setMensagem,mensagem,ResetMensagem}=useMain()

    const senha = watch('novasenha', '');
    const router=useRouter()

    const handleToggleShowPasswordSenhaAntiga = () => {
        setShowPasswordSenhaAntiga((prevState) => !prevState);
    };
    
    const handleToggleShowPasswordNovaSenha = () => {
        setShowPasswordNovaSenha((prevState) => !prevState);
    };
    
    const handleToggleShowPasswordConfirmarSenha = () => {
        setShowPasswordConfirmarSenha((prevState) => !prevState);
    };

    useEffect(()=>{
        if(mensagem !=""){
            ResetMensagem()
        }

    },[])
    const ValidateSenhaConfirmacao = (value: string | undefined) => {
        if (value !== senha) {
          return 'A nova senha informada está diferente no campo de confirmação';
        }
      };
      const handleTrocarSenha =async(data:FormData)=>{
        const id = session?.user.id ? session?.user.id: 0
        const datamodificada ={
            senha_atual:data.senhaantiga,
            senha_nova:data.novasenha
        }
        const dados = await atualizarSenha(id,datamodificada)
        if (dados?.status === 200) {
            setMensagem({
                tipo: 'success',
                conteudo: dados.response.mensagem
            })
            reset()
            setTimeout(() => {
                router.push(HOME)
            }, 2000);

        } else {
            setMensagem({
                tipo: 'error',
                conteudo: dados?.response.mensagem
            })
        }

     
      }

  

  return (
    <Box
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px:'1rem'
     
       

    }}
>
    <Box>
        
      <Typography variant="h6" component="h6" sx={{mb:'1rem',mt:'1rem', color:theme.palette.primary.main}}>
        Alterar Senha
      </Typography>
      <form style={{width:'100%', marginTop:'1rem'}} onSubmit={handleSubmit(handleTrocarSenha)} >
      <Controller
                name="senhaantiga"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Senha é obrigatória',
                 
                }}
                render={({ field }) => (
                    <TextField
                        
                        {...field}
                        label="Senha Antiga"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        type={showPasswordSenhaAntiga ? 'text' : 'password'}
                        id="senha"
                        autoComplete="senha"
                        autoFocus
                        error={!!errors.senhaantiga}
                        helperText={errors.senhaantiga?.message || ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPasswordSenhaAntiga(!showPasswordSenhaAntiga)}
                                        edge="end"
                                        style={{ background: 'transparent', color: theme.palette.primary.main }}
                                    >
                                        {!showPasswordSenhaAntiga ? <Visibility style={{ color: 'inherit' }} /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
            <Controller
                name="novasenha"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Senha é obrigatória',
                    minLength: {
                        value: 8,
                        message: 'Senha deve ter no minimo 8 caracteres',
                    },
                    maxLength: {
                        value: 16,
                        message: 'Senha deve ter no maximo 16 caracteres',
                    },
                    validate: ValidateSenha,
                }}
                render={({ field }) => (
                    <TextField
                        
                        {...field}
                        label="Nova Senha"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        type={showPasswordNovaSenha ? 'text' : 'password'}
                        id="senha"
                        autoComplete="novasenha"
                        autoFocus
                        error={!!errors.novasenha}
                        helperText={errors.novasenha?.message || ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPasswordNovaSenha(!showPasswordNovaSenha)}
                                        edge="end"
                                        style={{ background: 'transparent', color: theme.palette.primary.main }}
                                    >
                                        {!showPasswordNovaSenha ? <Visibility style={{ color: 'inherit' }} /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
             <Controller
                name="confirmarsenha"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Confirmar a senha é obrigatório',
                    validate: ValidateSenhaConfirmacao,
                }}
                render={({ field }) => (
                    <TextField
                        
                        {...field}
                        label="Confirme a Nova Senha"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        type={showPasswordConfirmarSenha ? 'text' : 'password'}
                        id="senha"
                        autoComplete="novasenha"
                        autoFocus
                        error={!!errors.confirmarsenha}
                        helperText={errors.confirmarsenha?.message || ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPasswordConfirmarSenha(!showPasswordConfirmarSenha)}
                                        edge="end"
                                        style={{ background: 'transparent', color: theme.palette.primary.main }}
                                    >
                                        {!showPasswordConfirmarSenha ? <Visibility style={{ color: 'inherit' }} /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
          
            <Typography sx={{ mt: '1rem', mb: '1rem', textAlign: 'justify' }}> <strong>Atenção:</strong> A senha deve conter de 8 a 16 caracteres, letras maiúsculas e minúsculas, número e ao menos um caracteres especial</Typography>
            {mensagem && mensagem.tipo && mensagem.conteudo !="" &&  <MensagemComponent tipo={mensagem.tipo} conteudo={mensagem.conteudo}/>}
            {isSubmitting ? <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        fullWidth
                        variant='contained'
                        sx={{ mt: 4, mb: 2, textTransform: 'none', fontSize: '1rem'}}
                        
                    >
                        Alterando a Senha
                    </LoadingButton>:  <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 4, mb: 2 ,textTransform:'none', fontSize:'1rem'}}
         
          
         
        >
         Alterar Senha
        </Button> }

           
       
      </form>
   
    </Box>
    </Box>
  );
}


