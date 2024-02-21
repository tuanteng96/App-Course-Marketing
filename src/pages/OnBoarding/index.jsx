import { AssetsHelpers } from "@/helpers";
import { Button, Page } from "framework7-react";
import React from "react";

function OnBoardingPage(props) {
  return (
    <Page className="bg-white">
      <div className="h-full pt-safe-t flex flex-col justify-between">
        <div className="grow">
          <div className="text-xl font-semibold pt-5 text-center mb-8">
            Course Marketing
          </div>
          <div className="on-boarding-swiper">
            <swiper-container
              pagination
              space-between="50"
              loop={true}
              thumbs-swiper=".OnBoardingContent"
              autoplay-delay="2500"
            >
              <swiper-slide>
                <div className="mb-16 px-5">
                  <img
                    className="w-full"
                    src={AssetsHelpers.toAbsoluteAsset(
                      "images/boarding/boarding1.png"
                    )}
                    alt="Choose"
                  />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="mb-16">
                  <img
                    className="w-full"
                    src={AssetsHelpers.toAbsoluteAsset(
                      "images/boarding/boarding2.png"
                    )}
                    alt="Enjoy"
                  />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="mb-16 px-5">
                  <img
                    className="w-full"
                    src={AssetsHelpers.toAbsoluteAsset(
                      "images/boarding/boarding3.png"
                    )}
                    alt="Rest"
                  />
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
          <div>
            <swiper-container
              class="OnBoardingContent"
              space-between="50"
              free-mode="true"
              watch-slides-progress="true"
              loop={true}
              short-swipes={false}
            >
              <swiper-slide>
                <div className="text-center flex flex-col items-center">
                  <div className="text-[22px] font-bold mb-2">Choose</div>
                  <div className="text-base text-[#191D21] font-light leading-6 px-5">
                    Choose your favorite activity and start tracking your
                    performance!
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="text-center flex flex-col items-center">
                  <div className="text-[22px] font-bold mb-2">Enjoy</div>
                  <div className="text-base text-[#191D21] font-light leading-6 px-5">
                    All you need to do is enjoy yourself and let us track your
                    exercise professionally!!
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="text-center flex flex-col items-center">
                  <div className="text-[22px] font-bold mb-2">Rest</div>
                  <div className="text-base text-[#191D21] font-light leading-6 px-5">
                    Take some time to rest after finishing each routine
                  </div>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
        <div className="p-5">
          <Button fill large>
            Bắt đầu ngay
          </Button>
        </div>
      </div>
    </Page>
  );
}

export default OnBoardingPage;
