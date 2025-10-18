import { Link } from "react-router-dom";
import { Mail, Send, Instagram } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Goals", path: "/goals" },
    { name: "Learn", path: "/education" },
    { name: "Reports", path: "/reports" },
    { name: "Assistant", path: "/assistant" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About MoneyTalks</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              MoneyTalks is your personal finance assistant, helping you track spending, 
              set goals, and build financial literacy for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:support@smartwallet.com"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>support@moneytalks.com</span>
              </a>
              <a
                href="https://t.me/moneytalks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                <Send className="h-4 w-4" />
                <span>Telegram</span>
              </a>
              <a
                href="https://instagram.com/moneytalks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 MoneyTalks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
