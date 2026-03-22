import LoginPage from "./components/LoginPage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 md:py-12 gap-6 md:gap-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Formulaire de contrôle</h1>
      <LoginPage />
    </main>
  );
}
