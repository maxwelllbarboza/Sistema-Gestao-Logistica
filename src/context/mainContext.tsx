'use client'
import { PropsColaborador, PropsMessagem, Usuario } from '@/Types/Types';
import { getUfs, validarToken } from '@/actions/handleserverequest';
import { LOGIN } from '@/app/rotasPathname/rotasPathname';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface PropsMain {
    mensagem: PropsMessagem |"";
    setMensagem: React.Dispatch<React.SetStateAction<PropsMessagem |''>>;
    ResetMensagem:()=>void
    ResetIsLogout:()=>void
    isLogout:boolean,
    setIsLogout:React.Dispatch<React.SetStateAction<boolean>>;
    logout:()=>void,
  
  

}
interface propsChildren {
    children: ReactNode;
}


const MainContext = createContext<PropsMain>({
    mensagem:'',
    setMensagem: () => {},
    ResetMensagem:()=>{},
    isLogout:false,
    setIsLogout:()=>{},
    ResetIsLogout:()=>{},
    logout:()=>{},
    
 
   
 
});
export const useMain = () => useContext(MainContext);

export const MainProvider: React.FC<propsChildren> = ({ children }) => {
    const [mensagem, setMensagem] = useState<PropsMessagem | ''>('');
    const [isLogout, setIsLogout] = useState<boolean>(false);
    

    const router = useRouter()
    const ResetMensagem=()=>{
        setMensagem('')
    }

    const ResetIsLogout=()=>{
        setIsLogout(false)
    }

  
 
    const logout=async()=>{
        await signOut({
            redirect: false,
          });
          router.replace(LOGIN);

    }
// useEffect(()=>{
//     fectUfs()
// },[])



    return (
        <MainContext.Provider
            value={{ mensagem, setMensagem,ResetMensagem,isLogout,setIsLogout,ResetIsLogout,logout}}
        >
            {children}
        </MainContext.Provider>
    );
};
