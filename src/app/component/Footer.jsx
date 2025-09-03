import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">SHIV CAR & BUS HIRE</h3>
              <p className="text-gray-400 text-sm md:text-base">Premium transportation services in Kolkata and beyond for all your needs.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition text-sm md:text-base">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition text-sm md:text-base">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition text-sm md:text-base">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition text-sm md:text-base">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition text-sm md:text-base">Car Rental</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition text-sm md:text-base">Bus Rental</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition text-sm md:text-base">Wedding Services</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition text-sm md:text-base">Special Occasions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400 text-sm md:text-base">
                  <FaMapMarkerAlt className="mr-2 text-amber-400" />
                  <span>Kolkata, West Bengal</span>
                </li>
                <li className="flex items-center text-gray-400 text-sm md:text-base">
                  <FaPhone className="mr-2 text-amber-400" />
                  <a href="tel:9804351651">9804351651</a>
                </li>
                <li className="flex items-center text-gray-400 text-sm md:text-base">
                  <FaEnvelope className="mr-2 text-amber-400" />
                  <a href="mailto:pritam8890@gmail.com">pritam8890@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; {new Date().getFullYear()} SHIV CAR & BUS HIRE SERVICE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
