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
    title: "home",
    path: "/admin",
    icon: <HiOutlineHome />,
  },
  {
    id: 2,
    title: "courses",
    path: "/admin/courses",
    icon: <HiOutlineTv />,
  },
  {
    id: 3,
    title: "comments",
    path: "/admin/comments",
    icon: <HiOutlineChatBubbleBottomCenterText />,
  },
  {
    id: 4,
    title: "questions",
    path: "/admin/questions",
    icon: <HiOutlineChatBubbleLeftRight />,
  },
  {
    id: 5,
    title: "tickets",
    path: "/admin/tickets",
    icon: <HiOutlineTicket />,
  },
  {
    id: 6,
    title: "users",
    path: "/admin/users",
    icon: <HiOutlineUserGroup />,
  },
  {
    id: 7,
    title: "income",
    path: "/admin/income",
    icon: <HiOutlineBanknotes />,
  },
  {
    id: 8,
    title: "account",
    path: "/admin/account",
    icon: <HiOutlineUserCircle />,
  },
  {
    id: 9,
    title: "settings",
    path: "/admin/settings",
    icon: <HiOutlineCog8Tooth />,
  },
];

export const userMenu = [];
