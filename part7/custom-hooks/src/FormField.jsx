import { useState } from "react";
import useField from "./hooks/useField";

const FormField = () => {
  const name = useField("text");
  const born = useField("date");
  const height = useField("height");

  return (
    <div>
      <form>
        name:
        <input {...name} />
        <br />
        birthdate:
        <input {...born} />
        <br />
        height:
        <input {...height} />
      </form>
      <div>
        {name.value} {born.value} {height.value}
      </div>
    </div>
  );
};

export default FormField;
