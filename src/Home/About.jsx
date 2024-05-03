import aboutPic from "../assets/images/about_us/person.jpg";
import partsPic from "../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero h-screen">
      <div className="hero-content p-0 flex-col lg:flex-row">
        <div className="relative w-1/2 ">
          <img src={aboutPic} className="max-w-lg rounded-lg shadow-2xl" />
          <img
            src={partsPic}
            className="absolute border-8 border-white top-1/2 left-2/4 max-w-xs rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            <span className="text-base text-[#ff3811]">
              About Us <br />
            </span>
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {"don't"} look even slightly
            believable. the majority have suffered alteration in some form, by
            injected humour, or randomised words which {"don't"} look even
            slightly believable.
          </p>
          <button className=" border-none btn btn-primary bg-[#ff3811]">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
