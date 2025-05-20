"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Heading from "./ui/Heading";
import { useUserAuth } from "../../src/context/UserAuthContext";
import { useRouter } from "next/navigation"; // Correct router import

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, googleSignIn, facebookSignIn } = useUserAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      setError("");
      setEmail("");
      setPassword("");
      router.push("/dashboard"); // Navigate to home/dashboard after login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFacebookSignIn = async () => {
  try {
    await facebookSignIn();
    router.push("/dashboard");
  } catch (err: any) {
    setError(err.message);
  }
};

  return (
    <section className="bg-white min-h-screen h-screen flex items-center justify-center">
      {/* Login Container */}
      <Link
        href="/signup"
        className="absolute top-6 right-6 text-[14px] font-regular text-[#09090B]"
      >
        Signup
      </Link>
      <div className="bg-white flex flex-col md:flex-row w-full h-full items-center justify-between">
        {/* Video Section */}
        <div className="hidden md:block w-full md:w-1/2 h-full">
          <video
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-8 md:px-16">
          <form
            className="w-full max-w-sm space-y-3 justify-center"
            onSubmit={handleSubmit}
          >
            <div className="text-center">
              <Heading text="Login" />
              <p className="text-sm mt-4">
                Enter your email below to create your account
              </p>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-medium login-label"
              >
                Email
              </label>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="w-full md:w-[350px]"
                placeholder="name@example.com"
                required
                value={email}
              />
            </div>

            <div>
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700 login-label"
              >
                Password
              </label>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="w-full md:w-[350px]"
                placeholder="********"
                required
                value={password}
              />
            </div>

            <Button
              className="w-full md:w-[350px] mt-4"
              variant="default"
              size="lg"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </Button>

            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-card text-muted-foreground relative z-10 px-2">
                Or continue with
              </span>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col md:flex-row gap-4 w-full mt-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-[170px] flex items-center justify-center"
                type="button" // Not a submit button
                onClick={handleGoogleSignIn}
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

              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-[170px] flex items-center justify-center"
                type="button"
                onClick={handleFacebookSignIn}
                // Add facebook sign-in handler later if you want
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

            <div className="text-balance text-center text-xs text-[14px] text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
              By clicking continue, you agree to our{" "}
              <Link href="#">Terms of Service</Link> and{" "}
              <Link href="#">Privacy Policy</Link>.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
