'use client';

import { Card, CardDescription, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";

export default function cardImgText(props: any) {

    return <>
        <div className="flex flex-col gap-4 justify-center w-full">
            <Card className="flex flex-col gap-4 p-6">
                <img className="w-full object-cover h-auto border-0 rounded-sm max-h-96" src={props.src} alt="" />

                <CardDescription onClick={() => props.acervoUrl != "" ? useRouter().push(props.acervoUrl) : null}>
                    <a className={props.acervoUrl != "" ? "" : "cursor-pointer text-sky-600 underline"}>{props.acervo}</a>
                </CardDescription>

                {props.titulo &&
                    <CardTitle className="text-justify">{props.titulo}</CardTitle>
                }

                <CardDescription className="text-justify text-lg">
                    {props.texto}
                </CardDescription>
            </Card>
        </div>
    </>
}