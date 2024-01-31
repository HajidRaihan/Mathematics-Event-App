// eslint-disable-next-line react/prop-types
const InputForm = ({ label, value, onChange }) => {
  return (
    <div className="w-full">
      <label htmlFor={label} className="text-primary text-sm font-bold">
        {label}
      </label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={onChange}
        className="h-10 text-sm input input-bordered rounded-lg bg-white w-full shadow-md shadow-secondary p-3 "
      />
    </div>
  );
};

export default InputForm;
