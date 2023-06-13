import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuthentication";


const useInstructorClass = () => {
  const { user, loading } = UseAuth();
  const { data = [] } = useQuery({
    queryKey: ["class", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await fetch(
       `https://fluentfun-server.vercel.app/class?email=${user?.email}`
      );
      const result = await res.json();
      return result;
    },
  });

  return [data];
};

export default useInstructorClass;