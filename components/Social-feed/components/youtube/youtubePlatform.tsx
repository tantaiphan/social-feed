/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { SocialFeedModel } from "../../core/models/MetaType";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import { YoutubeIcon } from "../../assets/icon/youtube";

interface ComponentProps {
  // code
  componentProps: SocialFeedModel;
}

export const YoutubePlatform: React.FC<ComponentProps> = (props) => {
  const [user, setUserInfo] = useState<ReactFacebookLoginInfo | undefined>(
    undefined
  );

  return (
    <div
      style={{
        background: "rgb(243, 243, 242)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        borderRadius: "6px",
      }}
    >
      <YoutubeIcon fill="red" width={34} height={34} />
      <div
        style={{
          width: "75%",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          Youtube
        </div>
        <div
          style={{
            fontSize: "10px",
            color: "#90908c",
          }}
        >
          {props.componentProps?.youtubeSourceType?.youtubeInfo?.channelName ||
            ""}
        </div>
      </div>
    </div>
  );
};
