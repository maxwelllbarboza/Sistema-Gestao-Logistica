import { NavBar } from "@/componentes/genericos/navBar/navBar";
import { Box } from "@mui/material";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

import { redirect } from "next/navigation";
import { nextAuthOptions } from "../api/auth/[...nextauth]/authOptions";

interface PrivateLayoutProps {
    children: ReactNode;
  }
  export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions);
    if (!session?.user.token_acesso) {
      redirect('/');
      return null;
    }
  
    return (
     <>
     <NavBar />
     <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          px:'3.5rem' ,
          py: 13,
        }}
      >

        {children}
      </Box></>

    );
  }