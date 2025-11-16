import React from "react";
import { formatPeopleTagsLinksRendered } from "@/components/ui_data/tag_ui_data";

export function TeamTable({ alumni }) {
  return (
    <div className="mt-16 px-8">
      <h3 className="text-3xl text-center font-semibold mt-8 dark:text-neutral-300">Alumni</h3>
      <table className="w-full table-auto border-collapse border border-gray-400 dark:border-gray-600">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-400 px-4 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {alumni.map((alum, i) => (
            <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="border border-gray-400 px-4 py-2">
                {formatPeopleTagsLinksRendered(alum.slugLongTermMembers)}
              </td>
              <td className="border border-gray-400 px-4 py-2">{alum.roleInLab}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
