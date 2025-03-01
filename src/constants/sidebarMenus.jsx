import {
  HiOutlineHome,
  HiOutlineTicket,
  HiOutlineUserCircle,
  HiOutlineUserGroup,
} from "react-icons/hi";
import {
  HiOutlineBanknotes,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCog8Tooth,
  HiOutlineTv,
} from "react-icons/hi2";

export const adminMenu = [
  {
    id: 1,
    faTitle: "خانه",
    enTitle: "Home",
    path: "/admin",
    icon: <HiOutlineHome />,
  },
  {
    id: 2,
    faTitle: "دوره ها",
    enTitle: "Courses",
    path: "/admin/courses",
    icon: <HiOutlineTv />,
  },
  {
    id: 3,
    faTitle: "کامنت ها",
    enTitle: "Comments",
    path: "/admin/comments",
    icon: <HiOutlineChatBubbleBottomCenterText />,
  },
  {
    id: 4,
    faTitle: "پرسش ها",
    enTitle: "Questions",
    path: "/admin/questions",
    icon: <HiOutlineChatBubbleLeftRight />,
  },
  {
    id: 5,
    faTitle: "تیکت ها",
    enTitle: "Tickets",
    path: "/admin/tickets",
    icon: <HiOutlineTicket />,
  },
  {
    id: 6,
    faTitle: "کاربران",
    enTitle: "Users",
    path: "/admin/users",
    icon: <HiOutlineUserGroup />,
  },
  {
    id: 7,
    faTitle: "درآمد",
    enTitle: "Income",
    path: "/admin/income",
    icon: <HiOutlineBanknotes />,
  },
  {
    id: 8,
    faTitle: "حساب کاربری",
    enTitle: "Account",
    path: "/admin/account",
    icon: <HiOutlineUserCircle />,
  },
  {
    id: 9,
    faTitle: "تنظیمات",
    enTitle: "Settings",
    path: "/admin/settings",
    icon: <HiOutlineCog8Tooth />,
  },
];

export const userMenu = [];
