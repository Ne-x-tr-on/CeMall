import { useState } from "react";
import { ShoppingBag, Package, Heart, TrendingUp, Star, Sparkles } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StartServiceModal from "@/components/dashboard/StartServiceModal";
import { Badge } from "@/components/ui/badge";

const CustomerDashboard = () => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const recentOrders = [
    { id: "ORD-001", product: "Aspirin 500mg", store: "HealthCare Pharmacy", status: "Delivered", date: "2024-01-10" },
    { id: "ORD-002", product: "Chicken Burger Meal", store: "Quick Bites Restaurant", status: "In Transit", date: "2024-01-12" },
    { id: "ORD-003", product: "Wireless Headphones", store: "TechHub Electronics", status: "Processing", date: "2024-01-13" },
  ];

  const featuredProducts = [
    { name: "Vitamin C 1000mg", store: "Wellness Pharmacy", price: "$12.99", rating: 4.8, image: "💊" },
    { name: "Pizza Margherita", store: "Italian Corner", price: "$15.99", rating: 4.9, image: "🍕" },
    { name: "Smart Watch", store: "Gadget World", price: "$199.99", rating: 4.7, image: "⌚" },
    { name: "Coffee Beans 1kg", store: "Bean & Brew", price: "$24.99", rating: 4.6, image: "☕" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-secondary rounded-2xl p-8 text-primary-foreground shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome back, John! 👋</h1>
            <p className="text-primary-foreground/90">
              Explore products, track orders, or start your own service
            </p>
          </div>
          <Button
            onClick={() => setIsServiceModalOpen(true)}
            size="lg"
            variant="secondary"
            className="gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <Sparkles className="h-5 w-5" />
            Start Service
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Orders"
          value={24}
          icon={ShoppingBag}
          trend={{ value: 12, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Active Orders"
          value={3}
          icon={Package}
          variant="default"
        />
        <StatCard
          title="Saved Items"
          value={18}
          icon={Heart}
          variant="secondary"
        />
        <StatCard
          title="Loyalty Points"
          value={1250}
          icon={TrendingUp}
          trend={{ value: 8, isPositive: true }}
          variant="success"
        />
      </div>

      {/* Recent Orders & Featured Products */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{order.product}</p>
                    <p className="text-sm text-muted-foreground">{order.store}</p>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                  </div>
                  <Badge
                    variant={
                      order.status === "Delivered"
                        ? "default"
                        : order.status === "In Transit"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Orders
            </Button>
          </CardContent>
        </Card>

        {/* Featured Products */}
        <Card>
          <CardHeader>
            <CardTitle>Featured Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {featuredProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="text-4xl">{product.image}</div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-foreground">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.store}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-warning text-warning" />
                        <span className="text-xs text-muted-foreground">{product.rating}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">Browse All Products</Button>
          </CardContent>
        </Card>
      </div>

      <StartServiceModal open={isServiceModalOpen} onOpenChange={setIsServiceModalOpen} />
    </div>
  );
};

export default CustomerDashboard;
