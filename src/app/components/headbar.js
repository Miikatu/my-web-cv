import Headline from './basics/headline'
import ImageFrame from './basics/imageFrame'
// src/app/assets/pictures/blueprint_still.jpeg
export default function Headbar() {
    return (
  
      <div className="px-10 ">
        <div className="bg-black  relative rounded ">
          <div id="box-violet" className="text-center rounded -translate-x-4 -translate-y-4 bg-yellow-300">
            <Headline headline="Longer headlinen that requires shrinking of text size"/>
            <ImageFrame />
          </div>
        </div>
      </div>
    )
  }
  