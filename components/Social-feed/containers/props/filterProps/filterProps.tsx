import { useEffect, useState } from "react";
import {
  DataSocialFeedModel,
  FilterModel,
} from "../../../core/models/MetaType";
import { styleFilter } from "@/components/Social-feed/styles/filter/filter";
import { isEmpty } from "@/components/Social-feed/core/libs/ultils";
interface ComponentProps {
  // code
  componentProps: DataSocialFeedModel & { queryKey?: string };
  updateValue: (val: FilterModel) => void;
  value: FilterModel;
}

export const FilterProps = ({
  componentProps,
  updateValue,
  value,
}: ComponentProps) => {
  const [keyword, setkeyword] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!isEmpty(value)) {
      setkeyword(value?.keyword);
    }
  }, [value]);

  return (
    <>
      <div className="filter_container">
        <div className="filter_input-group">
          <input
            type="text"
            placeholder="Enter keyword..."
            value={keyword}
            onChange={(val) => {
              setkeyword(val.target.value);
            }}
            onBlur={(val) => {
              console.log(val?.target?.value);
              updateValue({
                ...value,
                keyword: val.target?.value || "",
              });
            }}
          />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: styleFilter }} />
    </>
  );
};
