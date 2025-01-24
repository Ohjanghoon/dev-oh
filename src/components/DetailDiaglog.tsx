// node modules
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// icons
import {
  IoIosArrowForward,
  IoIosCloseCircle,
  IoIosArrowBack,
} from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdImageNotSupported } from "react-icons/md";

// types
import { ProjectItem } from "../types/projectTypes";

// styles
import "swiper/swiper-bundle.css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/thumbs";

interface Props {
  data: ProjectItem;
  handleOpenDialog: (isOpen: boolean) => void;
}

function DetailDialog({ data: item, handleOpenDialog }: Props) {
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
          className="relative h-[80vh] w-[90vw] overflow-scroll rounded-xl bg-white px-4 py-10 shadow-lg md:max-w-4xl md:px-14 2xl:max-w-6xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          {/* 제목 영역 */}
          <div className="p-3">
            {/* 프로젝트 타입 */}
            <span
              className={item.type.color + ` rounded-full px-2 py-1 text-[9px]`}
            >
              {item.type.name}
            </span>

            {/* 프로젝트 명 */}
            <h3 className="h4 mt-1">{item.title}</h3>
          </div>
          {/* 본문 영역 */}
          <div className="text-sm leading-relaxed md:text-base">
            {/* 이미지 슬라이드 영역 */}
            <div className="w-full px-3">
              <div className="rounded-t-3xl border-[0.5px] border-text-secondary bg-gradient-to-tr from-[#f3f3f3] via-[#f1f1f1] to-[#f2f2f2] px-5 pt-5 md:px-8 md:pt-8">
                {item.screenshots?.length > 0 ? (
                  <Swiper
                    loop={true}
                    spaceBetween={10}
                    effect={"fade"}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={{
                      prevEl: "#custom-prev", // 커스텀 버튼 ID
                      nextEl: "#custom-next", // 커스텀 버튼 ID
                    }}
                    modules={[Autoplay, EffectFade, Pagination, Navigation]}
                    className="pb-5 md:pb-8"
                  >
                    {/* 슬라이더 버튼 영역 */}
                    <button
                      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-zinc-50/70 p-2 text-accent-hover hover:bg-zinc-50"
                      id="custom-prev"
                    >
                      <IoIosArrowBack className="md:size-5" />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 text-accent-hover hover:bg-zinc-50"
                      id="custom-next"
                    >
                      <IoIosArrowForward className="md:size-5" />
                    </button>

                    {item.screenshots?.map((screenshot, index) => {
                      return (
                        <SwiperSlide
                          key={"screenshot" + index}
                          className="h-full bg-black/20"
                        >
                          <img
                            src={`/assets/images/projects/${screenshot}`}
                            alt=""
                            className="h-[160px] w-full border-[0.5px] border-black object-cover object-top md:h-[420px]"
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                ) : (
                  <div className="h-full w-full pb-8">
                    <div className="inline-flex h-[160px] w-full flex-col items-center justify-center bg-zinc-400/60 text-text-light/60 md:h-[400px]">
                      <MdImageNotSupported className="mx-auto text-[6rem] md:text-[12rem]" />
                      <h6 className="h6 text-center">No Image</h6>
                    </div>
                  </div>
                )}

                {/* <Swiper
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
                      className="w-12 h-12"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper> */}
              </div>
              <div className="flex h-12 items-center justify-center rounded-b-2xl border-[0.5px] border-text-secondary bg-[#cecece] md:h-16">
                {/* 프로젝트 URL */}
                {item.liveDemoUrl.available ? (
                  <a
                    href={item.liveDemoUrl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 rounded p-2 text-xs shadow-neumorphism-pressed md:w-12 md:flex-col"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                ) : (
                  <p className="break-keep px-2 text-center text-xs text-text-secondary md:text-sm">
                    <span className="text-red-500">* </span>
                    {item.liveDemoUrl.expression}
                    {/* 해당 프로젝트는 비공개 프로젝트로, 보안 정책에 따라 Live
                    Demo를 제공할 수 없는 점 양해 부탁드립니다. */}
                  </p>
                )}
              </div>
            </div>

            {/* 콘텐츠 영역 */}
            <div className="mt-6 inline-flex w-full flex-col gap-10 px-3 py-3">
              {/* 프로젝트 설명 */}
              <div>
                <span className="h6 rounded-[3px] border-l-4 border-accent-hover bg-accent-hover/10 px-2 py-1">
                  개요
                </span>
                <p className="m-2 mt-3 tracking-tight">{item.description}</p>
              </div>
              {/* 프로젝트 기술 */}
              <div>
                <span className="h6 rounded-[3px] border-l-4 border-accent-hover bg-accent-hover/10 px-2 py-1">
                  사용 기술
                </span>
                <div className="m-2 mt-3 flex flex-wrap gap-2 text-xs">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={"tech" + index}
                      className="rounded border-[1px] border-gray-200 px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* 프로젝트 참여 기간 */}
              <div>
                <span className="h6 rounded-[3px] border-l-4 border-accent-hover bg-accent-hover/10 px-2 py-1">
                  기간
                </span>
                <p className="m-2 mt-3 tracking-tighter">
                  {item.duration.start} ~ {item.duration.end}
                </p>
              </div>
              {/* 프로젝트 주요 개발 사항 */}
              <div>
                <span className="h6 rounded-[3px] border-l-4 border-accent-hover bg-accent-hover/10 px-2 py-1">
                  주요 개발 및 기여
                </span>
                <ul className="m-2 mt-3 flex flex-col gap-4">
                  {item.responsibilities.map((task, index) => {
                    return (
                      <li key={"res" + index}>
                        <ul className="list-disc">
                          <p className="font-bold tracking-tighter">
                            * {task.title}
                          </p>
                          {task.content.map((content, taskKey) => {
                            return (
                              <li
                                key={"res" + index + "_task" + taskKey}
                                className="my-1 ml-6"
                              >
                                {content}
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* 프로젝트 성과 및 배운 점 */}
              {item.achievements?.length > 0 && (
                <div>
                  <span className="h6 rounded-[3px] border-l-4 border-accent-hover bg-accent-hover/10 px-2 py-1">
                    성과 및 배운 점
                  </span>
                  <ul className="m-2 ml-5 mt-3 list-disc">
                    {item.achievements?.map((task, index) => (
                      <li key={"arch" + index} className="my-1">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Git 주소 */}
              <div>
                <span className="h6 rounded-[3px] border-l-4 border-accent-hover bg-accent-hover/10 px-2 py-1">
                  소스 코드 주소
                </span>
                {item.repositoryUrl?.available ? (
                  <a
                    href={item.repositoryUrl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-2 mt-3 block overflow-hidden tracking-tighter text-blue-500 underline"
                  >
                    GitHub로 이동하기
                  </a>
                ) : (
                  <p className="m-2 mt-3 break-keep text-text-secondary">
                    <span className="text-red-500">* </span>
                    {item.repositoryUrl?.expression}
                    {/* 해당 프로젝트는 비공개 프로젝트로, 보안 정책에 따라 Live
                Demo를 제공할 수 없는 점 양해 부탁드립니다. */}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* 닫기 버튼 영역 */}
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
