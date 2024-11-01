"use client";
import { opcionesSelect } from "@/types/opcionesSelect";
import React, { useState } from "react";

interface SelectGroupProps {
  id?: string;
  name?: string;
  value?: string;
  customClasses?: string;
  opciones?: opcionesSelect[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectGroupOne: React.FC<SelectGroupProps> = ({
  id,
  name,
  value,
  customClasses,
  opciones = [{ id: 1, name: "Opcion 1" }, { id: 2, name: "Opcion 2" }],
  label = "Selecciona",
  placeholder = "Selecciona una Opción",
  required,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(value || "");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div className={`mb-4.5 cursor-pointer ${customClasses}`}>
      <label className="mb-3 block text-lg font-medium text-dark dark:text-white">
        {label}:
        {required && <span className="text-red">*</span>}
      </label>

      <div className="relative z-20 bg-transparent rounded-[7px] dark:bg-dark-2 cursor-pointer">
        <select
          id={id}
          name={name}
          value={selectedOption}
          required={required}
          onChange={(e) => {
            if (onChange) onChange(e);
            setSelectedOption(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-5.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary cursor-pointer ${
            isOptionSelected ? "text-dark dark:text-white" : ""
          }`}
        >
          <option value="" disabled className="text-dark-6 font-bold">
            {placeholder}
          </option>
          {opciones.map((opc) => (
            <option key={opc.id} value={opc.id} className="dark:text-dark-6 text-dark-4 font-semibold">
              {`${opc.id} - ${opc.name}`}
            </option>
          ))}
        </select>

        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99922 12.8249C8.83047 12.8249 8.68984 12.7687 8.54922 12.6562L2.08047 6.2999C1.82734 6.04678 1.82734 5.65303 2.08047 5.3999C2.33359 5.14678 2.72734 5.14678 2.98047 5.3999L8.99922 11.278L15.018 5.34365C15.2711 5.09053 15.6648 5.09053 15.918 5.34365C16.1711 5.59678 16.1711 5.99053 15.918 6.24365L9.44922 12.5999C9.30859 12.7405 9.16797 12.8249 8.99922 12.8249Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SelectGroupOne;