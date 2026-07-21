import Image from "next/image";
import { Linkedin } from "lucide-react";
import type { Tutor } from "@/types";

type TeamCardProps = {
  member: Tutor & { position?: string; bio?: string; linkedin?: string };
};

/**
 * Per docs/11 - About Page Specification.md — Meet Our Team:
 * "Photo, Name, Position, Short Bio, LinkedIn (Optional)."
 */
export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="border-border bg-surface rounded-card flex flex-col items-center gap-3 border p-6 text-center">
      <div className="bg-muted relative size-24 overflow-hidden rounded-full">
        {member.photo && (
          <Image src={member.photo} alt={member.name} fill className="object-cover" />
        )}
      </div>
      <div>
        <p className="text-foreground text-sm font-semibold">{member.name}</p>
        <p className="text-muted-foreground text-xs">{member.position}</p>
      </div>
      {member.bio && (
        <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="size-4" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
