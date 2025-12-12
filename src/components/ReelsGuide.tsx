import { useState } from 'react';
import { ArrowLeft, ArrowRight, Home, Check } from 'lucide-react';

interface ReelsGuideProps {
  onBack: () => void;
}

const steps = [
  {
    title: "Abre Instagram",
    description: "Busca el ícono de Instagram en tu teléfono (es rosa y morado con una cámara). Toca el ícono para abrir la aplicación.",
    tips: "Si no lo encuentras, puedes pedirle a Siri o al Asistente de Google que abra Instagram.",
    icon: "📱"
  },
  {
    title: "Toca el botón + (más)",
    description: "En la parte inferior central de la pantalla verás un botón con el símbolo '+' (más). Tócalo para crear contenido nuevo.",
    tips: "Este botón está siempre en el centro, entre los íconos de inicio y tu perfil.",
    icon: "➕"
  },
  {
    title: "Selecciona 'Reel'",
    description: "Aparecerá un menú en la parte inferior. Desliza hacia la derecha hasta encontrar la opción 'Reel' y tócala.",
    tips: "También puedes ir directamente a Reels tocando el ícono de video en la parte inferior y luego el botón de cámara.",
    icon: "🎬"
  },
  {
    title: "Graba tu video o elige de la galería",
    description: "Para grabar nuevo: mantén presionado el botón circular rojo.\n\nPara usar un video existente: toca el cuadrado de la galería en la esquina inferior izquierda y selecciona tu video.",
    tips: "Puedes grabar varios clips seguidos. El temporizador arriba muestra cuánto has grabado (máximo 90 segundos).",
    icon: "🎥"
  },
  {
    title: "Edita tu Reel",
    description: "Puedes agregar música (ícono de nota musical), efectos, texto, stickers y recortar el video. Toca 'Vista previa' para ver cómo quedó.",
    tips: "La música es muy popular en Reels. Toca el ícono de música para buscar canciones.",
    icon: "🎵"
  },
  {
    title: "Escribe una descripción",
    description: "Toca 'Siguiente'. Escribe una descripción de tu video. Puedes agregar hashtags (#) para que más personas lo encuentren.",
    tips: "Los hashtags son palabras con el símbolo # adelante, como #receta o #familia",
    icon: "✍️"
  },
  {
    title: "Publica tu Reel",
    description: "Revisa todo y cuando estés listo, toca el botón 'Compartir' en la parte inferior. ¡Tu Reel ya está publicado!",
    tips: "A diferencia de las historias, los Reels no desaparecen y se quedan en tu perfil permanentemente.",
    icon: "🚀"
  }
];

export function ReelsGuide({ onBack }: ReelsGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xl text-pink-600 hover:text-pink-800 mb-6 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
      >
        <Home className="w-6 h-6" />
        Volver al menú
      </button>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2">🎬 Cómo subir un Reel</h1>
          <p className="text-2xl text-gray-500">
            Paso {currentStep + 1} de {steps.length}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-orange-400 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="mb-8">
          <div className="text-6xl text-center mb-6">{step.icon}</div>
          
          <h2 className="text-3xl mb-6 text-center text-pink-900">
            {step.title}
          </h2>

          <div className="bg-gray-50 rounded-2xl p-6 mb-6 border-2 border-gray-200">
            <p className="text-xl leading-relaxed whitespace-pre-line">
              {step.description}
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
            <p className="text-lg text-blue-900">
              <strong>💡 Consejo:</strong> {step.tips}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-8 py-4 rounded-full text-xl transition-all ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg hover:shadow-xl'
            }`}
          >
            <ArrowLeft className="w-6 h-6" />
            Anterior
          </button>

          {!isLastStep ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-xl bg-pink-500 text-white hover:bg-pink-600 shadow-lg hover:shadow-xl transition-all"
            >
              Siguiente
              <ArrowRight className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-xl bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl transition-all"
            >
              <Check className="w-6 h-6" />
              ¡Completado!
            </button>
          )}
        </div>

        {/* Step indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentStep
                  ? 'bg-pink-500 w-8'
                  : index < currentStep
                  ? 'bg-pink-300'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
