import useUser from "../../Hooks/useUser";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import Loading from "../../Share/Loading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Buyer = () => {
  const { users, isLoading, isError, error, refetch } = useUser();
  const axiosPublic = useAxiosPublic();

  // Filter only vendor
  const vendor = users.filter((user) => user.role === "vendor");

  if (isLoading)
    return (
      <p className=" h-screen flex items-center justify-center">
        <Loading />
      </p>
    );

  if (isError)
    return (
      <p className="h-screen flex items-center justify-center text-red-500">
        {error.message}
      </p>
    );

  const handleUpdate = async (user) => {
    const { value: formValues } = await Swal.fire({
      title: "Update User",
      html:
        `<input id="swal-username" class="swal2-input" placeholder="Username" value="${user.username}">` +
        `<input id="swal-email" class="swal2-input" placeholder="Email" value="${user.email}">` +
        `<select id="swal-role" class="swal2-select">
            <option value="customer" ${
              user.role === "customer" ? "selected" : ""
            }>Customer</option>
            <option value="vendor" ${
              user.role === "vendor" ? "selected" : ""
            }>Vendor</option>
          </select>`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          username: document.getElementById("swal-username").value,
          email: document.getElementById("swal-email").value,
          role: document.getElementById("swal-role").value,
        };
      },
    });

    if (formValues) {
      try {
        await axiosPublic.put(`/users/${user._id}`, formValues);
        Swal.fire("Updated!", `${user.username} has been updated.`, "success");
        refetch();
      } catch (err) {
        Swal.fire("Error!", "Failed to update user.", {
          icon: "error",
          text: err.message,
        });
      }
    }
  };

  const handleDelete = async (user) => {
    Swal.fire({
      title: `Are you sure you want to delete ${user.username}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.delete(`/users/${user._id}`);
          Swal.fire(
            "Deleted!",
            `${user.username} has been deleted.`,
            "success"
          );
          refetch();
        } catch (error) {
          Swal.fire("Error!", "Failed to delete user.", {
            icon: "error",
            text: error.message,
          });
        }
      }
    });
  };

  return (
    <div className="p-6 mt-10">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 mt-2">
        Buyer{" "}
        <span className="text-gray-500 font-bold border-2 text-2xl p-1 rounded-lg border-[#634C9F]">
          {vendor.length}
        </span>
      </h2>
      <p className="mb-6 text-gray-600">Manage your vendor here.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg ">
          <thead>
            <tr className="bg-gray-200  text-left">
              <th className="py-3 px-4 font-medium text-gray-600">No</th>
              <th className="py-3 px-4 font-medium text-gray-600">Username</th>
              <th className="py-3 px-4 font-medium text-gray-600">Email</th>
              <th className="py-3 px-4 font-medium text-gray-600">Role</th>
              <th className="py-3 px-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendor.map((user, index) => (
              <tr
                key={user._id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.username}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4 capitalize">{user.role}</td>
                <td className="py-3 px-4 flex gap-3">
                  <button
                    onClick={() => handleUpdate(user)}
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(user)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Buyer;
