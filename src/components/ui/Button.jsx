const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyles =
      "px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer";
  
    const variants = {
      primary:
        "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 shadow-lg",
      secondary:
        "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700",
      outline:
        "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    };
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  