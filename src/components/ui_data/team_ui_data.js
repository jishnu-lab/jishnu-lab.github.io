import React from "react";
import { TeamCard } from "@/components/ui_data/teamcard_ui_data";
import { TeamTable } from "@/components/ui_data/teamtable_ui_data";
import teamdata from "@/assets/data/team.json";

export function TeamData() {
  const current = teamdata.filter((p) => p.isCurrent === "TRUE");
  const alumni = teamdata.filter((p) => p.isCurrent !== "TRUE");

  return (
    <div className="py-20">
      <TeamCard members={current} />
      {alumni.length > 0 && <TeamTable alumni={alumni} />}
    </div>
  );
}