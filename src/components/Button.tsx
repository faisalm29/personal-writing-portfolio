type ButtonProps = {
  placeholder: string;
};

const Button = ({ placeholder }: ButtonProps): JSX.Element => {
  return (
    <button className="w-full rounded-lg bg-primary-700 p-3 text-on-primary">
      {placeholder}
    </button>
  );
};

export default Button;
