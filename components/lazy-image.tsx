"use client";

import { useState, useRef, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  title?: string;
  width: number;
  height: number;
  className?: string;
}

export default function LazyImage({
  src,
  alt,
  title,
  width,
  height,
  className = "",
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Blur placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-gray-100 transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(219, 234, 254, 0.2) 0%, transparent 50%)
          `,
        }}
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          title={title}
          width={width}
          height={height}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      )}

      {/* Loading indicator */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
