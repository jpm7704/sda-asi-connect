
import { Button } from "@/components/ui/button";
import { Database, Users, Building2, Network } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">SDA ASI</h1>
              <p className="text-sm text-muted-foreground">We Do Business Together</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#database" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Database className="h-4 w-4" />
              <span>Database</span>
            </a>
            <a href="#profiles" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Users className="h-4 w-4" />
              <span>Personal</span>
            </a>
            <a href="#companies" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Building2 className="h-4 w-4" />
              <span>Companies</span>
            </a>
            <a href="#network" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Network className="h-4 w-4" />
              <span>Network</span>
            </a>
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
