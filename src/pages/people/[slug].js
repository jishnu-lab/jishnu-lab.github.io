import teamdata from "@/assets/data/team.json";

export async function getStaticPaths() {
  // Filter out people without a slugLongTermMembers
  const paths = teamdata
    .filter((person) => person.slugLongTermMembers) // Only include those with a valid slug
    .map((person) => ({
      params: { slug: person.slugLongTermMembers }
    }));

  return {
    paths,
    fallback: false, // Required for static export
  };
}

export async function getStaticProps({ params }) {
  // Find the person from teamdata by slug
  const person = teamdata.find((p) => p.slugLongTermMembers === params.slug);

  // If the person doesn't exist, return 404
  if (!person) {
    return {
      notFound: true, // This will show a 404 page if the person is not found
    };
  }

  return {
    props: { person },
  };
}

export default function PersonPage({ person }) {
  return (
    <div>
      <h1>{person.firstName} {person.lastName}</h1>
      <p>{person.roleInLab}</p>
      <p>{person.shortBlurb}</p>
    </div>
  );
}
