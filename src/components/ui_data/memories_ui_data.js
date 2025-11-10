import { Carousel, Card } from "@/components/ui/card-carousel";
import memorydata from "@/assets/data/memories.json";

export function CardsCarousel() {
  return (
    <div className="w-full h-full py-20">
      {memorydata.map((section, sectionIndex) => (
        <div key={section.title} className="mb-8">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {section.title}
      </h2>
          <Carousel
            items={section.images.map((src, idx) => (
              <Card key={src} card={{ src }} index={idx} />
            ))}
          />
        </div>
      ))}
    </div>
  );
}
