import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

import Topbar from "../header/Topbar";
import FooterComponent from "../footer/FooterComponent";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <FaUser />,
  },
  {
    path: "/parvej",
    name: "parvej",
    icon: <FaUser />,
  },
  {
    path: "/my-claims",
    name: "My Claims",
    icon: <MdMessage />,
  },
  {
    path: "/lodge-claim",
    name: "Lodge a Claim",
    // icon: <BiAnalyse />,
  },
  {
    path: "/reports",
    name: "Reports",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/reports/annual-report",
        name: "Annual Report",
        icon: <FaUser />,
      },
      {
        path: "/reports/half-yearly-report",
        name: "Half Yearly Report",
        icon: <FaLock />,
      },
      {
        path: "/reports/monthly",
        name: "Monthly Report",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/investment",
    name: "Investment",
    icon: <BsCartCheck />,
  },
  {
    path: "/reports-2",
    name: "Report 2",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/reports/annual-report",
        name: "Annual Report",
        icon: <FaUser />,
      },
      {
        path: "/reports/half-yearly-report",
        name: "Half Yearly Report",
        icon: <FaLock />,
      },
      {
        path: "/report/monthly",
        name: "Monthly Report",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/faq",
    name: "FAQ",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 15,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  CMSF
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            
            </div>
          </div>
        
          <section className="routes">  
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main> <Topbar /> {children}
        <FooterComponent />
         </main>
      </div>
    </>
  );
};

export default SideBar;
