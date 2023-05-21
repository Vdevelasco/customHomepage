interface ButtonProps extends React.HTMLProps<HTMLButtonElement>
    {
        // Custom properties
       text: string
       logo: string
       url: string
    }

const Button = ({ text, logo, url }: ButtonProps) => {

  return (
    <a href={url} className={`flex flex-col justify-center items-center rounded hover transition duration-300 hover:opacity-50`}
    >
        <img src={logo} className="
               py-4 px-4 rounded h-20 w-20 ml-8 mr-8" />
        <div className='text-white py-2 px-4 font-montserrat'>{text}</div>
    </a>
  );
};

export default Button;
