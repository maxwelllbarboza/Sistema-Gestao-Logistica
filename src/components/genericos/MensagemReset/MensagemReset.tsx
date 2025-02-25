'use client'
import { useMain } from '@/context/mainContext'
import React, { useEffect } from 'react'

export const MensagemReset = () => {
const {setMensagem, mensagem}=useMain()


    useEffect(()=>{
        setMensagem('')

    })
  return  mensagem
}
