'use client';

import Hover from "./hover";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function CardInfo(sizeBig: boolean) {

    return <>
        <Card className={`${sizeBig ? 'w-1/2' : 'w-80'}`}> 
            <CardHeader>
                <img className="h-56 object-contain border-0 rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCo2KEbK1D_mfuaRtULvTNKq-r-bRyVAfa_A&s" alt="Morro da Africa"/> 
                <CardDescription>Acervo pessoal</CardDescription>
                <Hover></Hover>
                {/* <CardDescription>{props.data.imagem.proprietario}</CardDescription> */}
            </CardHeader>
            <CardContent>
                <CardTitle>dasdasd</CardTitle>
                {/* <CardTitle>{props.data.title}</CardTitle> */}
                <CardDescription className="text-wrap break-words text-ellipsis overflow-hidden w-full">aaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddaa</CardDescription>
            </CardContent>
        </Card>
        
    </>
}