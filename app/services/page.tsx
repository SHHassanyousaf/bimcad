"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimatedSection } from "@/components/AnimatedSection"

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0)

  const services = [
    {
      title: "Infrastructure Projects",
      description:
        "We provide comprehensive CAD and BIM solutions for complex infrastructure projects, ensuring coordination and accuracy across all disciplines.",
      details: [
        "Master planning and feasibility studies",
        "Detailed design and documentation",
        "BIM coordination and clash detection",
        "3D visualization and walkthroughs",
      ],
    },
    {
      title: "Roads and Highways",
      description:
        "Specializing in geometric design, drainage design, and utility coordination for major road and highway projects.",
      details: [
        "Geometric design and alignment",
        "Pavement design",
        "Drainage and stormwater management",
        "Traffic signal design and coordination",
        "Utility location and coordination",
        "Construction documentation",
      ],
    },
    {
      title: "Transportation and Traffic Engineering",
      description:
        "Expert solutions for transportation planning, traffic management, and public transit infrastructure.",
      details: [
        "Transportation planning and modeling",
        "Traffic engineering and analysis",
        "Intersection design",
        "Traffic signal timing and coordination",
        "Public transit design",
        "Parking facility design",
      ],
    },
    {
      title: "Facilities and Site Development",
      description: "Comprehensive services for facility planning, site development, and master planning projects.",
      details: [
        "Site development and planning",
        "Landscape design coordination",
        "Building site layout",
        "Utility coordination",
        "Grading and drainage design",
        "Cost estimation and quantity takeoffs",
      ],
    },
    {
      title: "CAD and BIM Support Services",
      description:
        "Full suite of digital design and modeling services using industry-leading software and technologies.",
      details: [
        "AutoCAD drafting and design",
        "Civil 3D modeling",
        "Revit architectural and MEP modeling",
        "Navisworks coordination and simulation",
        "InfraWorks infrastructure modeling",
        "Custom scripts and automation",
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-[#d9d9d9]">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 bg-[#f7f7f7]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">Services We Offer</h1>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Vertices Engineering Partners (VEP) offers a comprehensive suite of design and engineering services tailored to
              meet the unique needs of each project.
            </p>
          </div>
        </section>

        {/* Services Accordion */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full px-6 py-4 bg-[#d9d9d9] hover:bg-[#c4c4c4] transition flex justify-between items-center text-left"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-[#222222]">{service.title}</h3>
                      <p className="text-[#666666] text-sm mt-1">{service.description}</p>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp className="shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="shrink-0 ml-4" />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="px-6 py-4 border-t border-gray-200 bg-card">
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#666666]">
                            <span className="text-[#222222] font-bold mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
