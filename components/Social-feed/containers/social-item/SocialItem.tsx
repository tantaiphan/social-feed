/* eslint-disable @next/next/no-img-element */
import React, { CSSProperties, useEffect, useMemo, useState } from "react";
import { PostDataModel } from "../../core/models/post";
import { SocialItemCss } from "../../styles/social-item/socialItem";
import { LikeIcon } from "../../assets/icon/like";
import { CommentIcon } from "../../assets/icon/comment";
import { ShareIcon } from "../../assets/icon/share";
import { LayoutEnum } from "../../core/libs/contants";
import { ItemFeedSettingModel, LayoutModel } from "../../core/models/MetaType";
import { defaultLayout } from "../../core/libs/data/defaultData";
import { YoutubeIcon } from "../../assets/icon/youtube";
import { formatDistanceToNow } from "date-fns";

interface ComponentProps {
  data: PostDataModel;
  layout?: LayoutModel;
  itemStyle?: ItemFeedSettingModel;
}

const SocialItem: React.FC<ComponentProps> = (props) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    setIsDesktop(window?.innerWidth >= 900);
  }, []);

  const customStyle = useMemo(() => {
    return {
      fontSize: `${props.itemStyle?.fontSize || "20"}px`,
      textColor: props.itemStyle?.textColor || "#000",
      backgroundColor: props.itemStyle?.backgroundColor || "unset",
      borderRadius: props.itemStyle?.cornerRadius || 10,
      textAlign: props.itemStyle?.textAlign || "left",
    };
  }, [props.itemStyle]);

  const isRowStyle = () => {
    return (
      props.layout?.layoutType &&
      (props.layout?.layoutType === LayoutEnum.List ||
        props.layout?.layoutType === LayoutEnum.Slider)
    );
  };

  const itemSpace = (show?: boolean): CSSProperties | undefined => {
    if (show) {
      let spaging: number | undefined = 10;
      if (
        props.layout?.layoutType &&
        props.layout?.layoutType === LayoutEnum.List
      ) {
        spaging =
          props.layout?.listLayoutSetting?.itemSpace ||
          defaultLayout.listLayoutSetting?.itemSpace;
      } else {
        spaging = 10;
      }
      return {
        margin: `${spaging}px 0px ${spaging}px 0px`,
      };
    }
    return {};
  };

  const getTime = (val: string) => {
    const date = new Date(val);

    return formatDistanceToNow(date, { addSuffix: true });
  };

  return (
    <>
      <div
        className="video-card"
        style={
          isRowStyle()
            ? {
                display: "flex",
                flexDirection: props.itemStyle?.reverse
                  ? isDesktop
                    ? "row-reverse"
                    : "column-reverse"
                  : isDesktop
                  ? "row"
                  : "column",
                ...itemSpace(isRowStyle()),
                color: customStyle.textColor,
                background: customStyle.backgroundColor,
                borderRadius: `${customStyle.borderRadius}px`,
              }
            : {
                display: "flex",
                flexDirection: props.itemStyle?.reverse
                  ? "column-reverse"
                  : "column",
                ...itemSpace(isRowStyle()),
                color: customStyle.textColor,
                background: customStyle.backgroundColor,
                borderRadius: `${customStyle.borderRadius}px`,
              }
        }
      >
        <img
          src={props.data?.imgUrl || ""}
          style={
            isRowStyle()
              ? { cursor: "pointer", maxWidth: isDesktop ? "40%" : "100%" }
              : {
                  cursor: "pointer",
                }
          }
          alt="Thumbnail"
          className="video-card__thumbnail"
          onClick={() => {
            window?.open(props.data?.link || "_blank");
          }}
        />

        <div
          className="video-card__content"
          style={
            isRowStyle()
              ? {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: isDesktop ? "100%" : "unset",
                  maxWidth: isDesktop ? "unset" : "100%",
                }
              : {}
          }
        >
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.open(props.data?.link || "_blank");
            }}
          >
            <div
              className="video-card__title"
              style={{
                fontSize: customStyle.fontSize,
                textAlign: customStyle.textAlign,
              }}
            >
              {props.data?.description}
            </div>
          </div>
          <div>
            <div className="video-card__channel">
              <div
                style={{
                  display: "flex",
                }}
              >
                {props.data?.channelAvatar && (
                  <img
                    src={props.data?.channelAvatar || ""}
                    alt="Channel Logo"
                    className="video-card__channel-logo"
                  />
                )}
                <div style={{ width: "100%" }}>
                  <div className="video-card__channel-name">
                    {props.data?.channelTitle || ""}
                  </div>
                  {props.data.createAt && (
                    <div className="video-card__time">
                      {getTime(props.data?.createAt || "")}
                    </div>
                  )}
                </div>
              </div>
              <YoutubeIcon fill={"red"} width={34} height={34} />
            </div>
            <div className="video-card__footer">
              <div className="video-card__stats">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minWidth: "35px",
                  }}
                >
                  <span className="video-card__views">
                    {props.data?.numberLike || ""}
                  </span>
                  <LikeIcon />
                </div>
                <div
                  style={{
                    marginLeft: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className="video-card__icon">
                    {props.data?.numberComment || ""}
                  </span>
                  <CommentIcon />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {isDesktop && <div className="video-card__share">Share</div>}
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: SocialItemCss }} />
    </>
  );
};

export default SocialItem;
