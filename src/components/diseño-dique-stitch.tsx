// ==============================================================================
// PATO RACE 2026 - NOCHE EN EL DIQUE (Next.js 14+ App Router / Tailwind CSS / Lucide)
// Dirección visual: Fiesta urbana, festival nocturno, reflejos de agua en Dique 3
// Inspirado en el diseño hero de alta fidelidad: fondo Midnight Navy, neón cian y dorado
// ==============================================================================

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  HeartHandshake, 
  ChevronRight, 
  ChevronDown, 
  Ticket, 
  ArrowRight,
  ShoppingBag,
  ExternalLink,
  Users,
  Trophy
} from 'lucide-react';

// --- DATOS INMUTABLES OFICIALES DEL EVENTO ---
const EVENT_DATA = {
  year: '2026',
  title: 'PATO RACE 2026',
  subtitle: 'Noche en el Dique',
  date: '22 de Noviembre de 2026',
  dateChip: '22 NOV 2026 · APERTURA 19:00',
  locationChip: 'DIQUE 3 · PUERTO MADERO',
  time: 'Apertura 19:00 hs',
  targetDate: '2026-11-22T19:00:00-03:00',
  location: 'Dique 3 · Puerto Madero, Buenos Aires',
  admission: 'Entrada libre y gratuita',
  price: '$10.000',
  impactPercent: '70%',
  organizer: 'PATO RACE SOLIDARIO S.R.L.',
  targetGoal: '$100.000.000',
  currentRaised: '$45.230.000',
  adoptedDucks: '4.523',
};

export default function PatoRaceNocheEnElDique() {
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
    <div className="min-h-screen bg-[#040e15] text-slate-100 font-sans selection:bg-[#ffc800] selection:text-black overflow-x-hidden">
      
      {/* ATMÓSFERA FESTIVAL NOCTURNO: RESPLANDOR Y REFLEJOS EN AGUA */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#040e15]/80 to-[#02070a] z-0" />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/3 left-0 w-[500px] h-[500px] bg-[#ffc800]/5 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* ==================================================================== */}
      {/* 1. NAVBAR / HEADER VIDRIADO CON ESTILO NOCTURNO */}
      {/* ==================================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#040e15]/80 border-b border-cyan-500/15 px-4 lg:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Marca */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#ffc800] via-[#00f2fe] to-[#ffc800] p-[1.5px] shadow-[0_0_20px_rgba(0,242,254,0.35)]">
              <div className="w-full h-full bg-[#05141e] rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-xl transform group-hover:scale-110 transition-transform">🦆</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black italic tracking-tighter text-xl text-white">PATO RACE</span>
                <span className="text-[10px] font-mono tracking-widest bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-1.5 py-0.5 rounded font-bold uppercase">2026</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Noche en el Dique</span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-slate-300">
            <a href="#el-evento" className="hover:text-[#ffc800] transition-colors">El Evento</a>
            <a href="#premios" className="hover:text-[#ffc800] transition-colors">Premios</a>
            <a href="#como-participar" className="hover:text-[#ffc800] transition-colors">Cómo Participar</a>
            <a href="#impacto" className="hover:text-[#ffc800] transition-colors flex items-center gap-1">
              <span>Impacto</span>
              <span className="text-cyan-400 font-bold">70%</span>
            </a>
            <a href="#faqs" className="hover:text-[#ffc800] transition-colors">FAQs</a>
          </nav>

          {/* Botones de acción del header */}
          <div className="flex items-center gap-3">
            <Link 
              href="/perfil"
              className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white px-3.5 py-2 rounded-full border border-slate-700/60 hover:border-cyan-400/50 hover:bg-cyan-950/30 transition-all hidden sm:block"
            >
              Mi perfil
            </Link>
            <a 
              href="#adoptar"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ffc800] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,200,0,0.45)] hover:shadow-[0_0_30px_rgba(255,200,0,0.7)] hover:bg-[#ffd533] hover:scale-105 active:scale-95 transition-all"
            >
              <span>Adoptá tu pato</span>
            </a>
          </div>

        </div>
      </header>

      {/* ==================================================================== */}
      {/* 2. HERO: NOCHE EN EL DIQUE (PUERTO MADERO FESTIVAL NIGHT) */}
      {/* ==================================================================== */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden z-10" id="el-evento">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columna Izquierda: Tipografía hero dominante y CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="space-y-3">
                <p className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-cyan-300 font-semibold flex items-center justify-center lg:justify-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#ffc800] animate-pulse" />
                  EL EVENTO MÁS ESPERADO DE BUENOS AIRES
                </p>

                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.88] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  PATO RACE <span className="text-[#ffc800]">2026</span>
                  <span className="block not-italic font-light text-3xl sm:text-5xl lg:text-6xl text-slate-200 mt-2 tracking-tight">
                    Noche en el Dique
                  </span>
                </h1>
              </div>

              <p className="text-slate-300 text-base sm:text-xl font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Una carrera solidaria de miles de patos sobre las aguas iluminadas de Puerto Madero. <strong className="text-white">Tu pato corre por vos</strong>, participás desde cualquier rincón del país y el 70% va directo a impacto social.
              </p>

              {/* Botones de acción principales */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" id="adoptar">
                <a
                  href="#adoptar-ahora"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#ffc800] text-black font-black uppercase text-sm tracking-wider shadow-[0_0_35px_rgba(255,200,0,0.55)] hover:shadow-[0_0_50px_rgba(255,200,0,0.8)] hover:bg-[#ffd533] hover:scale-105 active:scale-95 transition-all text-center"
                >
                  Adoptá tu pato · {EVENT_DATA.price}
                </a>
                
                <a
                  href="#como-participar"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-cyan-950/40 border border-cyan-400/50 text-cyan-200 hover:text-white hover:bg-cyan-900/50 font-bold text-sm uppercase tracking-wider transition-all text-center backdrop-blur-md"
                >
                  Saber más
                </a>
              </div>

              {/* Badges de confianza */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Organiza {EVENT_DATA.organizer}
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#ffc800]" />
                  {EVENT_DATA.impactPercent} a impacto social
                </span>
                <span className="text-slate-600">·</span>
                <span>Acceso libre al dique</span>
              </div>

            </div>

            {/* Columna Derecha: El Pato con Casco sobre el agua nocturna con rim lighting */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* Resplandor circular de fondo */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-[#ffc800]/20 to-transparent blur-3xl pointer-events-none" />

              {/* Contenedor de la mascota del hero */}
              <div className="relative w-72 sm:w-96 h-72 sm:h-96 rounded-3xl p-1 bg-gradient-to-b from-cyan-400/30 via-slate-800/40 to-transparent backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex items-center justify-center overflow-hidden group">
                
                {/* Reflejos de ciudad nocturna en agua */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e15] via-transparent to-transparent z-10 opacity-80" />
                
                {/* Imagen del pato con casco deportivo y gafas */}
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center z-0">
                  <span className="text-8xl sm:text-9xl filter drop-shadow-[0_0_35px_rgba(0,242,254,0.6)] transform group-hover:scale-105 transition-transform duration-500">
                    🦆
                  </span>
                  
                  {/* Badge flotante de adopción al pie del pato */}
                  <div className="absolute bottom-6 z-20 px-4 py-2 rounded-full bg-[#ffc800] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,200,0,0.6)] animate-bounce">
                    Adoptá tu pato · {EVENT_DATA.price}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* ================================================================ */}
          {/* BARRA ARQUITECTÓNICA DE PULSO DEL EVENTO (COUNTDOWN BAR) */}
          {/* ================================================================ */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-full bg-[#071924]/80 border border-cyan-400/40 p-2 sm:p-2.5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,242,254,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Coordenada izquierda: Fecha y hora oficial */}
              <div className="flex items-center gap-2 px-6 py-2 text-xs sm:text-sm font-mono tracking-wider uppercase text-cyan-200 font-bold">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{EVENT_DATA.dateChip}</span>
              </div>

              {/* Separador de pulso luminoso cian neón */}
              <div className="hidden sm:block w-3 h-8 bg-cyan-400 rounded-full shadow-[0_0_15px_#00f2fe] animate-pulse" />

              {/* Coordenada derecha: Lugar del dique */}
              <div className="flex items-center gap-2 px-6 py-2 text-xs sm:text-sm font-mono tracking-wider uppercase text-slate-200 font-bold">
                <MapPin className="w-4 h-4 text-[#ffc800]" />
                <span>{EVENT_DATA.locationChip}</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. CONTADOR REGRESIVO Y LIVE BOARD (RECAUDACIÓN Y PATOS EN GRILLA) */}
      {/* ==================================================================== */}
      <section className="py-12 bg-[#030b10] border-y border-cyan-900/30 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Reloj regresivo a la noche del 22 de Noviembre */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ffc800]" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
                  CUENTA REGRESIVA A LA LARGADA
                </span>
              </div>

              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-[#06141d] p-3 rounded-xl border border-cyan-500/20">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-white block">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">DÍAS</span>
                </div>
                <div className="bg-[#06141d] p-3 rounded-xl border border-cyan-500/20">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-white block">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">HORAS</span>
                </div>
                <div className="bg-[#06141d] p-3 rounded-xl border border-cyan-500/20">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-white block">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">MINS</span>
                </div>
                <div className="bg-[#06141d] p-3 rounded-xl border border-cyan-500/20">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#ffc800] block animate-pulse">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">SEGS</span>
                </div>
              </div>
            </div>

            {/* Live Board: Recaudación y Meta solidaria */}
            <div className="lg:col-span-6 bg-[#06141d] border border-cyan-500/30 rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  TABLERO SOLIDARIO EN VIVO
                </span>
                <span className="text-xs font-mono text-slate-300">
                  <strong className="text-white">{EVENT_DATA.adoptedDucks}</strong> patos adoptados
                </span>
              </div>

              {/* Barra de progreso de recaudación */}
              <div className="w-full bg-[#02070a] h-3.5 rounded-full overflow-hidden p-0.5 border border-cyan-900/50 mb-3">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-[#ffc800] h-full rounded-full shadow-[0_0_12px_rgba(0,242,254,0.8)]"
                  style={{ width: '45%' }}
                />
              </div>

              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300">
                  Recaudado: <strong className="text-[#ffc800] text-sm">{EVENT_DATA.currentRaised}</strong>
                </span>
                <span className="text-slate-400">
                  Meta: {EVENT_DATA.targetGoal}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. ¿QUÉ ES PATO RACE?: REGLAS Y PREMIOS */}
      {/* ==================================================================== */}
      <section className="py-20 relative" id="premios">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold">
              // NOCHE DE REGATA EN PUERTO MADERO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
              ¿CÓMO ES LA CARRERA DE PATOS?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Una fiesta náutica en pleno Dique 3. No necesitás saber de navegación ni moverte de tu casa: comprás tu participación y tu pato compite por vos sobre el agua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#06141d]/80 border border-cyan-500/20 rounded-2xl p-7 hover:border-[#ffc800]/50 transition-all group">
              <div className="text-[#ffc800] font-mono text-4xl font-black italic mb-3">01</div>
              <h3 className="text-xl font-bold uppercase text-white mb-2 flex items-center gap-2">
                <span>2 Carreras en el Dique</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dos mangas de velocidad sobre el agua calma de Puerto Madero durante una jornada festiva de aproximadamente dos horas.
              </p>
            </div>

            <div className="bg-[#06141d]/80 border border-cyan-500/20 rounded-2xl p-7 hover:border-[#ffc800]/50 transition-all group">
              <div className="text-[#ffc800] font-mono text-4xl font-black italic mb-3">20–30</div>
              <h3 className="text-xl font-bold uppercase text-white mb-2 flex items-center gap-2">
                <span>Personas por Pato</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cada pato en el agua es compartido por un equipo de participantes asignados al azar 48 horas antes de la largada.
              </p>
            </div>

            <div className="bg-[#06141d]/80 border border-cyan-500/20 rounded-2xl p-7 hover:border-[#ffc800]/50 transition-all group">
              <div className="text-[#ffc800] font-mono text-4xl font-black italic mb-3">$500.000</div>
              <h3 className="text-xl font-bold uppercase text-white mb-2 flex items-center gap-2">
                <span>De Premio Ganador</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Si tu pato cruza primero la meta, el premio de $500.000 se divide equitativamente entre los miembros que lo adoptaron.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. CÓMO PARTICIPAR: LOS 4 PASOS DIGITALES */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#02070a] border-t border-cyan-950/60 relative" id="como-participar">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#ffc800] font-bold">
                // PASO A PASO
              </span>
              <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mt-1">
                CÓMO ENTRAR A LA CARRERA
              </h2>
            </div>
            <p className="text-slate-400 text-xs font-mono max-w-xs">
              Simple, 100% digital y transparente desde cualquier punto del país.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#06141d] border-t-2 border-[#ffc800] border-x border-b border-slate-800/80 rounded-xl p-6 space-y-3">
              <div className="font-mono text-xs text-[#ffc800] font-bold">PASO 01</div>
              <h4 className="text-base font-bold uppercase text-white">Comprás tu participación</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Adoptás tu pato online por {EVENT_DATA.price} de manera segura a través de Mercado Pago.
              </p>
            </div>

            <div className="bg-[#06141d] border-t-2 border-cyan-400 border-x border-b border-slate-800/80 rounded-xl p-6 space-y-3">
              <div className="font-mono text-xs text-cyan-400 font-bold">PASO 02</div>
              <h4 className="text-base font-bold uppercase text-white">Recibís tu ticket</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Te enviamos un comprobante digital con tu número único e intransferible de participación.
              </p>
            </div>

            <div className="bg-[#06141d] border-t-2 border-[#ffc800] border-x border-b border-slate-800/80 rounded-xl p-6 space-y-3">
              <div className="font-mono text-xs text-[#ffc800] font-bold">PASO 03</div>
              <h4 className="text-base font-bold uppercase text-white">Asignación 48 hs antes</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                El sistema vincula al azar tu ticket con uno de los patos numerados que competirán en el dique.
              </p>
            </div>

            <div className="bg-[#06141d] border-t-2 border-cyan-400 border-x border-b border-slate-800/80 rounded-xl p-6 space-y-3">
              <div className="font-mono text-xs text-cyan-400 font-bold">PASO 04</div>
              <h4 className="text-base font-bold uppercase text-white">Seguís la regata y ganás</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vivilo en vivo en Puerto Madero o por streaming. Si tu pato gana, el premio corre hacia vos.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. IMPACTO SOCIAL: 70% A CAUSAS BENEFICIARIAS */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#040e15] border-y border-cyan-500/20 relative" id="impacto">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="bg-gradient-to-br from-[#061924] to-[#0c2636] border border-cyan-500/30 rounded-3xl p-8 lg:p-14 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffc800]/10 border border-[#ffc800]/30 text-[#ffc800] font-mono text-xs font-bold">
                  <HeartHandshake className="w-4 h-4" />
                  <span>MISIÓN SOLIDARIA CERTIFICADA</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white leading-tight">
                  70% DE LA RECAUDACIÓN DESTINADO A IMPACTO SOCIAL
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Pato Race es un motor masivo de recaudación solidaria. El 70% de cada adopción se destina de forma directa a causas sociales y comunitarias prioritarias, mientras que el 30% restante cubre costos de logística, los cuales bajan progresivamente gracias al apoyo de las marcas sponsors.
                </p>
                <div className="pt-2 text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Organizado y fiscalizado por {EVENT_DATA.organizer}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#030b10] border-4 border-[#ffc800] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_40px_rgba(255,200,0,0.35)]">
                  <span className="text-5xl sm:text-6xl font-black italic text-[#ffc800] tracking-tighter">70%</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-white font-bold mt-1">Impacto Social</span>
                  <span className="text-[10px] text-slate-400 font-mono mt-1">Destino Garantizado</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. PREGUNTAS FRECUENTES (FAQ) Y REGLAMENTO */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#02070a] border-t border-slate-900" id="faqs">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ffc800] font-bold">
              // PREGUNTAS FRECUENTES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black italic uppercase text-white">
              DUDAS FRECUENTES & REGLAMENTO
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: '¿Puedo participar sin ir al Dique 3 de Puerto Madero?',
                a: 'Sí, podés adoptar tu pato de forma 100% online desde cualquier rincón de Argentina. Recibís tu ticket digital y seguís la transmisión de la carrera en vivo.'
              },
              {
                q: '¿Cómo se asigna mi pato?',
                a: '48 horas antes de la largada, el sistema vincula al azar tu ticket digital con uno de los patos numerados que competirán en el dique.'
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
                className="bg-[#06141d] border border-cyan-500/20 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white font-bold text-sm hover:text-[#ffc800] transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${openFaq === idx ? 'rotate-180 text-[#ffc800]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Módulo secundario compacto de Merchandising */}
          <div className="mt-10 p-4 rounded-xl bg-[#06141d]/70 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-slate-300 font-mono">
                ¿Querés llevarte un recuerdo? Conseguí remeras y gorras oficiales.
              </span>
            </div>
            <Link href="/merch" className="text-xs font-mono text-[#ffc800] hover:underline flex items-center gap-1 font-bold">
              <span>Ver Merch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 8. CIERRE Y CTA FINAL: SUMATE A LA CARRERA */}
      {/* ==================================================================== */}
      <section className="py-20 bg-gradient-to-t from-[#02070a] to-[#05141e] border-t border-cyan-500/30 text-center px-4 relative" id="adoptar-ahora">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-block p-3 rounded-full bg-[#ffc800]/10 border border-[#ffc800]/30 text-[#ffc800] text-3xl">
            ✨
          </div>

          <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter text-white">
            ASEGURÁ TU LUGAR EN LA NOCHE DEL DIQUE
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
            Adoptá tu pato por {EVENT_DATA.price}, sumate al 70% de impacto solidario y preparate para vivir el evento del año en Puerto Madero.
          </p>

          <div className="pt-2">
            <button 
              onClick={() => alert('Conectar con checkout de Mercado Pago')}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#ffc800] text-black font-black uppercase text-base tracking-wider shadow-[0_0_40px_rgba(255,200,0,0.6)] hover:bg-[#ffd533] hover:scale-105 active:scale-95 transition-all"
            >
              <Ticket className="w-5 h-5 text-black" />
              <span>ADOPTÁ TU PATO · {EVENT_DATA.price}</span>
            </button>
          </div>

          <p className="text-xs font-mono text-slate-400">
            {EVENT_DATA.date} · {EVENT_DATA.time} · {EVENT_DATA.location}
          </p>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 9. FOOTER INSTITUCIONAL */}
      {/* ==================================================================== */}
      <footer className="bg-[#010406] border-t border-slate-900 py-10 px-4 lg:px-8 text-slate-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div>
            <div className="font-bold text-white tracking-wider uppercase mb-1">
              PATO RACE 2026 · NOCHE EN EL DIQUE
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
