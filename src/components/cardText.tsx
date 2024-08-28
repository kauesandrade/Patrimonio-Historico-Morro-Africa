import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


export default function CardText(props:any){


    return<>
    <Card className="p-6">
        <CardDescription className="text-justify text-lg">
            {props.texto}
        </CardDescription>
    </Card>
    </>
}