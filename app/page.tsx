import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    
    // <div className="p-5 bg-white min-h-screen text-black flex">
    //   {/* Left Side */}
    //   <div className="bg-[#0F172A]">
    //   <FontAwesomeIcon icon={faHome} />
    //   </div>
    //   {/*Right Side*/}
    //   <div className="bg-white">
        
    //   </div>
    // </div>
    <div className="min-h-screen bg-white text-black flex">
  
  {/* Left Side */}
  <div className="w-64 bg-[#0F172A] text-white p-5">
    <FontAwesomeIcon icon={faHome} />

    <h1 className="mt-5">
      Dashboard
    </h1>
  </div>

  {/* Right Side */}
  <div className="flex-1 bg-white p-5">
    
  </div>

</div>
  );
}
