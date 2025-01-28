import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Fundify
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/campaigns" className="text-gray-600 hover:text-primary">
              Explore
            </Link>
            <Link to="/start" className="text-gray-600 hover:text-primary">
              Start a Campaign
            </Link>
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button>Sign In</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <Link
                to="/campaigns"
                className="text-gray-600 hover:text-primary px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Explore
              </Link>
              <Link
                to="/start"
                className="text-gray-600 hover:text-primary px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Start a Campaign
              </Link>
              <Button variant="outline" className="justify-start" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button>Sign In</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;