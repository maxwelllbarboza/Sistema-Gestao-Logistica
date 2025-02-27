

// import { ParamsRequisicao } from '@/Types/Types'
// import { buscarColaborador, getUfs } from '@/actions/handleserverequest'
// import { EditarColaboradorComponent } from '@/componentes/Colaboradores/EditarColaboradorComponent/EditarColaboradorComponent'
// import { ModalSession } from '@/componentes/genericos/ModalSession/ModalSession'
// import { GetTipo } from '@/functions/GetTipoPerfil'


// import React from 'react'

// export default async function Editar ({params}:ParamsRequisicao)  {
//   const dado = await buscarColaborador(params.id)
//   const tipos = await GetTipo()
//   const ufs = await getUfs()
//   return (
//     <>
//     <EditarColaboradorComponent colaborador={{
//         dado: dado?.response,
//         status: dado?.status
//       }} tipos={tipos?.response.dados} ufs={ufs?.response.dados} />
//     {dado?.status === 401 && <ModalSession/>}
//     </>
//   )
  
// }
