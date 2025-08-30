import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/volkswagen-hero.jpg";

const HeroBanner = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Tu Próximo
          <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Volkswagen
          </span>
          Te Está Esperando
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Descubre la calidad alemana, la innovación y el rendimiento que solo Volkswagen puede ofrecerte.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3"
            asChild
          >
            <Link to="/modelos">
              Ver Modelos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3"
            asChild
          >
            <Link to="/contacto">
              Contactar Vendedor
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;