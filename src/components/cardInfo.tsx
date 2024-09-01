'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";

export default function CardInfo(props: any) {
    const router = useRouter();

    console.log(props);

    return <>
        <Card className="w-full md:w-[48%]" >
            <CardHeader className="flex flex-col gap-1 pb-3">
                {
                    props.card.file.type == "img" ?
                        <img className="w-full object-cover min-h-60 max-h-64" src={props.card.file.src} alt="" /> :
                        <video className="w-full object-cover min-h-60 max-h-64" loop autoPlay muted>
                            <source src={props.card.file.src} type="video/mp4" />
                        </video>

                }

                <CardDescription onClick={() => props.card.file.acervoUrl != "" ? router.push(props.card.file.acervoUrl) : null}>
                    <a className={props.card.file.acervoUrl == "" ? "" : "cursor-pointer text-sky-600 underline"}>{props.card.file.acervo}</a>
                </CardDescription>


            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <CardTitle className="text-justify">{props.card.titulo}</CardTitle>
                <CardDescription className="text-wrap text-justify">{props.card.descricao}</CardDescription>
                {props.card.url != "" &&
                    <CardDescription onClick={() => router.push("/" + props.card.url)}>
                        <a className="text-wrap text-justify cursor-pointer text-sky-600 underline" href={"/" + props.card.url}>Saiba mais...</a>
                    </CardDescription>
                }
            </CardContent>
        </Card >

    </>
}