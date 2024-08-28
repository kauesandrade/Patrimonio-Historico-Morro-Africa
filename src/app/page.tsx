import CardInfo from "@/components/cardInfo";
import informacoes from "../../public/json/informacoes.json";

export default function Home() {

  return (
    <main>  
      <div className="flex flex-wrap gap-5"> 
        {informacoes.map((info: any, index: any) => (
          <div key={index} className="flex flex-wrap gap-5">
            {info.cards.map((card: any, index: any) => (
            <CardInfo key={index} card={card} />
            ))}
          </div>
        ))}
      </div>

    </main>
  );
}
