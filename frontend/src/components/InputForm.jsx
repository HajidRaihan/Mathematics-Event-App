// eslint-disable-next-line react/prop-types
const InputForm = ({ label, value, onChange }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={label} className="text-primary text-xs font-bold">
        {label}
      </label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={onChange}
        className="h-10 text-sm input input-bordered rounded-lg bg-white md:w-full w-[300px] shadow-md shadow-secondary p-3 "
      />
    </div>
  );
};

export default InputForm;
