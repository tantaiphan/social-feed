/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { DataSocialFeedModel } from "../../core/models/MetaType";
import FacebookLogin, {
  RenderProps,
} from "react-facebook-login/dist/facebook-login-render-props";
import { ReactFacebookLoginInfo } from "react-facebook-login";

interface ComponentProps {
  // code
  componentProps: DataSocialFeedModel & { queryKey?: string };
  responseFacebook: (userInfo: ReactFacebookLoginInfo) => void;
  value: ReactFacebookLoginInfo | undefined;
  hidden?: boolean;
  autoLoad?: boolean;
}

export const FaceBookPlatform: React.FC<ComponentProps> = ({
  responseFacebook,
  value,
  hidden,
  autoLoad,
}) => {
  const [user, setUserInfo] = useState<ReactFacebookLoginInfo | undefined>(
    undefined
  );

  useEffect(() => {
    console.log("facebook value", value);
    setUserInfo(value);
  });

  return (
    <div>
      <FacebookLogin
        appId="477009821664515"
        autoLoad={autoLoad || false}
        callback={responseFacebook}
        // isDisabled={user !== undefined}
        render={(renderProps: RenderProps) => (
          <>
            {hidden ? (
              <div />
            ) : (
              <button
                onClick={renderProps?.onClick}
                className={`btn-facebook
                    ${user === undefined ? "" : "btn-disabled"}`}
              >
                {user == undefined ? "Connect to facebook" : `${user?.name}`}
              </button>
            )}
          </>
        )}
      />
    </div>
  );
};
