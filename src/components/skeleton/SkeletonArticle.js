import React from "react";
import { SkeletonComponent } from "./Skeleton";
import "./Skeleton.css";

export const SkeletonArticle = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonComponent type="skeleton-title" />
        <SkeletonComponent type="skeleton-text" />
        <SkeletonComponent type="skeleton-text" />
        <SkeletonComponent type="skeleton-text" />
        <SkeletonComponent type="skeleton-text" />
      </div>
    </div>
  );
};
