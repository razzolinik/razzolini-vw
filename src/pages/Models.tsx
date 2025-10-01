import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Fuel, Users, Gauge, Star } from "lucide-react";
import { Link } from "react-router-dom";
import tiguanImage from "@/assets/vw-tiguan.jpg";
import poloImage from "@/assets/vw-polo.jpg";
import amarokImage from "@/assets/vw-amarok.jpg";
import nivusImage from "@/assets/vw-nivus.jpg";
import tcrossImage from "@/assets/vw-tcross.jpg";
import taosImage from "@/assets/vw-taos.jpg";
import teraImage from "@/assets/vw-tera.webp";
import virtusImage from "@/assets/vw-virtus.jpg";
import saveiroImage from "@/assets/vw-saveiro.jpg";
import { Description } from "@radix-ui/react-toast";

const Models = () => {
  const models = [
    // SUVs y Crossovers
    {
      id: 1,
      name: "Volkswagen Nivus",
      category: "SUV Compacto",
      image: nivusImage,
      features: [
        { icon: <Users className="h-4 w-4" />, text: "5 pasajeros" },
        { icon: <Fuel className="h-4 w-4" />, text: "1.0 TSI" },
        { icon: <Gauge className="h-4 w-4" />, text: "128 CV" }
      ],
      highlights: ["Front Assist", "App-Connect", "Climatizador", "Luces LED"],
      description: "El SUV coupé que combina estilo urbano con tecnología avanzada para la nueva generación."
    },
    {
      id: 2,
      name: "Volkswagen T-Cross",
      category: "SUV",
      image: tcrossImage,
      features: [
        { icon: <Users className="h-4 w-4" />, text: "5 pasajeros" },
        { icon: <Fuel className="h-4 w-4" />, text: "1.6 MSI" },
        { icon: <Gauge className="h-4 w-4" />, text: "117 CV" }
      ],
      highlights: ["ESP + MSR", "Bluetooth", "Volante multifunción", "Asientos rebatibles"],
      description: "El SUV versátil y espacioso perfecto para aventuras urbanas y familiares."
    },
    {
      id: 3,
      name: "Volkswagen Taos",
      category: "SUV",
      image: taosImage,
      features: [
        { icon: <Users className="h-4 w-4" />, text: "5 pasajeros" },
        { icon: <Fuel className="h-4 w-4" />, text: "1.4 TSI" },
        { icon: <Gauge className="h-4 w-4" />, text: "150 CV" }
      ],
      highlights: ["Virtual Cockpit", "Wireless App-Connect", "Climatizador bi-zona", "Cámara trasera"],
      description: "El SUV mediano con tecnología premium y conectividad de última generación."
    },
    {
      id: 4,
      name: "Volkswagen Tiguan",
      category: "SUV",
      image: tiguanImage,
      features: [
        { icon: <Users className="h-4 w-4" />, text: "5 pasajeros" },
        { icon: <Fuel className="h-4 w-4" />, text: "1.4 TSI Turbo" },
        { icon: <Gauge className="h-4 w-4" />, text: "150 CV" }
      ],
      highlights: ["4Motion AWD", "App-Connect", "Climatizador automático", "Frenos ABS + ESP"],
      description: "El SUV premium que combina elegancia, tecnología y versatilidad para toda la familia."
    },
    {
      id: 5,
      name: "Volkswagen Tera",
      category: "SUVW",
      image: teraImage,
      features: [
        { icon: <Users className="h-4 w-4" />, text: "5 pasajeros" },
        { icon: <Fuel className="h-4 w-4" />, text: "1.6 MSI" },
        { icon: <Gauge className="h-4 w-4" />, text: "110 CV" }
      ],
      highlights: ["Tablero digital de 8” (VW Digital Cockpit)", "Asistente de arranque en pendiente", "Sistema multimedia VW Play de 10” con App Connect", "Detector de fatiga"],
      description: "El nuevo ícono de Volkswagen que combina diseño innovador, seguridad y conectividad para que disfrutes cada viaje."
    },
    // Compactos
    {
      id: 6,
      name: "Volkswagen Polo Track",
      category: "Hatchback",
      image: poloImage,
      features: [
        { icon: <Users className="h-4 w-4" />, text: "5 pasajeros" },
        { icon: <Fuel className="h-4 w-4" />, text: "1.6 MSI" },
        { icon: <Gauge className="h-4 w-4" />, text: "110 CV" }
      ],
      highlights: ["Dirección asistida", "Aire acondicionado", "Cierre centralizado", "ABS + EBD"],
      description: "El compacto ideal para la ciudad, con el mejor rendimiento y economía de combustible."
    },
    // Sedanes
    {
      id: 7,
      name: "Volkswagen Virtus",
      category: "Sedán",
      image: virtusImage,
      features: [
        { icon: <Users className="h-4 w-4" />, text: "5 pasajeros" },
        { icon: <Fuel className="h-4 w-4" />, text: "1.6 MSI" },
        { icon: <Gauge className="h-4 w-4" />, text: "117 CV" }
      ],
      highlights: ["Baúl amplio 521L", "App-Connect", "Climatizador", "Sensor de lluvia"],
      description: "El sedán elegante y espacioso que combina confort, tecnología y eficiencia."
    },
    // Pick-ups
    {
      id: 8,
      name: "Volkswagen Saveiro",
      category: "Pick-up",
      image: saveiroImage,
      features: [
        { icon: <Users className="h-4 w-4" />, text: "2 pasajeros" },
        { icon: <Fuel className="h-4 w-4" />, text: "1.6 MSI" },
        { icon: <Gauge className="h-4 w-4" />, text: "120 CV" }
      ],
      highlights: ["Caja de carga 1.67m³", "ESP", "Aire acondicionado", "Dirección hidráulica"],
      description: "La pick-up compacta ideal para trabajo y uso personal con gran capacidad de carga."
    },
    {
      id: 9,
      name: "Volkswagen Amarok",
      category: "Pick-up",
      image: amarokImage,
      features: [
        { icon: <Users className="h-4 w-4" />, text: "5 pasajeros" },
        { icon: <Fuel className="h-4 w-4" />, text: "2.0 TDI" },
        { icon: <Gauge className="h-4 w-4" />, text: "180 CV" }
      ],
      highlights: ["Tracción 4x4", "Caja automática", "Diferencial autoblocante", "Control de descenso"],
      description: "La pickup más robusta y tecnológica para trabajo y aventura sin compromisos."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 bg-gradient-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4">
              Gama Volkswagen
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestros Modelos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre la gama completa de vehículos Volkswagen 0 km. Calidad alemana, 
              tecnología avanzada y el mejor precio del mercado.
            </p>
          </div>
        </section>

        {/* Models Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {models.map((model) => (
                <Card key={model.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {model.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium ml-1">Nuevo</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{model.name}</CardTitle>
                        <CardDescription className="text-primary font-semibold text-lg">
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {model.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3">
                      {model.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-1 text-sm text-muted-foreground">
                          {feature.icon}
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Características destacadas:</h4>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        {model.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1" asChild>
                        <Link to="/contacto">
                          Consultar Precio
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://wa.me/543834090928" target="_blank" rel="noopener noreferrer">
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Encontraste Tu Modelo Ideal?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactame para conocer las mejores ofertas y planes de financiación disponibles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="font-semibold px-8 py-3"
                asChild
              >
                <a href="https://wa.me/543834090928" target="_blank" rel="noopener noreferrer">
                  Consulta Inmediata
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Models;