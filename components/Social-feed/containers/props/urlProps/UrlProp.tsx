/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { DataSourceEnum } from "../../../core/libs/contants";
import { DataSocialFeedModel, InfoModel } from "../../../core/models/MetaType";
import { css } from "../../../styles/styles";
import Input from "../../../components/textarea-input";

interface ComponentProps {
  componentProps: DataSocialFeedModel & { queryKey?: string };
  updateValue: (val: string | undefined) => void;
  value: string;
  defaultValue?: string;
}

export const UrlProp = ({
  componentProps,
  updateValue,
  value,
  defaultValue,
}: ComponentProps) => {
  const [data, setData] = useState<string | undefined>(undefined);
  const [dataSource, setDataSource] = useState<DataSourceEnum | undefined>(
    undefined
  );
  const [info, setInfo] = useState<InfoModel | undefined>(undefined);
  const disabeldInput =
    componentProps.dataSoures &&
    componentProps.dataSoures?.dataSource !== DataSourceEnum.More;

  useEffect(() => {
    // udpate value show input
    setData(value);
  }, [value]);

  useEffect(() => {
    // check change dataSource
    if (componentProps.dataSoures?.dataSource !== dataSource) {
      setDataSource(componentProps.dataSoures?.dataSource);
    }

    if (
      componentProps.dataSoures?.info?.facebookInfo?.accessToken !==
      info?.facebookInfo?.accessToken
    ) {
      setInfo(componentProps.dataSoures?.info);
    }
  });

  useEffect(() => {
    // if dataSource change get new value
    onSetDataUrl();
  }, [dataSource, info]);

  const onSetDataUrl = () => {
    switch (dataSource) {
      case DataSourceEnum.Facebook: {
        updateValue(`https://graph.facebook.com/v20.0/me/feed`);
        break;
      }

      default: {
        updateValue(defaultValue);
        break;
      }
    }
  };

  return (
    <div>
      <div>
        <Input
          value={data}
          onChange={(val) => {
            updateValue(val);
            setData(val);
          }}
          disabled={disabeldInput}
        />
      </div>

      {/* import style  */}
      <style dangerouslySetInnerHTML={{ __html: css }} />
    </div>
  );
};
