import CardText from "./cardText";
import { Card, CardDescription } from "./ui/card";

export default function cardImgText(props: any) {
    return <>
        <div className="flex flex-col gap-4 justify-center w-full">
            <Card className="flex flex-col gap-4 p-6">
                <img className="w-full object-cover h-auto border-0 rounded-sm" src={props.src} alt="" />
                <CardDescription>{props.acervo}</CardDescription>
                <CardDescription className="text-justify text-lg">
                    {props.texto}
                </CardDescription>
            </Card>
        </div>
    </>
}