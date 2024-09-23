"use client";






import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";


const MapsPage = () => {
  
  return (
    <Card className="w-[600px] h-screen shadow-md mb-10">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          🔑 Admin
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess
            message="You are allowed to see this content!"
          />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Get Insights
          </p>
          <a href="https://citizencorrects.netlify.app/" target="_blank" rel="noreferrer">
            <Button disabled>
              Click to test
            </Button>
          </a>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Get Finances
          </p>
          <a href="https://citizencorrects.netlify.app/" target="_blank" rel="noreferrer">
            <Button disabled>
              Click to test
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapsPage;