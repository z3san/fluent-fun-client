import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuthentication";
import axios from "axios";


const useSelectClass = () => {

    const { user, loading } = UseAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["classesCarts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/classesCarts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
  

 
};

export default useSelectClass;

