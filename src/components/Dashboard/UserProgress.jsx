const UserProgress = () => {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
        <h3 className="text-xl font-bold mb-4">Your Progress</h3>
        <p>Level: Intermediate</p>
        <div className="w-full bg-gray-700 h-4 rounded-lg mt-2">
          <div className="bg-blue-500 h-4 rounded-lg" style={{ width: "70%" }}></div>
        </div>
      </div>
    );
  };
  
  export default UserProgress;
  