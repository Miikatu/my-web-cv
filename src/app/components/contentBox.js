export default function ContentBox() {
  return (

    <div className="p-10 h-full">
      <div className="bg-black  relative rounded ">
        <div id="box-violet" className=" grid grid-cols-4 pl-10 pt-5 pb-20 space-y-5 space-x-2 rounded -translate-x-4 -translate-y-4 bg-white">
          <h1 className="font-bold col-span-5 text-xl">Harrastukseni</h1>

          <div className="col-start-1">ohjelmointi</div>
          <div className="hidden sm:block bg-orange-100 col-start-2 col-span-2">Kuva</div>
          <div className="col-start-3 sm:col-start-4 w-fit bg-red-500 rounded px-2">Link</div>
          <div className="col-start-1">Gamedev</div>
          <div className="hidden sm:block bg-orange-200 col-start-2 col-span-2">Kuva</div>
          <div className="col-start-3 sm:col-start-4 w-fit bg-red-500 rounded px-2">Link</div>
          <div className="col-start-1">Piirtäminen</div>
          <div className="hidden sm:block bg-orange-300 col-start-2 col-span-2">Kuva</div>
          <div className="col-start-3 sm:col-start-4 w-fit bg-red-500 rounded px-2">Link</div>



        </div>
      </div>
    </div>
  )
}
