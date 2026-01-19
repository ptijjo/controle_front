import LoginPage from "./components/LoginPage";
import Image from "next/image"


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 md:py-12 gap-6 md:gap-8">
      <div className="flex justify-center w-[150px] h-[150px] md:w-[200px] md:h-[200px] relative">
        <Image 
          src="/logo/logo.png" 
          alt="logo transdev grand est" 
          fill={true} 
          style={{ objectFit: "contain" }} 
          priority 
          sizes="(max-width: 768px) 150px, 200px" 
        />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Formulaire de contrôle</h1>
      <LoginPage />
    </main>
  );
}
