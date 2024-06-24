/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { DataSourceEnum } from "../../../core/libs/contants";
import {
  DataSocialFeedModel,
  SocialFeedModel,
  dataSourceModel,
} from "../../../core/models/MetaType";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import { css } from "../../../styles/styles";
import { Dropdown } from "../../../components/drodown";
import { Helmet } from "react-helmet";
import { LinkedInPlatform } from "../../../components/linkedIn/linkedInprop";
import { YoutubePlatform } from "../../../components/youtube/youtubePlatform";
import { FaceBookPlatform } from "../../../components/facebook/facebookPlatform";

interface ComponentProps {
  // code
  componentProps: SocialFeedModel;
  updateValue: (val: dataSourceModel) => void;
  value: dataSourceModel;
}

export const DataSourceProp = ({
  componentProps,
  updateValue,
  value,
}: ComponentProps) => {
  const [dataSource, setDataSource] = useState<String | undefined>(undefined);

  useEffect(() => {
    setDataSource(value?.dataSource);
  }, []);

  const responseFacebook = (userInfo: ReactFacebookLoginInfo) => {
    console.log("facebook info", userInfo);
    updateValue({ ...value, info: { ...value?.info, facebookInfo: userInfo } });
  };

  const onRenderItem = () => {
    switch (dataSource) {
      case DataSourceEnum.YouTube: {
        return <YoutubePlatform componentProps={componentProps} />;
      }
      case DataSourceEnum.Facebook: {
        return (
          <>
            <FaceBookPlatform
              componentProps={componentProps}
              responseFacebook={responseFacebook}
              value={value?.info?.facebookInfo}
              autoLoad={true}
            />
          </>
        );
      }

      case DataSourceEnum.LinkedIn: {
        return (
          <LinkedInPlatform
            componentProps={componentProps}
            responseLinkedIn={() => {}}
            value={undefined}
          />
        );
      }

      default: {
        return <div />;
      }
    }
  };

  return (
    <div>
      {/* init SDK facebook */}
      <Helmet>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js"
        ></script>
      </Helmet>

      <div>
        <Dropdown
          options={[
            DataSourceEnum.Facebook,
            DataSourceEnum.Instagram,
            DataSourceEnum.LinkedIn,
            DataSourceEnum.Tiktok,
            DataSourceEnum.Twitter,
            DataSourceEnum.YouTube,
            DataSourceEnum.More,
          ]}
          onChane={(val) => {
            setDataSource(val);
            updateValue({ ...value, dataSource: val });
          }}
        />
        <div style={{ width: "100%", marginTop: "20px" }}>{onRenderItem()}</div>
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </div>
    </div>
  );
};
