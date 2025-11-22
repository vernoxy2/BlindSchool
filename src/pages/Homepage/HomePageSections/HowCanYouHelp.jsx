import BaseLine from "../../../component/BaseLine";
import Vector1 from "../../../assets/HomepageImgs/Vector1.svg";
import Vector11 from "../../../assets/HomepageImgs/Vector11.svg";
import Vector2 from "../../../assets/HomepageImgs/Vector2.svg";
import Vector22 from "../../../assets/HomepageImgs/Vector22.svg";
import Vector3 from "../../../assets/HomepageImgs/Vector3.svg";
import Vector33 from "../../../assets/HomepageImgs/Vector33.svg";

const HowCanYouHelp = () => {

  const carts = [
    {
      key: 0,
      img: Vector1,
      imgHover: Vector11,
      MainText: "Be a Volunteer",
      SubText:
        "Make a difference with NAB Delhi! Volunteer to support, empower, and uplift visually impaired individuals through programs, events, and initiatives.",
      btnText: "Join Now",
    },
    {
      key: 1,
      img: Vector2,
      imgHover: Vector22,
      MainText: "Give Donation",
      SubText:
        "Your donation helps NAB Delhi provide education, healthcare, and job opportunities, empowering visually impaired individuals to build brighter, independent futures.",
      btnText: "Donation Now",
    },
    {
      key: 2,
      img: Vector3,
      imgHover: Vector33,
      MainText: "Join as CSR",
      SubText:
        "Partner with NAB Delhi as a CSR ally to empower visually impaired individuals through vital resources, services, and inclusive community initiatives.",
      btnText: "Be a CSR Partner",
    },
  ];

  return (
    <section className="container">
      <h1>How Can You Help?</h1>
      <p className="md:text-sm text-center">
        Your Support Matters: Let's Transform the Lives of the Visually
        Impaired, Together.
      </p>
      <BaseLine className="mx-auto" />

      {/* FLEX VIEW STARTS HERE */}
      <div className="xl:w-11/12 2xl:w-10/12 mx-auto flex flex-wrap gap-6 justify-center">
        {carts?.map((item) => (
          <div
            key={item.key}
            className="space-y-4 flex flex-col items-center justify-between shadow-lg p-9 hover:border-primary border group transition-all duration-300 hover:scale-105
            w-full md:w-[48%]  xl:w-[30%]"
          >
            <img
              src={item.img}
              alt={item.MainText}
              className="w-16 h-16 transition-all group-hover:hidden"
            />
            <img
              src={item.imgHover}
              alt={item.MainText}
              className="w-16 h-16 transition-all hidden group-hover:block"
            />

            <h1 className="text-xl font-bold text-black transition-colors group-hover:text-primary">
              {item.MainText}
            </h1>

            <p className="text-black text-center transition-colors">
              {item.SubText}
            </p>

            <div className="w-full flex gap-2 items-center justify-between pt-4">
              <BaseLine />
              <button className="bg-primary text-white text-xl p-2.5 font-semibold hover:bg-blue-700 transition-all whitespace-nowrap flex items-center justify-center">
                {item.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* FLEX VIEW ENDS HERE */}
    </section>
  );
};

export default HowCanYouHelp;
