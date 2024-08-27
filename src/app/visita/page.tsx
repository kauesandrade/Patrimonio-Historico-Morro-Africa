import CardInfo from "@/components/cardInfo";
import CardText from "@/components/cardText";
import SectionCard from "@/components/sectionCard";
import { info } from "console";

export default function Visita() {


    const brincadeiras = {
        "tituloSection": "Brincadeiras Africanas",
        "cards": [
            {
                "url": "visitacao",
                "image": {
                    "src": "",
                    "acervo": "Acervo Pessoal"
                },
                "titulo": "Integrantes do grupo",
                "descricao": "Fellipe Demarchi, Brenda Bauer, Vinícius Gonçalves, Kaue de Andrade, Leticia Mesch, Maria Böhmer / 2933",
                "texto": "false"
            },
            {
                "url": "visitacao",
                "image": {
                    "src": "",
                    "acervo": "Acervo Pessoal"
                },
                "titulo": "Morro da África",
                "descricao": "Visita feita dia 09/08/2024 no parque linear Via Verde com vistas para o Morro da Boa Vista com o objetivo de entender a importância histórica dos negros na cidade de Jaraguá do Sul, conforme propoê a Lei nº 11.645 de 10 de março de 2008 - que obriga o ensino de História da África e Indígena no currículo do Ensino Médio e Fundamental no Brasil.",
                "texto": "false"
            },
            {
                "url": "visitacao",
                "image": {
                    "src": "",
                    "acervo": "Acervo Pessoal"
                },
                "titulo": "Morro da África",
                "descricao": "Visita feita dia 09/08/2024 no parque linear Via Verde com vistas para o Morro da Boa Vista com o objetivo de entender a importância histórica dos negros na cidade de Jaraguá do Sul, conforme propoê a Lei nº 11.645 de 10 de março de 2008 - que obriga o ensino de História da África e Indígena no currículo do Ensino Médio e Fundamental no Brasil.",
                "texto": "false"
            },
            {
                "url": "visitacao",
                "image": {
                    "src": "",
                    "acervo": "Acervo Pessoal"
                },
                "titulo": "Morro da África",
                "descricao": "Visita feita dia 09/08/2024 no parque linear Via Verde com vistas para o Morro da Boa Vista com o objetivo de entender a importância histórica dos negros na cidade de Jaraguá do Sul, conforme propoê a Lei nº 11.645 de 10 de março de 2008 - que obriga o ensino de História da África e Indígena no currículo do Ensino Médio e Fundamental no Brasil.",
                "texto": "false"
            }
        ]
    }


    return <>
        <main className="flex flex-col gap-5">
            <div className="flex justify-center py-8">
                <h1 className="text-4xl font-bold">Visitação com explicação sobre a cultura e valorização do protagonismo negro</h1>
            </div>
            <div className="flex justify-center w-full">
                <img className="w-full object-cover h-auto border-0 rounded-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCo2KEbK1D_mfuaRtULvTNKq-r-bRyVAfa_A&s" alt="" />
            </div>
            <div className="flex flex-col gap-8">
                <CardText texto="O projeto veio demonstrar uma cultura que sofreu com ataques a sua história, tentando apagar suas raízes. O canto do hino veio como maneira pra demonstrar um pouco dessa cultura tão sofrida, a fim de reviver e apresentar as formas de luta e resistência africana contra o racismo estrutural preso à sociedade."></CardText>
                <SectionCard tituloSection={brincadeiras.tituloSection} cards={brincadeiras.cards} />
                <p>
                    As brincadeiras africanas apresentadas foram adaptadas aos materiais e o terreno do local. Elas demonstram a simplicidade e a criatividade dos povos africanos por meio de uma interação divertida entre as pessoas.
                    As brincadeiras eram ligadas a atenção e desenvolvimento de raciocínio rápido. Por exemplo, a brincadeira que envolvia o pedra papel tesoura precisava de atenção para correr até o adversário assim que seu colega de equipe era derrotado. Mar Terra e o pular corda precisavam de condicionamento físico e agilidade para compreender e analisar a situação a fim de não perder.
                </p>
            </div>

        </main>
    </>
}