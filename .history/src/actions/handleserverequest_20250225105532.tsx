
'use server'
import { Cliente, Colaborador, Colaboradores, Veiculo, Viagem } from "@/Types/Types";
import { URL_BASE, URL_LISTAR_CLIENTES, URL_LISTAR_COLABORADORES, URL_LISTAR_FRETES, URL_LISTAR_MUNICIPIOS, URL_LISTAR_OPERACOES, URL_LISTAR_VEICULOS, URL_LISTAR_VIAGENS, URL_RECUPERAR_SENHA, URL_USUARIOS, URL_VALIDAR_TOKEN } from "@/app/ConfigRequest/ConfigRequest";



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
export async function buscarVeiculo(id: number) {
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = `${URL_LISTAR_VEICULOS}/${id}`;
  const dados = await apiRequest({ url: urlsearch, method: 'GET', token: session?.user.token_acesso })
  return dados


}n recuperarSenha(email: string) {
  const session = await getServerSession(nextAuthOptions)

  const dados = await apiRequest({ url: URL_RECUPERAR_SENHA, method: 'POST', token: session?.user.token_acesso, body: { email: email } })
  return dados


}


}
export async function criarTabelaFrete(formdata: FormDataModal) {
  const dadomodificado ={
    ...formdata,
    valor_frete_base: Number(formdata.valor_frete_base),
    valor_pedagios: Number(formdata.valor_pedagios)   
  }
  console.log(dadomodificado)
  const session = await getServerSession(nextAuthOptions)
  const dados = await apiRequest({ url: URL_LISTAR_FRETES, method: 'POST', token: session?.user.token_acesso, body: dadomodificado })
  console.log(dados)
  return dados

}
export async function AtualizarTabelaFrete(formdata: FormDataModal, id:number) {
  const dadomodificado ={
    ...formdata,
    valor_frete_base: Number(formdata.valor_frete_base),
    valor_pedagios: Number(formdata.valor_pedagios)   
  }
  console.log(dadomodificado)
  const session = await getServerSession(nextAuthOptions)
  const dados = await apiRequest({ url: URL_LISTAR_FRETES, method: 'POST', token: session?.user.token_acesso, body: dadomodificado })
  console.log(dados)
  return dados

}

export async function atualizaTabelaFrete(formdata: FormDataModal, id: number) {
  const dadomodificado ={
    ...formdata,
    valor_frete_base: Number(formdata.valor_frete_base),
    valor_pedagios: Number(formdata.valor_pedagios)   
  }
 
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = `${URL_LISTAR_FRETES}/${id}`;

  const dados = await apiRequest({ url: urlsearch, method: 'PATCH', token: session?.user.token_acesso, body: dadomodificado })
  return dados


}