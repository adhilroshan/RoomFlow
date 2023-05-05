import Navbar from "@/components/Navbar/Navbar";
import Image from 'next/image'
import logo from '../../public/logo/logo.svg'


export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <div className="p-20 flex h-[90vh] items-center justify-evenly ">
          <div>
            <h1 className="font-bold text-2xl lg:text-8xl text-primary lg:leading-snug">
              RoomFlow
            </h1>
            <p className="text-primary font-medium text-xl md:text-2xl">
              Blockchain-based platform for sustainable and affordable rentals.
            </p>
          </div>
          <div>
            <Image width={500} height={500} src={logo} />
          </div>
        </div>
      </div>
    </main>
  );
}
