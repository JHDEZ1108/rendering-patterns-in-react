import { useState } from "react";

type ToogleProps = {
  isToggle?: boolean;
  onToggle?: (value: boolean) => void;
}

export const Toogle: React.FC<ToogleProps> = ({ isToggle = false, onToggle }) => {
  const [internalToggle, setInternalToggle] = useState(isToggle);
  
  const toogle = () =>{
    const newToggle = !internalToggle;
    setInternalToggle(newToggle);
    
    if(onToggle){
      onToggle(newToggle);
    }
  }
  
  return (
    <button onClick={toogle}>
      {internalToggle ? "ON ❤️‍🔥": "OFF 😦"}
    </button>
  );
};

export const ParentComponent = () => {
  const [toogleState, setToggleState] = useState(false);

  return (
    <div>
      <p>Toggle is {toogleState ? "ON ❤️‍🔥": "OFF 😦"} </p>
      <Toogle isToggle={toogleState} onToggle={setToggleState}/>
    </div>
  );
};