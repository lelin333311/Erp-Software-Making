import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBank, faMoneyCheck, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Anta } from "next/font/google";

const anta = Anta({ subsets: ["latin"], weight: ["400"] })

export default function Page() {
  return (
    <div className={`${anta.className} min-h-screen bg-white text-black flex`}>
        <h1>Bank Information</h1>
    </div>
  )
}