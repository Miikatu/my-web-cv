export default function Navbar() {
  return (

    <div className="p-10 ">


      <div className="bg-black  relative rounded ">
        <div id="box-violet" className=" grid grid-cols-4 rounded -translate-x-4 -translate-y-4 bg-violet-600">
          <img className="flex-auto grid-start-2" src="/assets/logo.svg" alt="Logo" />
          <div id="navbar-list" className="flex space-x-6">
            <a>Miiperi</a>
            <a>Miip</a>
            <a>A</a>
            <a>b</a>
          </div>
        </div>

      </div>

    </div>
  )
}
