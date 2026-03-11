"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { JobComponent } from "./JobComponent";
import * as _utils from "./utils";
import _styles from "./JobsSection.module.css";

export function JobsSection({
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
  jobs,
}) {
  const hasJobs = Array.isArray(jobs) && jobs.length > 0;
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
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-layout")}
            tag="div"
          >
            {hasJobs
              ? jobs.map((job) => (
                  <JobComponent
                    key={job.id}
                    text1={job.text1 ?? jobComponentText1}
                    text2={job.text2 ?? jobComponentText2}
                    text3={job.text3 ?? jobComponentText3}
                    text4={job.text4 ?? jobComponentText4}
                    text5={job.text5 ?? jobComponentText5}
                    text6={job.text6 ?? jobComponentText6}
                    text7={job.text7 ?? jobComponentText7}
                    text8={job.text8 ?? jobComponentText8}
                  />
                ))
              : (
            <JobComponent
              text1={jobComponentText1}
              text2={jobComponentText2}
              text3={jobComponentText3}
              text4={jobComponentText4}
              text5={jobComponentText5}
              text6={jobComponentText6}
              text7={jobComponentText7}
              text8={jobComponentText8}
            />
              )}
          </_Builtin.Block>
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
