import React from "react";

const item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://a0.muscache.com/im/pictures/hosting/Hosting-1312124752810080038/original/077fa4f0-fd3c-4856-a3d6-1bd4a0f44667.jpeg?im_w=320"
        alt="imagem da acomodaçao"
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="font-semi-bold text-2xl">Rio de Janeiro, Brasil</h3>
        <p className="truncate text-gray-600">
          Relaxe neste espaço calmo e cheio de estilo. Studio no coração da
          Lapa, ao lado dos principais bares e baladas do bairro mais boêmio do
          Rio de Janeiro. Que tal ir a Escadaria Selaron, Santa Teresa, Arcos da
          Lapa e metrô à pé? Ou alugar uma bike e passear pelo deslumbrante
          Aterro do Flamengo visitando as praias mais famosas do Rio de Janeiro?
          Tudo isso você só encontra aqui neste aconchegante studio, com a
          localização perfeita para você não perder nenhuma atração do Rio..
          Venha aproveitar!
        </p>
      </div>

      <p>
        <span className="font-semibold">R$ 500</span> por noite
      </p>
    </a>
  );
};

export default item;
