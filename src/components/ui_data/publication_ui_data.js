"use client";
import {ExpandableCard} from "@/components/ui/expandable-cards";
import {IconMusic, IconMusicStar} from "@tabler/icons-react";
import { formatDomainTagsRendered, formatPeopleTagsLinksRendered } from "@/components/ui_data/tag_ui_data";


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
                authorsHighlighted={pub.authorsHighlighted}
                domainTagsRendered = {formatDomainTagsRendered(pub.domainTags, "Domain")}
                firstAuthorsLabLinksRendered = {formatPeopleTagsLinksRendered(pub.firstAuthorsLab, "(Co-)First Author(s) Lab")}
                otherLabMembersLinksRendered = {formatPeopleTagsLinksRendered(pub.otherLabMembers, "Contributing Lab Member(s)")}
                isCorrespondingAuthorJishnu = {pub.isCorrespondingAuthorJishnu}
                icon ={pub.secondaryTag === "Primary"
                      ? <IconMusicStar className="h-9 w-8 text-green-500" />
                      : <IconMusic className="h-9 w-9 text-blue-300" />
                  }
                openText="Link"
                closeText="More"
                ctaLink={pub.href}
                imageSrc= {pub.image}
              
            />

          ))}
      </>
    );
  }