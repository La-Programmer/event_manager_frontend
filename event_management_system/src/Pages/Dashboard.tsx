import daimond from "../assets/daimond.png";
import LogoIcon from "../components/icons/LogoIcon";
import SideBar from "../components/SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${daimond})`,
          backgroundColor: "#03060A",
          backgroundAttachment: "fixed",
          overflowY: "auto",
        }}
        className="w-full h-dvh bg-no-repeat bg-center"
      >
        <div className="max-w-[1400px] mx-auto">

        <div className="flex justify-center items-center pt-7">
          <LogoIcon />
        </div>
        <div className="flex mt-10 gap-3">
          {/* Sidebar */}
          <aside
            className={` w-64 shadow-md ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <SideBar></SideBar>
          </aside>

          {/* Main content area */}
          <div className="flex-1">

            {/* Button for Mobile Sidebar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={toggleSidebar}
                className="md:hidden text-gray-700 focus:outline-none"
              >
                {/* Icon for the menu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Main Dashboard Content, navigate pages using Outlet */}
            <Outlet />
           
          </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Dashboard;
