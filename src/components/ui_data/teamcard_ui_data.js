import React from "react";
import { CanvasRevealEffect, Card, ImageIcon } from "@/components/ui/canvas-reveal-effect";
import { formatPeopleTagsLinksRendered } from "@/components/ui_data/tag_ui_data";

// Define the role order and handle combining roles
export const roleOrder = {
    "Principal Investigator": 1,
    "Post Doctoral Fellow": 2,
    "Research Scientist": 2,
    "Graduate Student Researcher": 3,
    "Research Assistant": 4,
    "Intern": 4,
};
// Define the properties for each role level
export const roleProperties = {
    1: {animationSpeed: 3,containerClassName: "bg-emerald-600", // Background for Principal Investigator,
        colors:[[134, 239, 172],[110, 231, 183]],dotSize: 4,}, // // mint green, // soft jade
    2: {animationSpeed: 3,containerClassName: "bg-rose-700", // Blue background for Postdocs and Graduate Students
        colors: [[251, 207, 232],[244, 114, 182]],dotSize: 4,}, // Light Blue // Blue
    3: {animationSpeed: 3,containerClassName: "bg-violet-600", // Green background for Graduate Students
        colors: [[34, 197, 94],[74, 222, 128]],dotSize: 4,}, // Green
    4: {animationSpeed: 3,containerClassName: "bg-yellow-600", // Yellow background for Research Assistants and Interns
        colors: [[254, 240, 138],[253, 224, 71]],dotSize: 4,}, // Yellow
    100: {animationSpeed: 3,containerClassName: "bg-violet-600", // Gray background for other members
        colors: [[156, 163, 175],[107, 114, 128]],dotSize: 4,}, // Gray
};

export function TeamCard({ members }) {
  const sorted = [...members].sort(
    (a, b) => (roleOrder[a.roleInLab] || 100) - (roleOrder[b.roleInLab] || 100)
  );

  const grouped = [];
  let currentLevel = null;

  for (const person of sorted) {
    const roleLevel = roleOrder[person.roleInLab] || 100;
    if (roleLevel !== currentLevel) {
      grouped.push({ roleLevel, members: [person] });
      currentLevel = roleLevel;
    } else {
      grouped[grouped.length - 1].members.push(person);
    }
  }

  return (
    <>
      {grouped.map((group, index) => {
        const properties = roleProperties[group.roleLevel] || {};
        let roleTitle = "Other";
        if (group.roleLevel === 1) roleTitle = "Principal Investigator";
        else if (group.roleLevel === 2) roleTitle = "Post Doctoral Fellows and Research Scientists";
        else if (group.roleLevel === 3) roleTitle = "Graduate Student Researchers";
        else if (group.roleLevel === 4) roleTitle = "Research Assistants / Interns";
        else if (group.roleLevel === 100) roleTitle = "Other Members";

        return (
          <div key={index} className="w-full">
            <h3 className="text-3xl text-center font-semibold mt-8 dark:text-neutral-300">{roleTitle}</h3>
            <div className="py-4 grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-8 px-8 max-w-7xl mx-auto">
              {group.members.map((person, idx) => (
                <Card
                  key={idx}
                  title={formatPeopleTagsLinksRendered(person.slugLongTermMembers)}
                  icon={<ImageIcon basePath={person.photoLink}/>}
                >
                  <CanvasRevealEffect {...properties} />
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
