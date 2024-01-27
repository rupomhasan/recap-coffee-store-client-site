import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/Authprovider";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  const { deletedUser } = useContext(AuthContext);
  const userDelete = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = users.filter((user) => user._id !== id);
        setUsers(newUser);
        deletedUser().then(() => {
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User has been deleted",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });

        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-[url('/src/assets/Image/11.png')] bg-cover py-10">
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="bg-[#f4f3f1] mt-10 mb-20 py-10">
          <p className="text-center font-Rancho  text-2xl text-[#331a15] font-bold blur-[0.8px]">
            All the user is Here{" "}
          </p>
          <div className="max-w-screen-sm mx-auto space-y-5 py-5  md:px-20 overflow-x-auto ">
            <table className="table ">
              {/* head */}
              <thead>
                <tr>
                  {/* <th></th> */}
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user) => (
                  <tr key={user._id}>
                    {/* <th>1</th> */}
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td onClick={() => userDelete(user._id)}>
                      <MdDelete />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center py-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Users;
