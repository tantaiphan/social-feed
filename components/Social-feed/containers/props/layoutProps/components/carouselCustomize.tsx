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

export const CarouselLayoutCustom = ({
  updateValue,
  value,
}: ComponentProps) => {
  // columns
  const [desktopColumn, setDesktopColumn] = useState<
    number | string | undefined
  >(defaultLayout.carouselLayoutSetting?.desktopColumn);
  const [mobileColumn, setMobileColumn] = useState<number | string | undefined>(
    defaultLayout.carouselLayoutSetting?.mobileColumn
  );

  // Item space
  const [itemSpace, setItemSpace] = useState<string | number | undefined>(
    defaultLayout.carouselLayoutSetting?.itemSpace
  );
  // show Dot
  const [showDot, setShowDot] = useState<boolean | undefined>(
    defaultLayout.carouselLayoutSetting?.showDot
  );

  // show navigation
  const [showNavigation, setShowNavigation] = useState<boolean | undefined>(
    defaultLayout.carouselLayoutSetting?.showNavigation
  );

  // auto play
  const [autoPlay, setAutoPlay] = useState<boolean | undefined>(
    defaultLayout.carouselLayoutSetting?.autoPlay
  );

  // auto play time
  const [autoPlayTime, setAutoPlayTime] = useState<string | number | undefined>(
    defaultLayout.carouselLayoutSetting?.autoPlayTime
  );

  // Number item show
  const [numberItems, setNumberItems] = useState<string | number | undefined>(
    defaultLayout.listLayoutSetting?.numberItems
  );

  useEffect(() => {
    if (value) {
      const valueDesktopColumn =
        value.carouselLayoutSetting?.desktopColumn ||
        defaultLayout.carouselLayoutSetting?.desktopColumn;

      const valueMobileColumn =
        value.carouselLayoutSetting?.mobileColumn ||
        defaultLayout.carouselLayoutSetting?.mobileColumn;

      const valueItemSpace =
        value.carouselLayoutSetting?.itemSpace ||
        defaultLayout.carouselLayoutSetting?.itemSpace;

      const valueShowDot =
        value.carouselLayoutSetting?.showDot === undefined
          ? defaultLayout.carouselLayoutSetting?.showDot
          : value.carouselLayoutSetting?.showDot;

      const shownavigation =
        value.carouselLayoutSetting?.showNavigation === undefined
          ? defaultLayout.carouselLayoutSetting?.showNavigation
          : value.carouselLayoutSetting?.showNavigation;

      const valueAutoplay =
        value.carouselLayoutSetting?.autoPlay === undefined
          ? defaultLayout.carouselLayoutSetting?.autoPlay
          : value.carouselLayoutSetting?.autoPlay;

      const valueAutoplayTime =
        value.carouselLayoutSetting?.autoPlayTime ||
        defaultLayout.carouselLayoutSetting?.autoPlayTime;

      const valueNumberItems =
        value.carouselLayoutSetting?.numberItems ||
        defaultLayout.carouselLayoutSetting?.numberItems;

      setDesktopColumn(valueDesktopColumn);
      setMobileColumn(valueMobileColumn);

      setItemSpace(valueItemSpace);

      setShowDot(valueShowDot);

      setShowNavigation(shownavigation);

      setAutoPlay(valueAutoplay);

      setAutoPlayTime(valueAutoplayTime);

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
      carouselLayoutSetting: { ...value?.carouselLayoutSetting, [key]: val },
    });
  };

  return (
    <>
      <div className="custom_layout_settings">
        {/* custom column    */}
        <div className="custom_layout_column">
          <span className="custom_layout_label">Columns</span>
        </div>

        {/* desktop column */}
        <div className="custom_layout_column_item">
          <span className="custom_layout_label">Desktop</span>
          <InputNumber
            value={desktopColumn}
            onChange={(val) => {
              setDesktopColumn(val ? Number(val) : "");
            }}
            min={1}
            max={100}
            onBlur={(val) => {
              onChangeDataInput("desktopColumn", val?.toString());
            }}
            classname="custom_layout_input_number"
          />
        </div>

        {/* mobile column */}
        <div className="custom_layout_column_item">
          <span className="custom_layout_label">Mobile</span>
          <InputNumber
            value={mobileColumn}
            min={1}
            max={100}
            onChange={(val) => {
              setMobileColumn(val ? Number(val) : "");
            }}
            onBlur={(val) => {
              onChangeDataInput("mobileColumn", val?.toString());
            }}
            classname="custom_layout_input_number"
          />
        </div>

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
