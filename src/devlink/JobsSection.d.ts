import * as React from "react";
import * as Types from "./types";

export type JobItem = {
  id: string;
  text1?: React.ReactNode;
  text2?: React.ReactNode;
  text3?: React.ReactNode;
  text4?: React.ReactNode;
  text5?: React.ReactNode;
  text6?: React.ReactNode;
  text7?: React.ReactNode;
  text8?: React.ReactNode;
};

declare function JobsSection(props: {
  as?: React.ElementType;
  image1?: Types.Asset.Image;
  image2?: Types.Asset.Image;
  jobComponentText1?: React.ReactNode;
  jobComponentText2?: React.ReactNode;
  jobComponentText3?: React.ReactNode;
  jobComponentText4?: React.ReactNode;
  jobComponentText5?: React.ReactNode;
  jobComponentText6?: React.ReactNode;
  jobComponentText7?: React.ReactNode;
  jobComponentText8?: React.ReactNode;
  jobs?: JobItem[];
}): React.JSX.Element;
