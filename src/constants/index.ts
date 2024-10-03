import { IconType } from "react-icons";
import { FaHome, FaSuitcase   } from "react-icons/fa"; // Import your icons
import { IoIosPeople, IoMdNotifications } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";


interface NavLinks {
  navTitle: string;
  navIcon: IconType;
}
export const navLinks: NavLinks[] = [
  {
    navTitle: "Home",
    navIcon: FaHome,
  },
  {
    navTitle: "Jobs",
    navIcon: FaSuitcase,
  },
  {
    navTitle: "Employers",
    navIcon: IoIosPeople,
  },
  {
    navTitle: "Notifications",
    navIcon: IoMdNotifications,
  },
  {
    navTitle: "Messaging",
    navIcon: FaRegMessage,
  },
];
