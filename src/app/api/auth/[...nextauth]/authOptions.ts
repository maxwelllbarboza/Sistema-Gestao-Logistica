
import { User } from "@/Types/next-auth";
import { URL_LOGIN } from "@/app/ConfigRequest/ConfigRequest";
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

interface UserToken {
	id: string;
	nome: string;
	email: string;
	token_acesso?: string;
	bloqueado: boolean;
	ativo:boolean
	token_atualizacao:string
}

declare module 'next-auth' {
    interface Session {
        user: User
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user: User
    }
}

 export const nextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				senha: { label: 'Senha', type: 'password' }
			},
			async authorize(credentials, req) {
				try {
					const response = await fetch(URL_LOGIN, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							email: credentials?.email,
							senha: credentials?.senha
						})
					})
					const responseData = await response.json();
					if (response.status === 200) {
                        const { usuario, token_acesso,token_atualizacao} = responseData;
						return { ...usuario, token_acesso,token_atualizacao};
					}
                    else{
                        const{mensagem}= responseData
						return { mensagem_erro: mensagem}		
                    }
				} catch (error) {
					console.log(error)
				}
			},
		})
	],
	pages: {
		signIn: '/'
	},
	callbacks: {
		async jwt({ token, user }:any) {
			user && (token.user = user)
			return token
		},
		async session({ session, token, }:any) {
			session = token as any
			return session
		},

	},
};