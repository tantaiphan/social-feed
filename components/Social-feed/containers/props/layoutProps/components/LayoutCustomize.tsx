/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  DataSocialFeedModel,
  LayoutModel,
} from "../../../../core/models/MetaType";
import { LayoutEnum } from "@/components/Social-feed/core/libs/contants";
import { customLayoutCss } from "@/components/Social-feed/styles/custom-layout";
import { GridLayoutCustom } from "./gridCustomize";
import { ListLayoutCustom } from "./ListCustomize";
import { CarouselLayoutCustom } from "./carouselCustomize";
import { SliderLayoutCustom } from "./sliderCustomize";

interface ComponentProps {
  componentProps: DataSocialFeedModel & { queryKey?: string };
  updateValue: (val: LayoutModel) => void;
  value: LayoutModel;
  onBackPress: () => void;
}
const onRenderTitle = (type: LayoutEnum) => {
  switch (type) {
    case LayoutEnum.Grid: {
      return "Grid Layout";
    }
    case LayoutEnum.List: {
      return "List Layout";
    }
    case LayoutEnum.Carousel: {
      return "Carousel Layout";
    }
    case LayoutEnum.Slider:
    default: {
      return "Slider Layout";
    }
  }
};

export const CustomizeLayout = ({
  componentProps,
  updateValue,
  value,
  onBackPress,
}: ComponentProps) => {
  const onRenderCustomType = () => {
    switch (value?.layoutType) {
      case LayoutEnum.Slider: {
        return <SliderLayoutCustom updateValue={updateValue} value={value} />;
      }
      case LayoutEnum.Carousel: {
        return <CarouselLayoutCustom updateValue={updateValue} value={value} />;
      }
      case LayoutEnum.List: {
        return <ListLayoutCustom updateValue={updateValue} value={value} />;
      }
      case LayoutEnum.Grid:
      default: {
        return <GridLayoutCustom updateValue={updateValue} value={value} />;
      }
    }
  };

  return (
    <>
      <div className="custom_layout_container">
        <div className="custom_layout_header">
          <button onClick={onBackPress} className="custom_layout_back_button">
            Back
          </button>
          <h1>{onRenderTitle(value?.layoutType)}</h1>
        </div>
        {/* <GridLayoutCustom updateValue={updateValue} value={value} /> */}
        {onRenderCustomType()}
      </div>

      <style dangerouslySetInnerHTML={{ __html: customLayoutCss }} />
    </>
  );
};
