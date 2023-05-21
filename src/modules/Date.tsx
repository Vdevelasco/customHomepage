
const DateDisplay = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="text-center items-center mt-2">
      <p className="text-3xl text-white font-montserrat font-bold">{currentDate}</p>
    </div>
  );
};

export default DateDisplay;
