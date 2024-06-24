import { DataProvider } from "@plasmicapp/loader-nextjs";
import { GeneralModel, SocialFeedModel } from "../core/models/MetaType";
import { styleSourceType } from "../styles/source-type/sourceType";
import { SocialFeedList } from "./social-list/socialList";

export const GenericFeedShell = (
  props: GeneralModel & {
    result: { data?: any; error?: Error; isLoading?: boolean };
    componentProps: SocialFeedModel;
  }
) => {
  // const inEditor = !!usePlasmicCanvasContext();

  // if ((!result?.error && !result?.data) || result?.isLoading) {
  //   return <>{loadingDisplay ?? null}</>;
  // }

  if (props.result?.error) {
    return (
      <DataProvider name={"feedError"} data={props.result?.error}>
        {props.errorDisplay ?? null}
      </DataProvider>
    );
  } else {
    const content = (
      <DataProvider name={"feedData"} data={props.result?.data}>
        <SocialFeedList
          componentProps={props.componentProps}
          data={props.result?.data}
        />

        <style
          dangerouslySetInnerHTML={{
            __html: styleSourceType,
          }}
        />
      </DataProvider>
    );
    return content;
  }
};
