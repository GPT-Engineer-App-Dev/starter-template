import React from 'react';
import { Button } from "@/components/ui/button";

const HelloWorld = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
      <p className="text-xl mb-4">Welcome to your new React app with Vite and shadcn.</p>
      <p className="text-lg mb-4">You've clicked the button {count} times.</p>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
};

export default HelloWorld;