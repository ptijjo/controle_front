import LoginPage from "./components/LoginPage";
import Image from "next/image"


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">

      <div className="flex justify-center relative  top-[-30%] left-[-20%] w-[200px] h-[200px] ">
        <Image src="/logo/logo.png" alt="logo transdev grand est" fill={true} style={{ objectFit: "contain" }} priority sizes="(max-width: 768px) 150px, 200px" />
      </div>
      <h1 className="relative top-[-20%] text-3xl mb-[-20%] lg:mb-[-10%] font-bold">Formulaire de contrôle</h1>
      <LoginPage />
    </main>
  );
}
