import { Link } from "react-router";
import React from "react";
import {IoBookOutline} from "react-icons/io5";
import {CiBookmarkCheck, CiCalendar} from "react-icons/ci";
import {RiHomeLine} from "react-icons/ri";

interface Page {
    name: string;
    path: string;
    public: boolean;
    icon: React.ReactNode;
}

const pages: Page[] = [
    { name: 'Home', path: '/', public: true, icon: <RiHomeLine />},
    { name: 'Courses', path: '/courses', public: false, icon: <IoBookOutline /> },
    { name: 'Calendar', path: '/calendar', public: false, icon: <CiCalendar />},
    { name: 'Results', path: '/results', public: false, icon: <CiBookmarkCheck /> },
];

interface SideMenuProps {
    showPublicOnly?: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ showPublicOnly = false }) => {
    const filteredPages = showPublicOnly
        ? pages.filter(page => page.public)
        : pages;

    return (
        <div className="flex-1">
            <div className="flex flex-col">
                {filteredPages.map((page) => (
                    <Link
                        key={page.path}
                        to={page.path}
                        className="flex items-center text-gray-700 font-medium px-4 py-4 rounded-2xl transition-all duration-200 hover:bg-blue-600 hover:text-white"
                    >
                        <span className="mr-3 text-xl">{page.icon}</span>
                        {page.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SideMenu;
