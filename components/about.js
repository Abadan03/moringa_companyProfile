import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="w-full bg-slate-100 py-24" id='Aboutandlegality'>
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-md md:text-3xl font-bold text-green-700 font-serif tracking-wide">
          About Moringa
        </h1>
        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded"></div>
      </div>
      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/herbaltea.jpg"
                width={648}
                height={1152}
                className="rounded object-cover w-full h-auto max-h-[600px]"
                alt="Wrapped Tea"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="text-gray-700 leading-relaxed">
            <p className="text-lg md:text-xl">
              Moringa, also known as the "drumstick tree," is a highly nutritious plant native to parts of Africa and Asia. Its leaves are rich in essential vitamins and minerals, including vitamin A, C, and E, as well as calcium and iron.
            </p>
            <p className="mt-6 text-lg md:text-xl">
              Known for its numerous health benefits—boosting immunity, reducing cholesterol, improving digestion, and supporting brain health—Moringa is often considered a superfood. Its powerful antioxidants and anti-inflammatory properties make it a valuable addition to a healthy diet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
