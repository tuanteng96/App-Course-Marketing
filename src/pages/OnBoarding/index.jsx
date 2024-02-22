import { AssetsHelpers } from "@/helpers";
import clsx from "clsx";
import { Page } from "framework7-react";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function OnBoardingPage({ f7router }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener("swiper-slidechange", (e) => {
      setSlideIndex(swiperElRef.current.swiper.activeIndex);
    });
  }, [swiperElRef]);

  const onStart = () => f7router.navigate("/login/");

  return (
    <Page className="bg-white">
      <div className="h-full pt-safe-t flex flex-col justify-between">
        <div className="h-navbar flex items-center justify-end px-5">
          <div className="font-medium" onClick={onStart}>Bỏ qua</div>
        </div>
        <div className="grow">
          <swiper-container
            initialSlide={1}
            events-prefix="swiper-"
            ref={swiperElRef}
            space-between="50"
            class="h-full"
          >
            <swiper-slide>
              <div className="px-5">
                <div className="mb-3">
                  <img
                    className="w-full"
                    src={AssetsHelpers.toAbsoluteAsset(
                      "images/boarding/boarding1.png"
                    )}
                    alt="Choose"
                  />
                </div>
                <div className="text-center">
                  <div className="text-[22px] font-bold mb-2">
                    Học trực tuyến
                  </div>
                  <div className="text-base text-[#191D21] font-light leading-6">
                    Chủ Spa / Thẩm mỹ viện “học” trực tuyến các khóa học Chốt
                    Sale, chạy quảng cáo, x2 doanh số, nâng cao tay nghề từ các
                    chuyên gia đầu ngành
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="px-5">
                <div className="mb-3">
                  <img
                    className="w-full"
                    src={AssetsHelpers.toAbsoluteAsset(
                      "images/boarding/boarding2.png"
                    )}
                    alt="Enjoy"
                  />
                </div>
                <div className="text-center">
                  <div className="text-[22px] font-bold mb-2">
                    Bộ công cụ hỗ trợ
                  </div>
                  <div className="text-base text-[#191D21] font-light leading-6">
                    <div>500+ Banner kèm content quảng cáo</div>
                    <div>12+ Minigame tương tác - 10+ Flash sale hiệu quả</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="px-5">
                <div className="mb-3">
                  <img
                    className="w-full"
                    src={AssetsHelpers.toAbsoluteAsset(
                      "images/boarding/boarding3.png"
                    )}
                    alt="Rest"
                  />
                </div>
                <div className="text-center">
                  <div className="text-[22px] font-bold mb-2">
                    Phần mềm quản lý
                  </div>
                  <div className="text-base text-[#191D21] font-light leading-6">
                    Phần mềm quản lý giúp tăng doanh thu, tìm kiếm khách mới,
                    tăng tỉ lệ khách quay lại & App dành cho khách hàng tự quản
                    lý trên Smartphone
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
        <div className="p-5 flex justify-between items-center">
          <div className="flex">
            {Array(3)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className={clsx(
                    "h-2 mr-2 last:mr-0 transition-all",
                    index === slideIndex
                      ? "bg-app w-4 rounded"
                      : "bg-[#CDD9E3] w-2 rounded-full"
                  )}
                  onClick={() => swiperElRef.current.swiper.slideTo(index)}
                ></div>
              ))}
          </div>
          {slideIndex === 2 && (
            <button
              className="w-[160px] h-14 rounded-full bg-app text-white flex items-center justify-center shadow-3xl relative pr-12"
              onClick={onStart}
            >
              <span className="text-base font-medium">Bắt đầu</span>
              <div className="bg-white text-app absolute right-1.5 w-11 h-11 rounded-full flex items-center justify-center">
                <ArrowRightIcon className="w-6" />
              </div>
            </button>
          )}
          {slideIndex !== 2 && (
            <button
              className="w-14 h-14 rounded-full bg-app text-white flex items-center justify-center shadow-3xl"
              onClick={() => swiperElRef.current.swiper.slideNext()}
            >
              <ArrowRightIcon className="w-6" />
            </button>
          )}
        </div>
      </div>
    </Page>
  );
}

export default OnBoardingPage;
