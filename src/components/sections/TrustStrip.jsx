import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Palette,
  ShoppingCart,
  LayoutDashboard,
  Workflow,
  Smartphone,
  Globe,
  Cog,
  X,
} from "lucide-react";
import { ease } from "../../utils/motion";

/* ═══════════════════════════════════════════════════════
   Animated Mini-Illustrations — Rich UI mockups
   ═══════════════════════════════════════════════════════ */

/* --- Software a la Medida --- */
const SoftwareIllustration = () => (
  <div className="w-full h-full rounded-lg overflow-hidden flex bg-gradient-to-br from-violet-500/[0.02] to-purple-500/[0.02]">
    <motion.div
      className="w-12 bg-violet-500/[0.06] border-r border-violet-500/10 flex flex-col p-1.5 pt-3 gap-1"
      initial={{ x: -48 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: ease.out }}
    >
      <div className="w-full h-5 rounded-md bg-violet-500/15 mb-2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className={`w-full h-3.5 rounded-md flex items-center px-1 gap-1 ${i === 1 ? "bg-violet-500/20 border border-violet-500/25" : "bg-violet-500/[0.05]"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 + i * 0.06 }}
        >
          <div className={`w-1.5 h-1.5 rounded-sm ${i === 1 ? "bg-violet-500/50" : "bg-violet-500/15"}`} />
          <div className={`h-[2px] flex-1 rounded-full ${i === 1 ? "bg-violet-500/30" : "bg-violet-500/10"}`} />
        </motion.div>
      ))}
    </motion.div>
    <div className="flex-1 p-2.5 flex flex-col gap-1.5 overflow-hidden">
      <div className="flex items-center justify-between mb-1">
        <motion.div
          className="h-2 bg-violet-500/15 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 70 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        <div className="flex gap-1">
          <div className="w-4 h-3 rounded bg-violet-500/8" />
          <div className="w-4 h-3 rounded bg-violet-500/8" />
        </div>
      </div>
      {[
        { label: "Nombre del proyecto", width: "72%" },
        { label: "Cliente", width: "55%" },
        { label: "Descripcion", width: "88%" },
      ].map((field, i) => (
        <motion.div
          key={i}
          className="rounded-md border border-violet-500/10 bg-white/30 dark:bg-white/[0.03] p-1.5"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
        >
          <p className="text-[5px] text-violet-600/60 dark:text-violet-400/60 mb-0.5">{field.label}</p>
          <motion.div
            className="h-1 bg-violet-500/15 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: field.width }}
            transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
          />
        </motion.div>
      ))}
      <div className="flex gap-1.5">
        <motion.div
          className="flex-1 h-5 rounded-md border border-violet-500/10 bg-white/30 dark:bg-white/[0.03] px-1.5 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="h-[2px] w-6 bg-violet-500/15 rounded-full" />
          <motion.div
            className="w-5 h-2.5 rounded-full bg-violet-500/15 relative"
            animate={{ backgroundColor: ["rgba(139,92,246,0.15)", "rgba(139,92,246,0.35)", "rgba(139,92,246,0.15)"] }}
            transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <motion.div
              className="absolute top-0.5 w-1.5 h-1.5 rounded-full bg-violet-500/50"
              animate={{ left: [1, 10, 1] }}
              transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-1 h-5 rounded-md border border-violet-500/10 bg-white/30 dark:bg-white/[0.03] px-1.5 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
        >
          <div className="h-[2px] w-8 bg-violet-500/15 rounded-full" />
          <svg className="w-2 h-2 text-violet-500/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6" /></svg>
        </motion.div>
      </div>
      <div className="flex items-center justify-between mt-auto pt-1">
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 1.8, duration: 2.5, repeat: Infinity, repeatDelay: 2.5 }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50 flex items-center justify-center">
            <svg className="w-1.5 h-1.5 text-emerald-700 dark:text-emerald-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
          </div>
          <span className="text-[6px] text-emerald-600 dark:text-emerald-400">Guardado</span>
        </motion.div>
        <motion.div
          className="px-3 py-1 rounded-md bg-gradient-to-r from-violet-500/30 to-purple-500/20 border border-violet-500/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[7px] font-medium text-violet-700 dark:text-violet-300">Guardar cambios</span>
        </motion.div>
      </div>
    </div>
  </div>
);

/* --- UI/UX Responsivo --- */
const ResponsiveIllustration = () => (
  <div className="w-full h-full flex items-center justify-center p-3 gap-3 relative">
    <motion.div
      className="flex-1 h-full border border-pink-500/15 rounded-lg overflow-hidden bg-pink-500/[0.02] flex flex-col"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex items-center gap-0.5 px-1.5 py-1 border-b border-pink-500/10 bg-pink-500/[0.03] shrink-0">
        <div className="w-1 h-1 rounded-full bg-red-400/50" />
        <div className="w-1 h-1 rounded-full bg-yellow-400/50" />
        <div className="w-1 h-1 rounded-full bg-green-400/50" />
        <div className="ml-1 h-1 w-8 bg-pink-500/[0.08] rounded-full" />
      </div>
      <div className="flex-1 p-1.5 flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="h-1.5 flex-1 bg-pink-500/10 rounded-full" />
          <div className="flex gap-0.5">
            {[0, 1, 2].map((i) => <div key={i} className="h-1.5 w-3 bg-pink-500/6 rounded-full" />)}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-1">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="rounded bg-gradient-to-br from-pink-500/10 to-rose-500/5 border border-pink-500/8"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </motion.div>
    <motion.div
      className="w-[28%] h-[85%] border border-pink-500/15 rounded-lg overflow-hidden bg-pink-500/[0.02] flex flex-col shrink-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex items-center gap-0.5 px-1 py-0.5 border-b border-pink-500/10 bg-pink-500/[0.03] shrink-0">
        <div className="w-0.5 h-0.5 rounded-full bg-red-400/50" />
        <div className="w-0.5 h-0.5 rounded-full bg-yellow-400/50" />
        <div className="w-0.5 h-0.5 rounded-full bg-green-400/50" />
      </div>
      <div className="flex-1 p-1 grid grid-cols-2 gap-0.5">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="rounded-sm bg-gradient-to-br from-pink-500/10 to-rose-500/5 border border-pink-500/8"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ delay: 0.5 + i * 0.15, duration: 2, repeat: Infinity }}
          />
        ))}
      </div>
    </motion.div>
    <motion.div
      className="w-[16%] h-[75%] border-2 border-pink-500/15 rounded-xl overflow-hidden bg-pink-500/[0.02] flex flex-col shrink-0"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className="flex items-center justify-center py-0.5 shrink-0">
        <div className="w-4 h-0.5 rounded-full bg-pink-500/10" />
      </div>
      <div className="flex-1 p-0.5 flex flex-col gap-0.5">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-br from-pink-500/10 to-rose-500/5 border border-pink-500/8"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ delay: 0.8 + i * 0.1, duration: 2, repeat: Infinity }}
          />
        ))}
      </div>
    </motion.div>
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 290 160">
      <motion.path
        d="M 50 80 Q 145 40 240 80"
        fill="none"
        stroke="rgba(236,72,153,0.15)"
        strokeWidth="1"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
      />
    </svg>
  </div>
);

/* --- eCommerce --- */
const EcommerceIllustration = () => (
  <div className="w-full h-full flex flex-col bg-gradient-to-br from-amber-500/[0.02] to-orange-500/[0.01] relative">
    <div className="flex items-center justify-between px-3 py-1.5 border-b border-amber-500/10 shrink-0">
      <div className="h-2 w-10 bg-amber-500/15 rounded-full" />
      <div className="flex items-center gap-2">
        {["Inicio", "Tienda", "Ofertas"].map((t) => (
          <span key={t} className="text-[5px] text-txt-3">{t}</span>
        ))}
      </div>
      <div className="relative">
        <ShoppingCart className="w-3 h-3 text-txt-3" />
        <motion.div
          className="absolute -top-1 -right-1.5 w-2.5 h-2.5 rounded-full bg-amber-500 flex items-center justify-center"
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ delay: 2.5, duration: 0.4, repeat: Infinity, repeatDelay: 4 }}
        >
          <span className="text-[4px] text-white font-bold">1</span>
        </motion.div>
      </div>
    </div>
    <motion.div
      className="mx-2.5 mt-2 h-8 rounded-md bg-gradient-to-r from-amber-500/10 to-orange-500/8 border border-amber-500/10 flex items-center px-2.5 justify-between shrink-0"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="space-y-0.5">
        <div className="h-[3px] w-12 bg-amber-600/20 rounded-full" />
        <div className="h-[2px] w-8 bg-amber-500/10 rounded-full" />
      </div>
      <div className="px-2 py-0.5 rounded bg-amber-500/20">
        <span className="text-[5px] font-bold text-amber-700 dark:text-amber-300">-30%</span>
      </div>
    </motion.div>
    <div className="flex-1 grid grid-cols-3 gap-1.5 p-2.5 min-h-0">
      {[
        { price: "$29.99", old: "$42.99", hot: true },
        { price: "$49.99", old: null, hot: false },
        { price: "$19.99", old: "$24.99", hot: false },
        { price: "$89.99", old: null, hot: false },
        { price: "$34.99", old: "$39.99", hot: false },
        { price: "$15.99", old: null, hot: false },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="rounded-md border border-amber-500/10 bg-white/40 dark:bg-white/[0.03] flex flex-col overflow-hidden relative"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.08 }}
        >
          {p.hot && (
            <div className="absolute top-0.5 left-0.5 px-1 py-0 rounded bg-red-500/80 z-10">
              <span className="text-[4px] text-white font-bold">HOT</span>
            </div>
          )}
          <div className="flex-1 bg-gradient-to-br from-amber-500/[0.06] to-orange-500/[0.04] min-h-[16px] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded bg-amber-500/8" />
            </div>
            {i === 0 && (
              <motion.div
                className="absolute inset-0 bg-amber-500/10"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
              />
            )}
          </div>
          <div className="p-1 space-y-0.5">
            <div className="h-[2px] w-full bg-amber-500/10 rounded-full" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5">
                <span className="text-[6px] font-bold text-txt-2">{p.price}</span>
                {p.old && <span className="text-[4px] text-txt-4 line-through">{p.old}</span>}
              </div>
              <motion.div
                className="w-3 h-3 rounded bg-amber-500/20 flex items-center justify-center"
                animate={i === 0 ? { scale: [1, 0.85, 1.15, 1] } : {}}
                transition={i === 0 ? { delay: 2.2, duration: 0.5, repeat: Infinity, repeatDelay: 4 } : {}}
              >
                <svg className="w-2 h-2 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div
      className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/20 backdrop-blur-sm"
      animate={{ opacity: [0, 0, 1, 1, 0], y: [8, 8, 0, 0, -6] }}
      transition={{ delay: 2.7, duration: 3, repeat: Infinity, repeatDelay: 1.5, times: [0, 0.05, 0.15, 0.75, 0.9] }}
    >
      <svg className="w-2 h-2 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
      <span className="text-[6px] text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">Agregado al carrito</span>
    </motion.div>
  </div>
);

/* --- Dashboards --- */
const DashboardIllustration = () => (
  <div className="w-full h-full flex bg-gradient-to-br from-cyan-500/[0.02] to-teal-500/[0.01]">
    <motion.div
      className="w-10 bg-cyan-500/[0.05] border-r border-cyan-500/10 flex flex-col p-1 pt-2 gap-1"
      initial={{ x: -40 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.35, ease: ease.out }}
    >
      <div className="w-full h-4 rounded-md bg-cyan-500/15 mb-1.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className={`w-full h-3 rounded-md ${i === 0 ? "bg-cyan-500/20 border border-cyan-500/20" : "bg-cyan-500/[0.05]"}`} />
      ))}
      <div className="mt-auto w-full h-3 rounded-md bg-cyan-500/[0.05]" />
    </motion.div>
    <div className="flex-1 p-2.5 flex flex-col gap-2 overflow-hidden">
      <div className="flex items-center justify-between">
        <motion.div className="h-2 bg-cyan-500/15 rounded-full" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 0.3, duration: 0.4 }} />
        <div className="flex gap-1">
          <div className="w-10 h-3 rounded-full border border-cyan-500/10 bg-cyan-500/[0.04] flex items-center px-1">
            <div className="h-[2px] w-4 bg-cyan-500/15 rounded-full" />
          </div>
          <div className="w-4 h-3 rounded-full bg-cyan-500/[0.08]" />
        </div>
      </div>
      <div className="flex gap-1.5 shrink-0">
        {[
          { v: "12,847", l: "Usuarios", trend: "+12.5%", up: true, color: "from-cyan-500/15 to-cyan-500/5" },
          { v: "$48.2k", l: "Ingresos", trend: "+8.3%", up: true, color: "from-emerald-500/15 to-emerald-500/5" },
          { v: "94.2%", l: "Uptime", trend: "-0.1%", up: false, color: "from-amber-500/15 to-amber-500/5" },
          { v: "1.2s", l: "Respuesta", trend: "-15%", up: true, color: "from-violet-500/15 to-violet-500/5" },
        ].map((s, i) => (
          <motion.div
            key={i}
            className={`flex-1 p-1.5 rounded-md bg-gradient-to-br ${s.color} border border-primary/[0.06]`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08 }}
          >
            <motion.p
              className="text-[8px] font-bold text-txt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >{s.v}</motion.p>
            <div className="flex items-center justify-between mt-0.5">
              <p className="text-[4px] text-txt-3">{s.l}</p>
              <span className={`text-[4px] font-medium ${s.up ? "text-emerald-500" : "text-red-400"}`}>{s.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-1.5 flex-1 min-h-0">
        <div className="flex-[2] rounded-md border border-cyan-500/8 bg-white/30 dark:bg-white/[0.02] p-1.5 flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <div className="h-[3px] w-10 bg-cyan-500/15 rounded-full" />
            <div className="flex gap-1">
              {["D", "S", "M"].map((t) => (
                <span key={t} className="text-[4px] text-txt-4 px-0.5">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-end gap-[3px] px-0.5">
            {[55, 72, 48, 85, 63, 90, 42, 78, 65, 82, 70, 58].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                <motion.div
                  className={`w-full rounded-t-sm ${i === 5 ? "bg-gradient-to-t from-cyan-500/50 to-teal-400/30" : "bg-gradient-to-t from-cyan-500/25 to-teal-500/10"}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.06, duration: 0.6, ease: ease.out }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex-1 rounded-md border border-cyan-500/8 bg-white/30 dark:bg-white/[0.02] p-1.5 relative overflow-hidden">
            <div className="h-[3px] w-8 bg-cyan-500/15 rounded-full mb-1" />
            <svg className="w-full h-[calc(100%-8px)]" viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.2)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,35 Q10,30 20,28 T40,22 T60,15 T80,18 T100,8"
                fill="none"
                stroke="rgba(6,182,212,0.5)"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
              />
              <motion.path
                d="M0,35 Q10,30 20,28 T40,22 T60,15 T80,18 T100,8 V40 H0 Z"
                fill="url(#lineGrad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              />
            </svg>
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50"
              animate={{ left: ["10%", "90%"], top: ["65%", "25%"] }}
              transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
            />
          </div>
          <div className="flex-1 rounded-md border border-cyan-500/8 bg-white/30 dark:bg-white/[0.02] p-1 flex items-center justify-center">
            <svg className="w-10 h-10" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(6,182,212,0.08)" strokeWidth="3" />
              <motion.circle
                cx="18" cy="18" r="14" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="3"
                strokeDasharray="88" strokeLinecap="round"
                transform="rotate(-90 18 18)"
                initial={{ strokeDashoffset: 88 }}
                animate={{ strokeDashoffset: 22 }}
                transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
              />
              <motion.circle
                cx="18" cy="18" r="14" fill="none" stroke="rgba(20,184,166,0.3)" strokeWidth="3"
                strokeDasharray="88" strokeLinecap="round"
                transform="rotate(175 18 18)"
                initial={{ strokeDashoffset: 88 }}
                animate={{ strokeDashoffset: 55 }}
                transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
              />
              <motion.text
                x="18" y="19" textAnchor="middle" className="fill-txt text-[6px] font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
              >75%</motion.text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* --- Automatizacion --- */
const AutomationIllustration = () => {
  const nodes = [
    { x: 12, y: 18, label: "CRM" },
    { x: 38, y: 8, label: "API" },
    { x: 62, y: 8, label: "Pagos" },
    { x: 88, y: 18, label: "Email" },
    { x: 25, y: 38, label: "Webhook" },
    { x: 50, y: 45, label: "Lambda" },
    { x: 75, y: 38, label: "DB" },
  ];
  const connections = [
    [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6], [6, 3], [1, 5], [2, 6],
  ];
  return (
    <div className="w-full h-full relative p-1 bg-gradient-to-br from-emerald-500/[0.02] to-green-500/[0.01]">
      <svg className="w-full h-full" viewBox="0 0 100 54">
        {[12, 24, 36, 48].map((y) => (
          <line key={`hg-${y}`} x1="0" y1={y} x2="100" y2={y} stroke="rgba(16,185,129,0.04)" strokeWidth="0.3" />
        ))}
        {[20, 40, 60, 80].map((x) => (
          <line key={`vg-${x}`} x1={x} y1="0" x2={x} y2="54" stroke="rgba(16,185,129,0.04)" strokeWidth="0.3" />
        ))}
        {connections.map(([from, to], i) => {
          const n1 = nodes[from], n2 = nodes[to];
          return (
            <g key={`conn-${i}`}>
              <line x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke="rgba(16,185,129,0.12)" strokeWidth="0.4" strokeDasharray="2 1.5" />
              <motion.circle
                r="1"
                fill="rgba(16,185,129,0.8)"
                animate={{ cx: [n1.x, n2.x], cy: [n1.y, n2.y] }}
                transition={{ delay: i * 0.4, duration: 1.5, repeat: Infinity, repeatDelay: connections.length * 0.4 - 1.5 + 1, ease: "easeInOut" }}
              />
            </g>
          );
        })}
        {nodes.map((n, i) => (
          <g key={`node-${i}`}>
            <motion.rect
              x={n.x - 8} y={n.y - 5} width="16" height="10" rx="2.5"
              fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="0.4"
              animate={{ fillOpacity: [0.06, 0.14, 0.06] }}
              transition={{ delay: i * 0.5 + 1, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <text x={n.x} y={n.y + 1.2} textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[3.5px] font-semibold">{n.label}</text>
          </g>
        ))}
        <motion.circle
          cx="50" cy="27" r="1.5"
          fill="rgba(16,185,129,0.6)"
          animate={{ r: [1.5, 3, 1.5], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

/* --- Apps Mobile-First --- */
const MobileIllustration = () => (
  <div className="w-full h-full flex items-center justify-center p-2 gap-3">
    <div className="w-24 h-full border-2 border-blue-500/15 rounded-2xl overflow-hidden bg-blue-500/[0.02] flex flex-col relative shadow-lg shadow-blue-500/5">
      <div className="flex items-center justify-between px-2 py-0.5 shrink-0">
        <span className="text-[4px] text-txt-4">9:41</span>
        <div className="w-8 h-1 rounded-full bg-blue-500/15" />
        <div className="flex gap-0.5">
          {[0, 1, 2].map((i) => <div key={i} className="w-1 h-1 rounded-sm bg-blue-500/15" />)}
        </div>
      </div>
      <div className="flex-1 overflow-hidden relative">
        <motion.div
          className="flex flex-col gap-1.5 p-2"
          animate={{ y: [0, 0, -55, -55, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.35, 0.75, 0.9] }}
        >
          <div className="h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/8 border border-blue-500/10 p-1.5 flex flex-col justify-center shrink-0">
            <div className="h-[3px] w-14 bg-blue-500/20 rounded-full mb-1" />
            <div className="h-[2px] w-10 bg-blue-500/10 rounded-full" />
          </div>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-9 rounded-lg bg-white/40 dark:bg-white/[0.03] border border-blue-500/8 p-1.5 flex items-center gap-1.5 shrink-0">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500/10 to-indigo-500/8 shrink-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded bg-blue-500/15" />
              </div>
              <div className="flex-1 space-y-0.5">
                <div className="h-[3px] w-full bg-blue-500/12 rounded-full" />
                <div className="h-[2px] w-3/4 bg-blue-500/6 rounded-full" />
              </div>
              <svg className="w-2 h-2 text-blue-500/30 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="absolute top-1 left-1.5 right-1.5 px-2 py-1.5 rounded-lg bg-white/80 dark:bg-surface-alt/90 border border-blue-500/15 backdrop-blur-sm shadow-md"
          animate={{ y: [-40, 0, 0, -40], opacity: [0, 1, 1, 0] }}
          transition={{ delay: 2, duration: 4, repeat: Infinity, repeatDelay: 2, times: [0, 0.1, 0.7, 0.85] }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded bg-gradient-to-br from-blue-500/30 to-indigo-500/20 shrink-0" />
            <div className="flex-1">
              <div className="h-[3px] w-10 bg-blue-500/20 rounded-full mb-0.5" />
              <div className="h-[2px] w-14 bg-blue-500/10 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-around py-1.5 border-t border-blue-500/8 shrink-0">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <div className={`w-3 h-3 rounded ${i === 0 ? "bg-blue-500/20" : "bg-blue-500/[0.06]"}`} />
            <div className="h-[2px] w-3 bg-blue-500/8 rounded-full" />
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-2 shrink-0">
      {[
        { label: "Push", delay: 0.5 },
        { label: "Offline", delay: 0.7 },
        { label: "PWA", delay: 0.9 },
      ].map((f, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-1"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: f.delay }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
          <span className="text-[6px] text-blue-600/60 dark:text-blue-400/60 font-medium">{f.label}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

/* --- Landing Pages --- */
const LandingIllustration = () => (
  <div className="w-full h-full rounded-lg border border-fuchsia-500/10 overflow-hidden flex flex-col bg-gradient-to-br from-fuchsia-500/[0.02] to-purple-500/[0.01]">
    <div className="flex items-center justify-between px-3 py-1.5 border-b border-fuchsia-500/10 shrink-0">
      <div className="h-1.5 w-8 bg-fuchsia-500/15 rounded-full" />
      <div className="flex gap-2.5">
        {[0, 1, 2].map((i) => <div key={i} className="h-1 w-5 bg-fuchsia-500/8 rounded-full" />)}
      </div>
      <div className="w-8 h-3.5 rounded-full bg-gradient-to-r from-fuchsia-500/25 to-purple-500/20 border border-fuchsia-500/15" />
    </div>
    <div className="flex-1 overflow-hidden relative">
      <motion.div
        className="flex flex-col"
        animate={{ y: [0, 0, -80, -80, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.4, 0.75, 0.9] }}
      >
        <div className="h-24 flex flex-col items-center justify-center gap-2 px-6 shrink-0 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/[0.03] to-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="h-2.5 bg-fuchsia-500/18 rounded-full relative z-10"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          />
          <div className="h-1.5 w-20 bg-fuchsia-500/8 rounded-full relative z-10" />
          <div className="flex gap-2 mt-1 relative z-10">
            <motion.div
              className="w-16 h-5 rounded-full bg-gradient-to-r from-fuchsia-500/30 to-purple-500/20 border border-fuchsia-500/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="w-16 h-5 rounded-full border border-fuchsia-500/15" />
          </div>
        </div>
        <div className="px-4 py-1.5 border-y border-fuchsia-500/6 flex items-center justify-center gap-3 shrink-0">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-2 w-8 bg-fuchsia-500/6 rounded" />
          ))}
        </div>
        <div className="px-3 py-2.5 space-y-1.5 shrink-0">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-7 rounded-lg bg-white/30 dark:bg-white/[0.02] border border-fuchsia-500/8 flex items-center px-2 gap-2"
              initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
            >
              <div className="w-4 h-4 rounded-md bg-fuchsia-500/10 shrink-0" />
              <div className="flex-1 space-y-0.5">
                <div className="h-[3px] w-3/4 bg-fuchsia-500/10 rounded-full" />
                <div className="h-[2px] w-1/2 bg-fuchsia-500/6 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-around py-3 px-4 bg-fuchsia-500/[0.03] shrink-0">
          {[
            { n: "+200%", l: "Conversion" },
            { n: "< 1.2s", l: "Carga" },
            { n: "98/100", l: "Lighthouse" },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <p className="text-[8px] font-bold text-txt">{s.n}</p>
              <p className="text-[5px] text-txt-3">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

/* --- Sistemas Internos --- */
const SystemsIllustration = () => (
  <div className="w-full h-full flex overflow-hidden rounded-lg bg-gradient-to-br from-slate-500/[0.02] to-zinc-500/[0.01]">
    <motion.div
      className="w-12 bg-slate-500/[0.05] border-r border-slate-500/10 flex flex-col p-1.5 pt-2 gap-1"
      initial={{ x: -48 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.35, ease: ease.out }}
    >
      <div className="w-full h-4 rounded-md bg-slate-500/12 mb-1" />
      {["Usuarios", "Roles", "Config", "Logs", "Backup"].map((label, i) => (
        <motion.div
          key={i}
          className={`w-full h-3.5 rounded-md flex items-center px-1 gap-0.5 ${i === 0 ? "bg-slate-500/15 border border-slate-500/15" : "bg-slate-500/[0.04]"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.05 }}
        >
          <div className={`w-1.5 h-1.5 rounded-sm ${i === 0 ? "bg-slate-500/40" : "bg-slate-500/15"}`} />
          <span className="text-[3.5px] text-txt-4">{label}</span>
        </motion.div>
      ))}
    </motion.div>
    <div className="flex-1 p-2 flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <motion.div
          className="flex-1 h-4 rounded-md border border-slate-500/10 bg-white/30 dark:bg-white/[0.03] px-1.5 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <svg className="w-2 h-2 text-slate-500/30 mr-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
          <motion.div
            className="h-1 bg-slate-500/15 rounded-full"
            animate={{ width: [0, 28, 28, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.6, 0.75] }}
          />
        </motion.div>
        <div className="flex gap-0.5">
          <div className="w-5 h-4 rounded bg-slate-500/10 flex items-center justify-center">
            <svg className="w-2 h-2 text-slate-500/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </div>
          <div className="w-5 h-4 rounded bg-slate-500/[0.06]" />
        </div>
      </div>
      <div className="flex-1 rounded-md border border-slate-500/10 overflow-hidden">
        <div className="flex gap-0.5 px-1.5 py-1 border-b border-slate-500/8 bg-slate-500/[0.04]">
          <div className="w-2.5 h-2.5 rounded-sm border border-slate-500/15 shrink-0" />
          {["Nombre", "Email", "Rol", "Estado", "Ultimo acceso"].map((h) => (
            <span key={h} className="flex-1 text-[4px] text-txt-4 font-semibold truncate">{h}</span>
          ))}
        </div>
        {[
          { name: "Ana Garcia", role: "Admin", active: true },
          { name: "Carlos Lopez", role: "Editor", active: true },
          { name: "Maria Torres", role: "Viewer", active: true },
          { name: "Juan Perez", role: "Editor", active: false },
          { name: "Sofia Ruiz", role: "Admin", active: true },
        ].map((row, i) => (
          <motion.div
            key={i}
            className={`flex gap-0.5 px-1.5 py-[3px] border-b border-slate-500/[0.04] items-center ${i === 0 ? "bg-slate-500/[0.03]" : ""}`}
            animate={{ opacity: [1, 1, i >= 3 ? 0.25 : 1, i >= 3 ? 0.25 : 1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.35, 0.62, 0.77] }}
          >
            <div className="w-2.5 h-2.5 rounded-sm border border-slate-500/15 shrink-0 flex items-center justify-center">
              {i === 0 && <div className="w-1 h-1 bg-slate-500/30 rounded-[1px]" />}
            </div>
            <div className="flex-1 flex items-center gap-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-slate-400/15 to-slate-500/10 shrink-0" />
              <span className="text-[4px] text-txt-2 truncate">{row.name}</span>
            </div>
            <div className="flex-1 h-[2.5px] w-8 bg-slate-500/8 rounded-full" />
            <div className="flex-1">
              <span className={`text-[4px] px-1 py-0 rounded ${row.role === "Admin" ? "bg-violet-500/10 text-violet-600 dark:text-violet-400" : row.role === "Editor" ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400" : "bg-slate-500/10 text-txt-3"}`}>{row.role}</span>
            </div>
            <div className="flex-1 flex items-center gap-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${row.active ? "bg-emerald-400" : "bg-slate-400/40"}`} />
              <span className="text-[3.5px] text-txt-4">{row.active ? "Activo" : "Inactivo"}</span>
            </div>
            <div className="flex-1 h-[2px] w-6 bg-slate-500/6 rounded-full" />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between shrink-0">
        <span className="text-[4px] text-txt-4">1-5 de 234</span>
        <div className="flex gap-0.5">
          {[1, 2, 3].map((n) => (
            <div key={n} className={`w-3 h-3 rounded-sm flex items-center justify-center ${n === 1 ? "bg-slate-500/15 border border-slate-500/15" : "bg-slate-500/[0.04]"}`}>
              <span className="text-[4px] text-txt-3">{n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════
   Capability Data
   ═══════════════════════════════════════════════════════ */

const capabilities = [
  {
    label: "Software a la Medida",
    icon: Code2,
    mini: "Plataformas & sistemas",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    shadowHover: "shadow-violet-500/15",
    description:
      "Plataformas web, sistemas internos y herramientas operativas hechas a medida. Cada proyecto se adapta a los procesos de tu negocio.",
    illustration: SoftwareIllustration,
  },
  {
    label: "UI/UX Responsivo",
    icon: Palette,
    mini: "Mobile-first design",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    shadowHover: "shadow-pink-500/15",
    description:
      "Interfaces que funcionan en cualquier pantalla. Diseño mobile-first, adaptable y validado para ofrecer usabilidad real.",
    illustration: ResponsiveIllustration,
  },
  {
    label: "eCommerce",
    icon: ShoppingCart,
    mini: "Tiendas & catálogos",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    shadowHover: "shadow-amber-500/15",
    description:
      "Tiendas en línea con catálogos dinámicos, pasarelas de pago integradas y experiencia de compra optimizada para convertir.",
    illustration: EcommerceIllustration,
  },
  {
    label: "Dashboards",
    icon: LayoutDashboard,
    mini: "Paneles & analytics",
    color: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    shadowHover: "shadow-cyan-500/15",
    description:
      "Paneles de control con gráficos en tiempo real, métricas clave y reportes que ayudan a tomar decisiones rápidas.",
    illustration: DashboardIllustration,
  },
  {
    label: "Automatización",
    icon: Workflow,
    mini: "APIs & procesos",
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    shadowHover: "shadow-emerald-500/15",
    description:
      "Conexión de APIs, webhooks y servicios de terceros. Automatizamos flujos para que tu equipo se enfoque en lo importante.",
    illustration: AutomationIllustration,
  },
  {
    label: "Apps Mobile-First",
    icon: Smartphone,
    mini: "PWA & responsive",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    shadowHover: "shadow-blue-500/15",
    description:
      "Aplicaciones progresivas y responsive que se sienten nativas. Notificaciones push, modo offline y rendimiento óptimo.",
    illustration: MobileIllustration,
  },
  {
    label: "Landing Pages",
    icon: Globe,
    mini: "Conversión & SEO",
    color: "from-fuchsia-500 to-purple-600",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/20",
    shadowHover: "shadow-fuchsia-500/15",
    description:
      "Páginas de aterrizaje con copy estratégico, diseño orientado a acción y carga ultra-rápida para maximizar conversiones.",
    illustration: LandingIllustration,
  },
  {
    label: "Sistemas Internos",
    icon: Cog,
    mini: "CRM, ERP & admin",
    color: "from-slate-500 to-zinc-600",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    shadowHover: "shadow-slate-500/15",
    description:
      "CRMs, ERPs y herramientas administrativas internas que organizan datos, permisos y procesos en un solo lugar.",
    illustration: SystemsIllustration,
  },
];

/* ═══════════════════════════════════════════════════════
   Popup positioning helper
   ═══════════════════════════════════════════════════════ */

const getPopupAlign = (index, total) => {
  if (index <= 1) return "lg:left-0 lg:translate-x-0";
  if (index >= total - 2) return "lg:right-0 lg:left-auto lg:translate-x-0";
  return "lg:left-1/2 lg:-translate-x-1/2";
};

const getArrowAlign = (index, total) => {
  if (index <= 1) return "left-8";
  if (index >= total - 2) return "right-8";
  return "left-1/2 -translate-x-1/2";
};

/* ═══════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════ */

const TrustStrip = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeout = { current: null };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setActiveCard(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleHoverEnter = useCallback(
    (index) => {
      if (isMobile) return;
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = setTimeout(() => setActiveCard(index), 120);
    },
    [isMobile],
  );

  const handleHoverLeave = useCallback(() => {
    if (isMobile) return;
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setActiveCard(null), 200);
  }, [isMobile]);

  const handleClick = useCallback(
    (index) => {
      if (!isMobile) return;
      setActiveCard((prev) => (prev === index ? null : index));
    },
    [isMobile],
  );

  return (
    <section className="relative py-12 sm:py-16 border-y border-primary/[0.08]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.p
            className="text-center text-txt-3 text-sm tracking-widest uppercase mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: ease.out }}
          >
            Lo que construimos
          </motion.p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 overflow-visible"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06, delayChildren: 0.1 },
              },
            }}
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={item.label}
                className="relative"
                style={{ zIndex: activeCard === index ? 50 : 1 }}
                variants={{
                  hidden: { opacity: 0, y: 16, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: ease.out },
                  },
                }}
              >
                <motion.div
                  className={`group relative flex flex-col items-center justify-center text-center h-[120px] sm:h-[130px] p-4 rounded-xl border ${item.border} ${item.bg} hover:shadow-lg transition-all duration-500 cursor-pointer select-none`}
                  onMouseEnter={() => handleHoverEnter(index)}
                  onMouseLeave={handleHoverLeave}
                  onClick={() => handleClick(index)}
                  whileHover={
                    !isMobile
                      ? { y: -3, transition: { duration: 0.25, ease: ease.smooth } }
                      : {}
                  }
                  whileTap={isMobile ? { scale: 0.97 } : {}}
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-2.5 shadow-sm`}
                    >
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-[13px] font-medium text-txt leading-tight mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-txt-3">
                      {item.mini}
                    </p>
                  </div>

                  <motion.div
                    className="lg:hidden absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary/8 flex items-center justify-center"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-2.5 h-2.5 text-txt-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </motion.div>
                </motion.div>

                {/* Desktop Popup */}
                <AnimatePresence>
                  {activeCard === index && !isMobile && (
                    <motion.div
                      className={`hidden lg:block absolute bottom-full mb-3 w-80 ${getPopupAlign(index, capabilities.length)}`}
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: ease.out }}
                      onMouseEnter={() => clearTimeout(hoverTimeout.current)}
                      onMouseLeave={handleHoverLeave}
                    >
                      <div className="rounded-xl bg-surface-alt border border-primary/[0.12] shadow-2xl shadow-primary/10 overflow-hidden backdrop-blur-sm">
                        <div className="h-44 bg-surface/50 border-b border-primary/8 relative overflow-hidden">
                          <item.illustration />
                        </div>
                        <div className="p-3.5">
                          <p className="text-sm font-semibold text-txt mb-1">{item.label}</p>
                          <p className="text-xs text-txt-2 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      <div className={`absolute -bottom-1.5 w-3 h-3 rotate-45 bg-surface-alt border-r border-b border-primary/[0.12] ${getArrowAlign(index, capabilities.length)}`} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="lg:hidden text-center text-txt-4 text-[11px] mt-4 tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Toca una tarjeta para explorar
          </motion.p>
        </div>
      </div>

      {/* Mobile Modal */}
      <AnimatePresence>
        {activeCard !== null && isMobile && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setActiveCard(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative w-full max-w-sm rounded-2xl bg-surface-alt border border-primary/[0.12] shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: ease.out }}
            >
              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <X className="w-3.5 h-3.5 text-txt-2" />
              </button>
              <div className="h-52 bg-surface/50 border-b border-primary/8 relative overflow-hidden">
                {(() => {
                  const Illust = capabilities[activeCard].illustration;
                  return <Illust />;
                })()}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${capabilities[activeCard].color} flex items-center justify-center shadow-sm shrink-0`}>
                    {(() => {
                      const Icon = capabilities[activeCard].icon;
                      return <Icon className="w-4 h-4 text-white" />;
                    })()}
                  </div>
                  <p className="text-base font-semibold text-txt">{capabilities[activeCard].label}</p>
                </div>
                <p className="text-sm text-txt-2 leading-relaxed">{capabilities[activeCard].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TrustStrip;
