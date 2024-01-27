import { Link, useLoaderData } from "react-router-dom";
import { BsCup } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/Authprovider";

const Coffee = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  const { admin } = useContext(AuthContext);
  console.log(coffees);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            const remaining = coffees.filter((coffee) => coffee._id === id);
            setCoffees(remaining);
          });
      }
    });
    console.log(id);
  };

  return (
    <div className="my-20 mx-3 bg-[url('/src/assets/Image/1.png')] bg-cover">
      <div className="text-center space-y-3">
        <p>Sip & Savor</p>
        <p className="font-Rancho text-4xl blur-[0.9px] text-[#331a15]">
          Our Popular Products
        </p>
        <div>
          {admin && (
            <Link to="/addCoffee">
              <button className="btn text-white bg-[#e3b577] border-none rounded-sm hover:bg-[#e3b577] text-lg font-Rancho">
                Add Coffee <BsCup />
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5   max-w-screen-xl mx-auto">
        {coffees.map((coffee, idx) => (
          <div className="my-10" key={idx}>
            <div className="flex   items-center justify-evenly px-2 rounded shadow-md  bg-[#f5f4f1] ">
              <div className="flex-1">
                <img
                  className="p-3 rounded-full"
                  src={coffee.photo}
                  alt="Coffee"
                />
              </div>
              <div
                className="flex-1 text-[#331a15]
"
              >
                <p className=" font-semibold text-xl">
                  Name : <span className="font-medium">{coffee.name}</span>{" "}
                </p>
                <p className=" font-semibold text-xl">
                  Chef : <span className="font-medium">{coffee.chef}</span>{" "}
                </p>
                <p className=" font-semibold text-xl">
                  Price : <span className="font-medium">{coffee.price}</span>{" "}
                </p>
              </div>
              {admin && (
                <div className="">
                  <Link to={`/aboutCoffee/${coffee._id}`}>
                    <div className="bg-[#d2b48c] px-2 py-2">
                      <FaEye className="text-xl text-white" />
                    </div>
                  </Link>
                  <Link to={`/editCoffee/${coffee._id}`}>
                    <div className="bg-[#3c393b] px-2 my-3 py-2">
                      <MdEdit className="text-xl text-white" />
                    </div>{" "}
                  </Link>
                  <div
                    onClick={() => handleDelete(coffee._id)}
                    className="bg-[#ea4744] px-2 py-2"
                  >
                    <MdDelete className="text-xl text-white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
