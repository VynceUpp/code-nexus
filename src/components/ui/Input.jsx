const Input = ({ label, type = "text", placeholder, value, onChange, className }) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
      </div>
    );
  };
  
  export default Input;
  