
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

interface PropsApi{
    url:string,
    method:string,
    body?:any
    token:string | undefined
}



export const apiRequest = async({url,method,body,token}:PropsApi)=>{

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body:body ? JSON.stringify(body) : undefined,
      });
      const responseData = await response.json();
     
      return {
        status: response.status,
        response: responseData,
      }
    
    
    } catch (error: any) {
      console.error('Detalhe do erro:', error);
    }
  
  }