"use client";

// import { usePathname } from "next/navigation";

import React, { useState, useEffect } from "react";

import Image from "next/image";

import { useRouter } from "next/navigation";
import axios from "axios";

interface Mahasiswa {
  id: number;
  nama_lengkap: string;
  NIM: string;
  foto: string;
  team_member: Anggota[];
}

interface Anggota {
  id: number;
  role: string;
  team_id: number;
  member_id: number;
}


const Mahasiswa = () => {

  const [mahasiswa, setMahasiswa] = useState<Mahasiswa[]>([]);
  const [error, setError] = useState(null);
  // const router = usePathname();

  const router = useRouter();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/mahasiswa").then((response) => {
      setMahasiswa(response.data.data);
      
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

  console.log(mahasiswa);

  console.log(error);

  const clickHandler = (mahasiswa : number) => {
    router.push(`/mahasiswa/detail-mahasiswa?id=${mahasiswa}`);
  }


  return (
    // <div className="bg-blue-500 h-full flex flex-col gap-5">
    //   <h1 className="bg-red-600 h-96">
    //     Halamaan Mahasiswa
    //     <br />
    //     router halaman ini adalah {router} //cara mengambil routh yang sedang digunakan
    //   </h1>
    //   <h1 className="bg-red-600 h-96">Halamaan Mahasiswa</h1>
    //   <h1 className="bg-red-600 h-96">Halamaan Mahasiswa</h1>
    //   <div className="bg-purple-600 h-96">
    //     <h1>apsoieghoweuih</h1>
    //   </div>
    // </div>

    <>
      <div className="h-full w-screen">
        <div className="grid grid-cols-4 p-20 gap-16">
          {mahasiswa.map((mahasiswa) => (
            <div
              key={mahasiswa.id}
              onClick={() => clickHandler(mahasiswa.id)}
              className="bg-[#FBF9F1] h-[36rem] flex flex-col justify-center items-center cursor-pointer">
              <div className="flex flex-col w-full h-full justify-center items-center mb-10">
                <div className="flex w-full h-full p-8">
                  <div className="flex relative h-full w-full">
                    <Image
                      src={mahasiswa.foto}
                      alt="Picture of the author"
                      // width={720}
                      // height={700}
                      layout="fill"
                      objectFit="cover"
                      className="bg-red-500"
                    />
                  </div>
                </div>
                <h1 className="text-primary font-bold text-xl mb-10">
                  {mahasiswa.nama_lengkap}{" "}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mahasiswa;
