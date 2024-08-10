"use client";
import Link from "next/link";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { MenuOpenState } from "../../../recoil/dashboardRecoil";
import "./sidebar.css";
const SideBar = () => {
  const menuOpen = useRecoilValue(MenuOpenState);

  // State to manage dropdown visibility
  const [showProducts, setShowProducts] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);

  return (
    <aside className={`sidebar ${!menuOpen ? "collapsed" : ""} bg-gray-50`}>
      <div className="mt-3">
        <Link
          href="/home"
          className="flex items-center gap-2 text-sm font-medium rounded-lg p-2 pb-4 transition-colors hover:bg-gray-100"
        >
          <ActivityIcon className="w-5 h-5" />
          {menuOpen && "Dashboard"}
        </Link>

        {/* Products Dropdown */}
        <div>
          <div
            onClick={() => setShowProducts(!showProducts)}
            className="flex items-center justify-between gap-2 text-sm font-medium rounded-lg p-2 pb-4 transition-colors hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <BoxIcon className="w-5 h-5" />
              {menuOpen && "Products"}
            </div>
            <svg
              className={`transition-transform transform ${
                showProducts ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {showProducts && menuOpen && (
            <div className="ml-4 space-y-2">
              <Link
                href="/products"
                className="block p-2 text-sm hover:bg-gray-200"
              >
                List All
              </Link>
              <Link
                href="/new-product"
                className="block p-2 text-sm hover:bg-gray-200"
              >
                Create New
              </Link>
            </div>
          )}
        </div>

        {/* Orders Dropdown */}
        <div>
          <div
            onClick={() => setShowOrders(!showOrders)}
            className="flex items-center justify-between gap-2 text-sm font-medium rounded-lg p-2 pb-4 transition-colors hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <ShoppingBagIcon className="w-5 h-5" />
              {menuOpen && "Orders"}
            </div>
            <svg
              className={`transition-transform transform ${
                showOrders ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {showOrders && menuOpen && (
            <div className="ml-4 space-y-2">
              <Link
                href="/orders"
                className="block p-2 text-sm hover:bg-gray-200"
              >
                List All
              </Link>
              <Link
                href="/new-order"
                className="block p-2 text-sm hover:bg-gray-200"
              >
                Create New
              </Link>
            </div>
          )}
        </div>

        {/* Customers Dropdown */}
        <div>
          <div
            onClick={() => setShowCustomers(!showCustomers)}
            className="flex items-center justify-between gap-2 text-sm font-medium rounded-lg p-2 pb-4 transition-colors hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <UsersIcon className="w-5 h-5" />
              {menuOpen && "Customers"}
            </div>
            <svg
              className={`transition-transform transform ${
                showCustomers ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {showCustomers && menuOpen && (
            <div className="ml-4 space-y-2">
              <Link
                href="/customers"
                className="block p-2 text-sm hover:bg-gray-200"
              >
                List All
              </Link>
              <Link
                href="/new-customer"
                className="block p-2 text-sm hover:bg-gray-200"
              >
                Create New
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function BoxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function ShoppingBagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
