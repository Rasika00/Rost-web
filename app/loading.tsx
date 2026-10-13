export default function Loading() {
  return (
    <div
      aria-label="Loading ROST Robotics Interface"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-between py-8 sm:py-12 px-4 bg-[#070709] select-none overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full bg-radial from-[#ff6b00]/15 via-[#ff6b00]/4 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px]" />
      </div>

      {/* TOP: Clean Branding */}
      <div className="relative z-10 flex items-center justify-center gap-3.5 sm:gap-4 pt-2">
        <div className="flex items-center gap-1 font-mono tracking-wider font-black text-2xl sm:text-3xl">
          <span className="text-[#ff6b00] drop-shadow-[0_0_12px_#ff6b00]">RO</span>
          <span className="text-[#e5e5e5] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">ST</span>
        </div>
        <div className="h-6 sm:h-7 w-px bg-white/20" />
        <div className="flex flex-col text-left">
          <span className="text-xs sm:text-sm font-mono font-extrabold uppercase text-[#ffffff] tracking-[0.2em] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Robotic Society
          </span>
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase text-[#ff7a1a] tracking-[0.25em]">
            Of Technology
          </span>
        </div>
      </div>

      {/* CENTER: Animated Vector Reactor */}
      <div className="relative z-10 flex items-center justify-center my-auto">
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-radial from-[#ff6b00]/30 via-[#ff6b00]/8 to-transparent blur-2xl animate-pulse pointer-events-none" />

        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="200"
              cy="200"
              r="175"
              stroke="#26262b"
              strokeWidth="1.5"
            />
            <g className="animate-orbit-cw origin-center">
              <circle
                cx="200"
                cy="200"
                r="155"
                stroke="#33333d"
                strokeWidth="6"
                strokeDasharray="24 8 48 8 16 12"
              />
              <circle cx="200" cy="45" r="3" fill="#ff6b00" />
              <circle cx="200" cy="355" r="3" fill="#ff6b00" />
            </g>
            <g className="animate-orbit-ccw origin-center">
              <circle
                cx="200"
                cy="200"
                r="138"
                stroke="#ff7a1a"
                strokeWidth="2.5"
                strokeDasharray="40 20 80 30 15 15"
              />
            </g>
            <g className="animate-orbit-cw origin-center">
              <circle
                cx="200"
                cy="200"
                r="120"
                stroke="#1f1f24"
                strokeWidth="8"
                strokeDasharray="18 4"
              />
            </g>
            <g className="animate-orbit-ccw origin-center">
              <circle
                cx="200"
                cy="200"
                r="100"
                stroke="#ff6b00"
                strokeWidth="4"
                strokeDasharray="60 30 120 40"
              />
            </g>
            <circle
              cx="200"
              cy="200"
              r="80"
              fill="#0d0d12"
              stroke="#ff6b00"
              strokeWidth="3"
            />
            <circle
              cx="200"
              cy="200"
              r="70"
              fill="none"
              stroke="#ff7a1a"
              strokeWidth="2"
              strokeDasharray="12 6"
              className="animate-pulse"
              opacity="0.75"
            />
            <text
              x="200"
              y="207"
              textAnchor="middle"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="24"
              fontWeight="900"
              letterSpacing="3"
              fill="#ffffff"
            >
              <tspan fill="#ff6b00">RO</tspan>
              <tspan fill="#ffffff">ST</tspan>
            </text>
          </svg>
        </div>
      </div>

      {/* BOTTOM: Progress Bar */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm px-4 space-y-3 pb-2">
        <div className="relative w-full h-3 sm:h-3.5 rounded-full bg-black/90 p-0.5 border border-white/20 shadow-[0_0_20px_rgba(255,107,0,0.35)] backdrop-blur-md overflow-hidden">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#121215]">
            <div className="h-full rounded-full bg-gradient-to-r from-[#cc4400] via-[#ff6b00] to-[#ffaa22] animate-pulse w-3/4 shadow-[0_0_16px_#ff6b00]" />
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono">
          <span className="text-xs sm:text-sm tracking-[0.25em] font-extrabold text-[#ffffff] drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            INITIALIZING...
          </span>
        </div>

        <p className="text-[10px] sm:text-[11px] font-mono text-[#737373] tracking-[0.2em] uppercase pt-1 text-center">
          CONNECTING TO THE FUTURE OF TECHNOLOGY...
        </p>
      </div>
    </div>
  );
}
