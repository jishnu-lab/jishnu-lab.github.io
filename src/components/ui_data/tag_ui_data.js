import team_data_raw from "@/assets/data/team.json";
const people_slugs_raw = team_data_raw
  // .filter(person => person.isCurrent)
  .map(person => ({
    firstName: person.firstName,
    lastName: person.lastName,
    slug: person.slugLongTermMembers
  }));

const people_slugs = people_slugs_raw.reduce((acc, person) => {
  acc[person.slug] = `${person.firstName} ${person.lastName}`;
  return acc;
}, {});

export const formatPeopleTagsLinksRendered = (tagsInput, label) => {
  const tags = typeof tagsInput === "string"
    ? tagsInput.split(",").map(t => t.trim())
    : Array.isArray(tagsInput)
      ? tagsInput
      : [];

  if (!tags || tags.length === 0 || tags=="") return null;

  const formattedTags = tags.map((tag) => {
    const name = people_slugs[tag];
    return (
      <a href={`/people/${tag}`} key={tag} className="hover:font-bold hover:underline text-green-500 tag-link">
        {name}
      </a>
      // for testing below
      // <a href={`/people/boilerplate_people`} key={tag} className="hover:font-bold hover:underline text-green-500 tag-link">
      //   {name}
      // </a>
    );
  });

  return (
    <div className="tags">
      {label && <span className="font-semibold mr-1">{label}:</span>}
      {formattedTags.reduce((prev, curr) => [prev, ", ", curr])}
    </div>
  );
};
export const formatDomainTagsRendered = (tagsInput, label = "Domains") => {
    const tags = typeof tagsInput === "string"
      ? tagsInput.split(",").map(t => t.trim())
      : Array.isArray(tagsInput)
        ? tagsInput
        : [];
  
    if (!tags || tags.length === 0) return null;
    return (
      <div className="tags">
        <span className="font-semibold mr-1">{label}:</span>
        {tags.join(", ")}
      </div>
    );
  };

export const formatPeopleTagsForDropdown = (tagsInput) => {
    const tags = typeof tagsInput === "string"
      ? tagsInput.split(",").map(t => t.trim())
      : Array.isArray(tagsInput)
        ? tagsInput
        : [];
  
    return tags.map(tag => ({
      value: tag,
      label: people_slugs[tag] || tag,
    }));
  }

export const formatDomainTagsForDropdown = (tagsInput) => {
    const tags = typeof tagsInput === "string"
      ? tagsInput.split(",").map(t => t.trim())
      : Array.isArray(tagsInput)
        ? tagsInput
        : [];
  
    return tags.map(tag => ({
      value: tag,
      label: tag,
    }));
  };

export const formatDatesForDropdown = (dateList) => {
    if (!Array.isArray(dateList)) return [];
  
    const yearToDates = {};
  
    dateList.forEach((dateStr) => {
      const year = dateStr?.split("/")?.[2];
      if (!year) return;
  
      if (!yearToDates[year]) {
        yearToDates[year] = [];
      }
      yearToDates[year].push(dateStr);
    });
  
    return Object.entries(yearToDates)
      .sort((a, b) => b[0] - a[0]) // Sort by year descending
      .map(([year, dates]) => ({
        label: year,
        value: dates, // array of full date strings
      }));
  };
  