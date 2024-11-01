// kode biasa

"use client";

// import React, { useEffect,  } from "react";
import Image from "next/image";

import { useState } from "react";

// Definisikan tipe untuk item data
// interface Item {
//   id: number; // Misalkan ada property 'id'
//   name: string; // Misalkan ada property 'name'
// }

const Card: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean[]>([false, false, false]);

  const handleMouseEnter = (index: number) => {
    const newIsHovered = [...isHovered];
    newIsHovered[index] = true;
    setIsHovered(newIsHovered);
  };

  const handleMouseLeave = (index: number) => {
    const newIsHovered = [...isHovered];
    newIsHovered[index] = false;
    setIsHovered(newIsHovered);
  };

  return (
    <div className=" grid grid-cols-2 justify-between px-12 gap-10">
      {/* card yang dibuat perulangan */}
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-SimaPro flex w-full h-[28rem] shadow-lg rounded-md overflow-hidden">
          <div className="relative flex items-end w-full h-full overflow-hidden">
            <div
              className="absolute hover:cursor-pointer z-10 w-full h-full opacity-0 hover:opacity-20 bg-black from-black to-transparent transition ease-in-out duration-1000"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}></div>

            <Image
              src="/assets/logo.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />

            <div
              className={`absolute ${isHovered[index] ? "translate-y-0" : "translate-y-12"} ${isHovered[index] ? "opacity-100" : "opacity-0"} delay-150 z-10 w-full flex flex-row items-center gap-5 ps-4 mb-4 font-black transition ease-in-out duration-1000`}>
              <Image
                src="/assets/logo.png"
                alt="Logo SiMaPro"
                width={50}
                height={50}
                className="text-black h-10 w-10 rounded-full"
              />

              <h1>SiMaPro Cikk {index + 1}</h1>
            </div>
          </div>
        </div>
      ))}
      {/* end perulangan */}
    </div>
  );
};

export default Card;


// menggunakan api

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// interface Card {
//   id: number;
//   name: string;
//   imageUrl: string;
//   logoUrl: string;
// }

// const CardComponent: React.FC = () => {
//   const [cards, setCards] = useState<Card[]>([]);
//   const [isHovered, setIsHovered] = useState<boolean[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/cards");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCards(data);
//         setIsHovered(new Array(data.length).fill(false));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleMouseEnter = (index: number): void => {
//     const newHovered = [...isHovered];
//     newHovered[index] = true;
//     setIsHovered(newHovered);
//   };

//   const handleMouseLeave = (index: number): void => {
//     const newHovered = [...isHovered];
//     newHovered[index] = false;
//     setIsHovered(newHovered);
//   };

//   return (
//     <div className="grid grid-cols-2 justify-between px-12 gap-10">
//       {cards.map((card, index) => (
//         <div
//           key={card.id}
//           className="bg-SimaPro flex w-full h-96 overflow-hidden">
//           <div className="relative flex items-end w-full h-full overflow-hidden">
//             <div
//               className="absolute z-10 w-full h-full opacity-0 hover:opacity-20 bg-black from-black to-transparent transition ease-in-out duration-1000"
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={() => handleMouseLeave(index)}></div>
//             <Image
//               src={card.imageUrl}
//               alt={card.name}
//               layout="fill"
//               objectFit="cover"
//             />
//             <div
//               className={`absolute ${isHovered[index] ? "translate-y-0" : "translate-y-12"} ${isHovered[index] ? "opacity-100" : "opacity-0"} delay-150 z-10 w-full flex flex-row items-center gap-5 ps-4 mb-4 font-black transition ease-in-out duration-1000`}>
//               <Image src={card.logoUrl} alt />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardComponent;
