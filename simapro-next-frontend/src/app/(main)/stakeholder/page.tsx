'use client';

import React, {useState, useEffect} from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";

import axios from "axios";

interface Stakeholder {
  id: number;
  nama: string;
  kategori: string;
  nomor_telepon: string;
  email: string;
  foto: string;
  projects: Project[];
}

interface Project {
  id: number;
  nama_proyek: string;
  logo: string;
  deskripsi: string;
}


const Stakeholder = () => {
  const [stakeholder, setStakeholder] = useState<Stakeholder[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/stakeholders/")
      .then((response) => {
        setStakeholder(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

    const router = useRouter();

    const clickHandler = (stakeholder: number) => {
      router.push(`/stakeholder/detail-stakeholder?id=${stakeholder}`);
    };

    console.log(error);

  return (
    <>
      <div className="h-full w-screen">
        <div className="grid grid-cols-4 p-20 gap-16">
          {stakeholder.map((stakeholder) => (
            <div
              key={stakeholder.id}
              onClick={() => clickHandler(stakeholder.id)}
              className="bg-[#FBF9F1] cursor-pointer h-[36rem] flex flex-col justify-center items-center">
              <div className="flex flex-col w-full h-full justify-center items-center mb-10">
                <div className="flex w-full h-full p-8">
                  <div className="flex relative h-full w-full">
                    <Image
                      src={stakeholder.foto}
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
                  {stakeholder.nama}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stakeholder;
