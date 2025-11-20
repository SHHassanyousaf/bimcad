"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { AnimatedSection } from "@/components/AnimatedSection"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setSubmitted(true)
      setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError("Error sending message. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="bg-[#d9d9d9]">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 bg-[#f7f7f7]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">Contact Us</h1>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Get in touch with our team. We're here to help with your next project.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold text-[#222222] mb-8">Send us a Message</h2>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded animate-in fade-in duration-300">
                    Thank you! We've received your message and will get back to you soon.
                  </div>
                )}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded animate-in fade-in duration-300">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#222222] font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#222222]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#222222] font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#222222]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#222222] font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#222222]"
                      placeholder="+971 56 572 1504"
                    />
                  </div>
                  <div>
                    <label className="block text-[#222222] font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#222222]"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-[#222222] font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#222222] resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-8">Our Locations</h2>

                <div className="space-y-8">
                  {/* Dubai Office */}
                  <div className="bg-[#f7f7f7] p-8 rounded">
                    <h3 className="text-lg font-bold text-[#222222] mb-4">Dubai Office</h3>
                    <p className="text-[#666666] mb-2">1504 – 15th Floor – B Block</p>
                    <p className="text-[#666666] mb-4">Al Qadesia Tower, Dubai, UAE</p>
                    <p className="font-semibold text-[#222222]">Mobile: 00971 56 572.1504</p>
                  </div>

                  {/* USA Office */}
                  <div className="bg-[#f7f7f7] p-8 rounded">
                    <h3 className="text-lg font-bold text-[#222222] mb-4">USA Office</h3>
                    <p className="text-[#666666] mb-2">433336 Chokeberry Square</p>
                    <p className="text-[#666666] mb-4">Ashburn, Virginia 20146, USA</p>
                    <p className="font-semibold text-[#222222]">Phone: +1 571 334 9416</p>
                  </div>

                  {/* Pakistan Office */}
                  <div className="bg-[#f7f7f7] p-8 rounded">
                    <h3 className="text-lg font-bold text-[#222222] mb-4">Pakistan Office</h3>
                    <p className="text-[#666666] mb-2">18 – UG – Samama Mall & Residency</p>
                    <p className="text-[#666666] mb-4">Gulberg, Islamabad, Pakistan</p>
                    <p className="font-semibold text-[#222222]">Phone: +92 341 1527077</p>
                  </div>
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
