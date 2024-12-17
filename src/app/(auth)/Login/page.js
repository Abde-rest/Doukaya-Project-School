import React from "react";
import PasswordUi from "./Coponent/PasswordUi";
import Image from "next/image";

const page = () => {
  return (
    <div className="  container m-auto sm:block sm:px-10   ">
      <div className="flex sm:block justify-center">
        <form className="max-w-sm m-auto mx-6 mt-20  relative bg-white sm:m-auto   p-10 pt-5 sm:mt-10 div_shdow">
          <Image
            className="w-20 h-20 absolute -top-11 left-1/2 -translate-x-1/2"
            src={require("@/public/UserInterface/user.png")}
            alt="LoginImage"
          />
          <div className="text-center mt-5">
            {" "}
            <h1>مرحبا بك </h1>
            <p className="text-sm  text-black/70 mt-1">
              يرجى إدخال بياناتك للوصول إلى حسابك
            </p>
          </div>

          {/* Name  */}
          <label
            for="website-admin"
            className="block mb-2 mt-4  text-sm font-medium text-black text-end">
            الأسم
          </label>
          <div className="flex mb-3  ">
            <input
              type="text"
              dir="rtl"
              className="outline-none text-right rtl  placeholder:text-black/40 border-black border-2 border-r-0 rounded-l-md   block flex-1 min-w-0 w-full text-sm p-2.5 bg-primary"
              placeholder="مثال :  محمد طوير "
            />
            <span className="inline-flex items-center px-3 text-sm  border-black border-2 border-l-0   rounded-r-lg  bg-primaryV2 ">
              <svg
                className="w-4 h-4 text-black "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
          </div>

          {/* Password  */}

          <label
            for="website-admin"
            className="block mb-2 text-sm font-medium text-black text-end">
            كلمة السر
          </label>
          <div className="flex mb-3 relative ">
            <PasswordUi />
            <span className="inline-flex items-center px-3 text-sm  border-black border-2 border-l-0   rounded-r-lg  bg-primaryV2 ">
              <svg
                className="w-4 h-4 text-black "
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 8.99994C17 8.48812 16.8047 7.9763 16.4142 7.58579C16.0237 7.19526 15.5118 7 15 7M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H7V19H9V17H11L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>

          <input
            type="submit"
            value={"تسجيل "}
            className=" m-auto py-2 px-4 rounded-md shadow shadow-black/25  cursor-pointer  block mt-6 mb-0 bg-primaryV2"
          />
        </form>
      </div>

      <p className="text-center absolute bottom-2 left-1/2 -translate-x-1/2 ">
        جميع الحقوق محفوظة © 2024
      </p>
    </div>
  );
};

export default page;
