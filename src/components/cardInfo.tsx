'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";

export default function CardInfo(props: any) {
    const router = useRouter();

    return <>
        <Card onClick={() => props.card.url != "" ? router.push("/" + props.card.url) : null} className="w-full md:w-[48%]" >
            <CardHeader className="flex flex-col gap-1 pb-3">
                {
                    props.card.file.type == "img" ?
                        <img className="w-full object-cover h-48" src={props.card.file.url} alt="" /> :
                        <video width="" height="240" autoPlay muted>
                            <source src={props.card.file.url} type="video/mp4" />
                        </video>
                }
                <CardDescription>{props.card.file.acervo}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <CardTitle className="text-justify">{props.card.titulo}</CardTitle>
                <CardDescription
                    className="text-wrap text-justify">{props.card.descricao}</CardDescription>
            </CardContent>
        </Card>

    </>
}