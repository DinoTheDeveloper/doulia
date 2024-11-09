import { useCallback, useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, GraduationCap, ArrowRight, MenuIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
    return (
      <div className="relative w-6 h-6">
        {isOpen ? (
          <X className="h-6 w-6 text-blue-600 transition-all duration-300 ease-out" />
        ) : (
          <MenuIcon className="h-6 w-6 text-blue-600 transition-all duration-300 ease-out" />
        )}
      </div>
    );
  };

const LandingPage = () => {
    const navigate = useNavigate();
    const clickTimerRef = useRef<NodeJS.Timeout | null>(null);
    const clickCountRef = useRef(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const REQUIRED_CLICKS = 15;
    const CLICK_TIMEOUT = 2000;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleFooterClick = useCallback(() => {
        if (clickTimerRef.current) {
            clearTimeout(clickTimerRef.current);
        }
        clickCountRef.current += 1;
        clickTimerRef.current = setTimeout(() => {
            clickCountRef.current = 0;
        }, CLICK_TIMEOUT);
        if (clickCountRef.current === REQUIRED_CLICKS) {
            clickCountRef.current = 0;
            navigate('/admin');
        }
    }, [navigate]);

    return (
        <div className="w-full flex flex-col min-h-screen">
          {/* Navbar */}
          <nav
            className={`fixed w-full z-50 transition-all duration-200 ${
              isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white'
            }`}
          >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-blue-600">Doulia</h1>
                </div>
    
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4">
                  <Button
                    variant="ghost"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Sign In
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started
                  </Button>
                </div>
    
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="hover:bg-blue-50 p-2"
                  >
                    <HamburgerIcon isOpen={isMobileMenuOpen} />
                  </Button>
                </div>
              </div>
    
              {/* Mobile Menu */}
              <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen 
                    ? 'max-h-[500px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 py-4 bg-white/95 backdrop-blur-sm border-t space-y-3">
                  <Button
                    variant="ghost"
                    className="w-full text-blue-600 hover:bg-blue-50 group transition-all duration-300"
                  >
                    <span className="relative inline-flex items-center">
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </span>
                  </Button>
                  <Button
                    variant="default"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300"
                  >
                    <span className="relative inline-flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </nav>

            {/* Main Content */}
            <main className="flex-grow w-full">
                {/* Hero Section */}
                <section className="relative w-full pt-16 bg-gradient-to-b from-blue-50 to-white">
                    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                                Connecting Hellenic Youth with
                                <span className="text-blue-600"> Opportunities</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Your bridge to career opportunities in South Africa's Hellenic business community
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                    Get Started
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cards Section */}
                <section className="w-full py-20 bg-white">
                    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Job Seekers Card */}
                            <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <CardContent className="p-8">
                                    <div className="mb-6">
                                        <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                                            <GraduationCap className="h-8 w-8 text-blue-600" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4">For Job Seekers</h3>
                                    <p className="text-gray-600 mb-6">
                                        Find opportunities with Hellenic-owned companies and build your career
                                    </p>
                                    <Button
                                        className="w-full group bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        Browse Opportunities
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Companies Card */}
                            <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <CardContent className="p-8">
                                    <div className="mb-6">
                                        <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                                            <Building2 className="h-8 w-8 text-blue-600" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4">For Companies</h3>
                                    <p className="text-gray-600 mb-6">
                                        Post job listings and connect with talented Hellenic youth
                                    </p>
                                    <Button
                                        className="w-full group bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        Post a Job
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer remains the same */}
            <footer
                className="w-full bg-white border-t"
                onClick={handleFooterClick}
            >
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
                    <div className="text-center text-gray-600">
                        © {new Date().getFullYear()} Doulia™
                    </div>
                    <div className="text-center text-gray-600 mt-1">
                        Created by Costandino with ❤️
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;