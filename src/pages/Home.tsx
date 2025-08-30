import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Award, Clock, Star, Users, Key } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Adjudicación asegurada",
      description: "Tendrás tu 0km en el tiempo pactado"
    },
    {
      icon: <Key className="h-8 w-8 text-primary" />,
      title: "Sistema Llave por Llave",
      description: "Recibimos tu vehiculo usado al mejor precio del mercado"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Financiación Flexible",
      description: "Planes de financiación adaptados a tus necesidades"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Servicio Premium",
      description: "Atención personalizada y servicio post-venta excepcional"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <HeroBanner />
        
        {/* Advisor Section */}
        <section className="py-16 bg-gradient-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Tu Asesor Volkswagen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Experiencia y Confianza
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Con más de 10 años de experiencia en el sector automotriz, te acompañamos 
                en cada paso para encontrar el Volkswagen perfecto para vos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Atención Personalizada</h3>
                    <p className="text-muted-foreground">
                      Cada cliente es único. Te brindamos asesoramiento personalizado 
                      basado en tus necesidades específicas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Zona de Cobertura</h3>
                    <p className="text-muted-foreground">
                      Atendemos Santiago del Estero y Catamarca con el mejor servicio 
                      y disponibilidad inmediata.
                    </p>
                  </div>
                </div>
                
                <Button size="lg" asChild>
                  <Link to="/contacto">
                    Contactar Ahora
                  </Link>
                </Button>
              </div>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-primary">¿Por qué Volkswagen?</CardTitle>
                  <CardDescription>
                    La marca líder en Argentina con la mejor relación calidad-precio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Líder en ventas en Argentina</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Tecnología de vanguardia</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Red de servicios en todo el país</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Excelente valor de reventa</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Beneficios de Comprar 0km
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubre todas las ventajas de adquirir tu nuevo Volkswagen directamente de fábrica
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
              ¿Listo para Tu Nuevo Volkswagen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactame hoy mismo y descubre las mejores ofertas disponibles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="font-semibold px-8 py-3"
                asChild
              >
                <Link to="/modelos">
                  Ver Todos los Modelos
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="font-semibold px-8 py-3"
                asChild
              >
                <a href="https://wa.me/543834090928" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span>WhatsApp Directo</span>
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

export default Home;