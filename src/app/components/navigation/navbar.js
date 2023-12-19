import Link from "next/link"

export default function Navbar() {
  return (
    <div className="mt-auto pt-5 top-0 z-50 md:px-12 sticky">
      <div className="bg-black rounded ">
        <div id="box-violet" className="grid grid-cols-5 py-10 rounded -translate-x-4 -translate-y-4 bg-violet-700">
          <div className="col-start-2 col-span-5 flex ">
            <div className="mr-auto">
              <span className="font-sans text-white text-4xl">My portfolio</span>
              <span className="animate-pulse text-black-100 fol-bold text-2xl">| By Miikatti</span>
            </div>
            <div className="mr-auto my-auto md:space-x-5 lg:space-x-14 ">
              <a href="/#" className="hover:bg-white bg-rounded bg-clip-bprder border-8 border-transparent rounded-2xl">About</a>
              <a href="#contentBox" className="hover:bg-white bg-rounded bg-clip-bprder border-8 border-transparent rounded-2xl">Projects</a>
              <Link href="" className="hover:bg-white bg-rounded bg-clip-bprder border-8 border-transparent rounded-2xl">Contacts</Link>
              <Link href="" className="hover:bg-white bg-rounded bg-clip-bprder border-8 border-transparent rounded-2xl">Hobbies</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
