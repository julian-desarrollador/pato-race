//web application/stitch/projects/3597457633719369434/screens/98ec3f59c3644b71ac4c5db540e4e4ff
// ==============================================================================
// PATO RACE 2026 - LA REGATA POP (Next.js 14+ App Router / Tailwind CSS / Lucide)
// Dirección visual: Gran Premio Náutico, telemetría deportiva, adrenalina lúdica
// ==============================================================================
// Requisitos:
// npm install lucide-react clsx tailwind-merge
// Tailwind config: colores custom o soporte para clases arbitrarias
// ==============================================================================

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Timer, 
  Flag, 
  Trophy, 
  HeartHandshake, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  ChevronDown, 
  Radio, 
  Users, 
  Ticket, 
  Coins, 
  HelpCircle,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

// --- DATOS DEL EVENTO (ESTRICTOS Y OFICIALES) ---
const EVENT_DATA = {
  year: '2026',
  date: '22 de Noviembre de 2026',
  time: 'Apertura 19:00 hs',
  targetDate: '2026-11-22T19:00:00-03:00',
  location: 'Dique 3 · Puerto Madero, Buenos Aires',
  price: '$10.000',
  impactPercent: '70%',
  organizer: 'PATO RACE SOLIDARIO S.R.L.',
  targetGoal: '$100.000.000',
  currentRaised: '$45.230.000',
  adoptedDucks: '4.523',
};

export default function PatoRaceLanding() {
  // Estado para FAQ interactivo
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Countdown timer dinámico
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(EVENT_DATA.targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#07131b] text-slate-100 font-sans selection:bg-[#ffd000] selection:text-black overflow-x-hidden">
      
      {/* PATRÓN DE FONDO DEPORTIVO / TECH AGUA */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(#00e5ff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] z-0" />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#00f2fe]/[0.03] via-transparent to-[#040c12]/80 z-0" />

      {/* ==================================================================== */}
      {/* 1. NAVBAR / PIT LANE HEADER */}
      {/* ==================================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08141d]/90 border-b border-cyan-500/20 px-4 lg:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Marca */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#ffd000] to-[#fff066] p-0.5 shadow-[0_0_15px_rgba(255,208,0,0.4)]">
              <div className="w-full h-full bg-[#08141d] rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-xl transform group-hover:scale-110 transition-transform">🦆</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black italic tracking-tighter text-xl text-white">PATO RACE</span>
                <span className="text-[10px] font-mono uppercase bg-[#ffd000] text-black px-1.5 py-0.5 rounded font-bold">2026</span>
              </div>
              <span className="text-[10px] text-cyan-400/80 font-mono tracking-wider uppercase">Dique 3 · Puerto Madero</span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider uppercase text-slate-300">
            <a href="#la-carrera" className="hover:text-[#ffd000] transition-colors">La Carrera</a>
            <a href="#como-funciona" className="hover:text-[#ffd000] transition-colors">Cómo Funciona</a>
            <a href="#impacto" className="hover:text-[#ffd000] transition-colors flex items-center gap-1">
              <span>Impacto</span>
              <span className="text-[#00e5ff] font-bold">70%</span>
            </a>
            <a href="#faq" className="hover:text-[#ffd000] transition-colors">Reglamento</a>
          </nav>

          {/* CTA Header */}
          <div className="flex items-center gap-3">
            <Link 
              href="/perfil"
              className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-700/60 hover:border-slate-500 transition-all hidden sm:block"
            >
              Mi Perfil
            </Link>
            <a 
              href="#adoptar"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#ffd000] to-[#ffaa00] text-black font-black italic tracking-wide text-xs uppercase shadow-[0_0_20px_rgba(255,208,0,0.35)] hover:shadow-[0_0_25px_rgba(255,208,0,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Flag className="w-3.5 h-3.5 fill-black" />
              <span>Adoptá tu pato · {EVENT_DATA.price}</span>
            </a>
          </div>

        </div>
      </header>

      {/* ==================================================================== */}
      {/* 2. HERO: LA REGATA POP (F1 DE PATOS EN PUERTO MADERO) */}
      {/* ==================================================================== */}
      <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        
        {/* Gráfica de franjas y banderines estilo carrera */}
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ffd000]/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Banner de cuadros sutil decorativo */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-bold">GRAN PREMIO SOLIDARIO</span>
            <span className="text-slate-500">|</span>
            <span>{EVENT_DATA.date} · {EVENT_DATA.time}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Columna Izquierda: Mensaje & CTA */}
            <div className="lg:col-span-7 space-y-6 relative z-10 text-center lg:text-left">
              
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#ffd000] font-bold">
                  La regata más rápida y solidaria de Buenos Aires
                </p>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] text-white">
                  PATO RACE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd000] via-[#ffe066] to-[#00f2fe]">
                    LA REGATA POP
                  </span>
                </h1>
              </div>

              <p className="text-slate-300 text-lg sm:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Una carrera donde <span className="text-[#ffd000] font-bold">tu pato corre por vos</span>. Miles de patos de competición sobre las aguas del Dique 3. Si tu pato cruza la meta, ganás junto a tu equipo.
              </p>

              {/* Badges de legitimidad rápida */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 bg-[#0d222e] border border-cyan-500/20 px-3.5 py-2 rounded-lg text-xs font-mono text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span><strong className="text-white">70%</strong> a impacto social</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0d222e] border border-cyan-500/20 px-3.5 py-2 rounded-lg text-xs font-mono text-slate-200">
                  <MapPin className="w-4 h-4 text-[#ffd000]" />
                  <span>Dique 3 · Entrada libre y gratuita</span>
                </div>
              </div>

              {/* Botón Principal y Microcopy */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" id="adoptar">
                <button 
                  onClick={() => alert('Integrar checkout de Mercado Pago')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#ffd000] via-[#ffc000] to-[#ff9900] text-black font-black italic tracking-wide text-base uppercase shadow-[0_0_35px_rgba(255,208,0,0.45)] hover:shadow-[0_0_50px_rgba(255,208,0,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 border-2 border-yellow-200/50"
                >
                  <Ticket className="w-5 h-5 text-black" />
                  <span>ADOPTÁ TU PATO · {EVENT_DATA.price}</span>
                </button>
                <span className="text-xs font-mono text-slate-400">
                  ⚡ Participás desde cualquier punto del país.
                </span>
              </div>

            </div>

            {/* Columna Derecha: Telemetry Dashboard & Mascota Deportiva */}
            <div className="lg:col-span-5 relative">
              
              {/* Telemetría / Countdown Card */}
              <div className="relative bg-[#0b1b24]/90 border border-cyan-500/40 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-[#ffd000] to-cyan-400" />
                
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-[#ffd000]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
                      Telemetry Countdown
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    LARGADA OFICIAL
                  </span>
                </div>

                {/* Reloj Numérico de Boxes */}
                <div className="grid grid-cols-4 gap-2 text-center mb-6">
                  <div className="bg-[#061017] p-3 rounded-lg border border-slate-800">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-white block">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono uppercase text-slate-400">DÍAS</span>
                  </div>
                  <div className="bg-[#061017] p-3 rounded-lg border border-slate-800">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-white block">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono uppercase text-slate-400">HORAS</span>
                  </div>
                  <div className="bg-[#061017] p-3 rounded-lg border border-slate-800">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-white block">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono uppercase text-slate-400">MINS</span>
                  </div>
                  <div className="bg-[#061017] p-3 rounded-lg border border-slate-800">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#ffd000] block animate-pulse">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono uppercase text-slate-400">SEGS</span>
                  </div>
                </div>

                {/* Live Board integrado (Recaudación + Patos) */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400">PATOS EN GRILLA:</span>
                    <span className="text-white font-bold">{EVENT_DATA.adoptedDucks} adoptados</span>
                  </div>
                  
                  {/* Barra de Progreso de Meta */}
                  <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-[#ffd000] h-full rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(0,242,254,0.6)]"
                      style={{ width: '45%' }}
                    />
                  </div>

                  <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                    <span>Recaudado: <strong className="text-[#ffd000]">{EVENT_DATA.currentRaised}</strong></span>
                    <span>Meta: {EVENT_DATA.targetGoal}</span>
                  </div>
                </div>

              </div>

              {/* Decoración gráfica deportiva */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#ffd000] to-transparent opacity-20 rounded-full blur-xl pointer-events-none" />

            </div>

          </div>
        </div>

      </section>

      {/* ==================================================================== */}
      {/* 3. ¿QUÉ ES PATO RACE?: EL CIRCUITO Y LA DINÁMICA */}
      {/* ==================================================================== */}
      <section id="la-carrera" className="py-16 bg-[#050e14] border-y border-cyan-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold">
              // REGLAMENTO DE COMPETICIÓN
            </span>
            <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
              ¿CÓMO ES LA CARRERA DE PATOS?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Una fiesta náutica en pleno Puerto Madero. No necesitás saber de navegación ni moverte de tu casa: comprás tu ticket y tu pato compite por vos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#091720] border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden group hover:border-[#ffd000]/50 transition-all">
              <div className="text-[#ffd000] font-mono text-4xl font-black italic mb-2">01</div>
              <h3 className="text-lg font-black uppercase italic text-white mb-2">2 Carreras Oficiales</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Dos mangas de velocidad en el agua del Dique 3 dentro de una jornada festiva de aproximadamente dos horas.
              </p>
            </div>

            <div className="bg-[#091720] border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden group hover:border-[#ffd000]/50 transition-all">
              <div className="text-[#ffd000] font-mono text-4xl font-black italic mb-2">20-30</div>
              <h3 className="text-lg font-black uppercase italic text-white mb-2">Personas por Pato</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Cada pato en el agua es compartido por un equipo de participantes asignados al azar 48 hs antes de la largada.
              </p>
            </div>

            <div className="bg-[#091720] border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden group hover:border-[#ffd000]/50 transition-all">
              <div className="text-[#ffd000] font-mono text-4xl font-black italic mb-2">$500.000</div>
              <h3 className="text-lg font-black uppercase italic text-white mb-2">De Premio Ganador</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Si tu pato cruza primero la meta, el premio en efectivo se divide equitativamente entre quienes adoptaron ese pato.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. CÓMO PARTICIPAR: LOS 4 BOXES DE LARGADA */}
      {/* ==================================================================== */}
      <section id="como-funciona" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#ffd000] font-bold">
                // CHECKLIST DE LARGADA
              </span>
              <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mt-1">
                4 PASOS PARA ENTRAR A LA PISTA
              </h2>
            </div>
            <p className="text-slate-400 text-xs font-mono max-w-xs">
              Simple, 100% digital y transparente desde cualquier provincia argentina.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#0b1922] border-t-4 border-[#ffd000] border-x border-b border-slate-800 rounded-xl p-6 space-y-3">
              <div className="font-mono text-xs text-[#ffd000] font-bold">BOX 01</div>
              <h4 className="text-base font-black uppercase text-white">Comprás tu participación</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Adoptás tu pato online por {EVENT_DATA.price} mediante Mercado Pago de forma segura e instantánea.
              </p>
            </div>

            <div className="bg-[#0b1922] border-t-4 border-cyan-400 border-x border-b border-slate-800 rounded-xl p-6 space-y-3">
              <div className="font-mono text-xs text-cyan-400 font-bold">BOX 02</div>
              <h4 className="text-base font-black uppercase text-white">Recibís tu ticket</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Te enviamos un comprobante digital con tu número único e intransferible de participación.
              </p>
            </div>

            <div className="bg-[#0b1922] border-t-4 border-[#ffd000] border-x border-b border-slate-800 rounded-xl p-6 space-y-3">
              <div className="font-mono text-xs text-[#ffd000] font-bold">BOX 03</div>
              <h4 className="text-base font-black uppercase text-white">Asignación 48 hs antes</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                El sistema vincula al azar tu ticket con un pato numerado que estará físicamente en el dique.
              </p>
            </div>

            <div className="bg-[#0b1922] border-t-4 border-cyan-400 border-x border-b border-slate-800 rounded-xl p-6 space-y-3">
              <div className="font-mono text-xs text-cyan-400 font-bold">BOX 04</div>
              <h4 className="text-base font-black uppercase text-white">Seguís la regata y ganás</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vivilo en vivo en el Dique 3 o por streaming. Si tu pato gana, el premio también corre hacia vos.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. EL VERDADERO PODIO: 70% A IMPACTO SOCIAL */}
      {/* ==================================================================== */}
      <section id="impacto" className="py-16 bg-[#040e14] border-y border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="bg-gradient-to-br from-[#081a24] to-[#0d2836] border border-cyan-500/30 rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ffd000]/10 border border-[#ffd000]/30 text-[#ffd000] font-mono text-xs font-bold">
                  <HeartHandshake className="w-4 h-4" />
                  <span>MISIÓN SOLIDARIA CERTIFICADA</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
                  70% DE LA RECAUDACIÓN VA DIRECTO A IMPACTO SOCIAL
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Pato Race no es solo una competencia lúdica: es un motor colectivo de ayuda. El 70% de cada adopción se destina a financiar causas benéficas prioritarias, mientras que el 30% restante cubre costos de logística, los cuales bajan progresivamente gracias al apoyo de los sponsors.
                </p>
                <div className="pt-2 text-xs font-mono text-cyan-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Evento fiscalizado y organizado por {EVENT_DATA.organizer}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#051119] border-4 border-[#ffd000] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_40px_rgba(255,208,0,0.3)]">
                  <span className="text-5xl sm:text-6xl font-black italic text-[#ffd000] tracking-tighter">70%</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-white font-bold mt-1">Impacto Social</span>
                  <span className="text-[10px] text-slate-400 font-mono mt-1">Destino Garantizado</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. MANIFIESTO TIPOGRÁFICO DEPORTIVO */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#08141d] text-center px-4 overflow-hidden relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em]">
            // PUERTO MADERO · NOCHE DE REGATA
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none text-white">
            NO COMPRÁS UN PATO. <br />
            <span className="text-[#ffd000]">ENTRÁS EN LA CARRERA.</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            El 22 de noviembre, a partir de las 19:00 hs, el Dique 3 se llena de luces, emoción y miles de patos compitiendo por una causa enorme.
          </p>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. REGLAMENTO & PREGUNTAS FRECUENTES (FAQ) */}
      {/* ==================================================================== */}
      <section id="faq" className="py-16 bg-[#050e14] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ffd000] font-bold">
              // DUDAS DE PILOTOS
            </span>
            <h2 className="text-3xl font-black italic uppercase text-white">
              PREGUNTAS FRECUENTES & REGLAMENTO
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: '¿Puedo participar sin ir al Dique 3 de Puerto Madero?',
                a: 'Sí, totalmente. Podés adoptar tu pato de manera 100% online desde cualquier rincón del país. Recibís tu ticket digital y seguís la carrera en vivo.'
              },
              {
                q: '¿Cómo se asigna mi pato?',
                a: '48 horas antes de la largada, el sistema vincula al azar tu ticket digital con uno de los patos identificados para la competición.'
              },
              {
                q: '¿Cuántas personas comparten un pato?',
                a: 'Cada pato representa a un equipo de aproximadamente 20 a 30 participantes. Si ese pato gana, el premio de $500.000 se divide entre los miembros de ese equipo.'
              },
              {
                q: '¿A dónde va lo recaudado?',
                a: 'El 70% de lo recaudado por participaciones está comprometido directamente a causas con impacto social y comunitario.'
              },
              {
                q: '¿El evento presencial tiene costo de entrada?',
                a: 'No. El acceso al Dique 3 en Puerto Madero es 100% libre y gratuito para toda la comunidad y familias que quieran presenciar la fiesta náutica.'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#091720] border border-cyan-500/20 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white font-bold text-sm hover:text-[#ffd000] transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${openFaq === idx ? 'rotate-180 text-[#ffd000]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Módulo compacto secundario de merchandising (según especificación) */}
          <div className="mt-10 p-4 rounded-xl bg-[#091720]/60 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-slate-300 font-mono">
                ¿Querés llevarte un recuerdo? Conseguí remeras y gorras oficiales.
              </span>
            </div>
            <Link href="/merch" className="text-xs font-mono text-[#ffd000] hover:underline flex items-center gap-1 font-bold">
              <span>Ver Merch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 8. CIERRE & CTA FINAL: BANDERA A CUADROS */}
      {/* ==================================================================== */}
      <section className="py-20 bg-gradient-to-t from-[#03090d] to-[#08151e] border-t border-cyan-500/30 text-center px-4 relative">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-block p-2 rounded-full bg-[#ffd000]/10 border border-[#ffd000]/30 text-[#ffd000] text-2xl">
            🏁
          </div>

          <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter text-white">
            ASEGURÁ TU LUGAR EN LA GRILLA
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
            Adoptá tu pato por {EVENT_DATA.price}, sumate al 70% de impacto solidario y preparate para la regata de patos más grande del país.
          </p>

          <div className="pt-2">
            <a 
              href="#adoptar"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-[#ffd000] to-[#ff9900] text-black font-black italic tracking-wide text-lg uppercase shadow-[0_0_40px_rgba(255,208,0,0.5)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>ADOPTÁ TU PATO · {EVENT_DATA.price}</span>
              <ChevronRight className="w-5 h-5 stroke-[3]" />
            </a>
          </div>

          <p className="text-xs font-mono text-slate-500">
            {EVENT_DATA.date} · {EVENT_DATA.time} · {EVENT_DATA.location}
          </p>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 9. FOOTER INSTITUCIONAL Y LEGAL */}
      {/* ==================================================================== */}
      <footer className="bg-[#02070a] border-t border-slate-900 py-10 px-4 lg:px-8 text-slate-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div>
            <div className="font-bold text-white tracking-wider uppercase mb-1">
              PATO RACE 2026 · LA REGATA POP
            </div>
            <p>Organizado legalmente por <strong className="text-slate-400">{EVENT_DATA.organizer}</strong>.</p>
            <p className="text-[11px] mt-0.5">El 70% de lo recaudado por participaciones se destina a causas con impacto social.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/terminos" className="hover:text-slate-300 transition-colors">Términos y Bases</Link>
            <Link href="/privacidad" className="hover:text-slate-300 transition-colors">Privacidad</Link>
            <Link href="/transparencia" className="hover:text-slate-300 transition-colors">Transparencia</Link>
            <Link href="/contacto" className="hover:text-slate-300 transition-colors">Contacto</Link>
          </div>

        </div>
      </footer>

    </div>
  );
}
