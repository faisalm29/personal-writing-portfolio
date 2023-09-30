import Profile from "@/components/Profile";
import Image from "next/image";
import Works from "@/components/Works";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mb-16">
      <div className="grid grid-cols-12 gap-12">
        <div className="relative col-span-5 col-start-2 row-span-2 row-start-1">
          <Image
            src="/images/profile-picture.png"
            fill={true}
            objectFit="cover"
            alt="Picture of the author"
          />
        </div>
        <div className="col-span-5 col-start-7 row-span-1 row-start-1">
          <Works />
        </div>
        <div className="col-span-5 col-start-7 row-span-1 row-start-2">
          <Profile />
        </div>
      </div>
    </main>
  );
}
