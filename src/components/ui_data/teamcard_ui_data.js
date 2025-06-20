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
  // Principal Investigator
  1: {
    animationSpeed: 3,
    containerClassName: `
      bg-emerald-100/40
      backdrop-blur-sm
    `,
    colors: [
      [134, 239, 172], // mint green
      [110, 231, 183], // soft jade
    ],
    dotSize: 4,
  },

  // Postdocs
  2: {
    animationSpeed: 3,
    containerClassName: `
      bg-rose-100/50
      backdrop-blur-sm
    `,
    colors: [
      [251, 207, 232], // light pink
      [244, 114, 182], // rose
    ],
    dotSize: 4,
  },

  // Graduate Students
  3: {
    animationSpeed: 3,
    containerClassName: `
      bg-violet-400/50
      backdrop-blur-sm
    `,
    colors: [
      [167, 139, 250], // violet
      [139, 92, 246],  // deeper violet
    ],
    dotSize: 4,
  },

  // Research Assistants & Interns
  4: {
    animationSpeed: 3,
    containerClassName: `
      bg-yellow-100/50
      backdrop-blur-sm
    `,
    colors: [
      [254, 240, 138], // light yellow
      [253, 224, 71],  // gold
    ],
    dotSize: 4,
  },

  // Others / Default
  100: {
    animationSpeed: 3,
    containerClassName: `
      bg-gray-100/50
      backdrop-blur-sm
    `,
    colors: [
      [156, 163, 175], // cool gray
      [107, 114, 128], // deeper gray
    ],
    dotSize: 4,
  },
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
                  coMentor={person.coMentorString}
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
