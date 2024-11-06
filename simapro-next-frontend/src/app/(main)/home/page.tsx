"use client";

// import components
import Carousel from "@/components/MyCarousel";
import Card from "@/components/Card";

import "../../styles/style.css";

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faFilter } from "@fortawesome/free-solid-svg-icons";

// import dropdown filter
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import React, { useState } from "react";

export default function Dashboard() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full h-full bg-[#E5E1DA] no-scrollbar">
      <div className="flex w-full h-full text-black">
        <div className="flex w-full flex-col h-full">
          <div className="items-center w-full h-[42rem] justify-center">
            <Carousel />
          </div>

          <div className="flex flex-col w-full h-fit px-28 mt-10">
            <div className="flex h-20 w-full gap-6 ps-12">
              {/* dropdown filter */}
              <Menu as="div" className="relative inline-block w-1/5 text-left">
                <div data-aos="fade-up" data-aos-duration="700">
                  <MenuButton
                    className="inline-flex w-full h-10 items-center gap-x-1.5 rounded-md bg-primary px-3 py-2 text-base text-white tracking-wide font-bold shadow-sm hover:bg-gray-50 hover:text-primary transition ease-in-out duration-300"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <FontAwesomeIcon
                      icon={faFilter}
                      style={{ fontSize: "1.2rem" }}
                      className="me-2"
                    />
                    Filter
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`-mr-1 h-5 w-5 me-0 ms-auto ease-in-out duration-300 ${isHovered ? "text-primary" : "text-white"}`}
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-white data-[focus]:bg-white data-[focus]:text-primary data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]">
                        Projek Aplikasi Dasar 1
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-primary data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]">
                        Projek Aplikasi Dasar 2
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-primary data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]">
                        Projek Aplikasi Dasar Tahun 2020
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-primary data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]">
                        Projek Aplikasi Dasar Tahun 2021
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-primary data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]">
                        Projek Aplikasi Dasar Tahun 2022
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-primary data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]">
                        Projek Aplikasi Dasar Tahun 2023
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-primary data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]">
                        Projek Aplikasi Dasar Tahun 2024
                      </a>
                    </MenuItem>

                    <form action="#" method="POST">
                      <MenuItem>
                        <button
                          type="submit"
                          className="block w-full px-4 py-2 text-left text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-primary data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]">
                          Sign out
                        </button>
                      </MenuItem>
                    </form>
                  </div>
                </MenuItems>
              </Menu>
              {/* dropdown Filter end */}

              {/* button add start */}
              <a data-aos="fade-up" data-aos-duration="800" href="add-project">
                <button
                  type="submit"
                  className="w-fit h-10 bg-primary ps-4 pe-4 shadow-md text-white flex justify-center items-center rounded-[5px] font-bold tracking-wide hover:bg-gray-50 hover:text-primary transition ease-in-out duration-300">
                  <FontAwesomeIcon
                    icon={faFileCirclePlus}
                    style={{ fontSize: "1.2rem" }}
                    className="me-2"
                  />
                  Add New Project
                </button>
              </a>

              <a data-aos="fade-up" data-aos-duration="900" href="#">
                <button
                  type="submit"
                  className="w-fit h-10 bg-primary ps-4 pe-4 shadow-md text-white flex justify-center items-center rounded-[5px] font-bold tracking-wide hover:bg-gray-50 hover:text-primary transition ease-in-out duration-300">
                  <FontAwesomeIcon
                    icon={faFileCirclePlus}
                    style={{ fontSize: "1.2rem" }}
                    className="me-2"
                  />
                  Add Profil Mahasiswa
                </button>
              </a>

              <a data-aos="fade-up" data-aos-duration="1000" href="#">
                <button
                  type="submit"
                  className="w-fit h-10 bg-primary ps-4 pe-4 shadow-md text-white flex justify-center items-center rounded-[5px] font-bold tracking-wide hover:bg-gray-50 hover:text-primary transition ease-in-out duration-300">
                  <FontAwesomeIcon
                    icon={faFileCirclePlus}
                    style={{ fontSize: "1.2rem" }}
                    className="me-2"
                  />
                  Add Profil Stakeholder
                </button>
              </a>
            </div>

            {/* button add end */}

            {/* card start */}
            <div>
              <Card />
            </div>
            {/* card end */}
          </div>
        </div>
      </div>

    </div>
  );
}
