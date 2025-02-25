
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
export async function searchViagem(formdata: FormDataViagem) {
  const session = await getServerSession(nextAuthOptions)
  const { nome_cliente, dh_inicio_viagem,num_viagem } = formdata;
  const url = new URL(URL_LISTAR_VIAGENS);
  if (nome_cliente != "") { url.searchParams.set('nome_cliente', nome_cliente); }
  if (dh_inicio_viagem != "") { url.searchParams.set('dh_inicio_viagem', dh_inicio_viagem); }
  if (num_viagem != "") { url.searchParams.set('num_viagem', num_viagem); }



  const dados = await apiRequest({
    url: url.toString(),
    method: 'GET',
    token: session?.user.token_acesso
  })
  return dados
}

export async function criarViagem(formdata: FormDataViagemIncluir) {
  const session = await getServerSession(nextAuthOptions)

  const dados = await apiRequest({ url: URL_LISTAR_VIAGENS, method: 'POST', token: session?.user.token_acesso, body: formdata })
  return dados


}
export async function atualizarViagem(formdata: formDataViagemEditar, id: number) {
 
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = `${URL_LISTAR_VIAGENS}/${id}`;

  const dados = await apiRequest({ url: urlsearch, method: 'PATCH', token: session?.user.token_acesso, body: formdata })
  return dados


}
export async function buscarViagem(id: number) {
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = `${URL_LISTAR_VIAGENS}/${id}`;
  const dados = await apiRequest({ url: urlsearch, method: 'GET', token: session?.user.token_acesso })
  return dados


}

export async function searchOperacaoTransporte(formdata: FormDataOperacaoTransporte) {
  const session = await getServerSession(nextAuthOptions)
  const { nomeCliente,coletaData,numViagem} = formdata;
  const url = new URL(URL_LISTAR_OPERACOES);
  if (nomeCliente != "") { url.searchParams.set('nomeCliente',nomeCliente); }
  if (coletaData != "") { url.searchParams.set('coletaData', coletaData); }
  if (numViagem != "") { url.searchParams.set('numViagem', numViagem); }

  const dados = await apiRequest({
    url: url.toString(),
    method: 'GET',
    token: session?.user.token_acesso
  })

  return dados
}
export async function criarOperacaoTransporte(formdata: IncluirOperacaoTransporte) {
  const session = await getServerSession(nextAuthOptions)
  const dados = await apiRequest({ url: URL_LISTAR_OPERACOES, method: 'POST', token: session?.user.token_acesso, body: formdata })
  return dados

}
export async function buscarOperacao(id: number) {
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = `${URL_LISTAR_OPERACOES}/${id}`;
  const dados = await apiRequest({ url: urlsearch, method: 'GET', token: session?.user.token_acesso })
  return dados


}
export async function atualizarOperacao(formdata: IncluirOperacaoTransporte, id: number) {
 
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = `${URL_LISTAR_OPERACOES}/${id}`;

  const dados = await apiRequest({ url: urlsearch, method: 'PATCH', token: session?.user.token_acesso, body: formdata })
  return dados


}
export async function buscarValoresFretePedagio(id_municipio_remetente: number | undefined,id_municipio_destinatario:number|undefined) {
  const session = await getServerSession(nextAuthOptions)
  const dados = await apiRequest({ url: `${URL_LISTAR_FRETES}/buscar`, method: 'POST', token: session?.user.token_acesso, body: {
    id_municipio_remetente: id_municipio_remetente,
    id_municipio_destinatario: id_municipio_destinatario
  } })
  return dados

}
export async function searchTabelaFrete(formdata: FormData) {
  const session = await getServerSession(nextAuthOptions)
  const {municipio_coleta,municipio_descarga} = formdata;
  const url = new URL(URL_LISTAR_FRETES);
  if (municipio_coleta != "") { url.searchParams.set('municipio_coleta',municipio_coleta); }
  if (municipio_descarga != "") { url.searchParams.set('municipio_coleta', municipio_coleta); }
 

  const dados = await apiRequest({
    url: url.toString(),
    method: 'GET',
    token: session?.user.token_acesso
  })

  return dados
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