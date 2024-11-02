'use client';

import { usePathname } from "next/navigation";

import React from "react";

const Mahasiswa = () => {
  const router = usePathname();
  return (
    <div className="bg-blue-500 h-full flex flex-col gap-5">
      <h1 className="bg-red-600 h-96">
        Halamaan Mahasiswa
        <br />
        router halaman ini adalah {router}
      </h1>
      <h1 className="bg-red-600 h-96">Halamaan Mahasiswa</h1>
      <h1 className="bg-red-600 h-96">Halamaan Mahasiswa</h1>
      <div className="bg-purple-600 h-96">
        <h1>apsoieghoweuih</h1>
      </div>
    </div>
  );
};

export default Mahasiswa;
