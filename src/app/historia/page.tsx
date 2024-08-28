import CardImgText from "@/components/cardImgText";
import CardText from "@/components/cardText";
import SectionCard from "@/components/sectionCard";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

export default function Historia() {
    return <>
        <main className="flex flex-col gap-5">
            <div className="flex justify-center py-8">
                <h1 className="text-4xl font-bold text-justify">
                    A história do Morro da África e imigração de negros e pardos em Jaraguá do Sul.
                </h1>
            </div>

            <CardImgText
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCo2KEbK1D_mfuaRtULvTNKq-r-bRyVAfa_A&s"
                acervo="Acervo Pessoal"
                texto="Em 1876 Emílio Carlos Jourdan, engenheiro belga, chegou à Jaraguá do Sul com 35 escravos, 54 negros e 6 brancos, ambos livres, a pedido da Princesa Isabel para colonizar as terras com o plano do Empreendimento Jaraguá, que seria formado por engenhos, usinas de açúcar, serrarias, olárias e ferrarias.
                Porém, por volta de 1984 o engenho faliu, e Jourdan voltou para o Rio de Janeiro com seus escravos, sem pagar os 60 trabalhadores que ele levou. Em 1895 essas terras voltaram a ser públicas e Jourdan comprou 10 mil hectares, fundando a Colônia Jaraguá, logo depois expulsou os então habitantes, que se locomoveram para o Morro da Boa Vista, também conhecido como Morro da África ou Morro da Antena.
                Um ano após comprar as terras, Jourdan as vendeu, e em 1907 alguns nomes conhecidos como  Ângelo Piazeira, Cesar Pereira de Souza e Francisco Tavares da Cunha Mello Sobrinho compraram a Colônia Jaraguá (alemães)."
            >
            </CardImgText>

            <div className="flex flex-col gap-4 justify-center w-full">
                <Card className="flex flex-col gap-4 p-6">
                    <img className="w-full object-cover h-auto border-0 rounded-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCo2KEbK1D_mfuaRtULvTNKq-r-bRyVAfa_A&s" alt="" />
                    <CardDescription>Acervo Pessoal</CardDescription>
                    <CardContent className="p-0">
                        <CardDescription className="text-justify text-lg">Características geográficas do Morro da Boa Vista</CardDescription>
                        <CardDescription className="text-justify text-lg">Altitude - 824m</CardDescription>
                        <CardDescription className="text-justify text-lg">Clima - Subtropical, com temperaturas médias de 21°C</CardDescription>
                        <CardDescription className="text-justify text-lg">Vegetação - Mata Atlântica.</CardDescription>
                    </CardContent>
                </Card>
            </div>

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