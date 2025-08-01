"use client";
import getTechIcons from "@/util/getTechIcons";
import projects from "@/util/projects";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const MobileCard = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <>
      <div
        onClick={handlePrevious}
        className="hidden md:flex md:w-[60px] md:h-[60px] items-center justify-center cursor-pointer"
      >
        <FaChevronLeft size={40} />
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        pagination={{
          clickable: true,
          dynamicMainBullets: 4,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        style={{ paddingBottom: "50px" }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-3xl font-bold ">{project.title}</h1>
              <div className="flex flex-col items-center gap-2">
                <div className="w-[450px] h-[250px] md:w-[250px] md:h-[200px] rounded-2xl relative">
                  <Image
                    src={project.image}
                    alt="Project image"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>

                <div className="flex gap-2">
                  <Link
                    target="_blank"
                    href={project.github}
                    className="gap-2 font-bold text-2xl px-2 py-1 border border-gray-400 flex items-center justify-center rounded-lg active:bg-gray-400 duration-400"
                  >
                    GitHub
                    <FaGithub size={20} />
                  </Link>
                  <Link
                    target="_blank"
                    href={project.deploy}
                    className="gap-2 font-bold text-2xl px-2 py-1 border border-gray-400 flex items-center justify-center rounded-lg active:bg-gray-400 duration-400"
                  >
                    Deploy
                    <FaExternalLinkAlt size={20} />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <p className="w-[300px] font-text ">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {getTechIcons(project.techs).map((icon) => (
                    <div
                      className="w-[40px] h-[40px] flex items-center justify-center"
                      key={project.title + icon.title}
                    >
                      <icon.icon size={32} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={handleNext}
        className="hidden md:flex md:w-[60px] md:h-[60px] items-center justify-center cursor-pointer"
      >
        <FaChevronRight size={40} />
      </div>
    </>
  );
};

export default MobileCard;
