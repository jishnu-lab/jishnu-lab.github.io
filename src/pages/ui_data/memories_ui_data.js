import { Carousel, Card } from "@/components/ui/card-carousel";
import memorydata from "@/assets/data/memories.json";

export function CardsCarousel() {
  const cards = memorydata.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Sneak Peek of our Daily Routine.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}