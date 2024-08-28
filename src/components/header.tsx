

export default function Header() {

    return (
        <div className="flex justify-between items-center h-24 px-20 bg-gradient-to-r from-sky-600 from-40% to-green-600 to-90%">
            <div className="w-1/3 font-bold text-3xl text-white cursor-pointer font-fredoka font-semibold">
                <a className="flex gap-1 items-center justify-center" href="/">
                <img className="h-10 w-15" src="/assets/montanhaIcon.png"/> 
                Morro África</a>
            </div>

            <div className="w-1/3 flex items-center justify-end gap-10">
                    <a className="flex items-center justify-center text-gray-50 gap-1 hover:border-b-2" href="/historia">📖 História</a>
                    <a className="flex items-center justify-center text-gray-50 gap-1 hover:border-b-2" href="/visita">🔍 Visita</a>
                    <a className="flex items-center justify-center text-gray-50 gap-1 hover:border-b-2" href="/integrantes">👨‍🎓 Integrantes</a>
            </div>
        </div>
    );

}