import {
  Home,
  Package,
  ShoppingCart,
  TrendingUp,
  Truck,
  Store,
  Users,
  Settings,
  Shield,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// Mock user role - in production, this would come from auth context
const userRole = "customer";

const customerItems = [
  { title: "Dashboard", url: "/dashboard/customer", icon: Home },
  { title: "Browse Products", url: "/dashboard/customer/products", icon: Package },
  { title: "My Orders", url: "/dashboard/customer/orders", icon: ShoppingCart },
];

const businessItems = [
  { title: "Dashboard", url: "/dashboard/business", icon: Home },
  { title: "Inventory", url: "/dashboard/business/inventory", icon: Package },
  { title: "Orders", url: "/dashboard/business/orders", icon: ShoppingCart },
  { title: "Analytics", url: "/dashboard/business/analytics", icon: TrendingUp },
];

const logisticsItems = [
  { title: "Dashboard", url: "/dashboard/logistics", icon: Home },
  { title: "Deliveries", url: "/dashboard/logistics/deliveries", icon: Truck },
  { title: "Performance", url: "/dashboard/logistics/performance", icon: TrendingUp },
];

const categoryAdminItems = [
  { title: "Dashboard", url: "/dashboard/category-admin", icon: Home },
  { title: "Businesses", url: "/dashboard/category-admin/businesses", icon: Store },
  { title: "Analytics", url: "/dashboard/category-admin/analytics", icon: TrendingUp },
];

const superAdminItems = [
  { title: "Dashboard", url: "/dashboard/superadmin", icon: Home },
  { title: "Businesses", url: "/dashboard/superadmin/businesses", icon: Store },
  { title: "Logistics", url: "/dashboard/superadmin/logistics", icon: Truck },
  { title: "Analytics", url: "/dashboard/superadmin/analytics", icon: TrendingUp },
];

const metaAdminItems = [
  { title: "Dashboard", url: "/dashboard/metaadmin", icon: Home },
  { title: "Super Admins", url: "/dashboard/metaadmin/admins", icon: Shield },
  { title: "Platform Analytics", url: "/dashboard/metaadmin/analytics", icon: TrendingUp },
  { title: "Settings", url: "/dashboard/metaadmin/settings", icon: Settings },
];

export function DashboardSidebar() {
  const { state } = useSidebar();

  const getMenuItems = () => {
    // In production, this would be dynamic based on user's roles
    return [
      { label: "Customer", items: customerItems },
    ];
  };

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={cn("border-r border-sidebar-border", isCollapsed ? "w-14" : "w-64")}>
      <SidebarContent>
        <div className="px-4 py-4">
          <div className="flex items-center space-x-3">
            {!isCollapsed && (
              <>
                <div className="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-lg">
                  <Store className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Cemall
                </span>
              </>
            )}
            {isCollapsed && (
              <div className="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-lg mx-auto">
                <Store className="h-5 w-5 text-primary-foreground" />
              </div>
            )}
          </div>
        </div>

        {getMenuItems().map((section) => (
          <SidebarGroup key={section.label}>
            {!isCollapsed && <SidebarGroupLabel>{section.label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        className="flex items-center gap-3 hover:bg-sidebar-accent/50 transition-colors"
                        activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      >
                        <item.icon className="h-4 w-4" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
