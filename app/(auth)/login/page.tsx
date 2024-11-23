"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { useEffect } from "react";

export default function LoginPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push("/dashboard");
        }
    }, [session, router]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <button onClick={() => signIn("github")}>GitHub ile Giriş Yap</button>
        </div>
    );
}
