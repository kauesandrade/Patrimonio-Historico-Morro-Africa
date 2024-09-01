'use client';
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";


export default function Header() {

    const [openSidebar, setOpenSidebar] = useState(false);

    useEffect(() => {
        openSidebar ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    }, [openSidebar]);

    return <>
        <div className="flex px-5 pr-10 justify-between items-center h-24 md:px-20 bg-gradient-to-r from-sky-600/70 from-40% to-green-600/70 to-90%">

            <div className="md:hidden">
                <FaBars onClick={() => setOpenSidebar(!openSidebar)} className="text-gray-50 text-lg" />
            </div>

            <div className="flex flex-center font-fredoka font-semibold md:w-1/2 md:flex-start md:cursor-pointer">
                <a className="flex gap-1 items-center text-white justify-center text-xl md:text-3xl md:font-bold " href="/">
                    <img className="h-10 w-15" src="/assets/montanhaIcon.png" />
                    Morro África</a>
            </div>

            <div className="hidden md:flex w-1/2 items-center justify-end gap-10">
                <a className="flex items-center justify-center text-gray-50 gap-1 font-semibold hover:border-b-2" href="/historia">📖 História</a>
                <a className="flex items-center justify-center text-gray-50 gap-1 font-semibold hover:border-b-2" href="/visita">🔍 Visita</a>
                <a className="flex items-center justify-center text-gray-50 gap-1 font-semibold hover:border-b-2" href="/integrantes">👨‍🎓 Integrantes</a>
            </div>
        </div>

        {openSidebar &&
                <div className="z-50 flex flex-col gap-10 pt-10 absolute items-center w-full h-full bg-gradient-to-r from-sky-600/70 from-40% to-green-600/70 to-90%">
                    <a className="flex items-center justify-center text-2xl font-semibold text-gray-50 gap-1" onClick={() => setOpenSidebar(!openSidebar)} href="/historia">📖 História</a>
                    <a className="flex items-center justify-center text-2xl font-semibold text-gray-50 gap-1" onClick={() => setOpenSidebar(!openSidebar)} href="/visita">🔍 Visita</a>
                    <a className="flex items-center justify-center text-2xl font-semibold text-gray-50 gap-1" onClick={() => setOpenSidebar(!openSidebar)} href="/integrantes">👨‍🎓 Integrantes</a>
                </div>
            }
    </>

}