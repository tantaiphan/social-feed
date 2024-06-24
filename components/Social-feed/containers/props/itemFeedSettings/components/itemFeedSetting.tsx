/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import InputNumber from "@/components/Social-feed/components/input/numberInput";
import {
  ItemFeedSettingModel,
  SocialFeedModel,
  alignType,
} from "@/components/Social-feed/core/models/MetaType";
import { customLayoutCss } from "@/components/Social-feed/styles/custom-layout";
import { useEffect, useState } from "react";

interface ComponentProps {
  componentProps: SocialFeedModel;
  updateValue: (val: ItemFeedSettingModel) => void;
  value: ItemFeedSettingModel;
}

export const ItemFeedSettings = ({
  componentProps,
  updateValue,
  value,
}: ComponentProps) => {
  const [fontSize, setFontSize] = useState<string | number | undefined>(14);
  const [borderRadius, setBorderRadius] = useState<string | number | undefined>(
    20
  );
  const [textColor, setTextColor] = useState<string | undefined>("#000");
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    "unset"
  );
  const [textAlign, setTextAlign] = useState<alignType | undefined>("left");
  const [reverse, setReverse] = useState<boolean | undefined>(false);

  useEffect(() => {
    if (value) {
      setFontSize(value?.fontSize || 14);
      setTextAlign(value?.textAlign || "left");
      setTextColor(value?.textColor || "#000");
      setBackgroundColor(value?.backgroundColor || "unset");
      setBorderRadius(value?.cornerRadius || 20);
      setReverse(value?.reverse || false);
    }
  }, [value]);

  const onChangeDataInput = (
    key: string,
    val: string | number | boolean | undefined
  ) => {
    updateValue({
      ...value,
      [key]: val,
    });
  };

  return (
    <>
      <div className="custom_layout_container">
        {/* font size  */}
        <div className="custom_layout_setting_item">
          <span className="custom_layout_label">Font size</span>

          <div
            style={{
              width: "50px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <InputNumber
              value={fontSize}
              min={1}
              max={100}
              onChange={(val) => {
                setFontSize(val ? Number(val) : "");
              }}
              onBlur={(val) => {
                onChangeDataInput("fontSize", val?.toString());
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

        {/* text color  */}
        <div className="custom_layout_setting_item">
          <span className="custom_layout_label">Text color</span>

          <input
            value={textColor}
            onChange={(val) => {
              setTextColor(val.target?.value);
            }}
            onBlur={(val) => {
              onChangeDataInput("textColor", val.target.value);
            }}
            className="custom_layout_input_number"
            style={{
              width: "60px",
              paddingRight: "2px !important",
              background: "rgb(243, 243, 242)",
            }}
          />
        </div>

        {/* Background color  */}
        <div className="custom_layout_setting_item">
          <span className="custom_layout_label">Background color</span>

          <input
            value={backgroundColor}
            onChange={(val) => {
              setBackgroundColor(val.target?.value);
            }}
            onBlur={(val) => {
              onChangeDataInput("backgroundColor", val.target.value);
            }}
            className="custom_layout_input_number"
            style={{
              width: "60px",
              paddingRight: "2px !important",
              background: "rgb(243, 243, 242)",
            }}
          />
        </div>

        {/* Border radius  */}
        <div
          className="custom_layout_setting_item"
          style={{ borderTop: "1px solid #3a3a3c" }}
        >
          <span className="custom_layout_label">Border radius</span>

          <div
            style={{
              width: "50px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <InputNumber
              value={borderRadius}
              min={0}
              max={500}
              onChange={(val) => {
                setBorderRadius(val ? Number(val) : "");
              }}
              onBlur={(val) => {
                onChangeDataInput("cornerRadius", val?.toString());
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

        {/* Text align  */}
        <div className="custom_layout_setting_item">
          <span className="custom_layout_label">Text align</span>

          <div
            className="radio-group"
            style={{
              marginBottom: "0px",
            }}
          >
            <label
              style={{
                marginBottom: "3px",
                marginTop: "3px",
              }}
            >
              <input
                type="radio"
                name="sourceType"
                value="left"
                checked={textAlign === "left"}
                onChange={
                  () => {
                    onChangeDataInput("textAlign", "left");
                  }
                  // onChangeSourceType(YoutubesourceTypeEnum.Channel)
                }
              />
              {"Left"}
            </label>
            <label
              style={{
                marginBottom: "3px",
                marginTop: "3px",
              }}
            >
              <input
                type="radio"
                name="sourceType"
                value={"center"}
                checked={textAlign === "center"}
                onChange={
                  () => {
                    onChangeDataInput("textAlign", "center");
                  }
                  // onChangeSourceType(YoutubesourceTypeEnum.Playlist)
                }
              />
              {"Center"}
            </label>
            <label
              style={{
                marginBottom: "3px",
                marginTop: "3px",
              }}
            >
              <input
                type="radio"
                name="sourceType"
                value={"right"}
                checked={textAlign === "right"}
                onChange={() => {
                  onChangeDataInput("textAlign", "right");
                }}
              />
              {"Right"}
            </label>
          </div>
        </div>

        {/* Reverse  */}
        <div className="custom_layout_setting_item">
          <span className="custom_layout_label">Reverse</span>
          <label className="custom_layout_switch">
            <input
              type="checkbox"
              value={String(reverse)}
              checked={reverse}
              // defaultChecked={showDot}
              onChange={() => {
                onChangeDataInput("reverse", !reverse);
              }}
            />
            <span className="custom_layout_slider"></span>
          </label>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: customLayoutCss }} />
    </>
  );
};
