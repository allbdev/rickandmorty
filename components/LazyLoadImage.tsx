import {useEffect, useRef, useState} from "react";
import {LazyLoadedImageProps} from "@/utils/types";
import Image from "next/image";

export const LazyLoadedImage = ({ src, alt, className = "" }: LazyLoadedImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);
 
  useEffect(() => {
    const current = imgRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "100px 0px 100px 0px", threshold: 0 }); // Image will load 100px before enters the viewport

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <Image
      ref={imgRef}
      src={isVisible ? src : "/loading.gif"}
      alt={alt}
      fill={true}
      className={`object-cover object-center ${className}`}
    />
  );
}