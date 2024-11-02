"use client";

import React from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const AddProject = () => {
  Aos.init();
  return (
    <div>
      <div className="px-36 py-20">
        <form action="#" method="post" className="flex flex-col gap-4 h-screen">
          <div className="flex flex-col gap-4 h-5/6">
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              className=" h-full px-10 ">
              <label
                htmlFor="image-upload-1"
                className="bg-[#FBF9F1] hover:cursor-pointer w-full font-medium tracking-wide text-2xl text-primary h-full justify-center items-center flex">
                Add New File
              </label>
              <input
                id="image-upload-1"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
              />
            </div>
            <div className="flex gap-4 w-full h-2/5 px-10 columns-4">
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="flex flex-auto h-full w-full">
                <label
                  htmlFor="image-upload-2"
                  className="bg-[#FBF9F1] hover:cursor-pointer w-full font-medium tracking-wide text-2xl text-primary flex justify-center items-center">
                  Add New File
                </label>
                <input
                  id="image-upload-2"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="flex flex-auto h-full w-full">
                <label
                  htmlFor="image-upload-2"
                  className="bg-[#FBF9F1] hover:cursor-pointer w-full font-medium tracking-wide text-2xl text-primary flex justify-center items-center">
                  Add New File
                </label>
                <input
                  id="image-upload-2"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="flex flex-auto h-full w-full">
                <label
                  htmlFor="image-upload-2"
                  className="bg-[#FBF9F1] hover:cursor-pointer w-full font-medium tracking-wide text-2xl text-primary flex justify-center items-center">
                  Add New File
                </label>
                <input
                  id="image-upload-2"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="flex flex-auto h-full w-full">
                <label
                  htmlFor="image-upload-2"
                  className="bg-[#FBF9F1] hover:cursor-pointer w-full font-medium tracking-wide text-2xl text-primary flex justify-center items-center">
                  Add New File
                </label>
                <input
                  id="image-upload-2"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <button type="submit">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
