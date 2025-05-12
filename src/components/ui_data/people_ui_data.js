"use client";
import { BackgroundGradient } from "@/components/ui/card-bg-gradient";
import Image from "next/image";
import {IconBrandGithub, IconBrandLinkedin, IconWorld, IconBrandTwitter, IconSchool, IconUser} from "@tabler/icons-react";
import { useState, useRef } from "react";

export const ImageIcon = ({ basePath, title }) => {
    const fallbackExtensions = ["png", "jpg", "jpeg", "webp"];
    const extIndex = useRef(0);
  
    const [src, setSrc] = useState(`${basePath}.${fallbackExtensions[extIndex.current]}`);
    const [imageFailed, setImageFailed] = useState(false);
  
    const handleError = () => {
        extIndex.current += 1;
        if (extIndex.current < fallbackExtensions.length) {
          setSrc(`${basePath}.${fallbackExtensions[extIndex.current]}`);
        } else {
          setImageFailed(true);
        }
      };
    
    if (imageFailed) {
        return (
          <div className="w-[200px] h-[200px] flex items-center justify-center rounded-[22px] bg-gray-100 dark:bg-zinc-800">
            <IconUser className="w-16 h-16 text-gray-500" />
          </div>
        );
      }
  
    return (
      <Image
        width={200}
        height={200}
        src={src}
        alt={title}
        onError={handleError}
        className="rounded-[22px] object-contain"
      />
    );
  };  

export function PeopleCardData({ person }) {

    const photoLink = person.photoLink;
    const githubLink = person.githubLink;
    const linkedInLink = person.linkedInLink;
    const xLink = person.xLink;
    const websiteLink = person.websiteLink;
    const googleScholarLink = person.googleScholarLink;

  return (
    <div className="relative w-fit mx-auto mb-6">
      {/* Background + Image */}
      <BackgroundGradient className="max-w-sm">
        <div className="relative z-10 rounded-[22px] overflow-hidden">
        <ImageIcon
            basePath={photoLink}
            title={`Portrait of ${person.firstName && person.lastName ? `${person.firstName} ${person.lastName}` : "Team Member"}`}
            className="rounded-[22px] object-contain"
            />
          {/* <Image
            src={photoLink}
            alt={`Portrait of ${person.firstName || "Team Member"}`}
            width={200}
            height={200}
            className="rounded-[22px] object-contain"
          /> */}
        </div>
      </BackgroundGradient>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-10 relative z-10">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <IconBrandGithub className="w-5 h-5 hover:text-green-500 transition-colors" />
          </a>
        )}
        {linkedInLink && (
          <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin className="w-5 h-5 hover:text-green-500 transition-colors" />
          </a>
        )}
        {xLink && (
          <a href={xLink} target="_blank" rel="noopener noreferrer">
            <IconBrandTwitter className="w-5 h-5 hover:text-green-500 transition-colors" />
          </a>
        )}
        {websiteLink && (
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <IconWorld className="w-5 h-5 hover:text-green-500 transition-colors" />
          </a>
        )}
        {googleScholarLink && (
          <a href={googleScholarLink} target="_blank" rel="noopener noreferrer">
            <IconSchool className="w-5 h-5 hover:text-green-500 transition-colors" />
          </a>
        )}
      </div>
    </div>
  );
}

