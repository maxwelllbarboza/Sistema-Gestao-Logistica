
'use server'
import { Cliente, Colaborador, Colaboradores, Veiculo, Viagem } from "@/Types/Types";
import { , URL_LISTAR_COLABORADORES, URL_LISTAR_FRETES, URL_LISTAR_MUNICIPIOS, URL_LISTAR_OPERACOES, URL_LISTAR_VEICULOS, URL_LISTAR_VIAGENS, URL_RECUPERAR_SENHA, URL_USUARIOS, URL_VALIDAR_TOKEN } from "@/app/ConfigRequest/ConfigRequest";



import { apiRequest } from "@/functions/ApiRequest";
import { getServerSession } from "next-auth";


interface FormDataUsuarios {
  name: string;
  email: string;
  tipo: string
}



  const dados = await apiRequest({
    url: url.toString(),
    method: 'GET',
    token: session?.user.token_acesso
  })

  return dados
}

}
 recuperarSenha(email: string) {
  const session = await getServerSession(nextAuthOptions)

  const dados = await apiRequest({ url: URL_RECUPERAR_SENHA, method: 'POST', token: session?.user.token_acesso, body: { email: email } })
  return dados
}


