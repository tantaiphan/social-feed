/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { CarouselLayoutSettingModel } from "../../core/models/MetaType";
import { defaultLayout } from "../../core/libs/data/defaultData";

interface ComponentProps {
  items: any[];
  configCarousel?: CarouselLayoutSettingModel;
  onRenderItem?: (val: any) => ReactNode;
}

export const MultilCarousel: React.FC<ComponentProps> = ({
  items,
  onRenderItem,
  configCarousel,
}) => {
  const desktopColumn =
    configCarousel?.desktopColumn ??
    defaultLayout.carouselLayoutSetting?.desktopColumn ??
    5;

  const mobileColumn =
    configCarousel?.mobileColumn ||
    defaultLayout.carouselLayoutSetting?.mobileColumn ||
    2;

  const itemSpace =
    configCarousel?.itemSpace ??
    defaultLayout.carouselLayoutSetting?.itemSpace ??
    10;

  const shotDot =
    configCarousel?.showDot ?? defaultLayout.carouselLayoutSetting?.showDot;

  const showNavigation =
    configCarousel?.showNavigation ??
    defaultLayout.carouselLayoutSetting?.showNavigation;

  const autoPlay =
    configCarousel?.autoPlay ?? defaultLayout.carouselLayoutSetting?.autoPlay;

  const autoPlayTime =
    configCarousel?.autoPlayTime ??
    (defaultLayout.carouselLayoutSetting?.autoPlayTime || 2000);

  const maxItem =
    configCarousel?.numberItems ||
    defaultLayout.carouselLayoutSetting?.numberItems ||
    10;

  const responsive = useMemo(() => {
    return {
      desktop: {
        breakpoint: { max: 3000, min: 900 },
        items: desktopColumn > 10 ? desktopColumn % 100 : desktopColumn % 10,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: desktopColumn > 10 ? desktopColumn % 100 : desktopColumn % 10,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: mobileColumn > 10 ? mobileColumn % 100 : mobileColumn % 10,
      },
    };
  }, [desktopColumn, mobileColumn]);

  // Styled components
  const CarouselContainer = styled.div`
    width: 100%;
    margin: 0 auto;
  `;

  const Item = styled.div`
    display: flex;
    justify-content: center;
    height: 90%;
    margin: ${itemSpace}px;
  `;

  const onRenderUI = useMemo(() => {
    return (
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={shotDot}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlayTime}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={
          showNavigation
            ? ["tablet", "mobile"]
            : ["desktop", "tablet", "mobile"]
        }
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item: any, index: number) => {
          if (index + 1 <= maxItem) {
            return <Item key={index}>{onRenderItem?.(item)}</Item>;
          }
          return null;
        })}
      </Carousel>
    );
  }, [
    desktopColumn,
    mobileColumn,
    shotDot,
    showNavigation,
    autoPlay,
    autoPlayTime,
    itemSpace,
    maxItem,
    items,
  ]);

  return (
    <>
      <CarouselContainer>{onRenderUI}</CarouselContainer>
    </>
  );
};
