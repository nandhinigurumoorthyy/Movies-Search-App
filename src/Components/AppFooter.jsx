import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import {
  LiaWhatsapp,
  LiaInstagram,
  LiaTwitter,
  LiaFacebookF,
} from "react-icons/lia";

const AppFooter = () => {
  return (
    <div className="bg-neutral-800 text-neutral-50 py-7 px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
        {/* Logo and Message */}
        <div className="flex gap-3 items-center text-center lg:text-left">
          <BiSolidCameraMovie className="lg:text-3xl text-5xl md:text-3xl" />
          <h1 className="text-base sm:text-lg md:text-xl">
            Enjoy movies and Thank you for visiting our page!!!
          </h1>
        </div>

        {/* Social Icons */}
        <div className="flex text-3xl sm:text-4xl gap-6">
          <LiaWhatsapp className="cursor-pointer hover:text-green-700 transition" />
          <LiaInstagram className="cursor-pointer hover:text-pink-400 transition" />
          <LiaTwitter className="cursor-pointer hover:text-blue-400 transition" />
          <LiaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
