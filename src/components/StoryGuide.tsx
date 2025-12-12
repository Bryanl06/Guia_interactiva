import { useState } from 'react';
import { ArrowLeft, ArrowRight, Home, Check } from 'lucide-react';

interface StoryGuideProps {
  onBack: () => void;
}

const steps = [
  {
    title: "Abre Instagram",
    description: "Busca el ícono de Instagram en tu teléfono (es rosa y morado con una cámara). Toca el ícono para abrir la aplicación.",
    tips: "Si no lo encuentras, busca en la carpeta de aplicaciones o usa el buscador de tu teléfono.",
    icon: "📱"
  },
  {
    title: "Ve a tu perfil o al inicio",
    description: "En la parte inferior de la pantalla verás varios íconos. Tu foto de perfil aparecerá en la esquina superior izquierda con un círculo de color alrededor.",
    tips: "También puedes deslizar el dedo hacia la derecha desde cualquier pantalla de inicio.",
    icon: "👤"
  },
  {
    title: "Toca tu foto de perfil",
    description: "Presiona sobre tu foto de perfil que tiene el símbolo '+' (más). Esto abrirá la cámara de historias.",
    tips: "Si es la primera vez, Instagram te pedirá permiso para usar la cámara. Acepta los permisos.",
    icon: "➕"
  },
  {
    title: "Toma una foto o elige de tu galería",
    description: "Para tomar una foto nueva: presiona el botón blanco grande del centro una vez.\n\nPara elegir una foto existente: toca el cuadradito de la galería en la esquina inferior izquierda.",
    tips: "Mantén presionado el botón blanco para grabar un video.",
    icon: "📷"
  },
  {
    title: "Edita tu historia (opcional)",
    description: "Puedes agregar texto, dibujos, stickers, música o filtros tocando los íconos en la parte superior de la pantalla.",
    tips: "No te preocupes si no quieres agregar nada, puedes subirla tal como está.",
    icon: "✨"
  },
  {
    title: "Publica tu historia",
    description: "Cuando estés listo, toca el botón 'Tu historia' en la parte inferior. También puedes elegir 'Enviar a' para compartirla solo con amigos específicos.",
    tips: "Tu historia estará visible durante 24 horas y luego desaparecerá automáticamente.",
    icon: "✅"
  }
];

export function StoryGuide({ onBack }: StoryGuideProps) {
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
        className="flex items-center gap-2 text-xl text-purple-600 hover:text-purple-800 mb-6 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
      >
        <Home className="w-6 h-6" />
        Volver al menú
      </button>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2">📸 Cómo subir una Historia</h1>
          <p className="text-2xl text-gray-500">
            Paso {currentStep + 1} de {steps.length}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="mb-8">
          <div className="text-6xl text-center mb-6">{step.icon}</div>
          
          <h2 className="text-3xl mb-6 text-center text-purple-900">
            {step.title}
          </h2>

          <div className="bg-gray-50 rounded-2xl p-6 mb-6 border-2 border-gray-200">
            <p className="text-xl leading-relaxed whitespace-pre-line">
              {step.description}
            </p>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-200">
            <p className="text-lg text-yellow-900">
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
                : 'bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl'
            }`}
          >
            <ArrowLeft className="w-6 h-6" />
            Anterior
          </button>

          {!isLastStep ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-xl bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl transition-all"
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
                  ? 'bg-purple-500 w-8'
                  : index < currentStep
                  ? 'bg-purple-300'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
