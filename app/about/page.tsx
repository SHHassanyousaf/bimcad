"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { AnimatedSection } from "@/components/AnimatedSection"

export default function About() {
  const coreValues = [
    {
      title: "Quality",
      description:
        "We maintain the highest standards of excellence in all our deliverables, ensuring precision and accuracy in every project we undertake.",
    },
    {
      title: "Integrity",
      description:
        "Honesty and transparency are the foundation of our relationships with clients, partners, and team members.",
    },
    {
      title: "Innovation",
      description:
        "We continuously invest in cutting-edge technologies and methodologies to provide forward-thinking solutions.",
    },
    {
      title: "Commitment",
      description:
        "Our dedicated team is fully committed to the success of each project and the satisfaction of our clients.",
    },
    {
      title: "Value",
      description:
        "We deliver cost-effective solutions without compromising on quality, ensuring optimal return on investment.",
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-[#d9d9d9]">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.4%20Infrastructure%20Projects-O7xwP2WKO7SYJHDARcXhs77Uhlr9dE.jpg"
            alt="About VEP"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex flex-col justify-center items-center text-center px-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About VEP</h1>
          </div>
        </section>

        {/* Company Introduction */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
            <div className="prose prose-lg max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#222222] mb-6">Who We Are</h2>
              <p className="text-[#666666] leading-relaxed mb-6">
                Vertices Engineering Partners (VEP) is a multidisciplinary design and engineering service provider, established in
                2019. With offices in Dubai, Pakistan, and USA, we specialize in high-quality CAD drafting and Building
                Information Modeling (BIM) solutions for infrastructure projects globally.
              </p>
              <p className="text-[#666666] leading-relaxed">
                Our team comprises experienced professionals with expertise in infrastructure projects, roads and
                highways, transportation and traffic engineering, facilities and site development, and comprehensive CAD
                and BIM support services. We are committed to delivering innovative, accurate, and cost-effective
                engineering solutions from concept to construction.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Mission & Vision */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-6">Our Mission</h2>
                <p className="text-[#666666] leading-relaxed">
                  To provide innovative, accurate, and cost-effective CAD and BIM engineering solutions that enable our
                  clients to achieve their project objectives efficiently and effectively. We strive to exceed
                  expectations through technical excellence, professional service, and collaborative partnerships.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-6">Our Vision</h2>
                <p className="text-[#666666] leading-relaxed">
                  To be a trusted global partner in digital design and engineering services, recognized for our commitment
                  to innovation, quality, and client satisfaction. We aim to shape the future of infrastructure through
                  advanced technology and expert talent.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Core Values */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#222222] text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-[#f7f7f7] p-8 rounded">
                  <h3 className="text-xl font-bold text-[#222222] mb-4">{value.title}</h3>
                  <p className="text-[#666666]">{value.description}</p>
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
