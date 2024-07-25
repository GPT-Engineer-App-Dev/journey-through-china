import React from 'react';
import { Package2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Package2 className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">About</a>
            <a href="#" className="hover:text-foreground">Contact</a>
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Acme Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
