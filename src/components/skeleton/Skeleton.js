import React from "react";
import "./Skeleton.css";

export const SkeletonComponent = ({ type }) => {
  const classNames = `skeleton ${type}`;
  return <div className={classNames}></div>;
};
