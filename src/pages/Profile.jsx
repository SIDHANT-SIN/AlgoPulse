import React,{useState} from "react";

const Profile = ({ account }) => {
  const { platform, username, rating, title } = account;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2 lg:w-1/3">
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {username}
      </h3>
      <p className="text-gray-600">Platform: {platform}</p>
      <p className="text-gray-600">Title: { title}</p>
      <p className="text-gray-600">Rating:{ rating}</p>
    </div>
  );
};

export default Profile;
