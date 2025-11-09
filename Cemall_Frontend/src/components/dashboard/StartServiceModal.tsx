import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Store, Truck, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface StartServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const serviceTypes = [
  {
    id: "business",
    title: "Business Owner",
    description: "Start your own store - Pharmacy, Restaurant, Retail, or Barbershop",
    icon: Store,
    color: "primary",
  },
  {
    id: "logistics",
    title: "Logistics Partner",
    description: "Join our delivery network and earn by completing deliveries",
    icon: Truck,
    color: "secondary",
  },
  {
    id: "service",
    title: "Service Provider",
    description: "Offer specialized services to the community (Coming Soon)",
    icon: Briefcase,
    color: "accent",
    disabled: true,
  },
];

const StartServiceModal = ({ open, onOpenChange }: StartServiceModalProps) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedService) return;

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24 hours.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Start Your Service</DialogTitle>
          <DialogDescription>
            Choose the type of service you want to provide and expand your role in the Cemall ecosystem
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {serviceTypes.map((service) => (
            <button
              key={service.id}
              disabled={service.disabled}
              onClick={() => setSelectedService(service.id)}
              className={cn(
                "relative flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left",
                "hover:shadow-md",
                selectedService === service.id
                  ? `border-${service.color} bg-${service.color}/5`
                  : "border-border hover:border-border/80",
                service.disabled && "opacity-50 cursor-not-allowed hover:shadow-none"
              )}
            >
              <div className={cn(
                "p-3 rounded-lg",
                service.color === "primary" && "bg-primary/10",
                service.color === "secondary" && "bg-secondary/10",
                service.color === "accent" && "bg-accent/10"
              )}>
                <service.icon className={cn(
                  "h-6 w-6",
                  service.color === "primary" && "text-primary",
                  service.color === "secondary" && "text-secondary",
                  service.color === "accent" && "text-accent"
                )} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  {service.title}
                  {service.disabled && (
                    <span className="ml-2 text-xs text-muted-foreground font-normal">
                      (Coming Soon)
                    </span>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
              {selectedService === service.id && (
                <div className="absolute top-4 right-4">
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-primary-foreground"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!selectedService}>
            Submit Application
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StartServiceModal;
