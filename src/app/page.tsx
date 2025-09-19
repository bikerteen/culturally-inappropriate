import Image from "next/image";
import { Jersey_10 } from "next/font/google";

const Jerseyfont = Jersey_10({
  subsets: ["latin"],
  weight: '400',
  style: 'normal'
});

export default function Home() {
  return (
    <div className="${Jerseyfont.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>This is Culturally Inappropriate</h1>
      </main>
    </div>
  );
}
