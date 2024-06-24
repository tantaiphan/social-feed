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

export const GridLayoutCustom = ({ updateValue, value }: ComponentProps) => {
  // columns
  const [desktopColumn, setDesktopColumn] = useState<
    number | string | undefined
  >(defaultLayout.gridLayoutSetting?.desktopColumn);
  const [mobileColumn, setMobileColumn] = useState<number | string | undefined>(
    defaultLayout.gridLayoutSetting?.mobileColumn
  );

  // Rows
  const [desktopRows, setDesktopRows] = useState<number | string | undefined>(
    defaultLayout.gridLayoutSetting?.desktopRows
  );
  const [mobileRows, setMobileRows] = useState<number | string | undefined>(
    defaultLayout.gridLayoutSetting?.mobileRows
  );

  // Item space
  const [itemSpace, setItemSpace] = useState<string | number | undefined>(
    defaultLayout.gridLayoutSetting?.itemSpace
  );

  // Number item show
  const [numberItems, setNumberItems] = useState<string | number | undefined>(
    defaultLayout.gridLayoutSetting?.numberItems
  );

  useEffect(() => {
    if (value) {
      setDesktopColumn(
        value.gridLayoutSetting?.desktopColumn ||
          defaultLayout.gridLayoutSetting?.desktopColumn
      );

      setMobileColumn(
        value.gridLayoutSetting?.mobileColumn ||
          defaultLayout.gridLayoutSetting?.mobileColumn
      );

      setDesktopRows(
        value.gridLayoutSetting?.desktopColumn ||
          defaultLayout.gridLayoutSetting?.desktopRows
      );

      setMobileRows(
        value.gridLayoutSetting?.mobileRows ||
          defaultLayout.gridLayoutSetting?.mobileColumn
      );

      setItemSpace(
        value.gridLayoutSetting?.itemSpace ||
          defaultLayout.gridLayoutSetting?.itemSpace
      );

      setNumberItems(
        value.gridLayoutSetting?.numberItems ||
          defaultLayout.gridLayoutSetting?.numberItems
      );
    }
  }, [value]);

  const onChangeDataInput = (key: string, val: string | undefined) => {
    updateValue({
      ...defaultLayout,
      layoutType: value?.layoutType,
      gridLayoutSetting: { ...value?.gridLayoutSetting, [key]: val },
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
          {/* <span className="custom_layout_value">2</span> */}
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
        {/* custom rows    */}
        {/* <div
          className="custom_layout_column"
          style={{ borderTop: "1px solid #3a3a3c" }}
        >
          <span className="custom_layout_label">Rows</span>
        </div> */}
        {/* desktop rows */}
        {/* <div className="custom_layout_column_item">
          <span className="custom_layout_label">Desktop</span>
          <InputNumber
            value={desktopRows}
            min={1}
            max={100}
            onChange={(val) => {
              setDesktopRows(val ? Number(val) : "");
            }}
            onBlur={(val) => {
              onChangeDataInput("desktopRows", val?.toString());
            }}
            classname="custom_layout_input_number"
          />
        </div> */}
        {/* mobile rows */}
        {/* <div className="custom_layout_column_item">
          <span className="custom_layout_label">Mobile</span>
          <InputNumber
            value={mobileRows}
            min={1}
            max={100}
            onChange={(val) => {
              setMobileRows(val ? Number(val) : "");
            }}
            onBlur={(val) => {
              onChangeDataInput("mobileRows", val?.toString());
            }}
            classname="custom_layout_input_number"
          />
        </div> */}

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
