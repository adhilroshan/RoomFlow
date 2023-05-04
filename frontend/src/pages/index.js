import Image from 'next/image';
import Navbar from "@/components/Navbar/Navbar";
import logo from "../../public/logo/logo-side.png";


export default function Home() {
  return <main>
    <div className="bg-background w-screen h-screen font-robo">
      <Navbar />
      <div className="flex items-center justify-evenly">
        <div>
          <h1>Room Flow</h1>
        </div>
        <div>
          <Image src={logo} />
        </div>
      </div>
    </div>
  </main>;
}
