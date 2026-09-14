
import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#1a0505] px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Título */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#e63939]">
            Sobre nós
          </h1>

          <p className="mt-3 text-[#f5e6d3]">
            Conheça um pouco mais sobre o nosso restaurante
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Imagem */}
          <div className="overflow-hidden rounded-2xl border-2 border-[#b30000] shadow-[0_0_25px_rgba(179,0,0,0.3)]">
            <Image
              src="/logo_restaurante_geo.png"
              alt="Restaurante"
              width={600}
              height={400}
              className="h-400px w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#e63939]">
              Bem-vindo ao meu, o seu, o nosso restaurante
            </h2>

            <p className="mb-5 text-lg leading-8 text-[#f5e6d3]">
              Somos um restaurante dedicado a oferecer comida saborosa,
              preparada com ingredientes de qualidade e muito carinho.
            </p>

            <p className="mb-6 text-lg leading-8 text-[#f5e6d3]">
              COMEU MORREU

              Bem-vindo ao Comeu Morreu, onde cada prato é uma explosão de sabor!

              Hambúrgueres, pizza de sushi, acarajé e muito mais — tudo feito para quem ama experimentar sabores diferentes.

              Aqui você chega com fome e sai com uma certeza:

              Comeu... morreu de tão bom! ☠️🔥
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-3 gap-4">

              <div className="rounded-xl border border-[#8b0000] bg-[#0d0d0d] p-4 text-center shadow-[0_0_12px_rgba(179,0,0,0.2)]">
                <span className="text-2xl">🍽️</span>
                <p className="mt-2 font-semibold text-[#f5e6d3]">
                  Sabor
                </p>
              </div>

              <div className="rounded-xl border border-[#8b0000] bg-[#0d0d0d] p-4 text-center shadow-[0_0_12px_rgba(179,0,0,0.2)]">
                <span className="text-2xl">⭐</span>
                <p className="mt-2 font-semibold text-[#f5e6d3]">
                  Qualidade
                </p>
              </div>

              <div className="rounded-xl border border-[#8b0000] bg-[#0d0d0d] p-4 text-center shadow-[0_0_12px_rgba(179,0,0,0.2)]">
                <span className="text-2xl">❤️</span>
                <p className="mt-2 font-semibold text-[#f5e6d3]">
                  Carinho
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}