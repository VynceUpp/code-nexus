import { useState } from "react";
import { Save, X } from "lucide-react";

const ProfileActions = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="mt-6 flex justify-center gap-4">
      {editMode ? (
        <>
          <button className="bg-blue-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-500">
            <Save size={16} /> Save
          </button>
          <button onClick={() => setEditMode(false)} className="bg-red-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-500">
            <X size={16} /> Cancel
          </button>
        </>
      ) : (
        <button onClick={() => setEditMode(true)} className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600">
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfileActions;
