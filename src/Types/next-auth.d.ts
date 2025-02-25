import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'
interface User{
    id: number;
    nome: string;
    email: string;
    perfil:number
    token_acesso?: string;
    bloqueado: boolean;
    ativo:boolean
    token_atualizacao?:string
    mensagem_erro?:string

}
declare module 'next-auth' {
	interface Session {
		user: User
	}
}