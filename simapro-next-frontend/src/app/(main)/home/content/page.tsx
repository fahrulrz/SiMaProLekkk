"use client";

import { useState } from "react";

import { useSearchParams } from "next/navigation";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faComment as faCommentRegular } from "@fortawesome/free-regular-svg-icons";

import gambar from "../../../../../public/assets/images/image 24.png";

const Content = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [isHoveredLike, setIsHoveredLike] = useState<boolean>(false);

  const [isHoveredComment, setIsHoveredComment] = useState<boolean>(false);

  return (
    // <div>
    //   <div>
    //     <h1>Content</h1>
    //     <br />
    //     {id   ? (
    //       <h3>Item ID: {id}</h3>
    //     ) : (
    //       <h3>Loadingg.....</h3>
    //     )}
    //   </div>
    // </div>

    <div className="flex flex-col gap-12 px-20 py-10 h-full w-screen">
      <div className="flex flex-col h-full w-full gap-10 ">
        <div className="flex w-full px-52">
          <Image
            src={gambar}
            alt="Picture of the author"
            width={1600}
            height={900}
            sizes="80vh"
            objectFit="cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-red-600 flex justify-center items-center">
            <Image
              src={gambar}
              alt="Picture of the author"
              width={1600}
              height={900}
              sizes="80vh"
              objectFit="cover"
            />
          </div>
          <div className="bg-purple-700 flex justify-center items-center">
            <Image
              src={gambar}
              alt="Picture of the author"
              width={1600}
              height={900}
              sizes="80vh"
              objectFit="cover"
            />
          </div>
          <div className="bg-yellow-400 flex justify-center items-center">
            <Image
              src={gambar}
              alt="Picture of the author"
              width={1600}
              height={900}
              sizes="80vh"
              objectFit="cover"
            />
          </div>
          <div className="bg-gray-500 flex justify-center items-center">
            <Image
              src={gambar}
              alt="Picture of the author"
              width={1600}
              height={900}
              sizes="80vh"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div id="like-comment" className="flex gap-14">
        <div className="flex flex-col text-primary items-center ">
          <span
            onMouseEnter={() => setIsHoveredLike(true)}
            onMouseLeave={() => setIsHoveredLike(false)}>
            <FontAwesomeIcon
              icon={isHoveredLike ? faHeart : faHeartRegular}
              size="2x"
              className="cursor-pointer"
            />
          </span>
          <p>120k</p>
        </div>
        <div className="flex flex-col text-primary items-center">
          <span
            onMouseEnter={() => setIsHoveredComment(true)}
            onMouseLeave={() => setIsHoveredComment(false)}>
            <FontAwesomeIcon
              icon={isHoveredComment ? faComment : faCommentRegular}
              size="2x"
              className="cursor-pointer"
            />
          </span>
          <p>97k</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center py-4 bg-white text-4xl font-black text-primary tracking-wide">
          Project Name
        </div>
        <div className="flex w-full gap-4 text-primary text-lg">
          <div className="bg-white w-2/5 p-2 flex flex-col gap-4">
            <p>Proyek Aplikasi Dasar 1</p>
            <p>Tahun 2024</p>
            <p>Stakeholder : Fahrul</p>
            <p>Nama Anggota Kelompok : </p>
            <ul className=" ms-6 list-disc">
              <li>Syafiq (PM)</li>
              <li>Fahrul (FE)</li>
              <li>Naldo (BE)</li>
              <li>Allin (UI/UX)</li>
            </ul>
          </div>
          <div className="bg-white w-3/5 p-2 flex flex-col gap-4">
            <p>Description : </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              commodi ut libero ea dignissimos similique harum? Totam voluptates
              nulla libero odio, aliquam cupiditate dolores error praesentium,
              nisi, tempore hic nesciunt quos quaerat. Dolores, veritatis. A
              dicta eius debitis corporis eum delectus, cumque nam deserunt quos
              modi velit voluptatum vero aperiam aliquam numquam facere minima
              natus necessitatibus porro voluptatibus, nulla dolores! Nemo
              repellat tempora tempore rerum incidunt expedita nam sunt ea! Esse
              adipisci nulla molestiae maxime deleniti fugit harum id
              consequatur aut autem perspiciatis quis dolor tenetur ipsa eaque
              soluta quia enim, illo ducimus inventore quo saepe porro omnis
              earum. Ratione.
            </p>

            <a href="https://youtube.com" className="hover:underline">
              https://google.com
            </a>
          </div>
        </div>
        <div className="w-full flex justify-end gap-6">
          <a href="#" className="">
            <button className="bg-white text-primary hover:bg-primary hover:text-white flex items-center gap-3 p-2 px-6  rounded-md">
              <FontAwesomeIcon icon={faPenToSquare} size="xl" />
              Edit Proyek
            </button>
          </a>
          <a href="#" className="">
            <button className="bg-white flex hover:bg-primary hover:text-white items-center gap-3 p-2 px-6 text-primary rounded-md">
              <FontAwesomeIcon icon={faTrash} size="xl" />
              Edit Proyek
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
