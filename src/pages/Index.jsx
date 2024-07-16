import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const RandomStringGenerator = () => {
  const [length, setLength] = React.useState(8);
  const [generatedString, setGeneratedString] = React.useState('');

  const generateRandomString = (len) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleGenerate = () => {
    const newString = generateRandomString(length);
    setGeneratedString(newString);
    toast({
      title: "String Generated",
      description: `New string: ${newString}`,
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedString).then(() => {
      toast({
        title: "Copied!",
        description: "The generated string has been copied to your clipboard.",
      });
    });
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Random String Generator</h1>
      
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Generate a Random String</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="length" className="w-24">Length:</label>
              <Input
                id="length"
                type="number"
                min="1"
                max="100"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-20"
              />
            </div>
            <Button onClick={handleGenerate} className="w-full">Generate</Button>
            {generatedString && (
              <div className="mt-4">
                <p className="font-semibold mb-2">Generated String:</p>
                <div className="flex items-center space-x-2">
                  <Input value={generatedString} readOnly />
                  <Button onClick={handleCopy}>Copy</Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RandomStringGenerator;