import { useQuery } from '@tanstack/react-query';
const useUsers =()=>{

     const {data: users = [] , isLoading: loading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('https://fluentfun-server.vercel.app/users')
            console.log(res);
            return res.json();
        }
       
    }
  
    )
    
    return [users, loading, refetch]
}

export default useUsers