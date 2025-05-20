"use client";
import React, { useState } from "react";
import Link from "next/link";
import Heading from "../../../components/components/ui/Heading";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../../components/components/ui/input-otp";
import { Button } from "../../../components/components/ui/button";
import Image from "next/image";

const Page = () => {
  return (
    <section className="bg-gray-50 min-h-screen h-screen flex items-center justify-center relative">
      {/* Login Link */}
      <Link
        href="/signup"
        className="absolute top-4 right-4 text-sm text-gray-800"
      >
        Back to Sin Up
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
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10 space-y-6">
          <div className="w-full max-w-md">
            <div className="text-center">
              <Heading text="OTP Verification" />
            </div>
            <div className="w-full max-w-md space-y-2 p-6 sm:p-8 flex flex-col justify-center align-center items-center">
              <div>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button type="submit" className="w-full md:w-[350px] mt-4">
                Continue
              </Button>
              <div>
                <p className="text-center">Didn’t receive the code?</p>
              </div>
              {/* Social Buttons */}
              <div>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-[350px] mt-4"
                  type="submit"
                >
                  <Image
                    src="/assets/icons/googleicon.png"
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Google
                </Button>
              </div>
              <div>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-[350px] mt-4"
                >
                  <Image
                    src="/assets/icons/facebook.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
