import Image from "next/image"
import Link from "next/link"

export default function section1() {
  return (
    <section className="py-16">
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Car Rental Website</h1>
            { Slide() }
        </div>
    </section>
  )
}

function Slide(){
    return(
        <div className="grid md:grid-cols-2 gap-10">
            <div className="image">
                <Image src={"/images/main-img.jpg"} width={600} height={600}></Image>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Great car, affordable price!!!</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">Spend your great vacation with us!!!</Link>
                </div>
                {/* <p className="text-gray-500 py-3">
                    This is the description of our rental website, amazing car in afforadble price
                </p> */}
                <div className="py-10">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Booking Now
                    </button>
                </div>
            </div>
        </div>
    )
}
