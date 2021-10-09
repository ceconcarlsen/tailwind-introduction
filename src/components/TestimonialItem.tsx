import React from "react";

const TestmonialItem = () => {
  return (
    <div className="bg-gray-200 p-8 shadow rounded-xl overflow-hidden md:flex md:p-0">
      <img
        className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto"
        src="/foto.jpeg"
        alt="image"
      />
      <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
        <div className="text-lg font-semibold">
          "Olá meu nome é Gabriel e esse é meu 1° contato com Tailwind, uma
          biblioteca CSS descritiva. Teste a responsividade deste simples App."
        </div>
        <div className="font-medium ">
          <div className="text-green-600 font-bold">Gabriel Cecon Carlsen</div>
          <div className="text-gray-500">
            Estudante de Ciência da Computação
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestmonialItem;
