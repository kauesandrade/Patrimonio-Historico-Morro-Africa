'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";

export default function CardInfo(props: any) {
    const router = useRouter();
    console.log(props.card);

    return <>
        <Card onClick={() => router.push("/" + props.card.url)} className="w-full md:w-[48%]" >
                <CardHeader className="flex flex-col gap-1">
                    {
                        props.card.file.type == "img" ? 
                        <img className="w-full object-cover h-48" src={props.card.file.url} alt="" /> :
                        <video className="w-full object-cover h-48" src={props.card.file.url} autoPlay loop muted></video>
                    }
                    <CardDescription>{props.card.file.acervo}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <CardTitle>{props.card.titulo}</CardTitle>
                    <CardDescription
                        className="text-wrap text-justify hover:text-balance overflow-hidden w-full h-full">{props.card.descricao}</CardDescription>
                </CardContent>
            </Card>

    </>
}