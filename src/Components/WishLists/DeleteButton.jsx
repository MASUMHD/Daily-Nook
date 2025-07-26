import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const DeleteButton = ({ refetch , item }) => {
  const axiosPublic = useAxiosPublic();

 const handleDelete = async (id) => {
     const result = await Swal.fire({
       title: "Are you sure?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!",
     });
 
     if (result.isConfirmed) {
       try {
          const res = await axiosPublic.delete(`/cart/${id}`);
         console.log(res.data);
         if (res.data.deletedCount > 0) {
           Swal.fire("Deleted!", "Your item has been deleted.", "success");
           refetch();
         } 
       } catch (error) {
         Swal.fire("Error!", "Failed to delete the item.", "error");
         console.error(error);
       }
     }
   };



  return (
    <TiDeleteOutline
      onClick={() => handleDelete(item.cartItemId)}
      className="absolute -top-2 -left-2 text-green-600 bg-white rounded-full hover:bg-red-600 hover:text-white duration-300 cursor-pointer"
      size={25}
    />
  );
};

export default DeleteButton;
