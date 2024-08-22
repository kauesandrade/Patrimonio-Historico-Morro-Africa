import Image from "next/image";
import Header from "@/components/header";
import CardInfo from "@/components/cardInfo";

export default function Home() {
  return (
    <main className="m-8 flex">
      <div className="flex flex-wrap gap-1"> 
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
      </div>

    </main>
  );
}
