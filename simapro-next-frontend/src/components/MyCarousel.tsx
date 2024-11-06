

"use client";


import { useEffect } from "react";
import { Carousel } from "flowbite";
import Image from "next/image";
import type {
  CarouselItem,
  CarouselOptions,
  CarouselInterface,
} from "flowbite";
import type { InstanceOptions } from "flowbite";

const MyCarousel = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("carousel-example");

    if (!carouselElement) {
      throw new Error("Carousel element not found");
    }

    const items: CarouselItem[] = [
      {
        position: 0,
        el: document.getElementById("carousel-item-1") as HTMLElement, // Cast to HTMLElement
      },
      {
        position: 1,
        el: document.getElementById("carousel-item-2") as HTMLElement,
      },
      {
        position: 2,
        el: document.getElementById("carousel-item-3") as HTMLElement,
      },
      {
        position: 3,
        el: document.getElementById("carousel-item-4") as HTMLElement,
      },
    ].filter((item) => item.el !== null) as CarouselItem[]; // Hanya ambil yang tidak null

    const options: CarouselOptions = {
      defaultPosition: 0,
      interval: 3000,
      indicators: {
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses:
          "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        items: [
          {
            position: 0,
            el: document.getElementById("carousel-indicator-1") as HTMLElement,
          },
          {
            position: 1,
            el: document.getElementById("carousel-indicator-2") as HTMLElement,
          },
          {
            position: 2,
            el: document.getElementById("carousel-indicator-3") as HTMLElement,
          },
          {
            position: 3,
            el: document.getElementById("carousel-indicator-4") as HTMLElement,
          },
        ].filter((indicator) => indicator.el !== null) as CarouselItem[], // Filter to ensure no null elements
      },
      onNext: () => {
        console.log("next slider item is shown");
      },
      onPrev: () => {
        console.log("previous slider item is shown");
      },
      onChange: () => {
        console.log("new slider item has been shown");
      },
    };

    const instanceOptions: InstanceOptions = {
      id: "carousel-example",
      override: true,
    };

    const carousel: CarouselInterface = new Carousel(
      carouselElement,
      items,
      options,
      instanceOptions
    );

    carousel.cycle();

    const $prevButton = document.getElementById("data-carousel-prev");
    const $nextButton = document.getElementById("data-carousel-next");

    if ($prevButton) {
      $prevButton.addEventListener("click", () => {
        carousel.prev();
      });
    }

    if ($nextButton) {
      $nextButton.addEventListener("click", () => {
        carousel.next();
      });
    }

    return () => {
      if ($prevButton) {
        $prevButton.removeEventListener("click", () => {
          carousel.prev();
        });
      }
      if ($nextButton) {
        $nextButton.removeEventListener("click", () => {
          carousel.next();
        });
      }
    };
  }, []);

  return (
    <div className="relative w-screen overflow-hidden h-full">
      <div
        id="carousel-example"
        className="carousel slide relative w-full h-full">
        <div id="carousel-item-1" className="carousel-item w-full h-full">
          <Image
            src="/assets/logo.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover" // Atur agar gambar menutupi seluruh area
          />
        </div>
        <div id="carousel-item-2" className="carousel-item w-full h-full">
          <Image
            src="/assets/logo.png"
            alt="Deskripsi Gambar 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div id="carousel-item-3" className="carousel-item w-full h-full">
          <Image
            src="/assets/logo.png"
            alt="Deskripsi Gambar 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div id="carousel-item-4" className="carousel-item w-full h-full">
          <Image
            src="/assets/logo.png"
            alt="Deskripsi Gambar 4"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
