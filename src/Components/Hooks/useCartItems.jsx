import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCartItems = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: cartItems = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart`);
      return res.data;
    },
  });

  return { cartItems, isLoading, isError, refetch };
};

export default useCartItems;
