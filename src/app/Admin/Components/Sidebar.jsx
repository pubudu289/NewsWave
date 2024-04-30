"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import classNames from "classnames";

import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "../../Admin/Components/icons";

const menuItems = [
  { id: 1, label: "Dashboard", icon: HomeIcon, link: "/Admin/dashboard" },
  {
    id: 2,
    label: "Add New Artical",
    icon: ArticleIcon,
    link: "/Admin/add_new_artical",
  },
  {
    id: 3,
    label: "All Articals",
    icon: ArticleIcon,
    link: "/Admin/all_articals",
  },

  { id: 4, label: "Manage Users", icon: UsersIcon, link: "/Admin/manage_user" },
  {
    id: 5,
    label: "Manage Tutorials",
    icon: VideosIcon,
    link: "/",
  },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = usePathname();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router),
    [router]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-gray-100 flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collaseIconClasses = classNames(
    "p-4 rounded bg-white absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-red-100 rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-blue-400"]: activeMenu && activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1)0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-lg font-medium text-teal-950", {
                hidden: toggleCollapse,
              })}
            >
              <p className="text-blue-600 text-[15px]">News Wave</p>
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collaseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>
        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);

            return (
              <div key={menu.id} className={classes}>
                <Link
                  href={menu.link}
                  className="flex py-4 px-3 items-center w-full h-full"
                >
                  <div style={{ width: "2.5rem" }}>
                    <Icon />
                  </div>
                  {!toggleCollapse && (
                    <span
                      className={classNames(
                        "text-md font-medium text-gray-500"
                      )}
                    >
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-gray-500")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
