import { Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Información de Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Santiago del Estero, Catamarca y más regiones del Norte Argentino.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">razzoliniventas@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+543834090928</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary-light transition-colors">Inicio</a></li>
              <li><a href="/modelos" className="hover:text-primary-light transition-colors">Modelos</a></li>
              <li><a href="/contacto" className="hover:text-primary-light transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light justify-start sm:justify-center" asChild>
                <a
                  href="https://wa.me/543834090928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-light"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm">WhatsApp Directo</span>
                </a>
              </Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light justify-start sm:justify-center" asChild>
                <a href="https://facebook.com/razzoliniventas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Facebook className="h-5 w-5" />
                  <span className="text-sm">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light justify-start sm:justify-center" asChild>
                <a href="mailto:razzoliniventas@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">Email</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Omar Razzolini - Volkswagen Autovia S.A. Concesionaria Oficial.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;