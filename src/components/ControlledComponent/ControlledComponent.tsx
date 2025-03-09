import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ingresa el código del cupón. Ej: 123FV"
      />
      <p>Ingresa código de descuento: <b>{value}</b></p>
    </div>
  );
};

