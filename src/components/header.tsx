import { Button } from "./ui/button";

export default function Header() {

    return (
        <div className="flex justify-between items-center bg-slate-700 h-24 p-4">
            <div className="w-1/3"></div>

            <div className="w-1/3 font-bold text-3xl text-white cursor-pointer flex align-center justify-center">
                <a href="/">Morro Africa</a>
            </div>

            <div className="w-1/3 flex align-center justify-center">
                <Button >
                    <a className="flex align-center justify-center" href="/historia">História do morro da africa</a>
                </Button>
            </div>
        </div>
    );

}