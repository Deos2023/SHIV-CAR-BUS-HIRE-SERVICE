"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageList = [
  "IMG-20250903-WA0032.jpg","IMG-20250903-WA0033.jpg","IMG-20250903-WA0034.jpg","IMG-20250903-WA0035.jpg","IMG-20250903-WA0036.jpg","IMG-20250903-WA0037.jpg","IMG-20250903-WA0038.jpg","IMG-20250903-WA0039.jpg","IMG-20250903-WA0040.jpg","IMG-20250903-WA0041.jpg","IMG-20250903-WA0042.jpg","IMG-20250903-WA0043.jpg","IMG-20250903-WA0044.jpg","IMG-20250903-WA0045.jpg","IMG-20250903-WA0046.jpg","IMG-20250903-WA0047.jpg","IMG-20250903-WA0048.jpg","IMG-20250903-WA0049.jpg","IMG-20250903-WA0050.jpg","IMG-20250903-WA0051.jpg","IMG-20250903-WA0052.jpg","IMG-20250903-WA0053.jpg","IMG-20250903-WA0054.jpg","IMG-20250903-WA0055.jpg","IMG-20250903-WA0056.jpg","IMG-20250903-WA0057.jpg","IMG-20250903-WA0058.jpg","IMG-20250903-WA0059.jpg","IMG-20250903-WA0060.jpg","IMG-20250903-WA0061.jpg","IMG-20250903-WA0062.jpg","IMG-20250903-WA0063.jpg","IMG-20250903-WA0064.jpg","IMG-20250903-WA0065.jpg","IMG-20250903-WA0066.jpg","IMG-20250903-WA0067.jpg","IMG-20250903-WA0068.jpg","IMG-20250903-WA0069.jpg","IMG-20250903-WA0070.jpg","IMG-20250903-WA0071.jpg","IMG-20250903-WA0072.jpg","IMG-20250903-WA0073.jpg","IMG-20250903-WA0074.jpg","IMG-20250903-WA0075.jpg","IMG-20250903-WA0076.jpg","IMG-20250903-WA0077.jpg","IMG-20250903-WA0078.jpg","IMG-20250903-WA0079.jpg","IMG-20250903-WA0080.jpg","IMG-20250903-WA0081.jpg","IMG-20250903-WA0082.jpg","IMG-20250903-WA0083.jpg","IMG-20250903-WA0084.jpg","IMG-20250903-WA0085.jpg","IMG-20250903-WA0086.jpg","IMG-20250903-WA0087.jpg","IMG-20250903-WA0088.jpg","IMG-20250903-WA0089.jpg","IMG-20250903-WA0090.jpg","IMG-20250903-WA0091.jpg","IMG-20250903-WA0092.jpg","IMG-20250903-WA0093.jpg","IMG-20250903-WA0094.jpg","IMG-20250903-WA0095.jpg","IMG-20250903-WA0096.jpg","IMG-20250903-WA0097.jpg","IMG-20250903-WA0098.jpg","IMG-20250903-WA0099.jpg","IMG-20250903-WA0100.jpg","IMG-20250903-WA0101.jpg","IMG-20250903-WA0102.jpg","IMG-20250903-WA0103.jpg","IMG-20250903-WA0104.jpg","IMG-20250903-WA0105.jpg","IMG-20250903-WA0106.jpg","IMG-20250903-WA0107.jpg","IMG-20250903-WA0108.jpg","IMG-20250903-WA0109.jpg","IMG-20250903-WA0110.jpg","IMG-20250903-WA0111.jpg","IMG-20250903-WA0112.jpg","IMG-20250903-WA0113.jpg","IMG-20250903-WA0114.jpg","IMG-20250903-WA0115.jpg","IMG-20250903-WA0116.jpg","IMG-20250903-WA0117.jpg","IMG-20250903-WA0118.jpg","IMG-20250903-WA0119.jpg","IMG-20250903-WA0120.jpg","IMG-20250903-WA0121.jpg","IMG-20250903-WA0122.jpg","IMG-20250903-WA0123.jpg"
];

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 py-12 px-4">
       <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}
        ></div>

        <div className="z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Get in touch with Shiv Car & Bus Hire today. We’re here to assist you with all your travel needs.
          </motion.p>
        </div>
      </section>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-10 text-amber-700 drop-shadow-xl"
      >
        Gallery</motion.h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-auto max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
      >
        {imageList.map((img, idx) => (
          <motion.div
            key={img}
            className="rounded-xl overflow-hidden bg-white/70 shadow-2xl hover:scale-105 hover:z-10 cursor-pointer transition-transform duration-200 relative group"
            whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(255,193,7,0.17)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={`/img/${img}`}
              alt={`Gallery image ${idx + 1}`}
              className="h-36 sm:h-48 md:h-52 w-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              draggable="false"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-amber-700/10 pointer-events-none group-hover:pointer-events-auto group-hover:bg-amber-700/25 transition duration-200"
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={`/img/${selectedImg}`}
              alt="Enlarged"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-[96vw] max-h-[90vh] rounded-2xl shadow-2xl border-8 border-white/10"
            />
            <motion.button
              initial={{ opacity: 0, y: -36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -36 }}
              transition={{ delay: 0.2, duration: 0.26 }}
              className="absolute top-5 right-5 bg-white/80 hover:bg-white text-amber-700 font-bold rounded-full px-6 py-3 shadow-lg text-xl md:text-2xl"
              onClick={e => { e.stopPropagation(); setSelectedImg(null); }}
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
