
import { Database, Users, Building2, Network } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Database className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">SDA ASI</h3>
                <p className="text-sm opacity-80">We Do Business Together</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              The ultimate platform for networking, database creation, and business opportunities. 
              Where preparation meets opportunity.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#database" className="hover:opacity-100 transition-opacity">Database Creation</a></li>
              <li><a href="#profiles" className="hover:opacity-100 transition-opacity">Personal Profiles</a></li>
              <li><a href="#companies" className="hover:opacity-100 transition-opacity">Company Profiles</a></li>
              <li><a href="#network" className="hover:opacity-100 transition-opacity">Network</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Documentation</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">API Reference</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Success Stories</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 SDA ASI Platform. All rights reserved. Building connections, creating opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
