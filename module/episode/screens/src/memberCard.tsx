import Image from "next/image";
import { FunctionComponent } from "react";
import { ImageSkeleton } from "../../../../common/components";
import { Member } from "../../types/episode.interface";

interface MemberCardProps {
  member: Member;
}

export const MemberCard: FunctionComponent<MemberCardProps> = ({ member }) => {
  if (!member.image) return null;

  return (
    <div className="relative h-[100px] w-[100px]">
      <Image
        src={member.image}
        alt={member.name}
        className="rounded-full"
        fill
      />
    </div>
  );
};
