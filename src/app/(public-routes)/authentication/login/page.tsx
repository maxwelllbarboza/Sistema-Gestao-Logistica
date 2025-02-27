
import LoginComponent from "@/components/Login/LoginComponent";
import { Metadata } from "next";

export const metadata:Metadata={
    title:{
        absolute:'Login | MaxCArga'
    }
}
export default function Login() {
  return (
   <LoginComponent/>
  );
}
