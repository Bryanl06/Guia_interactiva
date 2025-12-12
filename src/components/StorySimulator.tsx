import { useState } from 'react';
import { Home, ArrowLeft, Camera, Image, Type, Smile, Music, Send, ChevronRight } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';

interface StorySimulatorProps {
  onBack: () => void;
}

const TOTAL_STEPS = 11;

export function StorySimulator({ onBack }: StorySimulatorProps) {
  const [step, setStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCorrectClick = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      if (step < TOTAL_STEPS - 1) {
        setStep(step + 1);
      }
    }, 800);
  };

  const resetSimulator = () => {
    setStep(0);
    setShowSuccess(false);
  };

  const instructions = [
    {
      text: "Primero, toca el ícono de Instagram en la pantalla de inicio para abrir la aplicación",
      highlight: "app"
    },
    {
      text: "Toca el círculo con tu foto de perfil que tiene el signo + para abrir la cámara de historias",
      highlight: "profile"
    },
    {
      text: "Toca el cuadrado de abajo a la izquierda para elegir una foto de tu galería",
      highlight: "gallery"
    },
    {
      text: "Selecciona una foto de tu galería tocándola",
      highlight: "photo"
    },
    {
      text: "Ahora puedes agregar texto. Toca el ícono 'Aa' en la parte superior",
      highlight: "text"
    },
    {
      text: "Toca en la pantalla para escribir tu mensaje",
      highlight: "screen"
    },
    {
      text: "Ahora toca 'Listo' para guardar el texto",
      highlight: "done"
    },
    {
      text: "¡Perfecto! Ahora toca 'Tu historia' para publicarla",
      highlight: "share"
    },
    {
      text: "¡Felicidades! Tu historia se ha publicado. Toca tu foto de perfil para verla",
      highlight: "view"
    },
    {
      text: "Desliza hacia arriba para ver quién ha visto tu historia",
      highlight: "swipeup"
    },
    {
      text: "Aquí puedes ver las visualizaciones y estadísticas. ¡Has completado el proceso!",
      highlight: "stats"
    }
  ];

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xl text-purple-600 hover:text-purple-800 mb-6 bg-white px-6 py-3 rounded-full shadow-md"
      >
        <Home className="w-6 h-6" />
        Volver al menú
      </button>

      <div className="grid lg:grid-cols-[1fr_450px] gap-8 items-start">
        {/* Instructions panel */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:order-2">
          <h1 className="text-4xl mb-4">📸 Practica: Subir una Historia</h1>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">Paso {step + 1} de {TOTAL_STEPS}</span>
              <button
                onClick={resetSimulator}
                className="text-lg text-purple-600 hover:text-purple-800 underline"
              >
                Reiniciar
              </button>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500"
                style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6 border-2 border-purple-300">
            <p className="text-2xl leading-relaxed">
              👆 {instructions[step].text}
            </p>
          </div>

          {showSuccess && (
            <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-6 mb-6 animate-bounce">
              <p className="text-2xl text-green-800 text-center">
                ✅ ¡Muy bien! Continuando...
              </p>
            </div>
          )}

          {step === TOTAL_STEPS - 1 && (
            <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-300">
              <p className="text-xl">
                💡 <strong>Recuerda:</strong> En Instagram real, tu historia se publicará y estará visible durante 24 horas.
              </p>
            </div>
          )}

          {/* Quick tips */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-lg"><strong>💡 Consejos rápidos:</strong></p>
            <ul className="mt-2 space-y-1 text-base text-gray-700">
              <li>• Las historias desaparecen en 24 horas</li>
              <li>• Puedes agregar música, stickers y texto</li>
              <li>• Solo tus seguidores verán tu historia</li>
            </ul>
          </div>
        </div>

        {/* Phone simulator */}
        <div className="lg:sticky lg:top-8 lg:order-1">
          <PhoneFrame>
            {/* Step 0: iPhone Home Screen */}
            {step === 0 && (
              <div className="h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-6">
                {/* Home screen apps */}
                <div className="pt-12 grid grid-cols-4 gap-6">
                  {/* Instagram app */}
                  <button
                    onClick={handleCorrectClick}
                    className="flex flex-col items-center gap-2 ring-4 ring-yellow-300 rounded-3xl p-2 animate-pulse"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 shadow-lg flex items-center justify-center">
                      <Camera className="w-9 h-9 text-white" />
                    </div>
                    <span className="text-white text-xs">Instagram</span>
                  </button>

                  {/* Other apps */}
                  {['Fotos', 'Cámara', 'Mensajes', 'Safari', 'Música', 'Ajustes'].map((app, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 rounded-2xl bg-white/30 shadow-lg" />
                      <span className="text-white text-xs">{app}</span>
                    </div>
                  ))}
                </div>

                {/* Dock */}
                <div className="absolute bottom-24 left-6 right-6 bg-white/20 backdrop-blur-xl rounded-3xl p-4">
                  <div className="flex justify-around">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-16 h-16 rounded-2xl bg-white/30" />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Instagram Home with stories */}
            {step === 1 && (
              <div className="h-full bg-white">
                {/* Instagram header */}
                <div className="flex items-center justify-between p-4 border-b pt-14">
                  <h2 className="text-2xl" style={{ fontFamily: 'cursive' }}>Instagram</h2>
                  <div className="flex gap-4">
                    <Camera className="w-6 h-6" />
                    <Send className="w-6 h-6" />
                  </div>
                </div>

                {/* Stories row */}
                <div className="flex gap-4 p-4 overflow-x-auto border-b">
                  <button
                    onClick={handleCorrectClick}
                    className="flex-shrink-0 relative"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 p-1 ring-4 ring-purple-300 animate-pulse">
                      <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                        <span className="text-3xl">👤</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white border-2 border-white">
                      <span className="text-lg leading-none">+</span>
                    </div>
                    <p className="text-center mt-1 text-sm">Tu historia</p>
                  </button>

                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 p-1">
                        <div className="w-full h-full rounded-full bg-gray-200" />
                      </div>
                      <p className="text-center mt-1 text-sm">Amigo {i}</p>
                    </div>
                  ))}
                </div>

                {/* Feed */}
                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                      <span>usuario_ejemplo</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg h-64" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Camera view */}
            {step === 2 && (
              <div className="h-full bg-black flex flex-col pt-14">
                {/* Camera controls top */}
                <div className="flex justify-between items-center p-4 text-white">
                  <button className="text-3xl">×</button>
                  <div className="flex gap-4">
                    <button className="text-lg">⚡</button>
                    <Type className="w-6 h-6" />
                    <Music className="w-6 h-6" />
                  </div>
                </div>

                {/* Camera viewfinder */}
                <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <Camera className="w-20 h-20 text-white opacity-50" />
                </div>

                {/* Camera controls bottom */}
                <div className="p-6 pb-8 flex items-center justify-between">
                  <button
                    onClick={handleCorrectClick}
                    className="w-16 h-16 bg-white rounded-lg overflow-hidden ring-4 ring-yellow-400 animate-pulse"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-300" />
                  </button>
                  
                  <button className="w-20 h-20 rounded-full border-4 border-white" />
                  
                  <button className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Smile className="w-8 h-8 text-white" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Gallery */}
            {step === 3 && (
              <div className="h-full bg-white flex flex-col pt-14">
                <div className="flex items-center justify-between p-4 border-b">
                  <button className="text-2xl">←</button>
                  <h3 className="text-xl">Recientes</h3>
                  <button className="text-lg text-blue-500">Siguiente</button>
                </div>

                <div className="grid grid-cols-3 gap-1 p-1">
                  <button
                    onClick={handleCorrectClick}
                    className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center ring-4 ring-green-400 animate-pulse"
                  >
                    <Image className="w-12 h-12 text-white" />
                  </button>
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-200" />
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Photo selected - edit mode */}
            {step === 4 && (
              <div className="h-full bg-black flex flex-col pt-14">
                <div className="flex justify-between items-center p-4 text-white">
                  <button className="text-3xl">←</button>
                  <div className="flex gap-3">
                    <button
                      onClick={handleCorrectClick}
                      className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center ring-4 ring-yellow-400 animate-pulse"
                    >
                      <Type className="w-6 h-6" />
                    </button>
                    <button className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                      <Smile className="w-6 h-6" />
                    </button>
                    <button className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                      <Music className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Image className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p className="text-xl">Tu foto seleccionada</p>
                  </div>
                </div>

                <div className="p-6 pb-8 flex justify-center">
                  <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg">
                    Siguiente
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Text input mode */}
            {step === 5 && (
              <div className="h-full bg-gradient-to-br from-blue-300 to-purple-300 flex flex-col pt-14">
                <div className="flex justify-between items-center p-4 text-white">
                  <button className="text-3xl">←</button>
                  <button className="text-xl">Aa</button>
                </div>

                <div className="flex-1 flex items-center justify-center p-8">
                  <button
                    onClick={handleCorrectClick}
                    className="w-full py-8 border-4 border-dashed border-white/50 rounded-2xl text-white text-2xl text-center ring-4 ring-yellow-400 animate-pulse"
                  >
                    Toca para escribir
                  </button>
                </div>
              </div>
            )}

            {/* Step 6: Writing text */}
            {step === 6 && (
              <div className="h-full bg-gradient-to-br from-blue-300 to-purple-300 flex flex-col pt-14">
                <div className="flex justify-between items-center p-4 text-white">
                  <button className="text-3xl">←</button>
                  <button
                    onClick={handleCorrectClick}
                    className="text-xl bg-white/30 px-6 py-2 rounded-full ring-4 ring-yellow-400 animate-pulse"
                  >
                    Listo
                  </button>
                </div>

                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-4xl text-white mb-8">¡Hola amigos!</p>
                    <div className="text-white text-lg opacity-70 animate-pulse">|</div>
                  </div>
                </div>

                {/* Keyboard simulation */}
                <div className="bg-gray-200 p-4 space-y-2 pb-8">
                  <div className="flex gap-1">
                    {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(letter => (
                      <div key={letter} className="flex-1 bg-white rounded p-2 text-center text-sm">
                        {letter}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1 px-4">
                    {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(letter => (
                      <div key={letter} className="flex-1 bg-white rounded p-2 text-center text-sm">
                        {letter}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Ready to share */}
            {step === 7 && (
              <div className="h-full bg-gradient-to-br from-blue-300 to-purple-300 flex flex-col pt-14">
                <div className="flex justify-between items-center p-4 text-white">
                  <button className="text-3xl">←</button>
                  <div className="flex gap-4">
                    <Type className="w-6 h-6" />
                    <Smile className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center p-8">
                  <p className="text-4xl text-white text-center">¡Hola amigos!</p>
                </div>

                <div className="p-6 pb-8 space-y-3">
                  <button
                    onClick={handleCorrectClick}
                    className="w-full bg-white text-black py-4 rounded-full text-xl flex items-center justify-center gap-2 ring-4 ring-yellow-400 animate-pulse"
                  >
                    <ChevronRight className="w-6 h-6" />
                    Tu historia
                  </button>
                  <button className="w-full bg-white/20 text-white py-4 rounded-full text-xl border-2 border-white flex items-center justify-center gap-2">
                    Enviar a
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="text-white text-center w-full py-2">
                    Guardar
                  </button>
                </div>
              </div>
            )}

            {/* Step 8: Story published - back to home */}
            {step === 8 && (
              <div className="h-full bg-white">
                {/* Instagram header */}
                <div className="flex items-center justify-between p-4 border-b pt-14">
                  <h2 className="text-2xl" style={{ fontFamily: 'cursive' }}>Instagram</h2>
                  <div className="flex gap-4">
                    <Camera className="w-6 h-6" />
                    <Send className="w-6 h-6" />
                  </div>
                </div>

                {/* Success notification */}
                <div className="bg-green-500 text-white p-4 text-center animate-pulse">
                  ✅ Tu historia se compartió
                </div>

                {/* Stories row */}
                <div className="flex gap-4 p-4 overflow-x-auto border-b">
                  <button
                    onClick={handleCorrectClick}
                    className="flex-shrink-0 relative ring-4 ring-yellow-400 rounded-full animate-pulse"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 p-1">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center overflow-hidden">
                        <span className="text-xs text-white text-center">¡Hola amigos!</span>
                      </div>
                    </div>
                    <p className="text-center mt-1 text-sm">Tu historia</p>
                  </button>

                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 p-1">
                        <div className="w-full h-full rounded-full bg-gray-200" />
                      </div>
                      <p className="text-center mt-1 text-sm">Amigo {i}</p>
                    </div>
                  ))}
                </div>

                {/* Feed */}
                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                      <span>usuario_ejemplo</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg h-64" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 9: Viewing own story */}
            {step === 9 && (
              <div className="h-full bg-black pt-14">
                {/* Story view */}
                <div className="h-full bg-gradient-to-br from-blue-300 to-purple-300 flex flex-col">
                  {/* Top bar with progress */}
                  <div className="p-4">
                    <div className="h-1 bg-white/30 rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-white w-3/4 animate-pulse" />
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                        <span className="text-xl">👤</span>
                      </div>
                      <div className="flex-1">
                        <p>Tu historia</p>
                        <p className="text-sm opacity-80">Hace 1 min</p>
                      </div>
                      <button className="text-3xl">⋯</button>
                    </div>
                  </div>

                  {/* Story content */}
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-4xl text-white text-center">¡Hola amigos!</p>
                  </div>

                  {/* Bottom interaction area */}
                  <div 
                    onClick={handleCorrectClick}
                    className="p-6 pb-8 cursor-pointer"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 text-white text-center ring-4 ring-yellow-400 animate-pulse">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12l7 7 7-7"/>
                        </svg>
                        <span className="text-lg">Desliza hacia arriba</span>
                      </div>
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <span>👁️ 8 visualizaciones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 10: Story insights/statistics */}
            {step === 10 && (
              <div className="h-full bg-white flex flex-col pt-14">
                <div className="flex items-center justify-between p-4 border-b">
                  <button className="text-2xl">←</button>
                  <h3 className="text-xl">Actividad</h3>
                  <div className="w-8" />
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  {/* Statistics overview */}
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
                    <h3 className="text-2xl mb-4">📊 Estadísticas</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">8</div>
                        <div className="text-sm text-gray-600">Cuentas alcanzadas</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">12</div>
                        <div className="text-sm text-gray-600">Interacciones</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">5</div>
                        <div className="text-sm text-gray-600">Respuestas</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">3</div>
                        <div className="text-sm text-gray-600">Compartidos</div>
                      </div>
                    </div>
                  </div>

                  {/* Viewers list */}
                  <div className="mb-6">
                    <h3 className="text-xl mb-3">👁️ Visto por 8 personas</h3>
                    <div className="space-y-3">
                      {['María García', 'Juan Pérez', 'Ana López', 'Carlos Ruiz', 'Laura Martín'].map((name, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white">
                            {name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{name}</p>
                            <p className="text-sm text-gray-500">Hace {i + 1} min</p>
                          </div>
                          <button className="text-blue-500">❤️</button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-blue-500 text-white py-4 rounded-full text-lg">
                      Promocionar historia
                    </button>
                    <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-full text-lg">
                      Destacar en perfil
                    </button>
                    <button className="w-full bg-red-50 text-red-600 py-4 rounded-full text-lg">
                      Eliminar historia
                    </button>
                  </div>
                </div>
              </div>
            )}
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}