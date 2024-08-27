

export default function Header() {

    return (
        <div className="flex justify-between items-center bg-slate-700 h-24 px-20">
            <div className="w-1/3 font-bold text-3xl text-white cursor-pointer">
                <a className="flex align-center justify-center align-center" href="/">
                <img src="../../public/assets/montanhaIcon.png" /> 
                Morro África</a>
            </div>

            <div className="w-1/3 flex align-center justify-end gap-10">
                    <a className="flex align-center justify-center text-gray-50 gap-1" href="/historia">📖 História</a>
                    <a className="flex align-center justify-center text-gray-50 gap-1" href="/visita">🔍 Visita</a>
                    <a className="flex align-center justify-center text-gray-50 gap-1" href="/integrantes">👨‍🎓 Intgrates</a>
            </div>
        </div>
    );

}