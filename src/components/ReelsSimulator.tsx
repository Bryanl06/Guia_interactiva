import { useState } from 'react';
import { Home, Video, Music, Type, Smile, Sparkles, Camera, Send, ChevronRight } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';

interface ReelsSimulatorProps {
  onBack: () => void;
}

const TOTAL_STEPS = 11;

export function ReelsSimulator({ onBack }: ReelsSimulatorProps) {
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
      text: "Toca el botón '+' (más) que está en el centro de la barra inferior",
      highlight: "plus"
    },
    {
      text: "Desliza hacia la derecha y selecciona 'REEL'",
      highlight: "reel"
    },
    {
      text: "Toca el cuadrado de la galería para usar un video existente",
      highlight: "gallery"
    },
    {
      text: "Selecciona un video de tu galería",
      highlight: "video"
    },
    {
      text: "Toca el ícono de música para agregar una canción popular",
      highlight: "music"
    },
    {
      text: "Elige una canción de la lista tocándola",
      highlight: "song"
    },
    {
      text: "Toca 'Siguiente' para continuar",
      highlight: "next"
    },
    {
      text: "Escribe una descripción y toca 'Compartir' para publicar tu Reel",
      highlight: "share"
    },
    {
      text: "¡Felicidades! Tu Reel se ha publicado. Toca el ícono de Reels para verlo",
      highlight: "viewreel"
    },
    {
      text: "Aquí puedes ver las reproducciones, likes, comentarios y estadísticas de tu Reel. ¡Has completado el proceso!",
      highlight: "stats"
    }
  ];

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xl text-pink-600 hover:text-pink-800 mb-6 bg-white px-6 py-3 rounded-full shadow-md"
      >
        <Home className="w-6 h-6" />
        Volver al menú
      </button>

      <div className="grid lg:grid-cols-[1fr_450px] gap-8 items-start">
        {/* Instructions panel */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:order-2">
          <h1 className="text-4xl mb-4">🎬 Practica: Subir un Reel</h1>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">Paso {step + 1} de {TOTAL_STEPS}</span>
              <button
                onClick={resetSimulator}
                className="text-lg text-pink-600 hover:text-pink-800 underline"
              >
                Reiniciar
              </button>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-400 to-orange-400 transition-all duration-500"
                style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl p-6 mb-6 border-2 border-pink-300">
            <p className="text-2xl leading-relaxed">
              👆 {instructions[step].text}
            </p>
          </div>

          {showSuccess && (
            <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-6 mb-6 animate-bounce">
              <p className="text-2xl text-green-800 text-center">
                ✅ ¡Excelente! Continuando...
              </p>
            </div>
          )}

          {step === TOTAL_STEPS - 1 && (
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-300">
              <p className="text-xl">
                💡 <strong>Recuerda:</strong> Los Reels quedan permanentemente en tu perfil y pueden ser vistos por muchas personas.
              </p>
            </div>
          )}

          {/* Quick tips */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-lg"><strong>💡 Consejos rápidos:</strong></p>
            <ul className="mt-2 space-y-1 text-base text-gray-700">
              <li>• Los Reels pueden durar hasta 90 segundos</li>
              <li>• Agregar música hace tu Reel más atractivo</li>
              <li>• Los Reels no desaparecen, quedan en tu perfil</li>
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

            {/* Step 1: Instagram Home */}
            {step === 1 && (
              <div className="h-full bg-white flex flex-col pt-14">
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-2xl" style={{ fontFamily: 'cursive' }}>Instagram</h2>
                  <div className="flex gap-4">
                    <Camera className="w-6 h-6" />
                    <Send className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1 p-4">
                  <div className="bg-gray-100 rounded-lg h-96" />
                </div>

                {/* Bottom navigation */}
                <div className="flex items-center justify-around p-4 border-t bg-white">
                  <button className="p-2">
                    <Home className="w-7 h-7" />
                  </button>
                  <button className="p-2">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" strokeWidth="2"/>
                    </svg>
                  </button>
                  <button
                    onClick={handleCorrectClick}
                    className="p-2 ring-4 ring-yellow-400 rounded-lg animate-pulse"
                  >
                    <div className="w-8 h-8 border-2 border-black rounded-lg flex items-center justify-center">
                      <span className="text-2xl leading-none">+</span>
                    </div>
                  </button>
                  <button className="p-2">
                    <Video className="w-7 h-7" />
                  </button>
                  <button className="p-2">
                    <div className="w-7 h-7 rounded-full bg-gray-300" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Create mode selector */}
            {step === 2 && (
              <div className="h-full bg-black flex flex-col pt-14">
                <div className="flex items-center justify-between p-4 text-white">
                  <button className="text-3xl">×</button>
                  <h3 className="text-xl">Crear</h3>
                  <div className="w-8" />
                </div>

                <div className="flex-1 bg-gray-900" />

                <div className="p-6 pb-8 text-white">
                  <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-4">
                    <div className="flex-shrink-0 text-center opacity-50">
                      <div className="text-sm mb-2">HISTORIA</div>
                      <div className="w-16 h-16 bg-white/20 rounded-full" />
                    </div>
                    <button
                      onClick={handleCorrectClick}
                      className="flex-shrink-0 text-center ring-4 ring-yellow-400 rounded-2xl p-2 animate-pulse"
                    >
                      <div className="text-sm mb-2">REEL</div>
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <Video className="w-8 h-8" />
                      </div>
                    </button>
                    <div className="flex-shrink-0 text-center opacity-50">
                      <div className="text-sm mb-2">PUBLICACIÓN</div>
                      <div className="w-16 h-16 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Reel camera */}
            {step === 3 && (
              <div className="h-full bg-black flex flex-col pt-14">
                <div className="flex justify-between items-center p-4 text-white">
                  <button className="text-3xl">×</button>
                  <div className="flex gap-4">
                    <Sparkles className="w-6 h-6" />
                    <Music className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <Video className="w-24 h-24 text-white opacity-30" />
                </div>

                <div className="p-6 pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={handleCorrectClick}
                      className="w-20 h-20 bg-white/30 rounded-2xl flex items-center justify-center ring-4 ring-yellow-400 animate-pulse"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl" />
                    </button>
                    
                    <button className="w-20 h-20 rounded-full border-4 border-pink-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-pink-500" />
                    </button>
                    
                    <button className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                      <Smile className="w-10 h-10 text-white" />
                    </button>
                  </div>
                  
                  <div className="text-white text-center text-sm">
                    Mantén presionado para grabar
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Gallery selection */}
            {step === 4 && (
              <div className="h-full bg-white flex flex-col pt-14">
                <div className="flex items-center justify-between p-4 border-b">
                  <button className="text-2xl">←</button>
                  <h3 className="text-xl">Recientes</h3>
                  <button className="text-lg text-blue-500">Siguiente</button>
                </div>

                <div className="grid grid-cols-3 gap-1 p-1">
                  <button
                    onClick={handleCorrectClick}
                    className="aspect-square bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center ring-4 ring-green-400 animate-pulse relative"
                  >
                    <Video className="w-12 h-12 text-white" />
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                      0:15
                    </div>
                  </button>
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-200" />
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Video editing - add music */}
            {step === 5 && (
              <div className="h-full bg-black flex flex-col pt-14">
                <div className="flex justify-between items-center p-4 text-white">
                  <button className="text-3xl">←</button>
                  <div className="flex gap-3">
                    <button
                      onClick={handleCorrectClick}
                      className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center ring-4 ring-yellow-400 animate-pulse"
                    >
                      <Music className="w-6 h-6" />
                    </button>
                    <button className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                      <Type className="w-6 h-6" />
                    </button>
                    <button className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Video className="w-32 h-32 mx-auto mb-4 opacity-50" />
                    <p className="text-xl">Tu video</p>
                  </div>
                </div>

                <div className="p-4 pb-8 bg-gray-900">
                  <div className="h-16 bg-gray-800 rounded-lg flex items-center px-4">
                    <div className="flex-1 text-white">Vista previa de video</div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Music selection */}
            {step === 6 && (
              <div className="h-full bg-white flex flex-col pt-14">
                <div className="flex items-center justify-between p-4 border-b">
                  <button className="text-2xl">←</button>
                  <h3 className="text-xl">Agregar música</h3>
                  <button className="text-lg text-blue-500">Listo</button>
                </div>

                <div className="p-4">
                  <input
                    type="text"
                    placeholder="Buscar música"
                    className="w-full p-3 bg-gray-100 rounded-full text-lg"
                  />
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-2">
                    <button
                      onClick={handleCorrectClick}
                      className="w-full flex items-center gap-4 p-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl ring-4 ring-green-400 animate-pulse"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-orange-400 rounded-lg flex items-center justify-center">
                        <Music className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-lg">Canción Popular 1</p>
                        <p className="text-sm text-gray-500">Artista Famoso</p>
                      </div>
                    </button>

                    {[2, 3, 4, 5].map(i => (
                      <div key={i} className="w-full flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                        <div className="w-14 h-14 bg-gray-200 rounded-lg" />
                        <div className="flex-1 text-left">
                          <p className="text-lg">Canción Popular {i}</p>
                          <p className="text-sm text-gray-500">Artista</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Preview before sharing */}
            {step === 7 && (
              <div className="h-full bg-black flex flex-col pt-14">
                <div className="flex justify-between items-center p-4 text-white">
                  <button className="text-3xl">←</button>
                  <button
                    onClick={handleCorrectClick}
                    className="bg-blue-500 px-6 py-2 rounded-full text-lg ring-4 ring-yellow-400 animate-pulse"
                  >
                    Siguiente
                  </button>
                </div>

                <div className="flex-1 bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Video className="w-32 h-32 mx-auto mb-4" />
                    <p className="text-xl mb-2">Tu Reel</p>
                    <div className="flex items-center justify-center gap-2 bg-black/30 px-4 py-2 rounded-full">
                      <Music className="w-5 h-5" />
                      <span>Canción Popular 1</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 8: Final share screen */}
            {step === 8 && (
              <div className="h-full bg-white flex flex-col pt-14">
                <div className="flex items-center justify-between p-4 border-b">
                  <button className="text-2xl">←</button>
                  <h3 className="text-xl">Nuevo reel</h3>
                  <div className="w-8" />
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  <div className="mb-4">
                    <div className="w-full aspect-[9/16] bg-gradient-to-br from-pink-200 to-orange-200 rounded-2xl flex items-center justify-center mb-4">
                      <Video className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  <textarea
                    placeholder="Escribe una descripción..."
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl text-lg resize-none h-32 mb-4"
                    defaultValue="¡Mira mi nuevo video! 🎉"
                  />

                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-600 mb-2">Agregar ubicación</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-600 mb-2">Etiquetar personas</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 pb-8 border-t">
                  <button
                    onClick={handleCorrectClick}
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 rounded-full text-xl ring-4 ring-yellow-400 animate-pulse"
                  >
                    Compartir
                  </button>
                </div>
              </div>
            )}

            {/* Step 9: Reel published */}
            {step === 9 && (
              <div className="h-full bg-white flex flex-col pt-14">
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-2xl" style={{ fontFamily: 'cursive' }}>Instagram</h2>
                  <div className="flex gap-4">
                    <Camera className="w-6 h-6" />
                    <Send className="w-6 h-6" />
                  </div>
                </div>

                {/* Success notification */}
                <div className="bg-green-500 text-white p-4 text-center animate-pulse">
                  ✅ Tu Reel se ha compartido
                </div>

                <div className="flex-1 p-4">
                  <div className="bg-gray-100 rounded-lg h-96" />
                </div>

                {/* Bottom navigation */}
                <div className="flex items-center justify-around p-4 border-t bg-white">
                  <button className="p-2">
                    <Home className="w-7 h-7" />
                  </button>
                  <button className="p-2">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" strokeWidth="2"/>
                    </svg>
                  </button>
                  <button className="p-2">
                    <div className="w-8 h-8 border-2 border-black rounded-lg flex items-center justify-center">
                      <span className="text-2xl leading-none">+</span>
                    </div>
                  </button>
                  <button
                    onClick={handleCorrectClick}
                    className="p-2 ring-4 ring-yellow-400 rounded-lg animate-pulse"
                  >
                    <Video className="w-7 h-7" />
                  </button>
                  <button className="p-2">
                    <div className="w-7 h-7 rounded-full bg-gray-300" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 10: Reel view with stats */}
            {step === 10 && (
              <div className="h-full bg-black pt-14">
                <div className="h-full flex flex-col">
                  {/* Reel video preview */}
                  <div className="flex-1 bg-gradient-to-br from-pink-400 to-orange-400 relative">
                    {/* Video content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video className="w-32 h-32 text-white opacity-50" />
                    </div>

                    {/* Top overlay info */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                          👤
                        </div>
                        <div>
                          <p className="text-sm">tu_usuario</p>
                        </div>
                        <button className="ml-auto bg-white text-black px-4 py-1 rounded-lg text-sm">
                          Seguir
                        </button>
                      </div>
                    </div>

                    {/* Right side actions */}
                    <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6">
                      <button className="flex flex-col items-center text-white">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-1">
                          ❤️
                        </div>
                        <span className="text-sm">125</span>
                      </button>
                      <button className="flex flex-col items-center text-white">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-1">
                          💬
                        </div>
                        <span className="text-sm">34</span>
                      </button>
                      <button className="flex flex-col items-center text-white">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-1">
                          ➤
                        </div>
                        <span className="text-sm">18</span>
                      </button>
                      <button className="flex flex-col items-center text-white">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
                          <Music className="w-6 h-6" />
                        </div>
                      </button>
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-4 left-4 right-20 text-white">
                      <p className="text-sm mb-2">
                        <strong>tu_usuario</strong> ¡Mira mi nuevo video! 🎉
                      </p>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-xs">
                        <Music className="w-4 h-4" />
                        <span>Canción Popular 1 • Artista Famoso</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats panel overlay */}
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <div className="bg-white rounded-3xl p-8 max-w-sm mx-4">
                      <h3 className="text-3xl mb-6 text-center">📊 Estadísticas del Reel</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl p-4 flex justify-between items-center">
                          <span className="text-lg">▶️ Reproducciones</span>
                          <span className="text-2xl">1,234</span>
                        </div>
                        <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl p-4 flex justify-between items-center">
                          <span className="text-lg">❤️ Me gusta</span>
                          <span className="text-2xl">125</span>
                        </div>
                        <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl p-4 flex justify-between items-center">
                          <span className="text-lg">💬 Comentarios</span>
                          <span className="text-2xl">34</span>
                        </div>
                        <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl p-4 flex justify-between items-center">
                          <span className="text-lg">📤 Compartidos</span>
                          <span className="text-2xl">18</span>
                        </div>
                        <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl p-4 flex justify-between items-center">
                          <span className="text-lg">💾 Guardados</span>
                          <span className="text-2xl">42</span>
                        </div>
                      </div>

                      <div className="text-center text-green-600 text-xl mb-4">
                        ✅ ¡Has completado el proceso!
                      </div>

                      <div className="bg-blue-50 rounded-xl p-4 text-sm">
                        <p className="text-gray-700">
                          💡 <strong>Recuerda:</strong> Los Reels permanecen en tu perfil y pueden seguir ganando visualizaciones con el tiempo.
                        </p>
                      </div>
                    </div>
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