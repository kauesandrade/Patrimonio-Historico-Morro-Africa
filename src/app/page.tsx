import CardInfo from "@/components/cardInfo";

export default function Home() {
  return (
    <main>
      <div className="flex flex-wrap gap-5"> 
        <CardInfo sizeBig={true} ></CardInfo>
        <CardInfo ></CardInfo>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
      </div>

    </main>
  );
}
