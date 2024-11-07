"use client";

import React from "react";

import { useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import "@/app/styles/style.css";

interface NavigationItem {
  id: number;
  name: string;
}

const AddProject = () => {
  const [selectedItem, setSelectedItem] = useState<NavigationItem | null>(null);

  const handleSelect = (item: NavigationItem) => {
    setSelectedItem(item);
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const navigationItems: NavigationItem[] = [
    { id: 1, name: "Projek Aplikasi Dasar 1" },
    { id: 2, name: "Projek Aplikasi Dasar 2" },
  ];
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
                  htmlFor="image-upload-3"
                  className="bg-inputAddProject hover:cursor-pointer w-full font-medium tracking-wide text-xl text-primary flex justify-center items-center">
                  Add New File
                </label>
                <input
                  id="image-upload-3"
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
                  htmlFor="image-upload-4"
                  className="bg-inputAddProject hover:cursor-pointer w-full font-medium tracking-wide text-xl text-primary flex justify-center items-center">
                  Add New File
                </label>
                <input
                  id="image-upload-4"
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
                  htmlFor="image-upload-5"
                  className="bg-inputAddProject hover:cursor-pointer w-full font-medium tracking-wide text-xl text-primary flex justify-center items-center">
                  Add New File
                </label>
                <input
                  id="image-upload-5"
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
                  htmlFor="selectedProject"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full bg-inputAddProject col-span-1 rounded-md">
                  Proyek Aplikasi Dasar
                </label>
                <Menu
                  as="div"
                  className="relative insline-block text-left w-full col-span-3">
                  <Menu.Button
                    className={`inline-flex w-full items-center gap-x-1.5 rounded-md bg-primary hover:bg-gray-50 px-3 py-2 text-lg ${isHovered ? "text-primary" : "text-white"} shadow-sm`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    {selectedItem ? selectedItem.name : "Select Project"}{" "}
                    {/* Tampilkan nilai yang dipilih */}
                    <ChevronDownIcon className="h-5 w-5 ms-auto me-0" />
                  </Menu.Button>

                  <Menu.Items className="absolute left-0 z-10 mt-2 w-full bg-primary rounded-md shadow-lg overflow-hidden">
                    {navigationItems.map((item) => (
                      <Menu.Item key={item.id}>
                        {({ active }) => (
                          <button
                            onClick={() => handleSelect(item)}
                            className={`${
                              active ? "bg-gray-100 text-primary" : "text-white"
                            } block w-full text-left px-4 py-2 text-lg`}>
                            {item.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
                {/* Tampilkan nilai yang dipilih sebagai nilai input tersembunyi */}
                <input
                  type="hidden"
                  name="selectedProject"
                  value={selectedItem ? selectedItem.name : ""}
                />
              </div>
              <div className=" grid grid-cols-4 gap-4 w-full">
                <label
                  htmlFor="year"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full bg-inputAddProject col-span-1 rounded-md">
                  Year
                </label>
                <input
                  id="year"
                  type="text"
                  placeholder="e.g. 2022"
                  className=" placeholder:text-hint text-primary bg-inputAddProject text-lg border-none rounded-md p-2 w-full col-span-3"
                />
              </div>
              <div className=" grid grid-cols-4 gap-4 w-full">
                <label
                  htmlFor="stakeholder"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full bg-inputAddProject col-span-1 rounded-md">
                  Stakeholder
                </label>
                <input
                  id="stakeholder"
                  type="text"
                  placeholder="Stakeholder"
                  className=" placeholder:text-hint text-primary bg-inputAddProject text-lg border-none rounded-md p-2 w-full col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 w-full">
                <label
                  htmlFor="group-name"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full bg-inputAddProject col-span-1 rounded-md">
                  Name Group Members
                </label>
                <input
                  id="group-name"
                  type="text"
                  placeholder="Team Name"
                  className=" placeholder:text-hint text-primary bg-inputAddProject text-lg border-none rounded-md p-2 w-full col-span-3"
                />
              </div>
              <div className=" grid grid-cols-4 gap-4 w-full">
                <label
                  htmlFor="description"
                  className="flex justify-center items-center text-xl text-primary font-medium w-full h-fit py-2 bg-inputAddProject col-span-1 rounded-md">
                  Description
                </label>
                <textarea
                  id="description"
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
