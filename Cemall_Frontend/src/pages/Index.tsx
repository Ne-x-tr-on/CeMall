import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, Package, TrendingUp, Truck, Shield, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Package,
      title: "Multi-Role Platform",
      description: "Start as a customer, grow into a business owner or logistics partner",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Insights",
      description: "Advanced analytics and predictions to help your business grow",
    },
    {
      icon: Truck,
      title: "Logistics Network",
      description: "Efficient delivery system connecting businesses with customers",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with role-based access control",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-lg">
              <Store className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Cemall
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Your Community Enterprise Mall
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A digital ecosystem where businesses, customers, and logistics partners connect, grow, and thrive together
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => navigate("/auth")}
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </Button>
            <Button
              onClick={() => navigate("/auth")}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-primary-foreground">
          <h3 className="text-3xl font-bold mb-8">Join Our Growing Community</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-foreground/90">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/90">Businesses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-primary-foreground/90">Orders Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
