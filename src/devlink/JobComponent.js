"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./JobComponent.module.css";

export function JobComponent({
  as: _Component = _Builtin.Block,
  text1 = "This is the title of a job",
  text2 = "This is a description of the job that is advertised This is a description of the job that is advertised",
  text3 = "09/02/2026",
  text4 = "John Ham",
  text5 = "email@email.com",
  text6 = "Melbourne, Australia",
  text7 = "Any additional information submitted from the form",
  text8 = "Melbourne, Australia",
}) {
  return (
    <_Component className={_utils.cx(_styles, "jobs-component")} tag="div">
      <_Builtin.Grid className={_utils.cx(_styles, "jobs-item")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-inner-container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-text-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-title")}
              tag="div"
            >
              {text1}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "max-width-40ch")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "job-description")}
                tag="div"
              >
                {text2}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-text-wrapper", "align-right")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-date")}
              tag="div"
            >
              {text3}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "max-width-40ch")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "job-info-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "job-info")}
                  tag="div"
                >
                  {text4}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "job-info")}
                  tag="div"
                >
                  {text5}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "job-info")}
                  tag="div"
                >
                  {text6}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "horizontal-divider")}
          id={_utils.cx(
            _styles,
            "w-node-_0aa29909-5c26-01de-c81b-6949d7539e81-d7539e6d"
          )}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-inner-container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-text-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "max-width-40ch")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "job-description")}
                tag="div"
              >
                {text7}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-text-wrapper", "align-right")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "max-width-40ch")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "job-info-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "job-info")}
                  tag="div"
                >
                  {text8}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Grid>
    </_Component>
  );
}
