'use client';

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

interface Photo {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const photos: Photo[] = [
  {
    src: "/photos/photo1.jpg",
    alt: "Photo 1",
    title: "Adventure",
    description: "Exploring new places"
  },
  {
    src: "/photos/photo2.jpg", 
    alt: "Photo 2",
    title: "Moments",
    description: "Capturing memories"
  },
  {
    src: "/photos/photo3.jpg",
    alt: "Photo 3", 
    title: "Nature",
    description: "Beautiful landscapes"
  },
  {
    src: "/photos/photo4.jpg",
    alt: "Photo 4",
    title: "Friends",
    description: "Good times with friends"
  },
  {
    src: "/photos/photo5.jpg",
    alt: "Photo 5",
    title: "Events", 
    description: "Special occasions"
  },
  {
    src: "/photos/photo6.jpg",
    alt: "Photo 6",
    title: "Life",
    description: "Everyday moments"
  }
];

const accentColors = ["accent-blue", "accent-emerald", "accent-purple", "accent-amber"];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className="cursor-pointer group opacity-100 transform translate-y-0"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                priority={index < 3}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {photo.title && (
                <div className="p-4">
                  <h3 className={`text-lg font-semibold text-${accentColors[index % accentColors.length]} mb-1`}>
                    {photo.title}
                  </h3>
                  {photo.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{photo.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent-blue transition-colors duration-300 p-2"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={800}
                height={600}
                className="max-h-[80vh] object-contain w-full"
              />
              {selectedPhoto.title && (
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-accent-blue mb-2">
                    {selectedPhoto.title}
                  </h3>
                  {selectedPhoto.description && (
                    <p className="text-gray-600 dark:text-gray-300">{selectedPhoto.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
