import { Home, Info, Users, HelpCircle } from "lucide-react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
    const location = useLocation();

    const menuItems = [
        { label: "Beranda", href: "/", icon: <Home size={18} /> },
        { label: "Tentang", href: "/about", icon: <Info size={18} /> },
        { label: "Narasumber", href: "/speakers", icon: <Users size={18} /> },
        { label: "FAQ", href: "/faq", icon: <HelpCircle size={18} /> },
    ];

    return (
        <header className="bg-white shadow-sm px-6 py-3 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">

                {/* Logo */}
                <div className="logo flex items-center gap-2">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
                        alt="logo"
                        className="h-12 object-contain"
                    />
                </div>

                {/* Navigation */}
                <nav className="flex gap-2">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.href;

                        return (
                            <RouterNavLink
                                key={item.label}
                                to={item.href}
                                className={`
                  flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
                  ${isActive
                                        ? "bg-blue-100 text-blue-600"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    }
                `}
                            >
                                {item.icon}
                                {item.label}
                            </RouterNavLink>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};

export default Header;