"use client";
import {ExpandableCard} from "@/components/ui/expandable-cards";
import {IconMusic, IconMusicStar} from "@tabler/icons-react";
import { formatDomainTagsRendered, formatPeopleTagsLinksRendered } from "@/pages/ui_data/tag_ui_data";


export function PublicationData({data}) {
    const sortedData = [...data].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    return (
        <>
          {sortedData.map((pub,index) => (

            <ExpandableCard
                cardKey={index}
                title={pub.title}
                date={pub.date}
                journal={pub.journal}
                authors={pub.authors}
                domainTagsRendered = {formatDomainTagsRendered(pub.domainTags, "Domain")}
                firstAuthorsLabLinksRendered = {formatPeopleTagsLinksRendered(pub.firstAuthorsLab, "First Authors Lab")}
                otherLabMembersLinksRendered = {formatPeopleTagsLinksRendered(pub.otherLabMembers, "Contributing Lab Members")}
                isCorrespondingAuthorJishnu = {pub.isCorrespondingAuthorJishnu}
                icon ={pub.firstAuthorsLab.length > 0
                      ? <IconMusicStar className="h-9 w-8 text-green-500" />
                      : <IconMusic className="h-9 w-9 text-green-500" />
                  }
                ctaText="More"
                ctaLink={pub.href}
                imageSrc= {pub.image}
              
            />

          ))}
      </>
    );
  }