"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { AnimatedSection } from "@/components/AnimatedSection"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Cycle Track Project",
      image: "/images/1.4 Cycle Track Project.jpeg",
      categories: ["All", "Cycle Track", "Transportation"],
    },
    {
      id: 2,
      title: "Infrastructure Projects",
      image: "/images/3.1 Infrastructure Projects.jpg",
      categories: ["All", "Infrastructure", "Roads"],
    },
    {
      id: 3,
      title: "TIS Projects",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.1%20TIS%20Projects-I0eCBSAik05MvMU5HBOTRW0Cc8mP0n.jpg",
      categories: ["All", "TIS", "Infrastructure"],
    },
    {
      id: 4,
      title: "Pre-Cast Projects",
      image: "/images/6.2 Pre-Cast Projects.jpg",
      categories: ["All", "Pre-Cast", "Construction"],
    },
    {
      id: 6,
      title: "Housing Projects",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.1%20Housing%20Projects-Mx1k1bsK3gVA8JX8vCSKv62oMbvR03.jpg",
      categories: ["All", "Housing", "Facility Design"],
    },
    {
      id: 7,
      title: "Landscape Projects",
      image: "/images/5.4 Landscape Projects.avif",
      categories: ["All", "Landscape", "Highway"],
    },
    {
      id: 8,
      title: "Roads & Highways",
      image: "/images/2.2 Roads Highways Projects.avif",
      categories: ["All", "Highway", "Roads"],
    },
  ]

  const categories = [
    "All",
    "Cycle Track",
    "Roads",
    "Infrastructure",
    "Highway",
    "TIS",
    "Landscape",
    "Pre-Cast",
    "Housing",
    "Construction",
    "Facility Design",
    "Transportation",
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.categories.includes(selectedCategory))

  return (
    <>
      <Header />
      <main className="bg-[#d9d9d9]">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 bg-[#f7f7f7]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">Our Completed Projects</h1>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Explore our portfolio of completed projects across Dubai, Doha, and Pakistan
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <AnimatedSection>
          <section className="py-12 px-6 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded font-medium transition ${
                    selectedCategory === category
                      ? "bg-[#222222] text-white"
                      : "bg-[#d9d9d9] text-[#222222] hover:bg-[#c4c4c4]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Projects Gallery */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer overflow-hidden rounded shadow-md hover:shadow-lg transition"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 bg-card">
                    <h3 className="text-lg font-semibold text-[#222222] mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.categories.slice(0, 2).map((cat, index) => (
                        <span key={index} className="text-xs px-3 py-1 bg-[#f7f7f7] text-[#666666] rounded-full">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Project Locations */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 bg-[#d9d9d9]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-[#222222] text-center mb-12">Project Locations</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card p-8 rounded shadow-sm text-center">
                  <h3 className="text-xl font-bold text-[#222222] mb-3">Dubai, UAE</h3>
                  <p className="text-[#666666]">
                    Numerous infrastructure, residential, and commercial projects across the Emirates
                  </p>
                </div>
                <div className="bg-card p-8 rounded shadow-sm text-center">
                  <h3 className="text-xl font-bold text-[#222222] mb-3">Doha, Qatar</h3>
                  <p className="text-[#666666]">Major transportation and infrastructure development projects</p>
                </div>
                <div className="bg-card p-8 rounded shadow-sm text-center">
                  <h3 className="text-xl font-bold text-[#222222] mb-3">Pakistan</h3>
                  <p className="text-[#666666]">Bridges, roads, and infrastructure projects nationwide</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
