export function AwardsGrid() {
  const awards = [
    { img: "/a1.svg", text: "Gold Award Winner" },
    { img: "/a2.svg", text: "Los Angeles Film Award" },
    { img: "/a3.svg", text: "Arizona International Film Festival Award" },
    { img: "/a4.svg", text: "Silver and Bronze Award Winner" },
    { img: "/a2.svg", text: "Best video company in DC and Baltimore" },
    { img: "/a6.svg", text: "Global Film Festival Award" },
    { img: "/a1.svg", text: "Texas Film Festival Award Winner" },
  ];

  return (
    <section className="py-16 px-4 bg-white pl-12 pr-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          A track record of excellence
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
          {awards.map((award, i) => (
            <div key={i} className="text-center hover:scale-105 transition-transform duration-300">
              <img src={award.img} alt={award.text} className="h-14 mx-auto mb-3" />
              <p className="text-sm text-gray-700">{award.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
