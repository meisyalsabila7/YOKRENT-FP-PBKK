/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from "next/image";
import car from "../../../public/assets/img_car.png";
import CustomInput from "../../components/input";
import Link from "next/link";
import { useState } from "react";
export default function Page() {

  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, telephone, password);
    const jsonForm = JSON.stringify({ email: email, telephone: telephone, password: password, nama: nama, username: username, alamat: alamat })
    const response = await fetch('http://localhost:3000/api/auth/register', { method: 'POST', body: jsonForm });
    const responseJson = await response.json();
    console.log(responseJson);

  }

  return (
    <>
      <div className="mx-auto max-w-screen-xl py-9">
        <div className="flex md:flex-row flex-col justify-center items-center">
          <div className="w-full md:w-1/2 p-8">
            <form onSubmit={handleSubmit}> 
              <h1 className="font-bold text-3xl text-center">Join Us!</h1>
              <CustomInput
                label="Email Address"
                placeholder="Insert your email"
                name="email"
                type="email"
                value={email}
                onchange={(e) => setEmail(e.target.value)}
              />
              <CustomInput
                label="Username"
                placeholder="Insert your Username"
                name="username"
                type="text"
                value={username}
                onchange={(e) => setUsername(e.target.value)}
              />
              <CustomInput
                label="Nama"
                placeholder="Insert your Nama"
                name="nama"
                type="text"
                value={nama}
                onchange={(e) => setNama(e.target.value)}
              />
              <CustomInput
                label="Alamat"
                placeholder="Insert your Alamat"
                name="alamat"
                type="text"
                value={alamat}
                onchange={(e) => setAlamat(e.target.value)}
              />
              <CustomInput
                label="Telephone"
                placeholder="Insert your number"
                name="telephone"
                type="tel"
                value={telephone}
                onchange={(e) => setTelephone(e.target.value)}
              />
              <CustomInput
                label="Password"
                placeholder="Insert your password"
                name="password"
                type="password"
                value={password}
                onchange={(e) => setPassword(e.target.value)}
              />
              <CustomInput
                label="Confirm Password"
                placeholder="Confirm your password"
                name="confirm-password"
                type="password"
              />
              <div className="gap-3 flex">
                <input type="checkbox" />
                <label>
                  By tapping “Sign Up” you accept our terms and condition
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#5CB85F] rounded w-full py-2 px-4 text-white my-4"                
              >
                Register
              </button>
              <p color="#5F6D7E">
                Already have an account?{" "}
                <Link href="/login">
                  <strong>Log in</strong>
                </Link>
              </p>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={car} alt="" className=" w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
