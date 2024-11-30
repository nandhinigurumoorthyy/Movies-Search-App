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
    <div>
      <div className="bg-neutral-800 text-neutral-50 h-24 flex justify-around items-center">
        <div className="text-3xl flex gap-3">
          <BiSolidCameraMovie />
          <h1 className=" italic underline">Movies Search App</h1>
        </div>
        <div className="flex text-4xl gap-5">
          <LiaWhatsapp />
          <LiaInstagram />
          <LiaTwitter />
          <LiaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
