import CardImgText from "@/components/cardImgText";
import CardText from "@/components/cardText";
import SectionCard from "@/components/sectionCard";

export default function Historia(){
    return <>
        <main className="flex flex-col gap-5">
            <div className="flex justify-center py-8">
                <h1 className="text-4xl font-bold text-justify">
                    Visitação com explicação sobre a cultura e valorização do protagonismo negro
                </h1>
            </div>
            <CardImgText
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCo2KEbK1D_mfuaRtULvTNKq-r-bRyVAfa_A&s"
                acervo="Acervo Pessoal"
                texto="O projeto veio demonstrar uma cultura que sofreu com ataques a sua história, tentando apagar suas raízes. O canto do hino veio como maneira para demonstrar um pouco dessa cultura tão sofrida, a fim de reviver e apresentar as formas de luta e resistência africana contra o racismo estrutural preso à sociedade.">
            </CardImgText>

            {/* <div className="flex flex-col gap-8">
                <SectionCard tituloSection={brincadeiras.tituloSection} cards={brincadeiras.cards} />
                <CardText
                    texto="As brincadeiras africanas apresentadas foram adaptadas aos materiais e ao terreno do local. Elas demonstram a simplicidade e a criatividade dos povos africanos por meio de uma interação divertida entre as pessoas. 
As brincadeiras eram ligadas a atenção, desenvolvimento físico e raciocínio rápido. Por exemplo, a brincadeira que envolvia o pedra papel tesoura precisava de atenção para correr até o adversário assim que seu colega de equipe era derrotado. Mar Terra e o pular corda precisavam de condicionamento físico e agilidade para compreender e analisar a situação a fim de não perder. O cabo de guerra por sua vez, necessita de força e equilíbrio. Porém a brincadeira de acertar em qual mão estava a pedra é puramente sorte.">
                </CardText>
            </div> */}

        </main>
    </>
}