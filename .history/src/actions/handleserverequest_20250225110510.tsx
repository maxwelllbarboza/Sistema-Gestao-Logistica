'use server'
import { Usuario } from "@/Types/Types";
import { URL_RECUPERAR_SENHA, URL_USUARIOS, URL_VALIDAR_TOKEN } from "@/app/ConfigRequest/ConfigRequest";


import { apiRequest } from "@/functions/ApiRequest";
import { getServerSession } from "next-auth";


interface FormDataUsuarios {
  name: string;
  email: string;
  tipo: string
}


export async function criarUsuario(formdata: ColaboradorPerfil) {
  const session = await getServerSession(nextAuthOptions)

  const urlsearch = URL_USUARIOS;
  const dados = await apiRequest({ url: urlsearch, method: 'POST', token: session?.user.token_acesso, body: formdata })
  return dados

}



  





