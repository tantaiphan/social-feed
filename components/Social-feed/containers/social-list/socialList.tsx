/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SocialFeedModel } from "../../core/models/MetaType";
import { layoutCss } from "../../styles/social-list/laylistProp";
import { LayoutEnum } from "../../core/libs/contants";
import { defaultLayout } from "../../core/libs/data/defaultData";
import { MultilCarousel } from "../../components/carousel/carousel";
import { PostDataModel } from "../../core/models/post";
import SocialItem from "../social-item/SocialItem";
import { SliderLayout } from "../../components/slider/slider";
import {
  isEmpty,
  onFilterDataByKeyWord,
  onFilterDataToDate,
} from "../../core/libs/ultils";

interface ComponentProps {
  componentProps: SocialFeedModel;
  children?: ReactNode;
  data?: any;
}

export const SocialFeedList: React.FC<ComponentProps> = (props) => {
  const { componentProps } = props;
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const arr = useMemo(() => {
    if (props.data === undefined) {
      return [];
    }
    if (componentProps?.filter === undefined) {
      return onFilterDataToDate(props.data, componentProps.startDate);
    }

    return onFilterDataByKeyWord(
      onFilterDataToDate(props.data, componentProps.startDate),
      componentProps?.filter?.keyword
    );
  }, [props.data, componentProps?.filter, componentProps.startDate]);

  useEffect(() => {
    setIsDesktop(window?.innerWidth >= 900);
  }, []);

  const listClassname = useMemo(() => {
    switch (componentProps.layout?.layoutType) {
      case LayoutEnum.List: {
        return "";
      }
      case LayoutEnum.Grid:
      default: {
        return "grid_layout";
      }
    }
  }, [componentProps.layout]);

  const listStyle = (): CSSProperties | undefined => {
    switch (componentProps.layout?.layoutType) {
      case LayoutEnum.List: {
        return {};
      }
      case LayoutEnum.Grid:
      default: {
        return {
          gridTemplateColumns: `repeat(${
            isDesktop
              ? componentProps.layout?.gridLayoutSetting?.desktopColumn ||
                defaultLayout.gridLayoutSetting?.desktopColumn
              : componentProps.layout?.gridLayoutSetting?.mobileColumn ||
                defaultLayout.gridLayoutSetting?.mobileColumn
          }, 1fr)`,
          gap: `${
            componentProps.layout?.gridLayoutSetting?.itemSpace ||
            defaultLayout.gridLayoutSetting?.itemSpace
          }px`,
        };
      }
    }
  };

  switch (componentProps.layout?.layoutType) {
    case LayoutEnum.Slider: {
      return (
        <div>
          <SliderLayout
            items={arr}
            onRenderItem={(val: PostDataModel) => {
              return (
                <SocialItem
                  data={val}
                  layout={props.componentProps?.layout}
                  itemStyle={componentProps.itemSettings}
                />
              );
            }}
            configCarousel={componentProps.layout?.sliderLayoutSetting}
          />
        </div>
      );
    }
    case LayoutEnum.Carousel: {
      return (
        <div>
          <MultilCarousel
            items={arr}
            onRenderItem={(val: PostDataModel) => {
              return (
                <SocialItem
                  data={val}
                  layout={props.componentProps?.layout}
                  itemStyle={componentProps.itemSettings}
                />
              );
            }}
            configCarousel={componentProps.layout?.carouselLayoutSetting}
          />
        </div>
      );
    }
    case LayoutEnum.Grid: {
      const maxItem =
        componentProps.layout?.gridLayoutSetting?.numberItems ||
        defaultLayout.gridLayoutSetting?.numberItems ||
        10;
      return (
        <>
          <div className={listClassname} style={listStyle()}>
            {arr.map((val: any, index: number) => {
              if (index + 1 <= maxItem) {
                return (
                  <SocialItem
                    data={val}
                    key={index}
                    layout={props.componentProps?.layout}
                    itemStyle={componentProps.itemSettings}
                  />
                );
              }
              return null;
            })}
          </div>
          <style dangerouslySetInnerHTML={{ __html: layoutCss }} />
          <style dangerouslySetInnerHTML={{ __html: listStyle }} />
        </>
      );
    }
    case LayoutEnum.List:
    default: {
      const maxItem =
        componentProps.layout?.listLayoutSetting?.numberItems ||
        defaultLayout.listLayoutSetting?.numberItems ||
        10;
      return (
        <>
          <div className={listClassname} style={listStyle()}>
            {arr.map((val: any, index: number) => {
              if (index + 1 <= maxItem) {
                return (
                  <SocialItem
                    data={val}
                    key={index}
                    layout={props.componentProps?.layout}
                    itemStyle={componentProps.itemSettings}
                  />
                );
              }
              return null;
            })}
          </div>
          <style dangerouslySetInnerHTML={{ __html: layoutCss }} />
          <style dangerouslySetInnerHTML={{ __html: listStyle }} />
        </>
      );
    }
  }
};
