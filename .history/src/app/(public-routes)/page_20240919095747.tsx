import Dashboard from "@/componentes/Dashboard/Dashboard";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { redirect } from "next/navigation";
import { LOGIN } from "../rotasPathname/rotasPathname";

export default function Home() {
redirect(LOGIN)
}
