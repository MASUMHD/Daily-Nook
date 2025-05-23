import Countdown from "react-countdown";

const CountdownTimer = () => {
    const offerEndDate = Date.now() + 81 * 3600 * 1000 + 6 * 60 * 60 * 1000 + 50 * 60 * 1000 + 2 * 1000;
   const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex items-center bg-orange-50 border rounded-lg px-4 py-2 mt-4">
        <p className="text-orange-600 font-semibold mr-2">Special Offer :</p>
        <div className="flex space-x-1">
          {[days, hours, minutes, seconds].map((val, i) => (
            <span
              key={i}
              className="bg-orange-100 text-orange-700 font-bold px-2 py-1 rounded"
            >
              {String(val).padStart(2, "0")}
            </span>
          ))}
        </div>
        <p className="ml-2 text-gray-500 text-sm">Remains until the end of the offer.</p>
      </div>
    );
  };

  return <Countdown date={offerEndDate} renderer={renderer} />;
};

export default CountdownTimer;