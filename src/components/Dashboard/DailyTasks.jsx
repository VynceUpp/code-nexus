import { useState, useEffect } from "react";

const DailyTasks = () => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchDailyTask = () => {
      const tasks = [
        "Solve a JavaScript problem on LeetCode",
        "Read about React performance optimization",
        "Build a simple API using Node.js",
        "Write a blog post about coding",
        "Refactor an old project for best practices",
      ];
      // Select a new task daily at 9:00 AM
      const today = new Date().toDateString();
      const savedTask = localStorage.getItem("dailyTaskDate");
      if (savedTask !== today) {
        const newTask = tasks[Math.floor(Math.random() * tasks.length)];
        setTask(newTask);
        localStorage.setItem("dailyTask", newTask);
        localStorage.setItem("dailyTaskDate", today);
      } else {
        setTask(localStorage.getItem("dailyTask"));
      }
    };

    fetchDailyTask();
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4 text-center">🔥 Daily Task</h3>
      <p className="text-lg bg-gray-700 px-4 py-2 rounded-lg text-center w-full">
        {task || "Fetching today's task..."}
      </p>
      <button
        onClick={() => setCompleted(!completed)}
        className={`mt-4 px-6 py-2 rounded-lg font-semibold text-white transition ${
          completed ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {completed ? "✅ Task Completed" : "Mark as Complete"}
      </button>
    </div>
  );
};

export default DailyTasks;
