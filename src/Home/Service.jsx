import { Link } from "react-router-dom";

const Service = ({service}) => {
  const {_id, img, title, price} = service;
    return (
      <div className="card w-96 bg-base-100 shadow-xl p-5 ">
        <figure className="">
          <img src={service.img} alt="Shoes" className="rounded-xl max-h-52" />
        </figure>
        <div className=" items-center text-left mt-8 space-y-5">
          <h2 className="text-left font-semibold text-2xl">{service.title}</h2>
          <p className="text-[#ff3811] font-bold">Price: {service.price} $</p>
        </div>
        <div>
          <Link to={`/checkout/${_id}`}>
            <button className="btn bg-[#ff3811]">Details</button>
          </Link>
        </div>
      </div>
    );
};

export default Service;