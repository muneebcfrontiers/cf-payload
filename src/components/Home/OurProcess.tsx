const processData = [
  {
    title: "Optimized production process",
    description:
      "With a production process developed over a decade in the business, you can be assured that we will deliver on time and on budget.",
    icon: "/p1.svg",
  },
  {
    title: "Collaborative approach",
    description:
      "We know that communication is key. Developing your content is a partnership, and we understand that. That's why, no matter the size of your project, you get a dedicated project manager whose life's mission is to ensure that the collaboration works and nothing falls through the woodwork.",
    icon: "/p2.svg",
  },
  {
    title: "Flexibility for revisions",
    description:
      "We understand that revisions are necessary. Some companies may nickel and dime you over revisions, but not us. We work with you extensively on the draft, and you are free to suggest as many revisions as you like. In fact, we encourage it. Get all your stakeholders involved. This helps us ensure that you’re happy with what goes into production.",
    icon: "/p3.svg",
  },
  {
    title: "Personalized client support",
    description:
      "We are passionate about our work and care about the people that we work with, too. Just ask our clients, who can vouch for the hyper-personalized support they received from us at each stage of their project and beyond.",
    icon: "/p4.svg",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-[#0199ec] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl shadow-md p-6 transition hover:shadow-xl"
            >
              <div className="text-4xl mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                /></div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
