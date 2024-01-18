// eslint-disable-next-line react/prop-types
const InputForm = ({ label, value }) => {
  return (
    <div>
      <label htmlFor={label} className="text-primary font-bold">
        {label}
      </label>
      <input
        type="text"
        id={label}
        value={value}
        className="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3"
      />
    </div>
  );
};

export default InputForm;
