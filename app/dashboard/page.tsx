"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { saveDescription, getDescription } from "@/app/lib/firestore";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const { data: session } = useSession();
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Kullanıcı açıklamasını yükle
    useEffect(() => {
        if (session?.user?.email) {
            const loadDescription = async () => {
                const savedDescription = await getDescription(session.user.email);
                if (savedDescription) {
                    setDescription(savedDescription);
                }
                setLoading(false);
            };
            loadDescription();
        } else {
            setLoading(false);
        }
    }, [session]);

    // Açıklamayı kaydet
    const handleSave = async () => {
        if (session?.user?.email) {
            await saveDescription(session.user.email, description);
            alert("Açıklama kaydedildi!");
        }
    };

    // Çıkış yapma
    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/login" }); // Çıkış sonrası /login sayfasına yönlendir
    };

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!session || !session.user) {
        router.push("/login"); // Oturum açılmamışsa /login'e yönlendir
        return null;
    }

    return (
        <div className={'flex flex-col gap-[25px]'}>
            <h1>Welcome, {session?.user?.name}</h1>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Kendiniz hakkında bir açıklama yazın"
            />
            <button onClick={handleSave}>Açıklamayı Kaydet</button>

            <button onClick={handleSignOut}>Çıkış Yap</button>
        </div>
    );
}
