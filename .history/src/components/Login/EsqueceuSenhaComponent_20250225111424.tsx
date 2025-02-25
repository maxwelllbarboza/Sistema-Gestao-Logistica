'use client'
import { ValidarEmail, handleBlurEmail } from '@/'
import { Avatar, Box, Button, Link, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import CopyrightComponent from '../genericos/Copyright/Copyright'
import { TituloSessao } from '../genericos/TituloSessao/TituloSessao'
import { LOGIN } from '@/app/rotasPathname/rotasPathname'
import { MensagemComponent } from '../genericos/Mensagem/Mensagem'
import { useMain } from '@/context/mainContext'
import { useRouter } from 'next/navigation'
import { recuperarSenha } from '@/actions/handleserverequest'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save';
interface FormData {
    email: string
}
export const EsqueceuSenhaComponent = () => {
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();
    const{mensagem,setMensagem,ResetMensagem}=useMain()
  
    const router = useRouter()


    useEffect(()=>{
        if(mensagem !=""){
            ResetMensagem()
        }

    },[])


    const onSubmitForm = async(data:FormData) => {
        const dados = await recuperarSenha(data.email)
        if (dados?.status === 200) {
            setMensagem({
                tipo: 'success',
                conteudo: dados.response.mensagem
            })
            reset()
            setTimeout(() => {
                router.push(LOGIN)
            }, 2000);

        } else {
            setMensagem({
                tipo: 'error',
                conteudo: dados?.response.mensagem
            })
        }


    }
    const onBlurEmail = (event: React.FocusEvent<HTMLInputElement>, value: string) => {
        handleBlurEmail(value, setEmailErrorMessage);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '3rem',

            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%' }}>
                <TituloSessao title={'Esqueceu a Senha?'} />
                <form onSubmit={handleSubmit(onSubmitForm)} style={{ width: '100%' }}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'E-mail é obrigatório',
                            validate: (value) => ValidarEmail(value) || "E-mail inválido, formato correto é 'exemplo@email.com"

                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="E-mail"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                id="email"
                                autoComplete="email"
                                error={!!errors.email || !!emailErrorMessage}
                                helperText={errors.email?.message || emailErrorMessage}
                                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                                    onBlurEmail(e, field.value)
                                }
                            />
                        )}
                    />
                    <Typography sx={{ mt: '1rem', mb: '1rem', textAlign: 'justify' }}>Vamos enviar uma nova senha temporária e, caso seu usuário tenha sido bloqueado, ele será automaticamente desbloqueado.</Typography>
                    {mensagem && mensagem.tipo && mensagem.conteudo !="" &&  <MensagemComponent tipo={mensagem.tipo} conteudo={mensagem.conteudo}/>}
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        {isSubmitting ? <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        fullWidth
                        variant='contained'
                        sx={{ mt: 4, mb: 2, textTransform: 'none', fontSize: '1rem'}}
                        
                    >
                        Enviando Nova Senha
                    </LoadingButton>: <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 4, mb: 2 ,textTransform:'none', fontSize:'1rem'}}
                    >
                        Enviar Nova Senha
                    </Button>}
                    
                    

                    </Box>

                   


                    <Box sx={{ display: "flex", justifyContent:'center'}}>
                        <Link href={LOGIN} variant="body2">
                            {"Voltar ao Login"}
                        </Link>

                    </Box>
                    <CopyrightComponent sx={{ mt: 5 }} />
                </form>
            </Box>

        </Box>
    )
}
