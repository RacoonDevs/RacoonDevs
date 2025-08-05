"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ExternalLink,
  Play,
  Sparkles,
  Rocket,
  Brain,
  Target,
  Award,
  TrendingUp,
  Palette,
  Layers,
  Eye,
  Heart,
  Coffee,
  Lightbulb,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function RacoonDevsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const portfolioItems = [
    {
      title: "FinTech Revolution",
      category: "Aplicación Financiera",
      description:
        "Plataforma de inversiones con IA que revolucionó el mercado mexicano",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["React", "Node.js", "AI/ML", "Blockchain"],
      metrics: { users: "50K+", growth: "300%", rating: "4.9" },
      color: "from-emerald-400 to-cyan-600",
    },
    {
      title: "EcoSmart Logistics",
      category: "Sistema Empresarial",
      description: "Sistema de gestión logística que redujo costos en 40%",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Next.js", "Python", "IoT", "Analytics"],
      metrics: { efficiency: "40%", savings: "$2M", time: "60%" },
      color: "from-violet-400 to-purple-600",
    },
    {
      title: "MedConnect Pro",
      category: "Aplicación Móvil",
      description:
        "App de telemedicina que conecta pacientes con especialistas",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["React Native", "WebRTC", "Cloud", "Security"],
      metrics: { consultations: "100K+", doctors: "500+", satisfaction: "98%" },
      color: "from-rose-400 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`,
          }}
        ></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <Image
                src="/images/racoon-logo.png"
                alt="Racoon Devs"
                width={48}
                height={48}
                className="rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Racoon Devs
              </span>
              <div className="text-xs text-gray-400 font-mono">
                Digital Architects
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {["Servicios", "Portfolio", "Proceso", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              <Rocket className="w-4 h-4 mr-2" />
              Crear Magia
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="container mx-auto px-6 py-6 space-y-4">
              {["Servicios", "Portfolio", "Proceso", "Contacto"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-8 max-w-6xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 animate-pulse">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">
                Arquitectos Digitales del Futuro
              </span>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient">
                  Creamos
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Experiencias
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Imposibles
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                No desarrollamos software.{" "}
                <span className="text-cyan-400 font-semibold">
                  Esculpimos el futuro digital
                </span>{" "}
                de tu empresa. Cada línea de código es una obra de arte, cada
                interfaz una sinfonía visual.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-4 rounded-full text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 group"
              >
                <Brain className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Transformar Mi Visión
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold group"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Ver Nuestro Arte
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {[
                { number: "150+", label: "Proyectos Épicos", icon: Rocket },
                { number: "98%", label: "Clientes Enamorados", icon: Heart },
                { number: "24/7", label: "Obsesión por Calidad", icon: Coffee },
                { number: "∞", label: "Límites Rotos", icon: Lightbulb },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-xl animate-bounce"></div>
          <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-xl animate-ping"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 border-cyan-500/20 mb-6">
              <Palette className="w-4 h-4 mr-2" />
              Nuestro Arsenal Creativo
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                No hacemos{" "}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                software
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creamos{" "}
              <span className="text-purple-400 font-bold">
                ecosistemas digitales
              </span>{" "}
              que respiran, evolucionan y conquistan mercados
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Software que Piensa",
                description:
                  "IA integrada, arquitecturas que se adaptan, código que evoluciona solo",
                features: [
                  "Machine Learning",
                  "Auto-scaling",
                  "Predictive Analytics",
                ],
                color: "from-cyan-400 to-blue-600",
                delay: "0s",
              },
              {
                icon: Zap,
                title: "Interfaces Hipnóticas",
                description:
                  "Diseños que enamoran, interacciones que adictan, experiencias inolvidables",
                features: [
                  "Motion Design",
                  "Micro-interactions",
                  "Emotional UX",
                ],
                color: "from-purple-400 to-pink-600",
                delay: "0.2s",
              },
              {
                icon: Rocket,
                title: "Ecosistemas Completos",
                description:
                  "Web, móvil, IoT, blockchain - todo conectado en perfecta armonía",
                features: [
                  "Cross-platform",
                  "Real-time Sync",
                  "Infinite Scale",
                ],
                color: "from-pink-400 to-red-600",
                delay: "0.4s",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: service.delay }}
              >
                <CardContent className="p-8 space-y-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}
                        ></div>
                        <span className="text-gray-400 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-cyan-400 hover:text-white hover:bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/40 rounded-xl group/btn"
                  >
                    Explorar Magia
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20 mb-6">
              <Award className="w-4 h-4 mr-2" />
              Obras Maestras Digitales
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Portfolio que{" "}
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Impacta
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada proyecto es una{" "}
              <span className="text-pink-400 font-bold">
                revolución digital
              </span>{" "}
              que redefine industrias completas
            </p>
          </div>

          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-8 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <Badge
                      className={`bg-gradient-to-r ${item.color} bg-opacity-10 text-white border-0`}
                    >
                      {item.category}
                    </Badge>
                    <h3 className="text-4xl lg:text-5xl font-black text-white">
                      {item.title}
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {item.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {Object.entries(item.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div
                          className={`text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        >
                          {value}
                        </div>
                        <div className="text-sm text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      className={`bg-gradient-to-r ${item.color} hover:scale-105 transition-all duration-300 rounded-full`}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Caso de Estudio
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/5 rounded-full bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo Live
                    </Button>
                  </div>
                </div>

                <div
                  className={`relative group ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${item.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 -z-10`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-12 py-4 rounded-full text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
            >
              <Layers className="w-6 h-6 mr-3" />
              Ver Portfolio Completo
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-300 border-emerald-500/20 mb-6">
              <Target className="w-4 h-4 mr-2" />
              Metodología Revolucionaria
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Proceso que{" "}
              </span>
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Fascina
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Inmersión Mental",
                description:
                  "Nos sumergimos en tu visión hasta respirar tu marca",
                icon: Brain,
                color: "from-emerald-400 to-cyan-600",
              },
              {
                step: "02",
                title: "Arquitectura Visionaria",
                description:
                  "Diseñamos la estructura que soportará tu imperio digital",
                icon: Cpu,
                color: "from-cyan-400 to-blue-600",
              },
              {
                step: "03",
                title: "Desarrollo Obsesivo",
                description:
                  "Cada pixel, cada línea de código, perfeccionada al extremo",
                icon: Code2,
                color: "from-blue-400 to-purple-600",
              },
              {
                step: "04",
                title: "Lanzamiento Épico",
                description:
                  "Tu proyecto conquista el mundo digital con impacto total",
                icon: Rocket,
                color: "from-purple-400 to-pink-600",
              },
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 group-hover:scale-105">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-6xl font-black bg-gradient-to-r ${process.color} bg-clip-text text-transparent opacity-30`}
                      >
                        {process.step}
                      </span>
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                      >
                        <process.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {process.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>

                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-300 border-yellow-500/20 mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Inversión en tu Futuro
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Precios que{" "}
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Transforman
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Ignición",
                price: "$5,000",
                description:
                  "Para startups que quieren causar impacto inmediato",
                features: [
                  "Landing page hipnótica",
                  "Diseño que convierte",
                  "SEO que domina",
                  "Analytics avanzados",
                  "Soporte 3 meses",
                ],
                color: "from-cyan-400 to-blue-600",
                popular: false,
              },
              {
                name: "Revolución",
                price: "$15,000",
                description: "Para empresas listas para dominar su mercado",
                features: [
                  "Plataforma web completa",
                  "App móvil nativa",
                  "Dashboard inteligente",
                  "Integraciones ilimitadas",
                  "Soporte 6 meses",
                  "Consultoría estratégica",
                ],
                color: "from-purple-400 to-pink-600",
                popular: true,
              },
              {
                name: "Dominación",
                price: "Personalizado",
                description:
                  "Para visionarios que quieren redefinir industrias",
                features: [
                  "Ecosistema digital completo",
                  "IA y Machine Learning",
                  "Arquitectura enterprise",
                  "Seguridad militar",
                  "Soporte 24/7",
                  "Equipo dedicado",
                ],
                color: "from-orange-400 to-red-600",
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-white/5 backdrop-blur-xl border transition-all duration-500 hover:scale-105 ${
                  plan.popular
                    ? "border-purple-500/50 shadow-2xl shadow-purple-500/20"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2">
                      <Star className="w-4 h-4 mr-2" />
                      Más Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8 space-y-8">
                  <div className="text-center space-y-4">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl`}
                    >
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white">
                      {plan.name}
                    </h3>
                    <div
                      className={`text-5xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                    >
                      {plan.price}
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle
                          className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full p-1`}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} hover:scale-105`
                        : "bg-white/5 border border-white/20 hover:bg-white/10"
                    } transition-all duration-300 rounded-xl py-3`}
                  >
                    {plan.popular ? "Comenzar Revolución" : "Iniciar Proyecto"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-300 border-pink-500/20 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Conectemos Mentes Brillantes
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ¿Listo para{" "}
              </span>
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Crear Historia?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tu próximo proyecto podría ser la{" "}
              <span className="text-purple-400 font-bold">
                revolución digital
              </span>{" "}
              que el mundo estaba esperando
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Directo",
                    value: "hola@racoondevs.com",
                    color: "from-cyan-400 to-blue-600",
                  },
                  {
                    icon: Phone,
                    title: "Línea Directa",
                    value: "+52 (55) 1234-5678",
                    color: "from-purple-400 to-pink-600",
                  },
                  {
                    icon: MapPin,
                    title: "Laboratorio Creativo",
                    value: "CDMX, México",
                    color: "from-pink-400 to-red-600",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-6 group"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {contact.title}
                      </h3>
                      <p className="text-gray-300 text-lg">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  ¿Por qué somos diferentes?
                </h3>
                <div className="space-y-4">
                  {[
                    "Respuesta en menos de 2 horas",
                    "Consulta estratégica gratuita",
                    "Propuesta personalizada en 24h",
                    "Garantía de satisfacción total",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-white">
                    Cuéntanos tu Visión
                  </h3>
                  <p className="text-gray-300">
                    Cada gran proyecto comienza con una conversación épica
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Nombre
                      </label>
                      <Input
                        placeholder="Tu nombre"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-500 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-500 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Empresa
                    </label>
                    <Input
                      placeholder="Nombre de tu empresa"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-500 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Tipo de Revolución
                    </label>
                    <select className="w-full p-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-cyan-500 focus:outline-none">
                      <option value="" className="bg-black">
                        Selecciona tu visión
                      </option>
                      <option value="software" className="bg-black">
                        Software que Cambie el Mundo
                      </option>
                      <option value="web" className="bg-black">
                        Experiencia Web Hipnótica
                      </option>
                      <option value="mobile" className="bg-black">
                        App que Conquiste Mercados
                      </option>
                      <option value="ecosystem" className="bg-black">
                        Ecosistema Digital Completo
                      </option>
                      <option value="other" className="bg-black">
                        Algo Nunca Visto Antes
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Tu Visión
                    </label>
                    <Textarea
                      placeholder="Describe tu proyecto, objetivos, sueños más ambiciosos... No hay límites aquí."
                      rows={4}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-500 rounded-xl resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-4 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 group">
                    <Rocket className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Iniciar la Revolución
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/racoon-logo.png"
                  alt="Racoon Devs"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Racoon Devs
                  </span>
                  <div className="text-xs text-gray-400">
                    Digital Architects
                  </div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Arquitectos digitales obsesionados con crear experiencias que
                trascienden lo ordinario.
              </p>
            </div>

            {[
              {
                title: "Servicios",
                links: [
                  "Software Personalizado",
                  "Experiencias Web",
                  "Apps Móviles",
                  "Ecosistemas Digitales",
                  "Consultoría Estratégica",
                ],
              },
              {
                title: "Empresa",
                links: [
                  "Sobre Nosotros",
                  "Portfolio",
                  "Proceso",
                  "Blog",
                  "Carreras",
                ],
              },
              {
                title: "Conecta",
                links: [
                  "hola@racoondevs.com",
                  "+52 (55) 1234-5678",
                  "CDMX, México",
                  "LinkedIn",
                  "GitHub",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Racoon Devs. Creando el futuro, una
              línea de código a la vez.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Términos", "Privacidad", "Cookies"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
