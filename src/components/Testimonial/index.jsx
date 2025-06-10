import React from "react";

export default function Testimonial() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12 bg-white">
      <p className="text-sm text-orange-500 tracking-widest mb-2">TESTIMONIAL</p>
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">
        Making Food great again and again
      </h1>
      <p className="text-gray-600 max-w-2xl mb-10">
        You need not only Just Food Stalls with Persons but also specialized
        equipment, Skills to manage Customers, Effective Product catlogues etc to
        make your.
      </p>

      <img
        src="/mnt/data/bd0549a6-06fd-44dc-a785-627802d89cf1.png"
        alt="Augusta W. Reynoso"
        className="w-16 h-16 rounded-full mb-4"
      />

      <p className="text-gray-700 max-w-2xl mb-6">
        You need not only Just Food Stalls with Persons but also specialized
        equipment, Skills to manage Customers, Effective Product catlogues etc
        very successful to make your.
      </p>

      <div className="flex justify-center mb-4">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-orange-400 text-xl">&#9733;</span>
        ))}
        <span className="text-gray-400 text-xl">&#9733;</span>
      </div>

      <h4 className="font-semibold">AUGUSTA W. REYNOSO</h4>
      <p className="text-sm text-gray-500">UI&amp;UX DESIGNER</p>
    </div>
  );
}
