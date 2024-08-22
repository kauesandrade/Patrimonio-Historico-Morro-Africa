import Hover from "./hover";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function CardInfo() {

    return (
        <Card className="w-56 h-40"> 
            <CardHeader>
                <img src="https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b" alt="Morro da Africa" />
                <CardDescription>Acervo pessoal</CardDescription>
                <Hover></Hover>
            </CardHeader>
            <CardContent>
                <CardTitle>Morro Africa</CardTitle>
                <CardDescription>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</CardDescription>
            </CardContent>
        </Card>
    );
}