// node modules
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// icons
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosCloseCircle,
} from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

// types
import { ProjectItem } from "../types/projectTypes";

// styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";

interface Props {
  data: ProjectItem;
  handleOpenDialog: (isOpen: boolean) => void;
}

function DetailDialog({ data: item, handleOpenDialog }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const onClose = () => {
    handleOpenDialog(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative grid max-w-6xl grid-cols-1 gap-5 overflow-scroll rounded-xl bg-white p-12 shadow-lg md:grid-cols-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <div className="h-full p-3">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={{
                prevEl: "#custom-prev", // 커스텀 버튼 ID
                nextEl: "#custom-next", // 커스텀 버튼 ID
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-full"
            >
              <button
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-600"
                id="custom-prev"
              >
                <IoIosArrowRoundBack size={14} />
              </button>

              {/* Custom Next Button */}
              <button
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-600"
                id="custom-next"
              >
                <IoIosArrowRoundForward size={14} />
              </button>
              {item.screenshots?.map((screenshot, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img
                      src={screenshot}
                      alt=""
                      className="w-full object-cover"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {item.screenshots?.map((screenshot, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img
                      key={index}
                      src={screenshot}
                      alt=""
                      className="h-12 w-12"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="overflow-scroll p-3 md:max-h-[58vh]">
            <div className="flex items-center gap-5">
              {/* 프로젝트 명 */}
              <h3 className="text-3xl font-bold">{item.title}</h3>
              {/* 프로젝트 URL */}
              {item.liveDemoUrl ? (
                <a
                  href={item.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block text-sm text-blue-500"
                >
                  <span className="inline-flex items-center gap-1 group-hover:underline group-hover:underline-offset-2">
                    URL 이동
                    <MdOutlineArrowOutward className="duration-400 rounded-full bg-slate-50 p-1 text-lg transition-all group-hover:rotate-45 group-hover:bg-accent-500 group-hover:text-zinc-50 group-hover:transition-all group-hover:duration-500" />
                  </span>
                </a>
              ) : (
                <p>
                  <span className="text-red-500">*</span>
                  해당 프로젝트는 사이트의 주소가 비공개인 프로젝트입니다.
                </p>
              )}
            </div>

            {/* 프로젝트 설명 */}
            <p className="mt-2 tracking-tighter">{item.description}</p>
            {/* 프로젝트 기술 */}
            <h4 className="mt-4 font-semibold">사용 기술</h4>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {item.technologies.map((tech, index) => (
                <span key={index} className="rounded bg-gray-200 px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
            {/* 프로젝트 참여 기간 */}
            <h4 className="mt-4 font-bold">참여 기간</h4>
            <p className="mt-2 text-sm">
              {item.duration.start} ~ {item.duration.end}
            </p>
            {/* 프로젝트 주요 개발 사항 */}
            <h4 className="mt-4 font-semibold">주요 개발 사항</h4>
            <ul className="ml-4 list-disc">
              {item.responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
            {/* 프로젝트 성과 */}
            <h4 className="mt-4 font-semibold">주요 기여</h4>
            <ul className="ml-4 list-disc">
              {item.achievements?.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
          <button
            className="absolute right-3 top-3 text-3xl text-gray-600 hover:text-accent-hover"
            onClick={onClose}
          >
            <IoIosCloseCircle />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DetailDialog;
