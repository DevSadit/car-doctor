import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="">
      <div className="text-center space-y-3">
        <p className="font-bold text-[#ff3811]">Service</p>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which {" don't"} look even slightly
          believable.{" "}
        </p>
      </div>
      {/* card mapping */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-12">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
