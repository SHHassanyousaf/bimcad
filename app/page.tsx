"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedSection } from "@/components/AnimatedSection"
import HeroParticles from "@/components/HeroParticles"
import ClientScroller from "@/components/ClientScroller"
import { Card, CardContent } from "@/components/ui/card"
import "@/styles/scroller.css"

// Enable scroll parallax on mount (if you have the hook)
import AnimatedHeroText from "@/components/AnimatedHeroText"
import { useScrollParallax } from "@/hooks/useScrollParallax"
function ScrollParallaxLoader() {
  useScrollParallax?.()
  return null
}

export default function Home() {
  const heroImages = [
    "/images/5.4 Landscape Projects.avif",
    "/images/6.2 Pre-Cast Projects.jpg",
    "/images/3.1 Infrastructure Projects.jpg",
    "/images/1.4 Cycle Track Project.jpeg",
    "/images/2.2 Roads Highways Projects.avif",
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-rotate images every 5 seconds (pauses on interaction)
  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [paused, heroImages.length])

  const services = [
    { title: "Infrastructure Projects", icon: "🏗️" },
    { title: "Roads & Highways", icon: "🛣️" },
    { title: "Transportation", icon: "🚗" },
    { title: "Facilities", icon: "🏢" },
    { title: "BIM Support", icon: "📐" },
  ]

  const coreValues = [
    { title: "Quality", desc: "Excellence in every project" },
    { title: "Integrity", desc: "Honest and transparent practices" },
    { title: "Innovation", desc: "Cutting-edge solutions" },
    { title: "Commitment", desc: "Dedicated to success" },
    { title: "Value", desc: "Cost-effective delivery" },
  ]

  const clients = [
    { name: "Al Turath Engineering Consultants", logo: "/Clients/Al Turath.png" },
    { name: "CDM Smith Inc.", logo: "/Clients/CMD smith.png" },
    { name: "Finite Engineering Consultants", logo: "/Clients/Finite Engineering.png" },
    { name: "Khatib & Al Alami", logo: "/Clients/Khatib Al Alami.png" },
    { name: "VNC Engineering Consultants", logo: "/Clients/VNC Engineering Consultants.jpg" },
  ]

  const featuredProjects = [
    { image: "/images/5.4 Landscape Projects.avif", title: "Landscape Projects" },
    { image: "/images/6.2 Pre-Cast Projects.jpg", title: "Pre-Cast Projects" },
    { image: "/images/3.1 Infrastructure Projects.jpg", title: "Infrastructure Projects" },
    { image: "/images/1.4 Cycle Track Project.jpeg", title: "Cycle Track Project" },
    { image: "/images/2.2 Roads Highways Projects.avif", title: "Roads & Highways Projects" },
  ]

  return (
    <>
      <Header />
      <ScrollParallaxLoader />
      <HeroParticles />
      <main className="bg-[#d9d9d9]">
        {/* Hero Section */}
        <section
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative h-[500px] md:h-[600px] overflow-hidden"
        >
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                quality={index === 0 ? 90 : 75}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}

          {/* Hero Content */}
          <div className="relative h-full flex flex-col justify-center items-center text-center px-6 py-24 md:py-32 z-10">
            <AnimatedHeroText />

            <div className="mt-8">
              <a href="/services" className="btn-primary">
                Our Services
              </a>
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-2 rounded text-white transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-2 rounded text-white transition"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </section>

        {/* Services Overview */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {services.map((service, index) => (
                <a href="/projects" key={index}>
                  <div
                    className="service-card bg-[#d9d9d9] p-8 rounded hover:shadow-lg transition-all hover:-translate-y-2 text-center h-full flex flex-col"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationDuration: "700ms",
                    }}
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-[#222222]">{service.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* About Snippet */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 bg-[#d9d9d9]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">About Vertices Engineering Partners</h2>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Vertices Engineering Partners (VEP) is a multidisciplinary design and engineering service provider, established
                  in 2019. We specialize in high-quality CAD drafting and Building Information Modeling (BIM) solutions
                  for infrastructure projects.
                </p>
                <a href="/about" className="btn-primary inline-block hover:scale-105 transition-transform duration-300">
                  Learn More About Us
                </a>
              </div>
              <div className="aspect-video bg-[#c4c4c4] rounded overflow-hidden mx-auto md:mx-0">
                <Image
                  src="/images/3.1 Infrastructure Projects.jpg"
                  alt="About Vertices Engineering Partners"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Featured Projects */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/projects" className="btn-secondary hover:scale-105 transition-transform duration-300">
                View All Projects
              </a>
            </div>
          </section>
        </AnimatedSection>

        {/* Core Values */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 bg-[#d9d9d9]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">Our Core Values</h2>
              <div className="grid md:grid-cols-5 gap-6">
                {coreValues.map((value, index) => (
                  <ValueCard key={index} value={value} index={index} />
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Clients Carousel */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">Our Valued Clients</h2>
            <ClientScroller speed="slow">
              {clients.map((client, index) => (
                <Card key={index} className="w-[250px] shrink-0">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="flex justify-center items-center h-[100px] w-full mb-4">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={150}
                        height={75}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                    <p className="text-sm font-medium text-center">{client.name}</p>
                  </CardContent>
                </Card>
              ))}
            </ClientScroller>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 bg-[#222222]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Trusted Global Partner in Digital Design
              </h2>
              <a
                href="/contact"
                className="px-8 py-3 bg-card text-foreground font-semibold rounded hover:shadow-lg transition inline-block"
              >
                Contact Us Today
              </a>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}

// Small helper components placed at bottom to avoid extra imports
function ProjectCardImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  return (
    <div className="relative h-64 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-110 transition-transform duration-500"
        priority={index === 0}
        loading={index === 0 ? "eager" : "lazy"}
        quality={index === 0 ? 85 : 72}
        style={{ willChange: "transform" }}
      />
    </div>
  )
}

function ProjectCard({ project, index }: { project: { image: string; title: string }; index: number }) {
  return (
    <div
      key={index}
      className="group cursor-pointer overflow-hidden rounded"
      style={{ animationDelay: `${index * 150}ms`, animationDuration: "700ms" }}
    >
      <ProjectCardImage src={project.image} alt={project.title} index={index} />
      <div className="p-6 bg-[#d9d9d9] group-hover:bg-[#c4c4c4] transition-colors duration-300">
        <h3 className="text-lg font-semibold text-[#222222]">{project.title}</h3>
      </div>
    </div>
  )
}

function ValueCard({ value, index }: { value: { title: string; desc: string }; index: number }) {
  return (
    <div className="value-card bg-card p-6 rounded shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all" style={{ animationDelay: `${index * 100}ms`, animationDuration: "700ms" }}>
      <h3 className="text-xl font-bold text-[#222222] mb-2">{value.title}</h3>
      <p className="text-[#666666] text-sm">{value.desc}</p>
    </div>
  )
}
