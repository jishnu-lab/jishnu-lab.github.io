"use client";
import { Timeline } from "@/components/ui/timeline";
import changelog from "@/assets/data/changelog.json";
import {formatPeopleTagsLinksRendered } from "@/components/ui_data/tag_ui_data";

const data = changelog
.slice() // make a shallow copy so original isn't mutated
.sort((a, b) => new Date(b.date) - new Date(a.date)) // latest first
.map((item) => ({
  title: item.date,
  content: item.description,
  linksRendered: formatPeopleTagsLinksRendered(item.labMember),
}));

export function TimelineData() {
  return (
      <Timeline data={data} />
  );
}
