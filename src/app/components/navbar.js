export default function Navbar() {
  return (

    <div className="p-10 ">
      <div className="bg-black relative rounded ">
        <div id="box-violet" className="grid grid-cols-4 rounded place-items-center -translate-x-4 -translate-y-4 bg-violet-600">
          <img id="logo" className=" col-start-1  m-2 pl-2 grid-start-1 col-span-1" src="/assets/logo.svg" alt="Logo" />
          <div id="navbar-buttons" className="col-start-3 sm:hidden shrink-0 flex ">
            <img className="h-14 w-14 bg-rounded hover:bg-white bg-clip-border border-8 border-transparent rounded-2xl" src="/assets/home.svg" alt="Logo" />
            <img className="h-12 w-12 " src="/assets/hamburger.svg" alt="Logo" />
          </div>
    
          <div className=" col-start-3 lg:col-start-2 col-span-1 md:col-span-3 md:space-x-5 lg:space-x-14 hidden sm:flex place-items-center">
            <a className="hover:bg-white bg-rounded bg-clip-bprder border-8 border-transparent rounded-2xl ">Miiperi</a>
            <a className="hover:bg-white bg-rounded bg-clip-bprder border-8 border-transparent rounded-2xl">Miip A</a>
            <a className="hover:bg-white bg-rounded bg-clip-bprder border-8 border-transparent rounded-2xl">Miiperi B</a>
            <a className="hover:bg-white bg-rounded bg-clip-bprder border-8 border-transparent rounded-2xl">C-Miiperi</a>
          </div>
          <div className="sm:hidden col-start-1 col-span-4  flex justify-center w-full ">
            <ul className="space-y-5 w-fit">
              <div className=" tracking-widest hover:bg-white hover:rounded-full w-fit px-2"><a href="">miiperi han</a></div>
              <div className="tracking-widest hover:bg-white hover:rounded-full w-fit px-2"><a href="">miiperi</a></div>
              <div className="tracking-widest hover:bg-white hover:rounded-full w-fit px-2"><a href="">miiperi</a> </div>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
