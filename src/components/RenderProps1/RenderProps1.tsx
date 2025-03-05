import React, { JSX } from 'react';

type ChildComponentProps = {
  render: (name: string) => JSX.Element;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const name = "Josué Hernández"
  return (
    <>
      {render(name)}
    </>
  );
};

export const ParentComponent = () => {
  return (
    <ChildComponent render={(name) => <p>Hola, {name}!</p>}/>
  );
};