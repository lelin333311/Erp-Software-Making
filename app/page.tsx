import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBank, faMoneyCheck, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Anta } from "next/font/google";

const anta = Anta({ subsets: ["latin"], weight: ["400"] })

export default function DashboardPage() {
  return (
    <div className={`${anta.className} min-h-screen bg-white text-black flex`}>

      {/* Left Side */}
      <div className="max-w-80 w-full bg-[#0F172A] text-white p-5 align-center gap-5 flex flex-col">
        {/* Dashboard */}
        <Link href="/" className="flex item-center gap-3 border px-6 py-3">
          <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
          <h5 className="text-sm">Dashboard</h5>
        </Link>

        {/* Bank */}
        <Link href="/bank-information" className="flex item-center gap-3 border px-6 py-3">
          <FontAwesomeIcon icon={faBank} className="w-4 h-4" />
          <h5 className="text-sm">Bank Information</h5>
        </Link>

        {/* Bank Statement */}
        <Link href="/bank-statement" className="flex item-center gap-3 border px-6 py-3">
          <FontAwesomeIcon icon={faMoneyCheck} className="w-4 h-4" />
          <h5 className="text-sm">Bank Statement</h5>
        </Link>

        {/* Customers Information */}
        <Link href="/customer-information" className="flex item-center gap-3 border px-6 py-3">
          <FontAwesomeIcon icon={faUsersGear} className="w-4 h-4" />
          <h5 className="text-sm">Customer Information</h5>
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-white p-5">

      </div>

    </div>
  );
}
