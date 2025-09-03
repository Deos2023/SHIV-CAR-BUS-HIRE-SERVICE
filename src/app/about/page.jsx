'use client'

import { motion } from 'framer-motion'
import { FaCar, FaBus, FaUsers, FaStar, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('./img1.png')" }}
        ></div>
        
        <div className="z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            About Shiv Car & Bus Hire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Delivering luxury, comfort, and reliability in every ride across Kolkata and beyond.
          </motion.p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Established in Kolkata, Shiv Car & Bus Hire has been a trusted provider of premium transportation solutions for over a decade. We specialize in luxury car rentals and spacious bus hire for weddings, corporate events, and special occasions.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to excellence ensures that every journey is comfortable, stylish, and on time. With a diverse fleet ranging from luxury sedans to Winger Travelers, we serve individuals, families, and corporate clients with equal dedication.
            </p>
            <div className="flex items-center text-amber-600 font-medium">
              <FaMapMarkerAlt className="mr-2" />
              <span>Kolkata, West Bengal</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <FaCar className="text-3xl text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Luxury Cars</h3>
              <p className="text-gray-600 text-sm">Elegance and comfort for all occasions.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <FaBus className="text-3xl text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Bus Hire</h3>
              <p className="text-gray-600 text-sm">Spacious buses for groups and tours.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <FaUsers className="text-3xl text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Wedding Services</h3>
              <p className="text-gray-600 text-sm">Special vehicles for special moments.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <FaStar className="text-3xl text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Event Travel</h3>
              <p className="text-gray-600 text-sm">Premium rides for all big occasions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            Our Mission & Vision
          </motion.h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-8">
            We aim to redefine premium transportation by combining luxury vehicles, professional drivers, and unmatched customer service. Our vision is to become the most trusted travel partner for individuals and businesses across West Bengal and India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaShieldAlt className="text-3xl text-amber-600 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                To provide safe, reliable, and luxurious travel solutions that create memorable journeys for every client.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaStar className="text-3xl text-amber-600 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm">
                To set the benchmark for premium transportation services in India through innovation, quality, and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            Our Core Values
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Every ride we offer is guided by our commitment to excellence, safety, and customer satisfaction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <FaShieldAlt className="text-3xl text-amber-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Safety First</h3>
              <p className="text-gray-600 text-sm">Ensuring your journey is secure and reliable.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <FaUsers className="text-3xl text-amber-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Customer Care</h3>
              <p className="text-gray-600 text-sm">Putting customer needs at the center of what we do.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <FaStar className="text-3xl text-amber-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Delivering premium experiences, every time.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
