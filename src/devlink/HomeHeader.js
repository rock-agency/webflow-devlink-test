"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HomeHeader.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-47":{"id":"e-47","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695310349264}},"actionLists":{"a-29":{"id":"a-29","title":"Home Page Load","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"20546de4-a5e3-42a8-d150-1997fd65c246"},"xValue":null,"yValue":80,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-29-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"20546de4-a5e3-42a8-d150-1997fd65c246"},"value":0,"unit":""}},{"id":"a-29-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"20546de4-a5e3-42a8-d150-1997fd65c254"},"xValue":null,"yValue":80,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-29-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"20546de4-a5e3-42a8-d150-1997fd65c254"},"value":0,"unit":""}},{"id":"a-29-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"69b0d2201608b7959b777ebe|6041f3ea-2d64-7ebc-2c2a-5c95d22f6b02"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"outQuad","duration":1000,"target":{"id":"20546de4-a5e3-42a8-d150-1997fd65c254"},"value":1,"unit":""}},{"id":"a-29-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outQuad","duration":500,"target":{"id":"20546de4-a5e3-42a8-d150-1997fd65c246"},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-29-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"outQuad","duration":1000,"target":{"id":"20546de4-a5e3-42a8-d150-1997fd65c246"},"value":1,"unit":""}},{"id":"a-29-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outQuad","duration":650,"target":{"id":"20546de4-a5e3-42a8-d150-1997fd65c254"},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-29-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"outQuad","duration":1000,"target":{"id":"69b0d2201608b7959b777ebe|6041f3ea-2d64-7ebc-2c2a-5c95d22f6b02"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694020967677}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeHeader({
  as: _Component = _Builtin.Section,
  title = "The bank of the future. ",

  link1 = {
    href: "#",
  },

  text1 = "Get started",

  link2 = {
    href: "#",
  },

  text2 = "Learn more",
  image = "https://cdn.prod.website-files.com/69b0d21e1608b7959b777e5d/69b0d2201608b7959b777f19_EN%20-%20Hero%20Image.webp",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

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
            data-w-id="20546de4-a5e3-42a8-d150-1997fd65c246"
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
                <_Builtin.Block tag="div">{text1}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "button-tertiary", "hide-tablet")}
                button={false}
                block="inline"
                options={link2}
              >
                <_Builtin.Block tag="div">{text2}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "header-image-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-_20546de4-a5e3-42a8-d150-1997fd65c253-fd65c243"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image")}
              data-w-id="20546de4-a5e3-42a8-d150-1997fd65c254"
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src={image}
            />
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
