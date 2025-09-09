import type { ChangeEvent } from "react";

interface InputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type:string;
}

const Inputfield = ({ label, placeholder, onChange,type }: InputType) => {
  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-bold font-sans text-gray-700 tracking-wide">
        {label}
      </label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className="w-full px-4 py-3 text-gray-800 text-sm 
        bg-white border border-gray-300 rounded-xl shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        transition-all duration-300 ease-in-out
        placeholder-gray-400 hover:shadow-md"
      />
    </div>
  );
};

export default Inputfield;
