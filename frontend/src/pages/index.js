import Navbar from "@/components/Navbar/Navbar";
import Image from 'next/image'
import logo from '../../public/logo/logo.svg'


export default function Home() {
  return <main>
    <div>
      <Navbar />
      <div className="lg:flex items-center justify-evenly lg:p-20 p-10">
        <div>
          <h1 className='font-bold text-2xl lg:text-7xl text-primary lg:leading-snug'>RoomFlow: Blockchain-based platform for sustainable and affordable rentals.</h1>
        </div>
        <div>
          <Image width={800} height={800} src={logo} />
        </div>
      </div>
    </div>
  </main>;
}
