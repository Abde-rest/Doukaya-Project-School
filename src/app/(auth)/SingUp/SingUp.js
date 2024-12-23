"use client";
import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import { signIn } from "next-auth/react";
import Spinner from "@/app/Componet/spinnerUi/spinner";

const SingUp = () => {
  let [isShow, setisShow] = useState(false);
  let [SpinnerisShow, setSpinnerisShow] = useState(false);
  // SingUp Fetch to api  router

  // resulte  is SingUp message
  let [MessageIfSingUp, setMessageIfSingUp] = useState({
    message: null,
    statusMesage: null,
  });

  let [DataUserSingUp, setDataUserSingUp] = useState({
    username: null,
    password: null,
  });

  const [errors, setErrors] = useState({ username: null, password: null });
  // Name
  const [SucessIconsNmae, setSucessIconsNmae] = useState(null);
  // password
  const [SucessIconspassword, setSucessIconspassword] = useState();

  // دالة التحقق من صحة البيانات
  const validate = () => {
    const newErrors = { username: "", password: "" };

    // التحقق من الاسم
    if (!/^[\u0600-\u06FFa-zA-Z0-9\s]{5,}$/.test(DataUserSingUp.username)) {
      newErrors.username = "الاسم يجب أن يكون بدون رموز، وبحد أدنى 5 أحرف.";
      setSucessIconsNmae(false);
    } else {
      setSucessIconsNmae(true);
    }
    if (!/^.{8,}$/.test(DataUserSingUp.password)) {
      newErrors.password = "يجب أن تحتوي كلمة المرور على اكثر من  8  أحرف  .";
      setSucessIconspassword(false);
    } else {
      setSucessIconspassword(true);
    }
    setErrors(newErrors);
    return !newErrors.username && !newErrors.password;
  };

  // إرسال البيانات إلى الخادم
  const HandelSingUp = async (e) => {
    e.preventDefault();
    setErrors("");
    if (!validate()) {
      return;
    }
    setSpinnerisShow(true);
    const res = await fetch("/api/SingUpUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(DataUserSingUp),
    });

    const result = await res.json();
    if (res.ok) {
      setMessageIfSingUp({
        message: result.message,
        statusMesage: true,
      });
      setSpinnerisShow(false);
      // Login The User after SingUp
      // Beacuse Get the session
      // The Sesion Hav a Name The User and Token
      await signIn("credentials", {
        username: DataUserSingUp.username,
        password: DataUserSingUp.password,
        // Her redirect
        redirect: true, //  إعادة التوجيه التلقائي
        callbackUrl: "/Niveaux", // وجهة إعادة التوجيه
      });
    } else {
      setMessageIfSingUp({
        message: result.message,
        statusMesage: false,
      });
      setSpinnerisShow(false);
      console.log("هناك مشكلة ");
    }
  };

  // async function HandelSingUp(e) {
  //   e.preventDefault();
  //   let res = await fetch("/api/SingUpUser", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(DataUserSingUp),
  //   });

  //   if (res.ok) {
  //     // Your Are Need To Get the Meesage adn set iin state Message
  //     console.log(await res.json());
  //   } else {
  //     // Your Are Need To Get the Meesage adn set iin state Message
  //     console.log(await res.json());
  //   }
  // }

  return (
    <div className="  container m-auto sm:block sm:px-10   ">
      <div className="flex sm:block justify-center">
        {" "}
        <form
          onSubmit={(e) => HandelSingUp(e)}
          className="max-w-sm m-auto mx-6 mt-20  relative bg-white sm:m-auto pl-10 pr-10 pb-5    pt-5 sm:mt-10 div_shdow">
          <Image
            className="w-20 h-20 absolute -top-11 left-1/2 -translate-x-1/2"
            src={require("@/public/UserInterface/user.png")}
            alt="LoginImage"
            priority
          />
          <div className="text-center mt-5">
            <h1>مرحبا بك </h1>
            <p className="text-sm  text-black/70 mt-1">
              يرجى إدخال بياناتك لتسجيل حسابك
            </p>
          </div>

          {MessageIfSingUp.statusMesage === true && (
            <div className="text-center text-sm bg-Suscces/70 p-2 mt-1 rounded-sm">
              {MessageIfSingUp.message}
            </div>
          )}
          {MessageIfSingUp.statusMesage === false && (
            <div className="text-center text-sm bg-red-400/70 p-2  mt-1 rounded-sm">
              {MessageIfSingUp.message}
            </div>
          )}

          {/* Name  */}
          <label
            for="website-admin"
            className="block mb-2 mt-4  text-sm font-medium text-black text-end">
            الأسم الكامل
          </label>
          <div className="mb-3 relative  ">
            {SucessIconsNmae === true && (
              <Image
                className="w-5 h-5 absolute top-1/2  -translate-y-1/2 -left-7"
                src={require("@/public/FormIcons/checked.png")}
                alt="checked"
              />
            )}
            {SucessIconsNmae === false && (
              <Image
                className="w-5 h-5  top-1/2  -translate-y-5 absolute  -left-7"
                src={require("@/public/FormIcons/delete.png")}
                alt="checked"
              />
            )}
            <div className="flex  ">
              <input
                type="text"
                dir="rtl"
                onChange={(e) =>
                  setDataUserSingUp({
                    ...DataUserSingUp,
                    username: e.target.value,
                  })
                }
                name="NameUser"
                className="outline-none text-right rtl  placeholder:text-black/40 border-black border-2 border-r-0 rounded-l-md   block flex-1 min-w-0 w-full text-sm p-2.5 bg-primary"
                placeholder="مثال : دقية بلخير "
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
            {errors.username && (
              <p className="text-red-500 text-xs mt-2 text-end">
                {errors.username}
              </p>
            )}
          </div>

          {/* Password  */}

          <label
            for="website-admin"
            className="block mb-2 text-sm font-medium text-black text-end">
            كلمة السر
          </label>
          <div className="relative ">
            {SucessIconspassword === true && (
              <Image
                className="w-5 h-5 absolute top-1/2  -translate-y-1/2 -left-7"
                src={require("@/public/FormIcons/checked.png")}
                alt="checked"
              />
            )}
            {SucessIconspassword === false && (
              <Image
                className="w-5 h-5  top-1/2  -translate-y-8 absolute  -left-7"
                src={require("@/public/FormIcons/delete.png")}
                alt="checked"
              />
            )}
            <div className="flex mb-3 relative ">
              <div className="w-full">
                {isShow ? (
                  <div
                    onClick={() => setisShow(!isShow)}
                    className=" p-1 absolute w-6 h-6 top-1/2 -translate-y-1/2 left-3 cursor-pointer rounded-full flex items-center justify-center">
                    <svg
                      className=" "
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div
                    onClick={() => setisShow(!isShow)}
                    className="hover:bg-black/20 p-1 absolute w-6 h-6 top-1/2 -translate-y-1/2 left-3 cursor-pointer rounded-full flex items-center justify-center">
                    <svg
                      className=" "
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <input
                  type={isShow ? "text" : "password"}
                  dir="rtl"
                  onChange={(e) =>
                    setDataUserSingUp({
                      ...DataUserSingUp,
                      password: e.target.value,
                    })
                  }
                  required
                  name="PasswordUser"
                  className="outline-none text-right rtl pl-10  placeholder:text-black/30 border-black border-2 border-r-0 rounded-l-md   block flex-1 min-w-0 w-full text-sm p-2.5 bg-primary"
                  placeholder="********"
                />
              </div>
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
            {errors.password && (
              <p className="text-red-500 text-xs text-end">{errors.password}</p>
            )}
          </div>

          {/* زر التتسحيل  */}

          <button
            type="submit"
            // className="  py-2 px-4 rounded-md  cursor-pointer  block mt-6 mb-0 bg-primaryV2 hover:bg-primaryV2/80"
            className="w-full  bg-primaryV2 text-black py-2 mt-3 rounded-md">
            {SpinnerisShow ? (
              <Spinner className={"w-4 h-4"} />
            ) : (
              <div>التتسحيل</div>
            )}
          </button>

          <p className="text-end mt-5">
            لديك حساب ؟
            <Link
              href={"/Login"}
              className="text-blue-600 hover:text-blue-300 underline">
              سجل دخولك
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
