import React, { useEffect, useState } from "react";
import { SkeletonProfile } from "./skeleton/SkeletonProfile";

export const UserProfile = () => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <div className="user-profile-wrapper">
      <h2>User Profile</h2>
      {profile && (
        <div className="user-profile">
          <div>
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="profile picture"
              className="profile-picture"
              loading="lazy"
            />
          </div>
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>
          </div>
        </div>
      )}
      {!profile && <SkeletonProfile />}
    </div>
  );
};
