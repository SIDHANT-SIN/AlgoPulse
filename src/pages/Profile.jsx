import React,{useState} from "react";

const Profile = ({ account }) => {
  const [platform, username] = account.split(":");

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2 lg:w-1/3">
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {username}
      </h3>
      <p className="text-gray-600">Platform: {platform}</p>
      <p className="text-gray-600">Title: None</p>
      <p className="text-gray-600">Rating: N/A</p>
    </div>
  );
};

export default Profile;
