import { useState } from 'react';

const Localhost = () => {
  const [portNumber, setPortNumber] = useState("");

  const handlePortChange = (event: any) => {
    setPortNumber(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const url = `http://localhost:${portNumber}`;
    window.location.href = url;
  };

  return (
    <div className="container mx-auto center items-center ">
      <form className="mt-8" onSubmit={handleFormSubmit}>
        <div className="flex align-middle">
          {/*<p className="mr-4 text-3xl">Localhost: </p>*/}
          <input
            id="portField"
            type="text"
            className="text-black px-4 py-2 my-8 flex-auto focus:outline-none focus:ring-2 focus:ring-slate-400 rounded-md"
            placeholder="Port Number"
            value={portNumber}
            onChange={handlePortChange}
          />

        </div>
      </form>
    </div>
  );
};

export default Localhost;
