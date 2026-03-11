import * as React from "react";
import * as Types from "./types";

declare function HomeHeader(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  link1?: Types.Basic.Link;
  text1?: React.ReactNode;
  link2?: Types.Basic.Link;
  text2?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
