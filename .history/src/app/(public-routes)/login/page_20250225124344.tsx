
import LoginComponent from "@/components/Login/LoginComponent";
import { Metadata } from "next";

export const metadata:Metadata={
    title:{
        absolute:'Login | Transmonteiro'
    }
}
export default function Login() {
  return (
   <LoginComponent/>
  );
}
