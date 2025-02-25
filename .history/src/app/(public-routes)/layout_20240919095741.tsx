import { getServerSession } from "next-auth";
import { ReactNode } from "react";

import { redirect } from "next/navigation";
import { HOME } from "../rotasPathname/rotasPathname";
import { nextAuthOptions } from "../api/auth/[...nextauth]/authOptions";

interface PrivateLayoutProps {
	children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps){
	const session = await getServerSession(nextAuthOptions)

	if (session?.user.token_acesso) {
		redirect(HOME)
	}

	return <>{children}</>
}
