import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCartItems = () => {
  // Custom hook to fetch cart items for the authenticated user
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
    queryFn: async () => {
      if (!email) return [];
      const res = await axiosPublic.get(`/cart?email=${email}`);
      return res.data;
    },
    enabled: !!email,
  });

  return { cartItems, isLoading, isError, refetch };
};

export default useCartItems;