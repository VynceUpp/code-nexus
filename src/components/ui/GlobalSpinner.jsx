import { Loader } from "lucide-react";
import { useLoading } from "../../services/LoadingService";


const GlobalSpinner = () => {
  const { loading } = useLoading();

  if (!loading) return null; // Hide spinner when not loading

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Loader size={50} className="animate-spin text-white" />
    </div>
  );
};

export default GlobalSpinner;
