'use client';
import { useState } from "react";
import { FaBars } from "react-icons/fa6";


export default function Header() {

    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className="relative flex px-5 pr-10 justify-between items-center h-24 md:px-20 bg-gradient-to-r from-sky-600 from-40% to-green-600 to-90%">

            <div className="md:hidden">
                <FaBars onClick={() => setOpenSidebar(!openSidebar)} className="text-gray-50 text-lg" />
            </div>

            {openSidebar &&
                <div className="static w-full h-full bg-gray-400">
                    <a className="flex items-center justify-center text-gray-50 gap-1 hover:border-b-2" onClick={() => setOpenSidebar(!openSidebar)} href="/historia">📖 História</a>
                    <a className="flex items-center justify-center text-gray-50 gap-1 hover:border-b-2" onClick={() => setOpenSidebar(!openSidebar)} href="/visita">🔍 Visita</a>
                    <a className="flex items-center justify-center text-gray-50 gap-1 hover:border-b-2" onClick={() => setOpenSidebar(!openSidebar)} href="/integrantes">👨‍🎓 Integrantes</a>
                </div>
            }




            <div className="flex flex-center text-xl md:w-1/2 flex-start font-bold text-3xl text-white cursor-pointer font-fredoka font-semibold">
                <a className="flex gap-1 items-center justify-center" href="/">
                    <img className="h-10 w-15" src="/assets/montanhaIcon.png" />
                    Morro África</a>
            </div>

            <div className="hidden md:flex w-1/2 items-center justify-end gap-10">
                <a className="flex items-center justify-center text-gray-50 gap-1 hover:border-b-2" href="/historia">📖 História</a>
                <a className="flex items-center justify-center text-gray-50 gap-1 hover:border-b-2" href="/visita">🔍 Visita</a>
                <a className="flex items-center justify-center text-gray-50 gap-1 hover:border-b-2" href="/integrantes">👨‍🎓 Integrantes</a>
            </div>
        </div>
    );

}