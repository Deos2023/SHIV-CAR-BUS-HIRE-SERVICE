'use client'

import { motion } from 'framer-motion'
import { FaCar, FaBus, FaRing, FaBriefcase, FaPlaneDeparture, FaMapMarkedAlt, FaStar, FaUsers } from 'react-icons/fa'

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}
        ></div>

        <div className="z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Our Premium Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            From luxury cars to spacious buses, we provide travel solutions for every occasion.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Explore Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Luxury Cars */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaCar className="text-4xl text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Luxury Car Hire</h3>
              <p className="text-gray-600 text-sm">
                Premium cars for weddings, VIP guests, and special events. Experience elegance and comfort with our chauffeur-driven luxury fleet.
              </p>
            </motion.div>

            {/* Bus Hire */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaBus className="text-4xl text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bus & Traveller Hire</h3>
              <p className="text-gray-600 text-sm">
                Spacious and comfortable buses, mini-buses, and Winger Travellers for family trips, corporate tours, and group travel.
              </p>
            </motion.div>

            {/* Wedding Cars */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaRing className="text-4xl text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wedding Cars</h3>
              <p className="text-gray-600 text-sm">
                Make your big day special with beautifully decorated luxury wedding cars, tailored to your preferences.
              </p>
            </motion.div>

            {/* Corporate Travel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaBriefcase className="text-4xl text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Corporate Travel</h3>
              <p className="text-gray-600 text-sm">
                Reliable cars and buses for corporate meetings, events, and conferences, ensuring punctuality and professionalism.
              </p>
            </motion.div>

            {/* Airport Transfers */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaPlaneDeparture className="text-4xl text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Airport Transfers</h3>
              <p className="text-gray-600 text-sm">
                Hassle-free pickups and drop-offs at the airport with professional drivers and luxury cars for a smooth journey.
              </p>
            </motion.div>

            {/* Outstation Trips */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaMapMarkedAlt className="text-4xl text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Outstation Trips</h3>
              <p className="text-gray-600 text-sm">
                Safe and comfortable travel across cities for leisure, business, and tours with our expert drivers and quality vehicles.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            Why Choose Shiv Car & Bus Hire?
          </motion.h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            We combine comfort, style, and reliability with an extensive fleet and professional service to make every ride memorable.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 transition"
          >
            Book Your Ride Now
          </a>
        </div>
      </section>

    </div>
  )
}
