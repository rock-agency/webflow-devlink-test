"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./JobsSectionDynamic.module.css";

export function JobsSectionDynamic({
  as: _Component = _Builtin.Section,
  image1 = "https://cdn.prod.website-files.com/69b0d21e1608b7959b777e5d/69b0d2201608b7959b777eef_Background%20Gradient.svg",
  image2 = "https://cdn.prod.website-files.com/69b0d21e1608b7959b777e5d/69b0d2201608b7959b777eef_Background%20Gradient.svg",
  jobComponentText1 = "This is the title of a job",
  jobComponentText2 = "This is a description of the job that is advertised This is a description of the job that is advertised",
  jobComponentText3 = "09/02/2026",
  jobComponentText4 = "John Ham",
  jobComponentText5 = "email@email.com",
  jobComponentText6 = "Melbourne, Australia",
  jobComponentText7 = "Any additional information submitted from the form",
  jobComponentText8 = "Melbourne, Australia",
  jobsLayout,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "metrics")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-layout-container")}
          tag="div"
        >
          {jobsLayout}
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "bg-gradient", "right")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={image1}
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "bg-gradient")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={image2}
        />
      </_Builtin.Block>
    </_Component>
  );
}
