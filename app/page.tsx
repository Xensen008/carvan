export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#050505] text-white selection:bg-orange-600 selection:text-white font-sans antialiased">

      {/* Background - Deep Dark Atmosphere */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>

        {/* Warm ambient glows - subtle, not flashy */}
        <div className="absolute top-[-10%] left-[20%] w-200 h-200 bg-orange-900/10 blur-[150px] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-amber-900/10 blur-[120px] rounded-full animate-float-subtle opacity-30"></div>

        {/* Bright Glassy Waves Animation */}
        <div className="absolute top-1/4 left-0 right-0 h-96 opacity-20 pointer-events-none overflow-hidden mix-blend-screen">
          <div className="absolute inset-0 flex items-center justify-center animate-wave-flow w-[200%]">
            <svg viewBox="0 0 1440 320" className="w-full h-full text-white/10" preserveAspectRatio="none">
              <path fill="url(#grad1)" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#ffedd5', stopOpacity: 0.2 }} />
                  <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0.5 }} />
                  <stop offset="100%" style={{ stopColor: '#ffedd5', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center animate-wave-flow-reverse w-[200%] top-10 opacity-70">
            <svg viewBox="0 0 1440 320" className="w-full h-full text-white/5" preserveAspectRatio="none">
              <path fill="url(#grad2)" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#fff7ed', stopOpacity: 0.1 }} />
                  <stop offset="50%" style={{ stopColor: '#fed7aa', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#fff7ed', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation - Ultra Minimal Glass */}
      <nav className="fixed top-0 w-full z-50 px-6 pt-6 transition-all duration-300">
        <div className="max-w-350 mx-auto">
          <div className="bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl px-8 py-4 flex items-center justify-between shadow-2xl shadow-black/50 hover:border-white/10 transition-all duration-500 group/nav">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-orange-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="w-8 h-8 rounded-full border border-orange-500/30 bg-linear-to-br from-orange-500/10 to-transparent flex items-center justify-center relative overflow-hidden">
                  <div className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316]"></div>
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-wide text-white group-hover:text-orange-100 transition-colors">MusicWave</span>
            </div>

            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/60">
              <a href="#discover" className="hover:text-white transition-colors relative group overflow-hidden">
                <span className="relative z-10">Discover</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
              <a href="#features" className="hover:text-white transition-colors relative group overflow-hidden">
                <span className="relative z-10">Features</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
              <a href="#pricing" className="hover:text-white transition-colors relative group overflow-hidden">
                <span className="relative z-10">Pricing</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </div>

            <div className="flex items-center gap-6">
              <button className="hidden sm:block text-sm font-medium text-white/60 hover:text-white transition-colors">
                Log In
              </button>
              <button className="group relative px-6 py-2.5 rounded-full bg-orange-600 overflow-hidden shadow-lg shadow-orange-900/20 hover:shadow-orange-600/20 transition-all duration-300">
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative text-sm font-semibold text-white group-hover:tracking-wide transition-all duration-300">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-350 mx-auto px-6 pt-40 pb-20 relative z-10">

        {/* Hero Section - Split Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 items-center">

          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/3 border border-white/10 w-fit mb-10 backdrop-blur-md hover:bg-white/6 transition-colors cursor-default group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-orange-200/80 uppercase group-hover:text-orange-200 transition-colors">v2.0 • Premium Sound Engine</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tight font-display text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/40 drop-shadow-sm">
              Sound, <br />
              <span className="text-white relative">
                Elevated.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-600 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-white/50 max-w-xl mb-12 leading-relaxed font-light">
              Experience music with uncompromising fidelity.
              <span className="text-white/80 font-medium"> Lossless audio</span>,
              <span className="text-white/80 font-medium"> precision EQ</span>, and a design that disappears.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg flex items-center gap-2 overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 w-full h-full bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 group-hover:text-white transition-colors">Start Listening</span>
                <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="px-8 py-4 rounded-full bg-white/3 border border-white/10 hover:bg-white/8 hover:border-white/20 hover:text-white transition-all duration-300 text-lg font-medium text-white/80 backdrop-blur-md">
                View Plans
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-37.5 left-0 animate-bounce hidden md:flex items-center gap-4 opacity-40">
              <div className="w-px h-16 bg-bg-linear-to-bom-transparent via-white to-transparent"></div>
              <span className="text-xs uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180">Scroll</span>
            </div>

            {/* Micro-interaction: Stats */}
            <div className="mt-16 flex items-center gap-8 border-t border-white/5 pt-8 w-fit">
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">100M+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">Tracks</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">Hi-Res</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">Audio</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">0.0s</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">Latency</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Glass Cards Stack */}
          <div className="lg:col-span-5 relative h-150 hidden lg:block perspective-1000 group/cards">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-gbg-linear-to-trm-orange-600/20 to-amber-600/10 rounded-full blur-[100px] animate-pulse"></div>

            {/* Card 3: Waveform Analysis (The Deep Card) */}
            <div className="absolute top-[10%] right-[10%] w-95 h-120 bg-[#050505]/95 backdrop-blur-sm border border-white/5 rounded-4xl p-6 shadow-xl z-0 origin-bottom transition-all duration-700 ease-out 
              -rotate-12 translate-y-4 -translate-x-5 scale-90
              group-hover/cards:-rotate-24 group-hover/cards:-translate-x-20 group-hover/cards:-translate-y-8 group-hover/cards:scale-95 group-hover/cards:border-orange-500/10 group-hover/cards:shadow-orange-900/5">

              <div className="h-full flex flex-col relative overflow-hidden opacity-40 group-hover/cards:opacity-60 transition-opacity">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[9px] font-bold uppercase text-white/30 tracking-widest">
                    Waveform Analysis
                  </span>
                  <span className="text-[9px] font-mono text-white/20">RAW</span>
                </div>

                {/* Abstract Waveform SVG */}
                <div className="flex-1 flex items-center justify-center -mt-10">
                  <svg className="w-full h-40 text-orange-500/30" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <path d="M0 30 C 20 30, 20 10, 40 30 S 60 50, 80 30 S 100 10, 120 30 S 140 50, 160 30 S 180 10, 200 30" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" />
                    <path d="M0 30 C 20 30, 20 20, 40 30 S 60 40, 80 30 S 100 20, 120 30 S 140 40, 160 30 S 180 20, 200 30" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
                  </svg>
                </div>

                <div className="border-t border-white/5 pt-4 flex justify-between text-[9px] text-white/20 font-mono">
                  <span>Input: Analog</span>
                  <span>Gain: +2dB</span>
                </div>
              </div>
            </div>

            {/* Card 2: EQ Visualization (The Peeking Card) */}
            <div className="absolute top-[10%] right-[10%] w-95 h-120 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-4xl p-6 shadow-xl z-10 origin-bottom transition-all duration-700 ease-out 
              -rotate-6 translate-y-2 -translate-x-2.5 scale-95
              group-hover/cards:-rotate-12 group-hover/cards:-translate-x-10 group-hover/cards:-translate-y-5 group-hover/cards:scale-100 group-hover/cards:border-orange-500/30 group-hover/cards:shadow-orange-900/20">

              <div className="h-full flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-center mb-8 opacity-60 z-10">
                  <span className="text-[10px] font-bold uppercase text-white/40 tracking-widest flex items-center gap-2">
                    EQ Visualizer
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                </div>

                {/* EQ Bars Visualization */}
                <div className="flex-1 flex items-end justify-between gap-1.5 px-2 pb-4 z-10">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-full bg-linear-to-t from-orange-900/40 to-orange-500 rounded-t-sm animate-eq"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        opacity: 0.6 + (i % 3) * 0.2
                      }}></div>
                  ))}
                </div>

                {/* Decorative Tech Lines */}
                <div className="border-t border-white/10 pt-4 flex justify-between text-[9px] text-white/30 font-mono z-10">
                  <span>20Hz</span>
                  <span>1kHz</span>
                  <span>20kHz</span>
                </div>
              </div>
            </div>

            {/* Card 1: Main Player (Floating on top) */}
            <div className="absolute top-[10%] right-[10%] w-95 bg-[#111]/80 backdrop-blur-2xl border border-white/10 rounded-4xl p-6 shadow-2xl shadow-black/80 z-20 animate-float-subtle transition-transform duration-500">
              {/* Album Art with Shine */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg shadow-black/50 group-hover:shadow-orange-900/20 transition-shadow">
                <div className="absolute inset-0 bg-linear-to-tr from-gray-800 to-gray-900"></div>
                {/* Abstract Art */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                  Lossless
                </div>
              </div>

              {/* Track Info */}
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-100 transition-colors">Midnight City</h3>
                  <p className="text-white/40 font-medium">M83 • Hurry Up, We're Dreaming</p>
                </div>
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-orange-500 hover:border-orange-500/30 transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Progress Bar with Glow */}
              <div className="mb-8 group/progress cursor-pointer">
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-linear-to-r from-orange-600 to-amber-500 relative shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-md"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs font-mono text-white/30 font-medium">
                  <span>2:45</span>
                  <span>4:03</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center">
                <button className="text-white/40 hover:text-white transition-colors"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></button>
                <div className="flex items-center gap-6">
                  <button className="text-white hover:text-orange-400 transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg></button>
                  <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </button>
                  <button className="text-white hover:text-orange-400 transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 18h2V6h-2zm-11-7l8.5-6v12z" /></svg></button>
                </div>
                <button className="text-white/40 hover:text-white transition-colors"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg></button>
              </div>
            </div>
          </div>
        </section>

        {/* Features - Premium Grid */}
        <section id="features" className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Precision Engineering</h2>
            <p className="text-white/40 max-w-2xl mx-auto">Designed for those who hear the difference.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Feature 1 */}
            <div className="group relative bg-[#111] border border-white/5 rounded-3xl p-10 overflow-hidden hover:border-orange-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center mb-8 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Studio Master Quality</h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  Bit-perfect playback up to 24-bit/192kHz. Hear the music exactly as the artist intended in the studio.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-[#111] border border-white/5 rounded-3xl p-10 overflow-hidden hover:border-orange-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center mb-8 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">AI Curation</h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  Our neural engine analyzes your listening habits to create the perfect soundscape for every moment.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-[#111] border border-white/5 rounded-3xl p-10 overflow-hidden hover:border-orange-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center mb-8 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Zero Latency</h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  Instant playback across all devices. Seamless transitions between mobile, desktop, and home audio.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Pricing - Dark & Elegant */}
        <section id="pricing" className="mb-32">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              <div className="bg-[#0a0a0a] border border-white/5 rounded-4xl p-10 hover:border-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Standard</h3>
                <div className="text-4xl font-display font-bold text-white mb-6">$0<span className="text-lg font-sans text-white/40 font-normal">/mo</span></div>
                <p className="text-white/40 mb-8">Perfect for casual listening.</p>
                <ul className="space-y-4 mb-8 text-white/60 text-sm">
                  <li className="flex items-center gap-3"><span className="text-orange-500">✓</span> 128kbps AAC</li>
                  <li className="flex items-center gap-3"><span className="text-orange-500">✓</span> Mobile Access</li>
                  <li className="flex items-center gap-3"><span className="text-orange-500">✓</span> Smart Playlists</li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  Get Started
                </button>
              </div>

              {/* Premium Card */}
              <div className="relative bg-[#111] border border-orange-500/30 rounded-4xl p-10 transform md:scale-105 shadow-2xl shadow-orange-900/10 group overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-32 h-32 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">Premium</div>
                <h3 className="text-2xl font-bold text-white mb-2">Audiophile</h3>
                <div className="text-5xl font-display font-bold text-white mb-6">$9.99<span className="text-lg font-sans text-white/40 font-normal">/mo</span></div>
                <p className="text-white/60 mb-8">Uncompromising sound quality.</p>
                <ul className="space-y-4 mb-8 text-white text-sm font-medium">
                  <li className="flex items-center gap-3"><span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-black text-xs font-bold">✓</span> Hi-Res Lossless (24-bit)</li>
                  <li className="flex items-center gap-3"><span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-black text-xs font-bold">✓</span> Dolby Atmos Spatial Audio</li>
                  <li className="flex items-center gap-3"><span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-black text-xs font-bold">✓</span> Offline Listening</li>
                  <li className="flex items-center gap-3"><span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-black text-xs font-bold">✓</span> Priority Support</li>
                </ul>
                <button className="w-full py-4 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative rounded-[48px] overflow-hidden bg-[#0a0a0a] border border-white/5 p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-orange-900/10 to-transparent"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Ready to hear the difference?</h2>
            <p className="text-white/50 text-lg mb-12 max-w-2xl mx-auto">Join thousands of audiophiles who have switched to MusicWave for the ultimate listening experience.</p>
            <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-white/10">
              Get Started Now
            </button>
          </div>
        </section>

      </main>

      {/* Footer - Premium Redesign */}
      <footer className="relative border-t border-white/5 bg-[#030303] pt-32 pb-10 overflow-hidden">
        {/* Ambient Glow in Footer */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-250 h-100 bg-orange-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-350 mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">

            {/* Brand Column */}
            <div className="md:col-span-4">
              <a href="#" className="flex items-center gap-3 mb-6 group w-fit">
                <div className="w-10 h-10 rounded-full border border-orange-500/30 bg-linear-to-br from-orange-500/10 to-transparent flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316]"></div>
                </div>
                <span className="font-display font-bold text-2xl tracking-wide text-white group-hover:text-orange-100 transition-colors">MusicWave</span>
              </a>
              <p className="text-white/40 text-lg leading-relaxed mb-8 max-w-sm">
                The future of high-fidelity audio streaming. Experience sound as it was meant to be heard.
              </p>

              {/* Newsletter Micro-interaction */}
              <div className="relative max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-white placeholder:text-white/20 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300"
                />
                <button className="absolute right-2 top-2 p-2 bg-orange-600 rounded-full text-white hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="font-bold text-white mb-8 tracking-wide">Platform</h4>
              <ul className="space-y-4 text-white/40">
                <li><a href="#" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Download</a></li>
                <li><a href="#" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Web Player</a></li>
                <li><a href="#" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Mobile App</a></li>
                <li><a href="#" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">CarPlay</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-white mb-8 tracking-wide">Company</h4>
              <ul className="space-y-4 text-white/40">
                <li><a href="#" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Press</a></li>
                <li><a href="#" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-white mb-8 tracking-wide">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 2.468-4.678 3.037-7.951 2.895 2.382 1.528 5.213 2.42 8.243 2.42 9.897 0 15.293-8.069 15.293-15.013 0-.225-.005-.449-.015-.673 1.055-.761 1.971-1.714 2.673-2.607z" /></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Large Watermark */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative">
            <div className="text-xs text-white/20 font-mono order-2 md:order-1">
              © 2026 MUSICWAVE INC. • LOS ANGELES • TOKYO • BERLIN
            </div>

            <div className="flex gap-8 text-xs font-medium text-white/40 order-1 md:order-2">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>

            {/* Giant Watermark */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[40%] text-[15vw] font-display font-bold text-white/2 pointer-events-none whitespace-nowrap select-none">
              MUSICWAVE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
