import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem Vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que ajuda você a
          controlar suas finanças de forma simples e eficiente. Utilizamos IA
          para monitorar suas movimentações e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline" className="mt-8">
            <LogInIcon className="mr-2" />
          Fazer Login ou Criar Conta
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="Login" className="object-cover" fill />
      </div>
    </div>
  );
};

export default LoginPage;