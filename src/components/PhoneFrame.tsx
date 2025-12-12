import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  time?: string;
}

export function PhoneFrame({ children, time = "9:41" }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto" style={{ width: '390px' }}>
      {/* Phone frame - iPhone style */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[3.5rem] p-4 shadow-2xl">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-9 bg-black rounded-full z-20 flex items-center justify-center">
          <div className="w-16 h-6 bg-gray-900 rounded-full" />
        </div>
        
        {/* Status bar - overlaid on screen */}
        <div className="absolute top-4 left-0 right-0 px-8 z-10 flex items-center justify-between text-white text-sm pointer-events-none">
          <span className="font-semibold">{time}</span>
          <div className="flex items-center gap-1">
            {/* Signal icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 22h4V10H2v12zm6-6h4V2H8v14zm6 6h4v-8h-4v8zm6-4h4V6h-4v12z"/>
            </svg>
            {/* WiFi icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
            {/* Battery icon */}
            <svg className="w-6 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="6" width="18" height="12" rx="2" ry="2" fill="currentColor"/>
              <path d="M23 10v4"/>
            </svg>
          </div>
        </div>
        
        {/* Screen */}
        <div className="relative bg-white rounded-[2.8rem] overflow-hidden" style={{ height: '720px' }}>
          {children}
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-1.5 bg-white/30 rounded-full" />
      </div>
      
      {/* Side buttons */}
      <div className="absolute left-0 top-32 w-1 h-16 bg-gray-800 rounded-r-lg" />
      <div className="absolute left-0 top-52 w-1 h-12 bg-gray-800 rounded-r-lg" />
      <div className="absolute left-0 top-68 w-1 h-12 bg-gray-800 rounded-r-lg" />
      <div className="absolute right-0 top-40 w-1 h-20 bg-gray-800 rounded-l-lg" />
    </div>
  );
}