import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router";

import { ArrowLeftIcon } from "lucide-react";
export default function SkillDetail() {
  const { id } = useParams(); // Get the skill ID from the URL

  // Fetch or find the skill details based on the ID
  const skill = {
    id: "1",
    name: "JavaScript",
    progress: 50,
    description: "Learn JavaScript fundamentals and advanced concepts.",
  };

  return (
    <div className=" min-h-screen bg-background py-6 px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-6xl mx-auto ">
        <Link to="/dashboard">
          <Button variant="outline">
            {" "}
            <ArrowLeftIcon className="w-5 h-5" /> Back to Dashboard
          </Button>
        </Link>
        <div className="space-y-4 bg-red-500">
          <h1 className="text-2xl font-bold">{skill.name}</h1>

          <div>
            <Button>Start</Button>
            <Button>Pause</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
