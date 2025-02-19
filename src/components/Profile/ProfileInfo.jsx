import { useState } from "react";

const ProfileInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Passionate developer & tech enthusiast.",
    location: "New York, USA",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="space-y-4">
      {["name", "bio", "location"].map((field) => (
        <div key={field}>
          <label className="text-sm text-gray-400 capitalize">{field}</label>
          {editMode ? (
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full bg-gray-700 p-2 rounded-md focus:outline-none"
            />
          ) : (
            <p className="text-lg">{formData[field]}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileInfo;
