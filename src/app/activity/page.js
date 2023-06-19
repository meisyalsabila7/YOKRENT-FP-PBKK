"use client";
import DetailMobil from "../../components/detail-mobil";
import Recommendation from "../../components/recommendation";
import { FaCarSide } from "react-icons/fa";
import { FiLoader, FiChevronUp, FiChevronDown } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import React from "react";
import Link from "next/link";

export default function Page() {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div className="max-w-screen-xl mx-auto py-9">
      <div className="flex lg:flex-row flex-col w-full gap-8 justify-center">
        <div className="lg:w-1/2 w-full ">
          <div className="border rounded shadow-md">
            <div className="border rounded shadow-md">
              <DetailMobil hide={true} />
            </div>

            <div className="grid justify-items-center py-6">
              <div className="border rounded-lg shadow-md p-4 w-3/4 ">
                <div
                  onClick={() => setShowMore(!showMore)}
                  className="flex items-center justify-between gap-6 py-3 "
                >
                  <div className="flex items-center gap-6">
                    <div className="text-[#7BC47D] text-3xl">
                      <FaCarSide />
                    </div>
                    <div>
                      <div className="font-bold text-xl">Order ID #0012345</div>
                      <div>On Delivery</div>
                    </div>
                  </div>
                  <div className="text-2xl">
                    {showMore ? <FiChevronDown /> : <FiChevronUp />}
                  </div>
                </div>
                <div className={` gap-4 ${showMore ? "grid" : "hidden"}`}>
                  <div className="flex items-center gap-6">
                    <div className="text-[#7BC47D] text-2xl">
                      <BsCheckCircleFill />
                    </div>
                    <div>
                      <div className="font-bold text-xl">
                        Your order has been received
                      </div>
                      <div>07.00 AM, 08 Juny 2023</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[#7BC47D] text-2xl">
                      <BsCheckCircleFill />
                    </div>
                    <div>
                      <div className="font-bold text-xl">
                        Yokrent prepare your order
                      </div>
                      <div>07.00 AM, 08 Juny 2023</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[#7BC47D] text-2xl">
                      <FiLoader />
                    </div>
                    <div>
                      <div className="font-bold text-xl">
                        Your Order On Delivery
                      </div>
                      <div>07.00 AM, 08 Juny 2023</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[#7BC47D] text-2xl">
                      <RiCheckboxBlankCircleLine />
                    </div>
                    <div>
                      <div className="font-bold text-xl">Order Delivered</div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/return">
                <button
                  type="submit"
                  className="bg-[#5CB85F] rounded py-3 px-8 text-white my-4"
                >
                  Selesaikan pesanan
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <Recommendation />
        </div>
      </div>
    </div>
  );
}
