'use server'
import { Usuario } from "@/Types/Types";
import { URL_USUARIOS  } from "@/app/ConfigRequest/ConfigRequest";

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { apiRequest } from "@/functions/ApiRequest";
import { getServerSession } from "next-auth";


interface FormDataUsuarios {_
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



  





