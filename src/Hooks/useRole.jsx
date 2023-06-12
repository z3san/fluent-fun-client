import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuthentication";

const useRole = () => {
  const { user } = useAuth();
  const { data = {} } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/role?email=${user?.email}`
      );
      const result = await res.json();
      return result;
    },
  });

  return { data };
};

export default useRole;
