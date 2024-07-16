import React from 'react';
import { Button } from "@/components/ui/button";

const HelloPage = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Hello!</h1>
      <p className="text-xl mb-6">Welcome to our application.</p>
      <Button className="text-lg">Get Started</Button>
    </div>
  );
};

export default HelloPage;