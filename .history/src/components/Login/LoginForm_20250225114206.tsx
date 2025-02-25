'use client'
import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, InputAdornment, Link, TextField, } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import CopyrightComponent from '../genericos/Copyright/Copyright'
import { Controller, useForm } from 'react-hook-form'
import { ValidarEmail, handleBlurEmail } from '@/functions/ValidacaoInput'
import { ESQUECEU_SENHA, HOME, LOGIN } from '@/app/rotasPathname/rotasPathname'
import { MensagemComponent } from '../genericos/Mensagem/Mensagem'
import { useMain } from '@/context/mainContext'
import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'
import { PropsMessagem } from '@/Types/Types'
import { useFormStatus } from 'react-dom'
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import theme from '@/theme/theme'

interface FormData {
    email: string,
    senha: string

}

function ButtonLogin() {
    const status = useFormStatus()
    return <Button type="submit"
        fullWidth
        variant="contained"
        disabled={status.pending}
        sx={{ mt: 4, mb: 2, textTransform: 'none', fontSize: '1rem' }}>Entrar</Button>
}
export const LoginForm = () => {
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false)
   

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },

    } = useForm<FormData>();
    const { mensagem, setMensagem, ResetMensagem,ResetIsLogout} = useMain()
    const [mensagemErro, setMensagemErro] = useState<PropsMessagem | "">("")
    const router = useRouter()
    const { data: session, status } = useSession()
    const logout = async () => {
        await signOut({
            redirect: false,
        });
        router.replace(LOGIN);
    }


    useEffect(() => {
        if (session?.user.mensagem_erro) {
            logout()
            setMensagemErro({
                tipo: 'error',
                conteudo: session?.user.mensagem_erro
            })
        } if (session?.user.token_acesso) {
            ResetIsLogout()
            console.log(session.user.)
            console.log("Entrei na Home")
            // router.push(HOME)
        }
    }, [session?.user])

    const OnSubmitForm = async ({ email, senha }: FormData) => {
        try {
            const result = await signIn('credentials', {
                email,
                senha,
                redirect: false,
            });
            if (result?.error) {
                setMensagem({
                    tipo: 'error',
                    conteudo: 'Ocorreu um erro de integração. Tente novamente mais tarde. Se o problema persistir, acione a equipe técnica.',

                });
                return;
            }
        } catch (error) {
            setMensagemErro({
                tipo: 'error',
                conteudo: 'Ocorreu um erro de integração. Tente novamente mais tarde. Se o problema persistir, acione a equipe técnica.',

            });
        }

    }

    const onBlurEmail = (event: React.FocusEvent<HTMLInputElement>, value: string) => {
        handleBlurEmail(value, setEmailErrorMessage);
    };

    return (

        <form onSubmit={handleSubmit(OnSubmitForm)} style={{ width: '100%' }}>
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
            <Controller
                name="senha"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Senha é obrigatória',
                }}
                render={({ field }) => (
                    <TextField

                        {...field}
                        label="Senha"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        id="senha"
                        autoComplete="senha"
                        autoFocus
                        error={!!errors.senha}
                        helperText={errors.senha?.message || ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                        style={{ background: 'transparent', color: theme.palette.primary.main }}
                                    >
                                        {!showPassword ? <Visibility style={{ color: 'inherit' }} /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link href={ESQUECEU_SENHA} variant="body2" >
                    Esqueceu a Senha?
                </Link>
            </Box>
            {mensagemErro ? <MensagemComponent tipo={mensagemErro.tipo} conteudo={mensagemErro.conteudo} /> : ""}
            {isSubmitting ? <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}

                variant='contained'
                sx={{ mt: 4, mb: 2, textTransform: 'none', fontSize: '1rem' }}
                fullWidth

            >
                Entrando
            </LoadingButton> : <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 4, mb: 2, textTransform: 'none', fontSize: '1rem' }}
            >
                Entrar
            </Button>}

            <CopyrightComponent sx={{ mt: 5 }} />
        </form>
    )
}
