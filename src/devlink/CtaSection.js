"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CtaSection.module.css";

export function CtaSection({
  as: _Component = _Builtin.Section,
  title = "Begin the journey.",
  text1 = "Embrace a new era of financial management",

  link1 = {
    href: "#",
  },

  text2 = "Get started",

  link2 = {
    href: "#",
  },

  text3 = "Learn more",
  image = "https://cdn.prod.website-files.com/69b0d21e1608b7959b777e5d/69b0d2201608b7959b777f0a_EN%20-%20CTA%20Image.webp",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "cta")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container")}
        tag="div"
        grid={{
          type: "container",
        }}
      >
        <_Builtin.Block className={_utils.cx(_styles, "cta-layout")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-header-component")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "hero-text-wrapper")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "h2", "hero")}
                tag="h1"
              >
                {title}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "h2", "text-color-gray500")}
                tag="div"
              >
                {text1}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "button-row")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "button")}
                button={false}
                block="inline"
                options={link1}
              >
                <_Builtin.Block tag="div">{text2}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "button-tertiary", "hide-tablet")}
                button={false}
                block="inline"
                options={link2}
              >
                <_Builtin.Block tag="div">{text3}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "image-cta")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src={image}
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
