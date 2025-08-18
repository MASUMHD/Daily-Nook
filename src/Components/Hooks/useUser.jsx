import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: users = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosPublic.get("/users");
      return response.data;
    },
  });

  return { users, isLoading, isError, error, refetch };
};

export default useUser;
