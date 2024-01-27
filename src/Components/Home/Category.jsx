const Category = () => {
  return (
    <div className="bg-[#f5f4f1]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-screen-xl mx-auto px-3 py-10">
        <div>
          <img src="/src/assets/Icons/1.png" alt="icons1" />
          <p className="text-3xl font-Rancho text-[#331a15] py-3">
            Awesome Aroma
          </p>
          <p className="max-w-xs">
            You will definitely be a fan the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src="/src/assets/Icons/2.png" alt="icons2" />
          <p className="text-3xl font-Rancho text-[#331a15]  py-3">
            High Quality
          </p>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div>
          <img src="/src/assets/Icons/3.png" alt="icons3" />
          <p className="text-3xl font-Rancho text-[#331a15]  py-3">
            Pure Grades
          </p>
          <p>
            The coffee is made of the green coffee beans which you will love{" "}
          </p>
        </div>
        <div>
          <img src="/src/assets/Icons/4.png" alt="icons4" />
          <p className="text-3xl font-Rancho text-[#331a15]  py-3">
            Proper Roasting
          </p>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
