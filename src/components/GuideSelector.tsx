import { Image, Video } from 'lucide-react';

interface GuideSelectorProps {
  onSelectStory: () => void;
  onSelectReels: () => void;
}

export function GuideSelector({ onSelectStory, onSelectReels }: GuideSelectorProps) {
  return (
    <div className="text-center">
      <div className="mb-12">
        <h1 className="text-5xl mb-4">📱 Guía de Instagram</h1>
        <p className="text-2xl text-gray-600">
          Aprende paso a paso de forma sencilla
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <button
          onClick={onSelectStory}
          className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-4 border-purple-200"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <Image className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl">Subir una Historia</h2>
            <p className="text-xl text-gray-600">
              Comparte fotos o videos que desaparecen en 24 horas
            </p>
          </div>
        </button>

        <button
          onClick={onSelectReels}
          className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-4 border-pink-200"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
              <Video className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl">Subir un Reels</h2>
            <p className="text-xl text-gray-600">
              Crea videos cortos y entretenidos
            </p>
          </div>
        </button>
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-2xl max-w-2xl mx-auto border-2 border-blue-200">
        <p className="text-xl text-gray-700">
          💡 <strong>Consejo:</strong> Haz clic en la opción que quieras aprender. 
          Podrás avanzar paso a paso a tu ritmo.
        </p>
      </div>
    </div>
  );
}
