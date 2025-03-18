'use client';

import Image from 'next/image';

export default function QRCode() {
  return (
    <div className="relative w-[176px] h-[176px] bg-white rounded-lg">
      {/* Discord Icon in the middle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg z-10">
          <Image
            src="/qr.png"
            alt="Discord Logo"
            width={40}
            height={40}
            className="w-[176px] h-[176px]"
          />
        </div>
      </div>

      {/* Loading Overlay */}
      <div className="absolute inset-0 bg-white/10 flex items-center justify-center rounded-lg overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}
