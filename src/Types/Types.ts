type TipoMensagem = 'error' | 'info' | 'success' | 'warning' ;


export interface PropsMessagem {
    tipo: TipoMensagem ;
    conteudo: string;
}
export interface Usuario{
    name:string;
    email:string
    senha:string
}
export interface PropsInput{
    name:string,
    label:string,
    required:boolean
}
export interface Select {
    id: number,
    label: string,
}
export interface Endereço {
    id: number,
    logradouro: string,
    numero: string,
    bairro: string,
    cep: string,
    complemento: string,
    ponto_referencia: string,
    uf: string
    municipio: Select[]
}
export interface PropsColaborador {
    tipo: string
    nome: string,
    email: string,
    rg: number,
    cpf: number,
    telefone: string,
    cnh: number,
    vencimento_cnh: Date,
    chave_pix1: string,
    chave_pix2: string,
    observacoes: string,
    endereço: Endereço



}
export interface Cliente{
    id:number
    nome:string,
    cnpj:number | string,
    telefone:string,
    email:string,
    endereco:{
        logradouro:string,
        numero:string,
        bairro:string,
        cep:string,
        ponto_referencia:string,
        complemento:string,
        municipio:{
            id:number,
            nome?:string,
            uf?:string
        }
    }
}


export interface ParamsRequisicao{
    params:{
        id:number
    }
}
export interface ClienteDetalhe{
    cliente:{
      dado:Cliente,
      status:number | undefined
    },
    ufs:string[]
  }
  export interface MunicipiosPorEstado {
    id: number,
    nome: string,
    uf: string // Definindo um índice de tipo para aceitar qualquer chave como string e qualquer valor como array de string
}
export interface Colaboradores{
    id:number ,
    tipo:string
    nome:string,
    email:string,
    telefone:string,
    chave_pix1:string,
    chave_pix2:string,
    vencimento_cnh:string
   usuario?:{
    perfil:{
        id:number,
        label:string
    },
    ativo:boolean,
    bloqueado:boolean
   }
}
export interface Veiculo {
    id:number,
    placa: string,
    fabricante: string,
    modelo: string,
    eixos: string,
    cor: string,
    tipo: Select 
    propriedade: Select
    proprietario: string,
    carroceria:Select
}
export interface OperaçõesTransporte{
    id_operacao_transporte: number,
    contratante: {
        id_cliente: number,
        nome_cliente:string
    },
    coleta_data_hora: string,
    descarga_data_hora: string,
    valor_frete: number
  }
  export interface OperacaoTransporteListagem{
    id?:number,
    num_viagem: number,
    nome_cliente: string,
    coleta_data_endereco: string,
    descarga_data_endereco: string,
    valor_frete: number
  }
  export interface TabelaFreteListagem{
    id:number 
    municipio_coleta:{
        id:number,
        nome:string,
        uf:string
    },
    municipio_descarga: {
        id:number,
        nome:string,
        uf:string
    }
    frete: string,
    pedagio: string,
    operacoes_realizada: number,
    ultima_atualizacao: string
  }
   interface ViagemVisualizar {
    num_viagem: number
    dh_inicio_viagem: string,
    dh_fim_viagem: string,
    tempo_total: string,
    intervalo_viagem_anterior: number,
    km_inicial: number,
    km_final: number,
    quilometragem_percorrida: number,
    quilometragem_intervalo: number,
    receita:string,
    total_abastecimento:number,
    valor_pedagio_total: number,
    resultado: string,
    observacao: string,
    obs_inicio_viagem: string,
    obs_fim_viagem: string,
    operacoes_transporte:OperaçõesTransporte[]
  }

export interface Viagem {
    id?:number
    num_viagem: number,
    dh_inicio_viagem: string,
    dh_fim_viagem:string,
    quilometragem_percorrida: number
}


export interface Colaborador{
    id: number,
    tipo: {
        id:number,
        label:string
    }
    nome: string,
    email: string,
    telefone: string,
    rg: number,
    cpf: number,
    cnh: number,
    chave_pix1: string,
    chave_pix2: string,
    vencimento_cnh: string,
    observacao:string
    endereco: {
        id: number,
        logradouro: string,
        numero: string,
        bairro: string,
        cep: string,
        complemento: string,
        ponto_referencia: string,
        municipio: {
            id: number,
            nome: string,
            uf: string
        }
    }

}
export interface ColaboradorDetalhe{
    colaborador:{
      dado:Colaborador,
      status:number | undefined
    }
    tipos:Select[]
    ufs:string[]
}
export interface VeiculoDetalhe{
    veiculo:{
      dado:Veiculo,
      status:number | undefined
     
    }
}
export interface OperacaoDetalhe{
    operacao:{
      dado:VisualizarOperacao,
      status:number | undefined
     
    }
}
export interface ViagemDetalhe{
    viagem:{
      dado:ViagemVisualizar,
      status:number | undefined
     
    }
}
export interface OperacaoTransporteIncluir{
        id?:number
        num_viagem: Select,
        id_cliente_contratante: Select,
        id_cliente_remetente: Select,
        id_cliente_destinatario: Select,
        uf_remetente: string,
        municipio_remetente: {
            id: number,
            nome: string,
            uf: string
        },    
        uf_destinatario: string,
        municipio_destinatario: {
            id: number,
            nome: string,
            uf: string
        },    
        valor_frete: string,
        id_motorista: Select,
        carreta: Select, 
        cavalo: Select,
        ida_retorno: number,    
        valor_pedagio: string,
        valor_desconto: string,
        parcela_um: string,
        parcela_dois: string,
        parcela_tres: string 

}
export interface VisualizarOperacao{
    id:number
    num_viagem: number,
    cliente_contratante: Select,
    cliente_remetente: Select,
    cliente_destinatario: Select,
    municipio_remetente: {
        id: number,
        nome: string,
        uf: string
    },    
    municipio_destinatario: {
        id: number,
        nome: string,
        uf: string
    },    
    valor_frete: string,
    motorista: Select,
    veiculo_carreta: Select, 
    veiculo_cavalo: Select,
    ida_retorno: number,    
    valor_pedagio: string,
    valor_desconto_operacao: string,
    valor_parcela_frete1: string,
    valor_parcela_frete2: string,
    valor_parcela_frete3: string 
  
  }