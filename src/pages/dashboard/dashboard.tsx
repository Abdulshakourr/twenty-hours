import SkillDisplay from "@/components/SkillDisplay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [skills, setSkills] = useState([
    {
      id: "1",
      name: "JavaScript",
      progress: 50,
    },
    {
      id: "2",
      name: "React",
      progress: 70,
    },
  ]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-xl font-bold">Dashboard</h1>

          <div className="max-w-md mx-auto mt-10 mb-10 flex gap-4">
            <Input placeholder="Add a skill to track" />
            <Button>Add Skill</Button>
          </div>
        </div>

        <div className="max-w-md mx-auto    ">
          <SkillDisplay skills={skills} />
        </div>
      </div>
    </div>
  );
}
