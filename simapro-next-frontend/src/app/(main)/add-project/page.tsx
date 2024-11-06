"use client";

import React from "react";

import Aos from "aos";
import "aos/dist/aos.css";


import "@/app/styles/style.css";

const AddProject = () => {
  Aos.init();
  return (
    <div>
      <div className="px-36 py-20">
        <form
          action="#"
          method="post"
          className="flex flex-col gap-4 h-full px-10">
          <div className="flex flex-col gap-4 h-[83vh]">
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              className=" h-full  ">
              <label
                htmlFor="image-upload-1"
                className="bg-inputAddProject hover:cursor-pointer w-full font-medium tracking-wide text-xl text-primary h-full justify-center items-center flex">
                Add New File
              </label>
              <input
                id="image-upload-1"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
              />
            </div>
            <div className="flex gap-4 w-full h-2/5 columns-4">
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="flex flex-auto h-full w-full">
                <label
                  htmlFor="image-upload-2"
                  className="bg-inputAddProject hover:cursor-pointer w-full font-medium tracking-wide text-xl text-primary flex justify-center items-center">
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
                  className="bg-inputAddProject hover:cursor-pointer w-full font-medium tracking-wide text-xl text-primary flex justify-center items-center">
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
                  className="bg-inputAddProject hover:cursor-pointer w-full font-medium tracking-wide text-xl text-primary flex justify-center items-center">
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
                  className="bg-inputAddProject hover:cursor-pointer w-full font-medium tracking-wide text-xl text-primary flex justify-center items-center">
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
          <div className="mt-16">
            <div className="flex flex-col gap-4 w-full">
              <div className=" grid grid-cols-4 gap-4 w-full">
                <label
                  htmlFor="project-name"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full bg-inputAddProject col-span-1 rounded-md">
                  Project Name
                </label>
                <input
                  id="project-name"
                  type="text"
                  placeholder="Project Name"
                  className=" placeholder:text-hint text-primary bg-inputAddProject text-lg border-none rounded-md p-2 w-full col-span-3"
                />
              </div>
              <div className=" grid grid-cols-4 gap-4 w-full">
                <label
                  htmlFor="project-name"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full bg-inputAddProject col-span-1 rounded-md">
                  Proyek Aplikasi Dasar
                </label>
                <input
                  id="project-name"
                  type="text"
                  placeholder="Project Name"
                  className=" placeholder:text-hint text-primary bg-inputAddProject text-lg border-none rounded-md p-2 w-full col-span-3"
                />
              </div>
              <div className=" grid grid-cols-4 gap-4 w-full">
                <label
                  htmlFor="project-name"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full bg-inputAddProject col-span-1 rounded-md">
                  Year
                </label>
                <input
                  id="project-name"
                  type="text"
                  placeholder="exp: 2022"
                  className=" placeholder:text-hint text-primary bg-inputAddProject text-lg border-none rounded-md p-2 w-full col-span-3"
                />
              </div>
              <div className=" grid grid-cols-4 gap-4 w-full">
                <label
                  htmlFor="project-name"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full bg-inputAddProject col-span-1 rounded-md">
                  Stakeholder
                </label>
                <input
                  id="project-name"
                  type="text"
                  placeholder="Project Name"
                  className=" placeholder:text-hint text-primary bg-inputAddProject text-lg border-none rounded-md p-2 w-full col-span-3"
                />
              </div>
              <div className=" grid grid-cols-4 gap-4 w-full">
                <label
                  htmlFor="project-name"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full bg-inputAddProject col-span-1 rounded-md">
                  Name Group Members
                </label>
                <input
                  id="project-name"
                  type="text"
                  placeholder="Project Name"
                  className=" placeholder:text-hint text-primary bg-inputAddProject text-lg border-none rounded-md p-2 w-full col-span-3"
                />
              </div>
              <div className=" grid grid-cols-4 gap-4 w-full">
                <label
                  htmlFor="project-name"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full h-fit py-2 bg-inputAddProject col-span-1 rounded-md">
                  Description
                </label>
                <textarea
                  id="project-name"
                  rows={10}
                  placeholder="Description"
                  className=" placeholder:text-hint text-primary bg-inputAddProject text-lg border-none rounded-md p-2 w-full col-span-3"
                />
              </div>
            </div>
          </div>
          <div className="flex h-full justify-end items-center px-0">
            <button
              type="submit"
              className="h-full w-52 text-primary drop-shadow-md bg-inputAddProject hover:bg-primary hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
