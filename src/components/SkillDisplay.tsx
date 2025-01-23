import { Progress } from "@/components/ui/progress";
import { Link } from "react-router";
import { Card } from "./ui/card";

type Skill = {
  id: string;
  name: string;
  progress: number;
};

export default function SkillDisplay({ skills }: { skills: Skill[] }) {
  return (
    <div className="space-y-4">
      {skills.map((skill) => (
        <Card key={skill.id}>
          <div
            key={skill.id}
            className="rounded-sm  py-4 px-6  transition-all hover:shadow-md"
          >
            <Link to={`/dashboard/${skill.id}`}>
              <h3 className="mb-4 text-xl font-semibold text-primary hover:underline">
                {skill.name}
              </h3>
            </Link>

            <div className="flex items-center gap-4">
              <Progress value={skill.progress} className="h-2 flex-1" />
              <span className="text-sm font-medium text-muted-foreground">
                {skill.progress}%
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
