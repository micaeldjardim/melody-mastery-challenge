
import { Link, useLocation } from "react-router-dom";
import { Home, User, Trophy, Music, UserPlus } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/profile", icon: User, label: "Profile" },
    { path: "/friends", icon: UserPlus, label: "Friends" },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
    { path: "/practice", icon: Music, label: "Practice" },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:relative md:border-t-0">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex justify-around items-center md:justify-end md:space-x-8">
          {navItems.map(({ path, icon: Icon, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex flex-col items-center p-2 transition-colors duration-200 ${
                  isActive(path)
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
