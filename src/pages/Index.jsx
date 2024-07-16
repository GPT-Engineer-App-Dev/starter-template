import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const HelloPage = () => {
  const [name, setName] = React.useState('');
  const [greetings, setGreetings] = React.useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const addGreeting = () => {
    if (name.trim()) {
      const newGreeting = `Hello, ${name}!`;
      setGreetings(prevGreetings => [...prevGreetings, newGreeting]);
      setName('');
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Hello Generator</h1>
      
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Add a New Greeting</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter a name"
              value={name}
              onChange={handleNameChange}
            />
            <Button onClick={addGreeting}>Greet</Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Greetings List:</h2>
        {greetings.length > 0 ? (
          <ul className="space-y-2">
            {greetings.map((greeting, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded">
                {greeting}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No greetings yet. Add one above!</p>
        )}
      </div>
    </div>
  );
};

export default HelloPage;