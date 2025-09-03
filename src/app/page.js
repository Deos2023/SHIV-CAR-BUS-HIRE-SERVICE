'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaShieldAlt, FaStar, FaUsers, FaCar, FaBus } from 'react-icons/fa'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const service = formData.get('service')
    const message = formData.get('message')
    
    const whatsappMessage = `Hello, I am ${name}. I am interested in ${service} service. ${message}. Please contact me at ${phone}.`
    const whatsappUrl = `https://wa.me/919804351651?text=${encodeURIComponent(whatsappMessage)}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 text-neutral-700 overflow-x-hidden">
      

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
       <div 
  className="absolute inset-0 z-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/hero1.png')" }}
></div>

        
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 px-2"
          >
            Premium Car & Bus Hire Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto px-4"
          >
            Luxury transportation for weddings, occasions and corporate events in Kolkata and beyond
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 px-4"
          >
            <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-base md:text-lg font-medium transition">
              Book Now
            </a>
            <a href="#services" className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-base md:text-lg font-medium transition">
              Our Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">About Shiv Car & Bus Hire</h2>
              <p className="text-gray-600 mb-4">
                Based in Kolkata, Shiv Car & Bus Hire Service has been providing premium transportation solutions for over a decade. We specialize in luxury car rentals and bus hire services for weddings, corporate events, and special occasions.
              </p>
              <p className="text-gray-600 mb-6">
                Our fleet includes well-maintained vehicles ranging from luxury cars to spacious buses like the Winger Traveler, ensuring comfort and style for all your transportation needs.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-amber-600">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Kolkata, West Bengal</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                  <FaCar className="text-3xl md:text-4xl text-amber-600 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Luxury Cars</h3>
                  <p className="text-gray-600 text-sm md:text-base">Premium cars for all occasions</p>
                </div>
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                  <FaBus className="text-3xl md:text-4xl text-amber-600 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Bus Rental</h3>
                  <p className="text-gray-600 text-sm md:text-base">Spacious buses for group travel</p>
                </div>
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                  <FaUsers className="text-3xl md:text-4xl text-amber-600 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Wedding Services</h3>
                  <p className="text-gray-600 text-sm md:text-base">Special arrangements for weddings</p>
                </div>
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                  <FaStar className="text-3xl md:text-4xl text-amber-600 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Special Occasions</h3>
                  <p className="text-gray-600 text-sm md:text-base">Transport for all big events</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">Experience the difference with our premium service and attention to detail</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full mb-4 md:mb-6">
                <FaShieldAlt className="text-xl md:text-2xl text-amber-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Safe & Reliable</h3>
              <p className="text-gray-600 text-sm md:text-base">Our well-maintained vehicles and experienced drivers ensure your safety and punctuality for all your journeys.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full mb-4 md:mb-6">
                <FaStar className="text-xl md:text-2xl text-amber-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Premium Service</h3>
              <p className="text-gray-600 text-sm md:text-base">We provide luxury transportation with attention to detail, ensuring a comfortable and memorable experience.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full mb-4 md:mb-6">
                <FaUsers className="text-xl md:text-2xl text-amber-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600 text-sm md:text-base">Our customer support team is available round the clock to assist you with all your transportation needs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">Comprehensive transportation solutions for all your needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="h-56 md:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549399542-7e82138d0d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Car Rental" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Car Rental</h3>
                <p className="mb-4 text-sm md:text-base">Luxury cars for all occasions with professional drivers</p>
                <a href="#contact" className="inline-flex items-center text-amber-400 font-medium text-sm md:text-base">
                  <span>Book Now</span>
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="h-56 md:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565898835704-3d6be4a2c98b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Bus Rental" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Bus Rental</h3>
                <p className="mb-4 text-sm md:text-base">Spacious buses for group travel and events</p>
                <a href="#contact" className="inline-flex items-center text-amber-400 font-medium text-sm md:text-base">
                  <span>Book Now</span>
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="h-56 md:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Wedding Services" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Wedding Services</h3>
                <p className="mb-4 text-sm md:text-base">Special transportation arrangements for weddings</p>
                <a href="#contact" className="inline-flex items-center text-amber-400 font-medium text-sm md:text-base">
                  <span>Book Now</span>
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">Get in touch with us for bookings and inquiries</p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="mb-4 md:mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4 md:mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4 md:mb-6">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service"
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="Car Rental">Car Rental</option>
                    <option value="Bus Rental">Bus Rental</option>
                    <option value="Wedding Service">Wedding Service</option>
                    <option value="Special Occasion">Special Occasion</option>
                  </select>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center">
                  <FaWhatsapp className="mr-2" />
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-xl md:text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-full mr-3 md:mr-4">
                      <FaMapMarkerAlt className="text-lg md:text-xl text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-medium mb-1">Address</h4>
                      <p className="text-gray-600 text-sm md:text-base">95, Vivekananda Park, Ajoy Nagar, Mukundapur, Kolkata, West Bengal 700099</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-full mr-3 md:mr-4">
                      <FaPhone className="text-lg md:text-xl text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-medium mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        <a href="tel:9804351651" className="hover:text-amber-600 transition">9804351651</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-full mr-3 md:mr-4">
                      <FaEnvelope className="text-lg md:text-xl text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        <a href="mailto:pritam8890@gmail.com" className="hover:text-amber-600 transition">pritam8890@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <h4 className="text-base md:text-lg font-medium mb-2 md:mb-4">Business Hours</h4>
                  <p className="text-gray-600 text-sm md:text-base">Monday - Sunday: 24/7 Available</p>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <a 
                    href="https://wa.me/919804351651?text=Hello, I am interested in your car and bus hire services." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium"
                  >
                    <FaWhatsapp className="mr-2 text-xl" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Our Location</h2>
          <div className="w-full mx-auto rounded-lg shadow-md overflow-hidden" style={{maxWidth:'900px'}}>
            <iframe
              src="https://www.google.com/maps?q=Shiv+Car+%26+Bus+Hire%2C+95%2C+Vivekananda+Park%2C+Ajoy+Nagar%2C+Mukundapur%2C+Kolkata%2C+West+Bengal+700099&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shiv Car & Bus Hire Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}