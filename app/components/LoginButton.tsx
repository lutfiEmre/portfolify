"use client"; // Bu bileşeni bir Client Component yapar

export default function LoginButton({ onClick }: { onClick: () => void }) {
    return <button onClick={onClick}>Login</button>;
}
