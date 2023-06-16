"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import car from "../../../public/assets/img_car.png";
import CustomInput from "../../components/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import React, { useRef, useState } from "react";

const LoginPage = () => {
  // const email = useRef("");
  // const password = useRef("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleUser = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const result = await signIn("credentials",{
      email: email,
      password: password,
      redirect: true,
      callbackUrl:`${window.location.origin}/cari-mobil`,
    });
  console.log(result);
  // localStorage.setItem("isLogin", true);
  // router.push("/");
  // router.refresh();
};

  return (
    <>
      <div className="mx-auto max-w-screen-xl py-9">
        <div className="flex md:flex-row flex-col justify-center items-center">
          <div className="w-full md:w-1/2 p-8">
            <form onSubmit={handleUser}>
            <h1 className="font-bold text-3xl text-center">Welcome back!</h1>
            <CustomInput
              label="Email Address"
              placeholder="Insert your email"
              name="email"
              type="email"
              onchange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              label="Password"
              placeholder="Insert your password"
              name="password"
              type="password"
              onchange={(e) => setPassword(e.target.value)}
            />
            <div className="gap-3 flex">
              <input type="checkbox" />
              <label>Keep me logged in</label>
            </div>
            <div>
              <button className="bg-[#5CB85F] rounded w-full py-2 px-4 text-white my-4">
                Log in
              </button>
            </div>              
            </form>
            <p color="#5F6D7E">
              Don't have an account?{" "}
              <Link href="/register">
                <strong>Register</strong>
              </Link>
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={car} alt="" className=" w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
