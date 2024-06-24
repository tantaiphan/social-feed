/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  DataSocialFeedModel,
  LayoutModel,
  dataSourceModel,
} from "../../../core/models/MetaType";
import { LayoutEnum } from "@/components/Social-feed/core/libs/contants";
import { OptionItemModel } from "@/components/Social-feed/core/models/type";
import { GridLayoutIcon } from "@/components/Social-feed/assets/icon/gridLayout";
import { ListLayoutIcon } from "@/components/Social-feed/assets/icon/listLayout";
import { CarouselLayoutIcon } from "@/components/Social-feed/assets/icon/carouselLayout";
import { SliderLayoutIcon } from "@/components/Social-feed/assets/icon/sliderLayout";
import { layoutCss } from "@/components/Social-feed/styles/social-list/laylistProp";
import { CustomizeLayout } from "./components/LayoutCustomize";
import { defaultLayout } from "@/components/Social-feed/core/libs/data/defaultData";

interface ComponentProps {
  // code
  componentProps: DataSocialFeedModel & { queryKey?: string };
  updateValue: (val: LayoutModel) => void;
  value: LayoutModel;
}

const dataList: OptionItemModel[] = [
  { label: LayoutEnum.Grid, key: LayoutEnum.Grid },
  { label: LayoutEnum.List, key: LayoutEnum.List },
  { label: LayoutEnum.Carousel, key: LayoutEnum.Carousel },
  { label: LayoutEnum.Slider, key: LayoutEnum.Slider },
];

const styleIcon = (isSelected: boolean) => {
  return {
    width: 50,
    height: 50,
    fill: isSelected ? "rgb(20, 148, 255)" : "#000",
  };
};

const onRenderIcon = (key: LayoutEnum, selected: boolean) => {
  switch (key) {
    case LayoutEnum.Slider: {
      return (
        <SliderLayoutIcon
          width={styleIcon(selected).width}
          height={styleIcon(selected).height}
          fill={styleIcon(selected).fill}
        />
      );
    }
    case LayoutEnum.List: {
      return (
        <ListLayoutIcon
          width={styleIcon(selected).width}
          height={styleIcon(selected).height}
          fill={styleIcon(selected).fill}
        />
      );
    }
    case LayoutEnum.Carousel: {
      return (
        <CarouselLayoutIcon
          width={styleIcon(selected).width}
          height={styleIcon(selected).height}
          fill={styleIcon(selected).fill}
        />
      );
    }
    case LayoutEnum.Slider:
    default: {
      return (
        <GridLayoutIcon
          width={styleIcon(selected).width}
          height={styleIcon(selected).height}
          fill={styleIcon(selected).fill}
        />
      );
    }
  }
};

export const SocialListProp = ({
  componentProps,
  updateValue,
  value,
}: ComponentProps) => {
  const [itemSelect, setItemSelected] = useState<OptionItemModel>(dataList[0]);
  const [showCustom, setShowCustom] = useState<boolean>(false);

  const props = {
    componentProps,
    updateValue,
    value,
  };

  useEffect(() => {
    const index = dataList.findIndex((val) => val.key === value?.layoutType);

    if (index > -1) {
      setItemSelected(dataList[index]);
    } else {
      setItemSelected(dataList[0]);
    }
  }, [value]);

  const isSelected = (key: LayoutEnum) => {
    return itemSelect.key === key;
  };

  const onSelectPlayoutPress = (key: LayoutEnum) => {
    updateValue({
      ...defaultLayout,
      layoutType: key,
    });
  };

  return (
    <>
      {!showCustom ? (
        <div className="layout_container">
          {dataList.map((val) => {
            return (
              <div
                key={val.key}
                className={`layou†_item_detail ${
                  isSelected(val.key) ? "item_selected" : ""
                }`}
                onClick={() => onSelectPlayoutPress(val.key)}
              >
                {onRenderIcon(val.key, isSelected(val.key))}
                <div>{val.label}</div>
              </div>
            );
          })}
          <div className="btn_customize">
            <div onClick={() => setShowCustom(true)}>{"Customize"}</div>
          </div>
        </div>
      ) : (
        <CustomizeLayout {...props} onBackPress={() => setShowCustom(false)} />
      )}

      <style dangerouslySetInnerHTML={{ __html: layoutCss }} />
    </>
  );
};
