'use server'
import { URL_USUARIOS, URL_RECUPERAR_SENHA  } from "@/app/ConfigRequest/ConfigRequest";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { apiRequest } from "@/functions/ApiRequest";
import { getServerSession } from "next-auth";

interface FormDataUsuarios {
  name: string;
  email: string;
  tipo: string
}


export async function criarUsuario(formdata: FormDataUsuarios) {
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = URL_USUARIOS;
  const dados = await apiRequest({ url: urlsearch, method: 'POST', token: session?.user.token_acesso, body: formdata })
  return dados

}

export async function recuperarSenha(email: string) {
  const session = await getServerSession(nextAuthOptions)
  const dados = await apiRequest({ url: URL_RECUPERAR_SENHA, method: 'POST', token: session?.user.token_acesso, body: { email: email } })
  return dados
}

interface AtualizarSenha{
  senha_atual:string,
  senha_nova: string
}



export async function atualizarSenha(id:number, formdata:AtualizarSenha) {
  const session = await getServerSession(nextAuthOptions)
  const queryString = `${id}`;
  const urlsearch = `${URL_USUARIOS}/${queryString}/senha`;  
    const dados = await apiRequest({url:urlsearch,method:'PATCH',token:session?.user.token_acesso,body:formdata})   
    return dados
}