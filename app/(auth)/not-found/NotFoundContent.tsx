"use client";

import { useSession } from "next-auth/react";

export default function NotFoundContent() {
    const { data: session } = useSession();
    return <div>{session ? "Logged in" : "Page not found!"}</div>;
}
