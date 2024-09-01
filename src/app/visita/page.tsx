'use client';

import CardImgText from "@/components/cardImgText";
import CardText from "@/components/cardText";
import SectionCard from "@/components/sectionCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import informacoes from "../../../public/json/informacoes.json";

export default function Visita() {

    const router = useRouter();

    const info = informacoes;

    return <>
        <main className="flex flex-col gap-5 m-8 mx-auto w-[90%] justify-center items-center md:w-[70%]">

            <div className="flex flex-col gap-8">

                <div className="flex justify-center py-8">
                    <h1 className="text-xl md:text-4xl font-bold text-justify">
                        Visitação com explicação sobre a cultura e valorização do protagonismo negro na cidade de Jaraguá do Sul.
                    </h1>
                </div>

                <CardImgText
                    src="/assets/imagens/morro1.jpeg"
                    acervo="Acervo Pessoal"
                    texto="Visita feita dia 09/08/2024 no parque linear Via Verde com vistas para o Morro da Boa Vista com o objetivo de entender a importância histórica dos negros na cidade de Jaraguá do Sul, conforme propoê a Lei nº 11.645 de 10 de março de 2008 - que obriga o ensino de História da África e Indígena no currículo do Ensino Médio e Fundamental no Brasil.">
                </CardImgText>

                <div className="w-full flex flex-col gap-5">
                    <div className="flex flex-col w-full md:flex-row md:flex-wrap gap-4 md:justify-center md:mx-auto">
                        {info[0].cards.map((card: any, index: any) => (
                            <Card className="w-full md:w-[48%]" key={index}>
                                <CardHeader className="flex flex-col gap-1 pb-3">

                                    <iframe className="w-full object-cover min-h-60 max-h-96" src={card.file.src} frameBorder="0" allowFullScreen></iframe>

                                    <CardDescription>
                                        <a>{card.file.acervo}</a>
                                    </CardDescription>

                                </CardHeader>
                                <CardContent className="flex flex-col gap-4">
                                    <CardTitle className="text-justify">{card.titulo}</CardTitle>
                                    <CardDescription className="text-wrap text-justify">{card.descricao}</CardDescription>
                                    {card.url != "" &&
                                        <CardDescription onClick={() => router.push("/" + card.url)}>
                                            <a className="text-wrap text-justify cursor-pointer text-sky-600 border-b-2 border-sky-400/40" href={"/" + card.url}>Saiba mais...</a>
                                        </CardDescription>
                                    }
                                </CardContent>
                            </Card >
                        ))}
                    </div>
                </div>


            </div>

            <div className="border-b-2 border-gray-800/10"></div>

            <div className="flex flex-col gap-8">
                <SectionCard tituloSection={info[1].tituloSection} cards={info[1].cards} />
                <CardText
                    texto="As brincadeiras africanas apresentadas foram adaptadas aos materiais e ao terreno do local. Elas demonstram a simplicidade e a criatividade dos povos africanos por meio de uma interação divertida entre as pessoas. 
                        As brincadeiras eram ligadas a atenção, desenvolvimento físico e raciocínio rápido. Por exemplo, a brincadeira que envolvia o pedra papel tesoura precisava de atenção para correr até o adversário assim que seu colega de equipe era derrotado. Mar Terra e o pular corda precisavam de condicionamento físico e agilidade para compreender e analisar a situação a fim de não perder. O cabo de guerra por sua vez, necessita de força e equilíbrio. Porém a brincadeira de acertar em qual mão estava a pedra é puramente sorte.">
                </CardText>
            </div>

            <div className="border-b-2 border-gray-800/10"></div>

            <div className="flex flex-col gap-8">
                <h3 className="flex align-center justify-center font-bold text-3xl">{info[2].tituloSection}</h3>

                <CardImgText
                    src="/assets/imagens/acaraje.jpeg"
                    titulo="Acarajé"
                    acervo="Acervo Pessoal"
                    texto="Comemos um acarajé adaptado, comida tipicamente baiana adaptada ao gosto do pessoal do sul do brasil, contendo um bolinho de cuscuz com recheio de vatapá e camarão.">
                </CardImgText>

                <SectionCard cards={info[2].cards} />
            </div>

            <div className="border-b-2 border-gray-800/10"></div>

            <div className="flex flex-col gap-8">
                <h3 className="flex align-center justify-center font-bold text-3xl">Brinquedo Africano</h3>

                <CardImgText
                    src="/assets/imagens/boneca.jpg"
                    titulo="Boneca Abayomi"
                    acervo="Acervo Pessoal"
                    texto="A Abayomi é uma boneca de origem iorubá feita à mão, utilizando panos de 2 cores diferentes enrolados a fim de parecer uma mulher africana. Essa boneca representa alegria e felicidade, e geralmente é dada como presente a alguma pessoa amada.">
                </CardImgText>
            </div>

        </main>
    </>
}