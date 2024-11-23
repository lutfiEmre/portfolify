import Image from "next/image";

export default function Home() {
  return (
      <div>
        <h1>Hello, World!</h1>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
  );
}
