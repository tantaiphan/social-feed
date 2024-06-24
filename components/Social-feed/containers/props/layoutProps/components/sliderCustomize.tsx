/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { LayoutModel } from "@/components/Social-feed/core/models/MetaType";
import InputNumber from "@/components/Social-feed/components/input/numberInput";
import { defaultLayout } from "@/components/Social-feed/core/libs/data/defaultData";
interface ComponentProps {
  updateValue: (val: LayoutModel) => void;
  value: LayoutModel;
}

export const SliderLayoutCustom = ({ updateValue, value }: ComponentProps) => {
  // Item space
  const [itemSpace, setItemSpace] = useState<string | number | undefined>(
    defaultLayout.sliderLayoutSetting?.itemSpace
  );
  // show Dot
  const [showDot, setShowDot] = useState<boolean | undefined>(
    defaultLayout.sliderLayoutSetting?.showDot
  );

  // show navigation
  const [showNavigation, setShowNavigation] = useState<boolean | undefined>(
    defaultLayout.sliderLayoutSetting?.showNavigation
  );

  // auto play
  const [autoPlay, setAutoPlay] = useState<boolean | undefined>(
    defaultLayout.sliderLayoutSetting?.autoPlay
  );

  // auto play time
  const [autoPlayTime, setAutoPlayTime] = useState<string | number | undefined>(
    defaultLayout.sliderLayoutSetting?.autoPlayTime
  );

  // swipe
  const [swipe, setSwipe] = useState<boolean | undefined>(
    defaultLayout.sliderLayoutSetting?.swipe
  );

  // Number item show
  const [numberItems, setNumberItems] = useState<string | number | undefined>(
    defaultLayout.sliderLayoutSetting?.numberItems
  );

  useEffect(() => {
    if (value) {
      const valueItemSpace =
        value.sliderLayoutSetting?.itemSpace ||
        defaultLayout.sliderLayoutSetting?.itemSpace;

      const valueShowDot =
        value.sliderLayoutSetting?.showDot === undefined
          ? defaultLayout.sliderLayoutSetting?.showDot
          : value.sliderLayoutSetting?.showDot;

      const shownavigation =
        value.sliderLayoutSetting?.showNavigation === undefined
          ? defaultLayout.sliderLayoutSetting?.showNavigation
          : value.sliderLayoutSetting?.showNavigation;

      const valueAutoplay =
        value.sliderLayoutSetting?.autoPlay === undefined
          ? defaultLayout.sliderLayoutSetting?.autoPlay
          : value.sliderLayoutSetting?.autoPlay;

      const valueAutoplayTime =
        value.sliderLayoutSetting?.autoPlayTime ||
        defaultLayout.sliderLayoutSetting?.autoPlayTime;

      const valueSwipe =
        value.sliderLayoutSetting?.swipe ||
        defaultLayout.sliderLayoutSetting?.swipe;

      const valueNumberItems =
        value.sliderLayoutSetting?.numberItems ||
        defaultLayout.sliderLayoutSetting?.numberItems;

      setItemSpace(valueItemSpace);

      setShowDot(valueShowDot);

      setShowNavigation(shownavigation);

      setAutoPlay(valueAutoplay);

      setAutoPlayTime(valueAutoplayTime);

      setSwipe(valueSwipe);

      setNumberItems(valueNumberItems);
    }
  }, [value]);

  const onChangeDataInput = (
    key: string,
    val: string | boolean | undefined
  ) => {
    updateValue({
      ...defaultLayout,
      layoutType: value?.layoutType,
      sliderLayoutSetting: { ...value?.sliderLayoutSetting, [key]: val },
    });
  };

  return (
    <>
      <div className="custom_layout_settings">
        {/* item spacing  */}
        <div
          className="custom_layout_setting_item"
          style={{ borderTop: "1px solid #3a3a3c" }}
        >
          <span className="custom_layout_label">Item Spacing</span>

          <div
            style={{
              width: "50px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <InputNumber
              value={itemSpace}
              min={0}
              max={1000}
              onChange={(val) => {
                setItemSpace(val ? Number(val) : "");
              }}
              onBlur={(val) => {
                onChangeDataInput("itemSpace", val?.toString());
              }}
              classname="custom_layout_input_number"
            />
            <span
              style={{
                marginLeft: "3px",
              }}
            >
              px
            </span>
          </div>
        </div>

        {/* number items  */}
        <div
          className="custom_layout_setting_item"
          style={{ borderTop: "1px solid #3a3a3c" }}
        >
          <span className="custom_layout_label">Number item show</span>

          <InputNumber
            value={numberItems}
            min={0}
            max={100}
            onChange={(val) => {
              setNumberItems(val ? Number(val) : "");
            }}
            onBlur={(val) => {
              onChangeDataInput("numberItems", val?.toString());
            }}
            classname="custom_layout_input_number"
          />
        </div>
        {/* show dot  */}
        <div className="custom_layout_setting_item">
          <span className="custom_layout_label">Show Dot</span>
          <label className="custom_layout_switch">
            <input
              type="checkbox"
              value={String(showDot)}
              checked={showDot}
              // defaultChecked={showDot}
              onChange={() => {
                onChangeDataInput("showDot", !showDot);
              }}
            />
            <span className="custom_layout_slider"></span>
          </label>
        </div>

        {/* show navigation  */}
        <div className="custom_layout_setting_item">
          <span className="custom_layout_label">Show navigation</span>
          <label className="custom_layout_switch">
            <input
              type="checkbox"
              value={String(showNavigation)}
              checked={showNavigation}
              // defaultChecked={showDot}
              onChange={() => {
                onChangeDataInput("showNavigation", !showNavigation);
              }}
            />
            <span className="custom_layout_slider"></span>
          </label>
        </div>

        {/* swipe  */}
        <div className="custom_layout_setting_item">
          <span className="custom_layout_label">Swipe</span>
          <label className="custom_layout_switch">
            <input
              type="checkbox"
              value={String(swipe)}
              checked={swipe}
              onChange={() => {
                onChangeDataInput("swipe", !swipe);
              }}
            />
            <span className="custom_layout_slider"></span>
          </label>
        </div>

        {/* auto play  */}
        <div className="custom_layout_setting_item">
          <span className="custom_layout_label">Autoplay</span>
          <label className="custom_layout_switch">
            <input
              type="checkbox"
              value={String(autoPlay)}
              checked={autoPlay}
              // defaultChecked={showDot}
              onChange={() => {
                onChangeDataInput("autoPlay", !autoPlay);
              }}
            />
            <span className="custom_layout_slider"></span>
          </label>
        </div>
        {/* item spacing  */}
        {autoPlay && (
          <div
            className="custom_layout_setting_item"
            style={{ borderTop: "1px solid #3a3a3c" }}
          >
            <span className="custom_layout_label">Autoplay Time</span>

            <InputNumber
              value={autoPlayTime}
              min={0}
              max={20000}
              onChange={(val) => {
                setAutoPlayTime(val ? Number(val) : "");
              }}
              onBlur={(val) => {
                onChangeDataInput("autoPlayTime", val?.toString());
              }}
              classname="custom_layout_input_number"
              style={{
                width: "45px",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};
