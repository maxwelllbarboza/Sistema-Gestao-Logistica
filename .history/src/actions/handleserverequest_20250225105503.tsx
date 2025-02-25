
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


}
export async function atualizarCliente(formdata: Cliente, id: number) {
  const session = await getServerSession(nextAuthOptions)
  const queryString = `${id}`;
  const urlsearch = `${URL_LISTAR_CLIENTES}/${queryString}`;

  const dados = await apiRequest({ url: urlsearch, method: 'PATCH', token: session?.user.token_acesso, body: formdata })
  return dados


}
export async function validarToken() {
  const session = await getServerSession(nextAuthOptions)
  const dados = await apiRequest({ url: URL_VALIDAR_TOKEN, method: 'POST', token: session?.user.token_acesso, body: { email: session?.user.email } })
  return dados


}

export async function searchcolaboradores(formdata: FormDataColaboradores) {
  const session = await getServerSession(nextAuthOptions)
  const { name, email, tipo } = formdata;
  const url = new URL(URL_LISTAR_COLABORADORES);
  if (name != "") { url.searchParams.set('nome', name); }
  if (email != "") { url.searchParams.set('email', email); }
  if (tipo != "") { url.searchParams.set('tipo', tipo); }

  const dados = await apiRequest({
    url: url.toString(),
    method: 'GET',
    token: session?.user.token_acesso
  })
  return dados
}
export async function buscarColaborador(id: number) {
  const session = await getServerSession(nextAuthOptions)

  const queryString = `${id}`;
  const urlsearch = `${URL_LISTAR_COLABORADORES}/${queryString}`;
  const dados = await apiRequest({ url: urlsearch, method: 'GET', token: session?.user.token_acesso })
  return dados


}
export async function atualizarColaborador(formdata: Colaboradores, id: number) {
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = `${URL_LISTAR_COLABORADORES}/${id}`;

  const dados = await apiRequest({ url: urlsearch, method: 'PATCH', token: session?.user.token_acesso, body: formdata })
  return dados


}
export async function ativarColaborador(id: number) {
  const session = await getServerSession(nextAuthOptions)
  const queryString = `${id}`;
  const urlsearch = `${URL_USUARIOS}/${queryString}/ativar`;

  const dados = await apiRequest({ url: urlsearch, method: 'PATCH', token: session?.user.token_acesso })
  return dados


}
export async function desativarColaborador(id: number) {
  const session = await getServerSession(nextAuthOptions)
  const queryString = `${id}`;
  const urlsearch = `${URL_USUARIOS}/${queryString}/desativar`;
  const dados = await apiRequest({ url: urlsearch, method: 'PATCH', token: session?.user.token_acesso })
  return dados
}

export async function criarUsuario(formdata: ColaboradorPerfil) {
  const session = await getServerSession(nextAuthOptions)

  const urlsearch = URL_USUARIOS;
  const dados = await apiRequest({ url: urlsearch, method: 'POST', token: session?.user.token_acesso, body: formdata })
  return dados

}

export async function trocarPerfilUsuario(perfil: number, id: number) {
  const session = await getServerSession(nextAuthOptions)

  const urlsearch = `${URL_USUARIOS}/${id}/perfil`;
  const dados = await apiRequest({ url: urlsearch, method: 'PATCH', token: session?.user.token_acesso, body: { perfil: perfil } })
  return dados


}
export async function criarColaborador(formdata: Colaboradores) {
  const session = await getServerSession(nextAuthOptions)

  const dados = await apiRequest({ url: URL_LISTAR_COLABORADORES, method: 'POST', token: session?.user.token_acesso, body: formdata })
  return dados


}
export async function recuperarSenha(email: string) {
  const session = await getServerSession(nextAuthOptions)

  const dados = await apiRequest({ url: URL_RECUPERAR_SENHA, method: 'POST', token: session?.user.token_acesso, body: { email: email } })
  return dados


}
export async function atualizarSenha(id: number, formdata: AtualizarSenha) {
  const session = await getServerSession(nextAuthOptions)
  const queryString = `${id}`;
  const urlsearch = `${URL_USUARIOS}/${queryString}/senha`;


  const dados = await apiRequest({ url: urlsearch, method: 'PATCH', token: session?.user.token_acesso, body: formdata })

  return dados


}
export async function listarTipoColaborador() {
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = `${URL_LISTAR_COLABORADORES}/tipos`;
  const dados = await apiRequest({ url: urlsearch, method: 'GET', token: session?.user.token_acesso })
  return dados
}
export async function listarPerfilColaborador() {
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = `${URL_USUARIOS}/perfis`;
  const dados = await apiRequest({ url: urlsearch, method: 'GET', token: session?.user.token_acesso })
  return dados
}
export async function searchVeiculos(formdata: FormDataVeiculo) {
  const session = await getServerSession(nextAuthOptions)
  const { fabricante,proprietario,placa } = formdata;
  const url = new URL(URL_LISTAR_VEICULOS);
  if (fabricante != "") { url.searchParams.set('fabricante', fabricante); }
  if (proprietario != "") { url.searchParams.set('proprietario', proprietario); }
  if (placa != "") { url.searchParams.set('placa', placa); }
  const dados = await apiRequest({
    url: url.toString(),
    method: 'GET',
    token: session?.user.token_acesso
  })

  return dados
}
export async function atualizarVeiculo(formdata: Veiculo, id: number) {
  const dadosFormatados={
    ...formdata,
    tipo:formdata.tipo.id,
    carroceria:formdata.carroceria.id,
    propriedade:formdata.propriedade.id
  }
  const session = await getServerSession(nextAuthOptions)
  const urlsearch = `${URL_LISTAR_VEICULOS}/${id}`;

  const dados = await apiRequest({ url: urlsearch, method: 'PATCH', token: session?.user.token_acesso, body: dadosFormatados })
  return dados


}
export async function criarVeiculo(formdata: Veiculo) {
  const session = await getServerSession(nextAuthOptions)
  const dadosFormatados={
    ...formdata,
    tipo:formdata.tipo.id,
    carroceria:formdata.carroceria.id,
    propriedade:formdata.propriedade.id
  }

  const dados = await apiRequest({ url: URL_LISTAR_VEICULOS, method: 'POST', token: session?.user.token_acesso, body: dadosFormatados })
  return dados


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