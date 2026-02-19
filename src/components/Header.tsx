import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu, Sun, Moon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { useLocation, useNavigate, Link } from "react-router";
import { cn } from "@/lib/utils";
import i18n from "@/lib/i18n";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/o-nas";
  const isServicesPage = location.pathname === "/zakres-uslug";
  const isContactPage = location.pathname === "/kontakt";
  const isServicePage = [
    "/systemy-bezpieczenstwa",
    "/systemy-pozarowe",
    "/bms",
    "/systemy-teletechniczne",
  ].includes(location.pathname);

  useEffect(() => {
    setMounted(true);

    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18n.language);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsMenuVisible(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
        }
        closeTimeoutRef.current = setTimeout(() => {
          setIsMenuOpen(false);
        }, 100);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isHomePage && location.hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isHomePage, location.hash]);

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem("language", value);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 100);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      const element = document.querySelector("#top");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 sm:px-12 py-2 md:py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              onClick={handleLogoClick}
              className="h-12 md:h-16 object-contain cursor-pointer"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link to="/o-nas" className={cn("nav-link", isAboutPage && "active")}>
              {t("header.about")}
            </Link>
            <Link
              to="/zakres-uslug"
              className={cn("nav-link", (isServicesPage || isServicePage) && "active")}
            >
              {t("header.services")}
            </Link>
            <Link to="/kontakt" className={cn("nav-link", isContactPage && "active")}>
              {t("header.contact")}
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {mounted && theme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <div className="relative">
              <Select value={currentLanguage} onValueChange={handleLanguageChange}>
                <SelectTrigger
                  className="w-[60px] bg-popover text-popover-foreground"
                  aria-label={t("header.selectLanguage")}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pl">PL</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="ua">UA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {mounted && theme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              ref={menuButtonRef}
              onClick={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                }
                setIsMenuOpen(!isMenuOpen);
              }}
              aria-label={t("header.menu")}
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>

        {isMenuVisible && (
          <div
            ref={menuRef}
            className={cn(
              "md:hidden mt-4 pb-4 flex flex-col gap-4 transition-all duration-100 ease-in-out",
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none",
            )}
          >
            <Link
              to="/o-nas"
              onClick={() => closeMenu()}
              className={cn("nav-link text-left", isAboutPage && "active")}
            >
              {t("header.about")}
            </Link>
            <Link
              to="/zakres-uslug"
              onClick={() => closeMenu()}
              className={cn("nav-link text-left", (isServicesPage || isServicePage) && "active")}
            >
              {t("header.services")}
            </Link>
            <Link
              to="/kontakt"
              onClick={() => closeMenu()}
              className={cn("nav-link text-left", isContactPage && "active")}
            >
              {t("header.contact")}
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant={currentLanguage === "pl" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  handleLanguageChange("pl");
                  closeMenu();
                }}
                aria-label={`${t("header.language")} PL`}
              >
                PL
              </Button>
              <Button
                variant={currentLanguage === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  handleLanguageChange("en");
                  closeMenu();
                }}
                aria-label={`${t("header.language")} EN`}
              >
                EN
              </Button>
              <Button
                variant={currentLanguage === "ua" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  handleLanguageChange("ua");
                  closeMenu();
                }}
                aria-label={`${t("header.language")} UA`}
              >
                UA
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
