import { CallingState, PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import Loader from "./Loader";

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {

  // const searchParams = useSearchParams();
  // const isPersonalRoom = !!searchParams.get('personal');
  // const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  // const [showParticipants, setShowParticipants] = useState(false);
  // const { useCallCallingState } = useCallStateHooks();

  // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
  // const callingState = useCallCallingState();

  // if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;
