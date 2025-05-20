"use client";
import React, { useState } from "react";
import { Input } from "../../../components/components/ui/input";
import { Button } from "../../../components/components/ui/button";
import Link from "next/link";
import Heading from "../../../components/components/ui/Heading";
import { Checkbox } from "../../../components/components/ui/checkbox";

const Page = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cellNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Form Submitted:\n${JSON.stringify(form, null, 2)}`);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log("Server Response:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen h-screen flex items-center justify-center relative">
      {/* Login Link */}
      <Link
        href="/login"
        className="absolute top-4 right-4 text-sm text-gray-800"
      >
        Login
      </Link>

      <div className="flex flex-col md:flex-row w-full max-w-7xl h-screen">
        {/* Video Section */}
        <div className="hidden md:flex w-1/2 h-screen">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Signup Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-2 p-6 sm:p-8"
          >
            <div className="text-center">
              <Heading text="Create Account" />
              <p className="text-sm text-gray-600 mt-2">
                Fill in the details to create your account
              </p>
            </div>

            <div>
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <Input
                id="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
                required
                className="w-full md:w-[350px]"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <Input
                id="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
                className="w-full md:w-[350px]"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
                className="w-full md:w-[350px]"
              />
            </div>

            <div>
              <label htmlFor="cellNumber" className="text-sm font-medium">
                Cell Number
              </label>
              <Input
                id="cellNumber"
                type="tel"
                value={form.cellNumber}
                onChange={handleChange}
                placeholder="03XX-XXXXXXX"
                required
                className="w-full md:w-[350px]"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="********"
                required
                className="w-full md:w-[350px]"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                required
                className="w-full md:w-[350px]"
              />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm leading-snug">
                Accept terms and conditions
              </label>
            </div>

            <div className="flex items-start gap-2 w-full md:w-[350px] mt-4">
              <Checkbox id="otp" />
              <label htmlFor="otp" className="text-sm leading-snug">
                I agree to the use of my cell number to receive One Time Pin
                (OTP) per login to protect my account.
              </label>
            </div>

            <Button type="submit" className="w-full md:w-[350px] mt-4">
              Signup
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
