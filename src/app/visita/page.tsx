import CardImgText from "@/components/cardImgText";
import CardText from "@/components/cardText";
import SectionCard from "@/components/sectionCard";

export default function Visita() {


    const brincadeiras = {
        "tituloSection": "Brincadeiras Africanas",
        "cards": [
            {
                "url": "",
                "file": {
                    "type": "img",
                    "src": "",
                    "acervo": "Acervo Pessoal"
                },
                "titulo": "Cabo de Guerra humano",
                "descricao": "O cabo de guerra é uma brincadeira que envolve força e estratégia. A brincadeira era feita com duas equipes que ao invés puxam uma corda para lados opostos eles se juntavam e faziam uma corda humana. A equipe que conseguisse puxar o outro time para o seu lado vence a brincadeira.",
                "texto": "false"
            },
            {
                "url": "",
                "file": {
                    "type": "img",
                    "src": "/assets/images/pedraPapelTesoura.jpg",
                    "acervo": "Acervo Pessoal"
                },
                "titulo": "Pedrinha",
                "descricao": "",
                "texto": "false"
            },
            {
                "url": "",
                "file": {
                    "type": "img",
                    "src": "/assets/images/pedraPapelTesoura.jpg",
                    "acervo": "Acervo Pessoal"
                },
                "titulo": "Circuito de pedra, papel e tesoura",
                "descricao": "",
                "texto": "false"
            },
            {
                "url": "",
                "file": {
                    "type": "mp4",
                    "src": "/assets/images/terraMar.jpg",
                    "acervo": "Acervo Pessoal"
                },
                "titulo": "Mar Terra",
                "descricao": "",
                "texto": "false"
            },
            {
                "url": "",
                "file": {
                    "type": "mp4",
                    "src": "/assets/images/pularCorda.mp4",
                    "acervo": "Acervo Pessoal"
                },
                "titulo": "Pular Corda",
                "descricao": "",
                "texto": "false"
            }
        ]
    }


    return <>
        <main className="flex flex-col gap-5">
            <div className="flex justify-center py-8">
                <h1 className="text-4xl font-bold text-justify">
                    Visitação com explicação sobre a cultura e valorização do protagonismo negro
                </h1>
            </div>
            <CardImgText
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCo2KEbK1D_mfuaRtULvTNKq-r-bRyVAfa_A&s"
                texto="O projeto veio demonstrar uma cultura que sofreu com ataques a sua história, tentando apagar suas raízes. O canto do hino veio como maneira para demonstrar um pouco dessa cultura tão sofrida, a fim de reviver e apresentar as formas de luta e resistência africana contra o racismo estrutural preso à sociedade.">
            </CardImgText>

            <div className="flex flex-col gap-8">
                <SectionCard tituloSection={brincadeiras.tituloSection} cards={brincadeiras.cards} />
                <CardText
                    texto="As brincadeiras africanas apresentadas foram adaptadas aos materiais e ao terreno do local. Elas demonstram a simplicidade e a criatividade dos povos africanos por meio de uma interação divertida entre as pessoas. 
As brincadeiras eram ligadas a atenção, desenvolvimento físico e raciocínio rápido. Por exemplo, a brincadeira que envolvia o pedra papel tesoura precisava de atenção para correr até o adversário assim que seu colega de equipe era derrotado. Mar Terra e o pular corda precisavam de condicionamento físico e agilidade para compreender e analisar a situação a fim de não perder. O cabo de guerra por sua vez, necessita de força e equilíbrio. Porém a brincadeira de acertar em qual mão estava a pedra é puramente sorte.">
                </CardText>
            </div>

        </main>
    </>
}