/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { LayoutEnum } from "@/components/Social-feed/core/libs/contants";
import { LayoutModel } from "@/components/Social-feed/core/models/MetaType";
import InputNumber from "@/components/Social-feed/components/input/numberInput";
import { defaultLayout } from "@/components/Social-feed/core/libs/data/defaultData";
interface ComponentProps {
  updateValue: (val: LayoutModel) => void;
  value: LayoutModel;
}

export const ListLayoutCustom = ({ updateValue, value }: ComponentProps) => {
  // Item space
  const [itemSpace, setItemSpace] = useState<string | number | undefined>(
    defaultLayout.listLayoutSetting?.itemSpace
  );

  // Number item show
  const [numberItems, setNumberItems] = useState<string | number | undefined>(
    defaultLayout.listLayoutSetting?.numberItems
  );

  useEffect(() => {
    if (value) {
      setItemSpace(
        value.listLayoutSetting?.itemSpace ||
          defaultLayout.listLayoutSetting?.itemSpace
      );

      setNumberItems(
        value.listLayoutSetting?.numberItems ||
          defaultLayout.listLayoutSetting?.numberItems
      );
    }
  }, [value]);

  const onChangeDataInput = (key: string, val: string | undefined) => {
    updateValue({
      ...defaultLayout,
      layoutType: value?.layoutType,
      listLayoutSetting: { ...value?.listLayoutSetting, [key]: val },
    });
  };

  return (
    <>
      <div className="custom_layout_settings">
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
      </div>
    </>
  );
};
