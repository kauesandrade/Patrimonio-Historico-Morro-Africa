'use client';

import CardImgText from "@/components/cardImgText";
import CardText from "@/components/cardText";
import SectionCard from "@/components/sectionCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Visita() {

    const router = useRouter();

    const info = [
        {
            "tituloSection": "",
            "cards": [
                {
                    "url": "",
                    "file": {
                        "type": "mov",
                        "src": "https://www.youtube.com/embed/H43t4xIn6H0",
                        "acervo": "Acervo Pessoal",
                        "acervoUrl": "",
                        "controles": "true"
                    },
                    "titulo": "Palestra Luiz Fernando Olegar",
                    "descricao": "O vídeo é um recorte da palestra dada pelo presidente do movimento MOCONEVI Profe. Luis Fernando Olegar. Ele fala sobre a importância de se conhecer a história e a cultura africana e sobre o combate ao racismo, valorização da cultura afro em Jaraguá do Sul.",
                    "texto": "false"
                },
                {
                    "url": "",
                    "file": {
                        "type": "mov",
                        "src": "/assets/imagens/cancaoHino.movasdasd",
                        "acervo": "Acervo Pessoal",
                        "acervoUrl": "",
                        "controles": "true"
                    },
                    "titulo": "Canção contra o racismo",
                    "descricao": "O vídeo é um recorte da canção que é utilizada pelos paises africanos na luta contra o racismo. A canção foi cantada por um dos integrantes do movimento MOCONEVI.",
                    "texto": "false"
                }
            ]
        },
        {
            "tituloSection": "Brincadeiras Africanas",
            "cards": [
                {
                    "url": "",
                    "file": {
                        "type": "img",
                        "src": "/assets/imagens/caboGuerra3.jpeg",
                        "acervo": "Acervo Pessoal",
                        "acervoUrl": "",
                        "controles": "false"
                    },
                    "titulo": "Cabo de Guerra humano",
                    "descricao": "O cabo de guerra é uma brincadeira que envolve força e estratégia. A brincadeira era feita com duas equipes que ao invés puxam uma corda para lados opostos eles se juntavam e faziam uma corda humana. A equipe que conseguisse puxar o outro time para o seu lado vence a brincadeira.",
                    "texto": "false"
                },
                {
                    "url": "",
                    "file": {
                        "type": "img",
                        "src": "/assets/imagens/pedrinha1.jpeg",
                        "acervo": "Acervo Pessoal",
                        "acervoUrl": "",
                        "controles": "false"
                    },
                    "titulo": "Pedrinha",
                    "descricao": "Uma fila de 4 pessoas escondia uma pedra em uma de suas mãos, o adversário teria que adivinhar em qual mão estava, podendo passar para o próximo e continuar assim até passar pelas 4 pessoas, sempre que se erra, volta para o início.",
                    "texto": "false"
                },
                {
                    "url": "",
                    "file": {
                        "type": "img",
                        "src": "/assets/imagens/pedraPapelTesoura.jpg",
                        "acervo": "Acervo Pessoal",
                        "acervoUrl": "",
                        "controles": "false"
                    },
                    "titulo": "Circuito de pedra, papel e tesoura",
                    "descricao": "Jogo em equipe em que os participantes tinham que correr para uma corda e jogar pedra, papel e tesoura com o adversário, quem ganhasse continuava correndo, quem perdesse voltava para o final da fila. Ganha um ponto quem cruzar todo o circuito sem perder no Pedra,Papel e Tesoura para os adversários.",
                    "texto": "false"
                },
                {
                    "url": "",
                    "file": {
                        "type": "mp4",
                        "src": "/assets/imagens/terraMar.mp4",
                        "acervo": "Acervo Pessoal",
                        "acervoUrl": "",
                        "controles": "false"
                    },
                    "titulo": "Mar Terra",
                    "descricao": "uma versão adaptada do famoso vivo-morto. Quando o comandante da brincadeira grita 'mar' ou 'terra', os participantes teriam que trocar de lado na corda.",
                    "texto": "false"
                },
                {
                    "url": "",
                    "file": {
                        "type": "mp4",
                        "src": "/assets/imagens/pulaCorda.mp4",
                        "acervo": "Acervo Pessoal",
                        "acervoUrl": "",
                        "controles": "false"
                    },
                    "titulo": "Pular Corda",
                    "descricao": "Uma pessoa  fica no meio de um círculo envolto de pessoas enquanto girava uma corda, os participantes no círculo teriam que pular a corda para não serem eliminados.",
                    "texto": "false"
                }
            ]
        },
        {
            "tituloSection": "Comida Africana",
            "cards": [
                {
                    "url": "",
                    "file": {
                        "type": "img",
                        "src": "https://s2-receitas.glbimg.com/mBKC_y0xdSFApyR-B8Ll2N0jQg4=/0x0:1000x678/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/C/e/BMl3G2R6GSykubWOLuKg/acaraje.jpg",
                        "acervo": "Acervo Globo Receitas",
                        "acervoUrl": "https://receitas.globo.com/blog/dicas-e-tecnicas/acaraje-palavra-tem-origem-africana-entenda-o-significado.ghtml",
                        "controles": "false"
                    },
                    "titulo": "As origens africanas do acarajé",
                    "descricao": "O acarajé, em sua forma original, é um patrimônio cultural imaterial do Brasil e tem suas origens nas tradições culinárias da África Ocidental, mais precisamente nos países que hoje compõem a Nigéria e o Benin. Era preparado pelas mulheres iorubás e jejes, que utilizavam feijão fradinho moído, azeite de dendê e sal para criar uma massa que era frita em azeite quente.",
                    "texto": "false"
                },
                {
                    "url": "",
                    "file": {
                        "type": "img",
                        "src": "https://brmais.net/storage/posts/June2021/Acaraj%C3%A92%20Manuela.jpg",
                        "acervo": "Acervo Blog BR Mais",
                        "acervoUrl": "https://www.brmais.net/blog/o-sagrado-acaraje-do-mundo-para-a-bahia-e-vice-versa",
                        "controles": "false"
                    },
                    "titulo": "A chegada ao Brasil e a influência da cultura afro-brasileira",
                    "descricao": "Com a chegada dos africanos escravizados ao Brasil, o acarajé se tornou um alimento fundamental na dieta desses povos. As mulheres africanas, que mantinham vivas suas tradições culinárias, adaptaram a receita aos ingredientes disponíveis no novo território, incorporando elementos da culinária indígena e portuguesa.",
                    "texto": "false"
                }
            ]
        }

    ]


    return <>
        <main className="flex flex-col gap-5">

            <div className="flex flex-col gap-8">

                <div className="flex justify-center py-8">
                    <h1 className="text-xl md:text-4xl font-bold text-justify">
                        Visitação com explicação sobre a cultura e valorização do protagonismo negro na cidade de Jaraguá do Sul
                    </h1>
                </div>

                <CardImgText
                    src="/assets/imagens/morro1.jpg"
                    acervo="Acervo Pessoal"
                    texto="Visita feita dia 09/08/2024 no parque linear Via Verde com vistas para o Morro da Boa Vista com o objetivo de entender a importância histórica dos negros na cidade de Jaraguá do Sul, conforme propoê a Lei nº 11.645 de 10 de março de 2008 - que obriga o ensino de História da África e Indígena no currículo do Ensino Médio e Fundamental no Brasil.">
                </CardImgText>

                <div className="w-full flex flex-col gap-5">
                    <div className="flex flex-col w-full md:flex-row md:flex-wrap gap-4 md:justify-center md:mx-auto">
                        {info[0].cards.map((card: any, index: any) => (
                            <Card className="w-full md:w-[48%]" key={index}>
                                <CardHeader className="flex flex-col gap-1 pb-3">

                                    <iframe className="w-full object-cover min-h-60 max-h-96" src={card.file.src}></iframe>

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