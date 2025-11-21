import BaseLine from "../../../component/BaseLine";
import Vector from "../../../assets/HomepageImgs/Vector.svg";
import Vector2 from "../../../assets/HomepageImgs/Vector2.svg";
import Vector3 from "../../../assets/HomepageImgs/Vector3.svg";

const HowCanYouHelp = () => {
  const carts = [
    {
      key: 0,
      img: Vector,
      MainText: "Be a Volunteer",
      SubText:
        "Make a difference with NAB Delhi! Volunteer to support, empower, and uplift visually impaired individuals through programs, events, and initiatives.",
      btnText: "Join Now",
    },
    {
      key: 1,
      img: Vector2,
      MainText: "Give Donation",
      SubText:
        "Your donation helps NAB Delhi provide education, healthcare, and job opportunities, empowering visually impaired individuals to build brighter, independent futures.",
      btnText: "Donation Now",
    },
    {
      key: 2,
      img: Vector3,
      MainText: "Join as CSR",
      SubText:
        "Partner with NAB Delhi as a CSR ally to empower visually impaired individuals through vital resources, services, and inclusive community initiatives.",
      btnText: "Be a CSR Patner",
    },
  ];

  return (
    <section className="container ">
      <h1>How Can You Help?</h1>
      <p className="md:text-sm text-center">
        Your Support Matters: Let's Transform the Lives of the Visually
        Impaired, Together.
      </p>
      <BaseLine />

      <div className="lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carts?.map((item) => (
          <div
            key={item.key}
            className="space-y-5 flex flex-col items-center justify-between shadow-lg p-9 hover:border-primary border group transition-all duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.MainText}
              className="w-16 h-16 transition-all group-hover:brightness-1 group-hover:invert"
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
    </section>
  );
};

export default HowCanYouHelp;
