

import CardText from '@/components/cardText';
import SectionCard from '@/components/sectionCard';
import CardImgText from '@/components/cardImgText';

export default function Integrantes() {

    return <> 
    
    <main className="flex flex-col gap-5 m-8 mx-auto w-[90%] justify-center items-center md:w-[70%]">

            <div className="flex flex-col w-full gap-8">

                <div className="flex justify-center py-8">
                    <h1 className="text-xl md:text-4xl font-bold text-justify">
                        Integrantes do Projeto Rotas Africanas em Jaraguá do Sul.
                    </h1>
                </div>


                <CardImgText
                    src="/assets/imagens/fotoGrupo.png"
                    acervo="Acervo Pessoal"
                    texto="Integrantes: Brenda Bauer, Vinícius Gonçalves, Kauê Schaefer, Fellipe Demarchi, Maria Böhmer, Leticia Mesch - Turma: 2933">
                </CardImgText>
            </div>
{/* 
            <div className="border-b-2 border-gray-800/10"></div>

            <div className="flex flex-col gap-8">
                <SectionCard tituloSection={info[1].tituloSection} cards={info[1].cards} /> 
                <CardText
                    texto="As brincadeiras africanas apresentadas foram adaptadas aos materiais e ao terreno do local. Elas demonstram a simplicidade e a criatividade dos povos africanos por meio de uma interação divertida entre as pessoas. 
                        As brincadeiras eram ligadas a atenção, desenvolvimento físico e raciocínio rápido. Por exemplo, a brincadeira que envolvia o pedra papel tesoura precisava de atenção para correr até o adversário assim que seu colega de equipe era derrotado. Mar Terra e o pular corda precisavam de condicionamento físico e agilidade para compreender e analisar a situação a fim de não perder. O cabo de guerra por sua vez, necessita de força e equilíbrio. Porém a brincadeira de acertar em qual mão estava a pedra é puramente sorte.">
                </CardText>
            </div> */}

        </main>
    
    </>;

}