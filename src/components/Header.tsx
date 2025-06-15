
import { Button } from "@/components/ui/button";
import { Database, Users, Building2, Network, Calendar, QrCode } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">SDA ASI</h1>
              <p className="text-sm text-muted-foreground">We Do Business Together</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/database" 
              className={`flex items-center space-x-2 transition-colors ${
                isActive('/database') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <Database className="h-4 w-4" />
              <span>Database</span>
            </Link>
            <Link 
              to="/profiles" 
              className={`flex items-center space-x-2 transition-colors ${
                isActive('/profiles') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Profiles</span>
            </Link>
            <Link 
              to="/companies" 
              className={`flex items-center space-x-2 transition-colors ${
                isActive('/companies') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Companies</span>
            </Link>
            <Link 
              to="/events" 
              className={`flex items-center space-x-2 transition-colors ${
                isActive('/events') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </Link>
            <Link 
              to="/chapters" 
              className={`flex items-center space-x-2 transition-colors ${
                isActive('/chapters') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Chapters</span>
            </Link>
            <Link 
              to="/digital-cards" 
              className={`flex items-center space-x-2 transition-colors ${
                isActive('/digital-cards') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <QrCode className="h-4 w-4" />
              <span>Digital Cards</span>
            </Link>
            <Link 
              to="/network" 
              className={`flex items-center space-x-2 transition-colors ${
                isActive('/network') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <Network className="h-4 w-4" />
              <span>Network</span>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
