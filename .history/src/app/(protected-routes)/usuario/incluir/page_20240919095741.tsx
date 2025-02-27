

import { getUfs } from '@/actions/handleserverequest'
import { FormIncluirColaborador } from '@/componentes/Colaboradores/IncluirColaboradorComponent/FormIncluirColaborador'
import { GetTipo } from '@/functions/GetTipoPerfil'

import React from 'react'

export default  async function IncluirColaborador() {
  const tipos = await GetTipo()
  const ufs = await getUfs()
  
  return <FormIncluirColaborador tipos={tipos?.response.dados} ufs={ufs?.response.dados}/>
}
