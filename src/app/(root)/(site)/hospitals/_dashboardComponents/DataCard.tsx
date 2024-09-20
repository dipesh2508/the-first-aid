import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import React from "react";

interface DataCardProps {
  value: number;
  label: string;
  icon: LucideIcon;
}

const DataCard: React.FC<DataCardProps> = ({ value, label, icon: Icon }) => {
  return (
    <Card className="w-full max-w-screen-sm bg-background border-primary-3">
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
        <Icon className="h-8 w-8 text-primary" />
      </CardContent>
    </Card>
  );
};

export default DataCard;
