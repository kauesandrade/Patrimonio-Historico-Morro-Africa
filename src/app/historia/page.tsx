'use client';

import CardImgText from "@/components/cardImgText";
import CardText from "@/components/cardText";
import SectionCard from "@/components/sectionCard";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Historia() {

    const router = useRouter();

    return <>
        <main className="flex flex-col gap-5 m-8 mx-auto w-[90%] justify-center items-center md:w-[70%]">

            <div className="flex flex-col gap-8">

                <div className="flex justify-center py-8">
                    <h1 className="text-xl md:text-4xl font-bold text-justify">
                        A história do Morro da África e imigração de negros e pardos em Jaraguá do Sul.
                    </h1>
                </div>

                <div className="flex flex-col gap-4 justify-center w-full">
                    <Card className="flex flex-col gap-4 p-6">
                        <img className="w-full object-cover h-auto border-0 rounded-sm max-h-96" src="https://poracaso.com/wp-content/uploads/2021/07/inauguracao-herma-emilio-carlos-jourdan-campanha-ocp-predio-prefeitura-jaragua-sul-1941-o-correio-povo-4-outubro.jpg" alt="" />

                        <CardDescription onClick={() => router.push("https://poracaso.com/cotidiano/herma-busto-emilio-carlos-jourdan-fundador-campanha-correio-povo-1941-historia-jaragua-sul/")}>
                            <a className="cursor-pointer text-sky-600 underline">Acervo Por Acaso</a>
                        </CardDescription>

                        <CardContent className="p-0">
                            <CardDescription className="text-justify text-lg indent-8">
                                Em 1876 Emílio Carlos Jourdan, engenheiro belga, chegou à Jaraguá do Sul com 35 escravos, 54 negros e 6 brancos, ambos livres, a pedido da Princesa Isabel para colonizar as terras com o plano do Empreendimento Jaraguá, que seria formado por engenhos, usinas de açúcar, serrarias, olárias e ferrarias.
                            </CardDescription>

                            <CardDescription className="text-justify text-lg indent-8">
                                Porém, por volta de 1984 o engenho faliu, e Jourdan voltou para o Rio de Janeiro com seus escravos, sem pagar os 60 trabalhadores que ele levou. Em 1895 essas terras voltaram a ser públicas e Jourdan comprou 10 mil hectares, fundando a Colônia Jaraguá, logo depois expulsou os então habitantes, que se locomoveram para o Morro da Boa Vista, também conhecido como Morro da África ou Morro da Antena.
                            </CardDescription>

                            <CardDescription className="text-justify text-lg indent-8">
                                Um ano após comprar as terras, Jourdan as vendeu, e em 1907 alguns nomes conhecidos como  ngelo Piazeira, Cesar Pereira de Souza e Francisco Tavares da Cunha Mello Sobrinho compraram a Colônia Jaraguá (alemães).
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>



            </div>

            <div className="flex flex-col gap-4 justify-center w-full">
                <Card className="flex flex-col gap-4 p-6">

                    <img className="w-full object-cover h-auto border-0 rounded-sm max-h-96" src="/assets/imagens/morro1.jpg" alt="" />

                    <CardDescription>
                        <a>Acervo Pessoal</a>
                    </CardDescription>

                    <CardTitle className="text-justify">Características geográficas do Morro da Boa Vista</CardTitle>
                    <CardContent className="flex flex-col p-0 gap-0">
                        <CardDescription className="text-justify text-lg">Altitude - 824m</CardDescription>
                        <CardDescription className="text-justify text-lg">Clima - Subtropical, com temperaturas médias de 21°C</CardDescription>
                        <CardDescription className="text-justify text-lg">Vegetação - Mata Atlântica.</CardDescription>
                    </CardContent>
                </Card>
            </div>

        </main>
    </>
}