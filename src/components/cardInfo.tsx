'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";

export default function CardInfo(props: any) {
    const router = useRouter();
    console.log(props.card);

    return <>
        <Card onClick={() => router.push("/" + props.card.url)} className="w-full md:w-[48%]" >
                <CardHeader className="flex flex-col gap-1">
                    <video  width="" height="240" autoPlay muted>
                        <source src="https://videos.pexels.com/video-files/3150598/3150598-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    </video>
                    {/* <img className="h-70 object-fit border-0 rounded-sm" src="public/assets/3150598-hd_1920_1080_25fps.mp4" alt="Morro da Africa" /> */}
                    <CardDescription>{props.card.image.acervo}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <CardTitle>{props.card.titulo}</CardTitle>
                    <CardDescription
                        className="text-wrap hover:text-balance overflow-hidden w-full h-full">{props.card.descricao}</CardDescription>
                </CardContent>
            </Card>

    </>
}