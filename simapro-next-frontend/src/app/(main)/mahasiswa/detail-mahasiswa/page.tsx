"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Card from "@/components/Card";

// import gambar from "../../../../../public/assets/photoProfile.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Mahasiswa {
  id: number;
  nama_lengkap: string;
  NIM: string;
  foto: string;
  project: Project[];
}

interface Image {
  id: number;
  link_gambar: string;
}

interface Project {
  id: number;
  nama_proyek: string;
  deskripsi: string;
  image: Image[];
}

const DetailMahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState<Mahasiswa>();
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const router = useRouter();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/mahasiswa/${id}`)
      .then((response) => {
        setMahasiswa(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  const editHandler = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`mahasiswa/edit-mahasiswa?id=${id}`);
  };

  console.log(error);
  // console.log("ini adalah gambar",  mahasiswa?.project[0].image[0].link_gambar)

  return (
    <>
      <div className="flex w-screen">
        <div className="bg-[#FBF9F1]  flex p-8 left-0 flex-col w-2/5 ustify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl flex justify-center items-center text-primary">
              Mahasiswa
            </div>
            <div className="bg-red-600 flex flex-col mt-10">
              <div className="flex relative h-[30rem] w-96">
                <Image
                  src={mahasiswa?.foto}
                  alt="Picture of the author"
                  //   width={1600}
                  //   height={900}
                  layout="fill"
                  objectFit="cover"
                  sizes="80vh"
                />
              </div>
            </div>
            <div className="w-3/5 mt-10 text-xl grid grid-cols-3 text-primary">
              <div>
                <div>Nama</div>
                <div>NIM</div>
              </div>
              <div className="col-span-2">
                <div>: {mahasiswa?.nama_lengkap}</div>
                <div>: {mahasiswa?.NIM}</div>
              </div>
            </div>
            <div className="gap-4 mt-10 w-full grid grid-cols-2 px-24">
              <div>
                <Link href={`edit-mahasiswa?id=${id}`}>
                  <button className="bg-primary flex w-full text-lg hover:bg-white hover:text-primary items-center gap-3 p-2 px-6 text-white rounded-md">
                    {" "}
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      size="xl"
                      className="me-2"
                    />
                    Edit Profile
                  </button>
                </Link>
              </div>
              <div>
                <a
                  href="#"
                  className="bg-primary w-full flex text-lg hover:bg-white hover:text-primary items-center gap-3 p-2 px-6 text-white rounded-md">
                  <FontAwesomeIcon icon={faTrash} size="xl" />
                  Delete Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen flex flex-col w-3/5 px-20 py-14 bg-blue-500">
          <div>
            <div className="text-2xl">List Project</div>
            <div className="bg-green-500 flex h-[80vh] overflow-scroll">
              <div className=" flex flex-col gap-4 w-full overflow-y-scroll h-full bg-black container">
                {mahasiswa?.project == null ||
                  (mahasiswa?.project?.length == 0 && (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-4xl text-white">
                        Belum ada projek SOBBB
                      </div>
                    </div>
                  ))}

                {mahasiswa?.project?.map((project) => (
                  <Card
                    key={project.id}
                    id={project.id}
                    dataAos=""
                    name={project.nama_proyek}
                    imageUrl={project.image[0].link_gambar}
                    // year={project.year.map((item) => item.tahun).join(", ")}
                    // comment={JSON.stringify(project.image)}
                    // comment={project.comments.map((isi) => isi.isi_komen).join(', ')}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMahasiswa;
