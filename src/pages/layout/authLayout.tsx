import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContex";
import supabase from "@/lib/supabase";
import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
  const { session, loading } = useAuth();
  console.log("ses", session);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session === null) {
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <div className="flex justify-between items-center py-4 px-6 bg-card border-b border-gray-300">
        <h1 className="text-xl font-bold text-indigo-600">skiller</h1>
        <Button
          variant={"ghost"}
          className="border"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </Button>
      </div>
      <Outlet />
    </div>
  );
}
