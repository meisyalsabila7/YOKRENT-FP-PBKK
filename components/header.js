import Link from "next/link"

export default function header() {
  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input type="text" className="input-text" placeholder="search..."></input>
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href={"/login"} className="font-bold uppercase 3xl">
                    Login
                </Link>
            </div>
            <div className="w-96 order-3 flex jusstify-center">
                <div className="flex gap-6">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Category</Link>
                    <Link href={"/"}>Book Car</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

