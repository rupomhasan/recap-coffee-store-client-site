import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, suppliler, category, chef, taste, price, photo } = coffee;

  const updateCoffee = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const suppliler = e.target.suppliler.value;
    const category = e.target.category.value;
    const chef = e.target.chef.value;
    const taste = e.target.taste.value;
    const price = e.target.price.value;
    const photo = e.target.photo.value;
    const product = {
      name,
      suppliler,
      category,
      chef,
      taste,
      price,
      photo,
    };
    console.log(product);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Update Succesfull",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-[url('/src/assets/Image/11.png')] bg-cover ">
      <div className="max-w-screen-xl mx-auto px-3">
        <Link to="/" className="flex items-center gap-4 py-7 ">
          <FaArrowLeftLong className="text-3xl blur-[0.9px]" />
          <p className="text-[30px] font-Rancho blur-[0.9px]">Back to home</p>
        </Link>
        <div className="bg-[#f4f3f1] mt-10 mb-20 py-10">
          <div className="max-w-screen-lg mx-auto">
            <p className="text-[#374151] my-5 text-center font-Rancho text-4xl pb-5 blur-[0.7px]">
              Update Coffee
            </p>

            <form
              onSubmit={updateCoffee}
              className="max-w-screen-sm mx-auto space-y-5  px-2 "
            >
              <div className="space-y-10 md:space-y-0 md:flex  justify-between  gap-5">
                <div className="space-y-7">
                  <div className="space-y-3">
                    <p className="font-semibold text-xl">Name</p>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Enter Coffee Name"
                      className="px-4 py-2   text-lg font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold text-xl">Supplier</p>
                    <input
                      type="text"
                      name="suppliler"
                      defaultValue={suppliler}
                      placeholder="Enter Coffee Supplier"
                      className="px-4 py-2 w-full  text-lg font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold text-xl">Category</p>
                    <input
                      type="text"
                      name="category"
                      defaultValue={category}
                      placeholder="Enter Coffee Category"
                      className="px-4 py-2 w-full  text-lg font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-7">
                  <div className="space-y-3">
                    <p className="font-semibold text-xl">Chef</p>
                    <input
                      type="text"
                      name="chef"
                      defaultValue={chef}
                      placeholder="Enter Coffee Chef"
                      className="px-4 py-2 w-full  text-lg font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold text-xl">Taste</p>
                    <input
                      type="text"
                      name="taste"
                      defaultValue={taste}
                      placeholder="Enter Coffee Taste"
                      className="px-4 py-2 w-full  text-lg font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold text-xl">Price(Taka)</p>
                    <input
                      type="number"
                      name="price"
                      defaultValue={price}
                      placeholder="Enter Coffee Price"
                      className="px-4 py-2 w-full  text-lg font-medium"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-xl">Photo</p>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter Photo URL"
                  className="px-4 py-2 w-full  text-lg font-medium"
                />
              </div>
              <input
                type="submit"
                value="Update Now"
                className="btn bg-[#d2b48c] hover:bg-[#d2b48c] text-2xl font-Rancho text-[#331a15] w-full "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCoffee;
