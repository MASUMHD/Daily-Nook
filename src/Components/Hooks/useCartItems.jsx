import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useCartItems = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const email = user?.email;

  const {
    data: cartItems = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cartItems", email],
    enabled: !!email,
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart?email=${email}`);
      return res.data;
    },
  });

  return { cartItems, isLoading, isError, refetch };
};

export default useCartItems;
