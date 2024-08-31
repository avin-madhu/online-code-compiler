"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const QuestionComponent = ({ question }) => {
    if (!question) return <div>Loading question...</div>;
  
    return (
      <Card id="question-div" className="h-full overflow-auto">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{question.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Problem Description:</h3>
            <p>{question.description}</p>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Examples:</h3>
            {question.examples.map((example, index) => (
              <div key={index} className="mb-4 bg-gray-100 dark:bg-gray-800 p-3 rounded">
                <p className="font-medium">Example {index + 1}:</p>
                <pre className="mt-2 whitespace-pre-wrap">
                  <strong>Input:</strong> {example.input}
                  <br />
                  <strong>Output:</strong> {example.output}
                  {example.explanation && (
                    <>
                      <br />
                      <strong>Explanation:</strong> {example.explanation}
                    </>
                  )}
                </pre>
              </div>
            ))}
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Constraints:</h3>
            <ul className="list-disc list-inside">
              {question.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  };

  
  export default QuestionComponent;

