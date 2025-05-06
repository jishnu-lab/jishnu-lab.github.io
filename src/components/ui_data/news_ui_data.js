import {
    IconFileDescription,
    IconCurrencyDollar,
    IconDevicesStar,
    IconMicrophone2,
} from "@tabler/icons-react";
import news from "@/assets/data/news.json";
import {NewsCard} from "@/components/ui/news-card";
import {formatPeopleTagsLinksRendered } from "@/components/ui_data/tag_ui_data";
import {GlowingStarsBackgroundCard } from "@/components/backgrounds/glowing-stars";

const tagIconMap = {
    Paper: <IconFileDescription/>,
    Grant: <IconCurrencyDollar/>,
    Talk: <IconMicrophone2/>,
    Award: <IconDevicesStar/>,
  };

  
export function NewsCardData() {

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 max-w-7xl mx-auto">
        {[...news] // clone array to avoid mutating original
        .sort((a, b) => new Date(b.date) - new Date(a.date)) // latest first
        .map((feature, index) => (
            <GlowingStarsBackgroundCard>
                <NewsCard
                title={feature.date}
                description={feature.description}
                icon={tagIconMap[feature.tag] || IconArticle}
                linkRendered={formatPeopleTagsLinksRendered(feature.labMember)}
                index={index}
                />
            </GlowingStarsBackgroundCard>
        ))}
    </div>
  );
}
