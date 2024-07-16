import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const AsdPage = () => {
  const [inputText, setInputText] = React.useState('');
  const [outputText, setOutputText] = React.useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTransform = () => {
    const transformed = inputText
      .split('')
      .map(char => {
        if (char.toLowerCase() === 'a') return 'A';
        if (char.toLowerCase() === 's') return 'S';
        if (char.toLowerCase() === 'd') return 'D';
        return char;
      })
      .join('');
    
    setOutputText(transformed);
    toast({
      title: "Text Transformed",
      description: "Your text has been ASD-ified!",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      toast({
        title: "Copied!",
        description: "The transformed text has been copied to your clipboard.",
      });
    });
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">ASD Transformer</h1>
      
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Transform Your Text</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Enter your text here"
              value={inputText}
              onChange={handleInputChange}
            />
            <Button onClick={handleTransform} className="w-full">Transform</Button>
            {outputText && (
              <div className="mt-4">
                <p className="font-semibold mb-2">Transformed Text:</p>
                <div className="flex items-center space-x-2">
                  <Input value={outputText} readOnly />
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

export default AsdPage;