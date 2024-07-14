'use client';

import { cn } from "@/lib/utils";
import { useColorPrefrences } from "@/providers/color-prefrences";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";


const InfoSection: FC<{
  // userData: User;
  // currentWorkspaceData: Workspace;
  // userWorkspaceChannels: Channel[];
  // currentChannelId: string | undefined;
}> = ({
  // userData,
  // currentWorkspaceData,
  // userWorkspaceChannels,
  // currentChannelId,
}) => {
  const { color } = useColorPrefrences();
  const [isChannelCollapsed, setIsChannelCollapsed] = useState(true);
  const [isDirectMessageCollapsed, setIsDirectMessageCollapsed] =
    useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  let backgroundColor = 'bg-primary-light';
  if (color === 'green') {
    backgroundColor = 'bg-green-900';
  } else if (color === 'blue') {
    backgroundColor = 'bg-blue-900';
  }

  let secondayBg = 'bg-primary-dark';
  if (color === 'green') {
    secondayBg = 'bg-green-700';
  } else if (color === 'blue') {
    secondayBg = 'bg-blue-700';
  }

  // const navigateToChannel = (channelId: string) => {
  //   const url = `/workspace/${currentWorkspaceData.id}/channels/${channelId}`;
  //   router.push(url);
  // };

  // const navigateToDirectMessage = (memberId: string) => {
  //   const url = `/workspace/${currentWorkspaceData.id}/direct-message/${memberId}`;
  //   router.push(url);
  // };

  return (
  <div
    className={cn(
      'fixed text-white left-20 rounded-l-xl md:w-52 lg:w-[350px] h-[calc(100%-63px)] z-20 flex flex-col items-center',
      backgroundColor
    )}
  >

  </div>
  );
};

export default InfoSection;