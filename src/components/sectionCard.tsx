import CardInfo from "./cardInfo";

export default function SectionCard(props: any) {
    return <>
        <div className="w-full flex flex-col gap-5">
            {props.tituloSection &&
                <h3 className="flex align-center justify-center font-bold text-3xl">{props.tituloSection}</h3>
            }
            <div className="flex flex-col w-full md:flex-row md:flex-wrap gap-4 md:justify-center md:mx-auto">
                {props.cards.map((card: any, index: any) => (
                    <CardInfo key={index} card={card} />
                ))}
            </div>
        </div>
    </>
}