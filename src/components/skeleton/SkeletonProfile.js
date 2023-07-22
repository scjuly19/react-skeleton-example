import React from "react";
import { SkeletonComponent } from "./Skeleton";

export const SkeletonProfile = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-profile">
        <div>
          <SkeletonComponent type="skeleton-avatar" />
        </div>
        <div>
          <SkeletonComponent type="skeleton-text" />
          <SkeletonComponent type="skeleton-text" />
          <SkeletonComponent type="skeleton-text" />
        </div>
      </div>
    </div>
  );
};
