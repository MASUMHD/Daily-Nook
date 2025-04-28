import React from 'react';

const items = [
  {
    img: "https://i.postimg.cc/8C7s0Nbs/SVG.png",
    title: "Payment only online",
    description: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
  {
    img: "https://i.postimg.cc/Gmh4vk8F/SVG-1.png ",
    title: "New stocks and sales",
    description: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
  {
    img: "https://i.postimg.cc/bwCsgskK/SVG-2.png",
    title: "Quality assurance",
    description: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
];

const ButtomSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-md mt-3">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-4 ">
          <img src={item.img} alt={item.title} className="w-16 h-16 mt-6  object-contain" />
          <div>
            <h3 className="text-lg font-bold text-[#030712]">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtomSlider;
