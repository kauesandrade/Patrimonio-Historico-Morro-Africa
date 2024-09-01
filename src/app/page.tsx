import CardInfo from "@/components/cardInfo";
import informacoes from "../../public/json/informacoes.json";

export default function Home() {

  return (
    <main className="w-full" >

      <section className="flex h-screen w-full pt-10 bg-gradient-to-r from-sky-600/70 from-40% to-green-600/70 to-90%">
        <div className="flex flex-col md:flex-row w-full md:justify-around itens-center h-2/3 px-5 md:px-0 gap-6">
          <div className="flex flex-col gap-4 md:w-1/2 h-full">
            <img className="md:w-full h-full drop-shadow-2xl object-fit rounded-lg" src="/assets/imagens/morro1.jpeg" alt="" />
            <p className="text-white">Acervo Pessoal</p>
          </div>
          <div className="flex flex-col md:w-2/5 h-full justify-center gap-4">
            <h2 className="text-6xl text-justify font-bold text-white">Projeto Rotas Africanas em Jaraguá do Sul</h2>
            <p className="text-xl text-justify font-semibold text-white">Memórias do povoado Morro da África e a história dos negros em Jaraguá do Sul.</p>
          </div>
        </div>
      </section>

      <section>

      </section>


      {/* <div className="flex flex-wrap gap-5"> 
        {informacoes.map((info: any, index: any) => (
          <div key={index} className="flex flex-wrap gap-5">
            {info.cards.map((card: any, index: any) => (
            <CardInfo key={index} card={card} />
            ))}
          </div>
        ))}
      </div> */}

    </main>
  );
}
