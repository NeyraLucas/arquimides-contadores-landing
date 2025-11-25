import { Loader2 } from 'lucide-react';

function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 transition-opacity duration-500 ease-out opacity-800">
            <div className="text-center">
                <Loader2 className="w-16 h-16 text-blue-500 animate-spin mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-white">Pensando...</h2>
            </div>
        </div>
    );
}

export default Loader;
