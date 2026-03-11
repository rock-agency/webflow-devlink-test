"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PagesHeader.module.css";

export function PagesHeader({
  as: _Component = _Builtin.Section,
  title = "Investment Strategies",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "hero")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Grid
          className={_utils.cx(_styles, "cta-header-component")}
          tag="div"
          hello="world"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-header-component")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "hero-text-wrapper")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "hero-heading")}
                tag="h1"
              >
                {title}
              </_Builtin.Heading>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "header-image-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-_996c3057-962c-6418-f199-cadbb22e9c9a-b22e9c93"
            )}
            tag="div"
          />
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
