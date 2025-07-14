// // To run this code, install dependencies:
// // npm install @google/genai mime

// // const { GoogleGenAI } = require('@google/genai');
// import { GoogleGenAI } from "@google/genai";


//   export const courseOutlineAiModel = new GoogleGenAI({
//     apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY, // Make sure this env variable is set
//   });

//   const tools = [
//     {
//       googleSearch: {}
//     },
//   ];

//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     tools,
//     responseMimeType: 'application/json',
//   };

//   const model = 'gemini-2.5-pro';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });

//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }


// // main().catch(console.error);



/// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function courseOutlineAiModel() {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });
  const tools = [
    { codeExecution: {} },
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `generate a study material
for <c++> for<exam> and
level of difficulty
will be <easy>
of course,
List of Chapters along with summary
for each chapter,
Topic list in each chapter in all result 
in  JSON format
`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Beginning My Research**

I've started my exploration with Google searches, diving into "easy C++ study material for exams" and "beginner C++ tutorial for exams." My goal is to grasp the foundational topics and common exam structures. I am now beginning to analyze the results to identify the most frequently tested concepts that are perfect for a beginner.


**Mapping Out C++ Essentials**

I've moved on from simple searches to dissecting the results. I'm focusing on identifying the cornerstone C++ concepts that consistently appear in beginner-level exam prep materials. My plan is to craft a structured study guide with digestible chapter summaries and associated JSON topic lists. I anticipate this distillation will be key in providing a clear and comprehensive resource.


**Exploring C++ Foundations**

I've made headway, finding a common thread in beginner C++ resources. GeeksforGeeks, Saylor Academy, and Codecademy all lean on similar introductory structures: "Hello World," variables, and data types. This offers a clear starting point for my exploration.


**Outlining the Curriculum**

I'm structuring the curriculum based on the common framework I found. The search results solidified the expected progression: from "Hello World" to the fundamentals and then onto more advanced concepts. Now, I am focused on detailed outlines for the easy-level study guide. I can create a well-organized and easy-to-follow study guide.


`,
        },
        {
          text: `Here is a study material for a C++ exam at an easy difficulty level.

### **List of Chapters**

1.  **Chapter 1: Introduction to C++**
2.  **Chapter 2: Variables, Data Types, and Operators**
3.  **Chapter 3: Control Flow**
4.  **Chapter 4: Functions**
5.  **Chapter 5: Arrays and Strings**
6.  **Chapter 6: Introduction to Object-Oriented Programming (OOP)**

---

### **Chapter 1: Introduction to C++**

**Summary:** This chapter introduces the fundamental concepts of the C++ programming language. You will learn about the history of C++, understand what a compiler is, and write, compile, and execute your first "Hello, World!" program. The basic structure of a C++ program will also be explained.

**Topics:**
\`\`\`json
{
  "chapter": 1,
  "topics": [
    "What is C++?",
    "History of C++",
    "Setting up the Environment (Compiler and IDE)",
    "Writing a Simple C++ Program",
    "The \`main()\` Function",
    "Basic Syntax and Structure",
    "Comments in C++"
  ]
}
\`\`\`

---

### **Chapter 2: Variables, Data Types, and Operators**

**Summary:** This chapter covers the building blocks of C++ programs: variables and data types. You will learn how to declare and initialize variables to store different kinds of data. It also introduces the various operators available in C++ to perform calculations and manipulate data.

**Topics:**
\`\`\`json
{
  "chapter": 2,
  "topics": [
    "What are Variables?",
    "Fundamental Data Types (int, float, double, char, bool)",
    "Variable Declaration and Initialization",
    "Constants",
    "Arithmetic Operators (+, -, *, /, %)",
    "Assignment Operators (=, +=, -=, etc.)",
    "Comparison Operators (==, !=, <, >, <=, >=)",
    "Logical Operators (&&, ||, !)"
  ]
}
\`\`\`

---

### **Chapter 3: Control Flow**

**Summary:** This chapter focuses on how to control the execution path of your program. You will learn about conditional statements (if, else if, else) to make decisions and loops (for, while, do-while) to execute a block of code repeatedly.

**Topics:**
\`\`\`json
{
  "chapter": 3,
  "topics": [
    "Conditional Statements: \`if\`, \`else if\`, \`else\`",
    "Nested \`if\` Statements",
    "The \`switch\` Statement",
    "Loops: \`for\` loop, \`while\` loop, \`do-while\` loop",
    "The \`break\` and \`continue\` Statements"
  ]
}
\`\`\`

---

### **Chapter 4: Functions**

**Summary:** Functions are essential for writing modular and reusable code. This chapter explains how to define and call your own functions. You will also learn about function parameters, return values, and the concept of function scope.

**Topics:**
\`\`\`json
{
  "chapter": 4,
  "topics": [
    "What is a Function?",
    "Defining and Calling Functions",
    "Function Parameters (Pass by Value)",
    "Return Values",
    "Function Prototypes",
    "Scope of Variables (Local and Global)"
  ]
}
\`\`\`

---

### **Chapter 5: Arrays and Strings**

**Summary:** This chapter introduces you to derived data types like arrays and strings. You will learn how to store and manipulate collections of data using one-dimensional arrays and how to work with text using the C++ string class.

**Topics:**
\`\`\`json
{
  "chapter": 5,
  "topics": [
    "One-Dimensional Arrays: Declaration and Initialization",
    "Accessing Array Elements",
    "Iterating through Arrays",
    "Introduction to the \`std::string\` Class",
    "Basic String Operations (Concatenation, Length, Accessing Characters)"
  ]
}
\`\`\`

---

### **Chapter 6: Introduction to Object-Oriented Programming (OOP)**

**Summary:** This chapter provides a gentle introduction to the core concepts of Object-Oriented Programming (OOP), a paradigm that C++ is famous for. You will learn about classes and objects, which are fundamental to building more complex and organized programs.

**Topics:**
\`\`\`json
{
  "chapter": 6,
  "topics": [
    "What is Object-Oriented Programming?",
    "Classes and Objects",
    "Defining a Simple Class",
    "Creating Objects (Instances of a Class)",
    "Class Members: Attributes (Member Variables) and Methods (Member Functions)",
    "Access Specifiers: \`public\` and \`private\`"
  ]
}
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `all in json format
`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `\`\`\`json
{
  "courseTitle": "C++ Exam Study Material",
  "difficulty": "Easy",
  "language": "C++",
  "chapters": [
    {
      "chapterNumber": 1,
      "title": "Introduction to C++",
      "summary": "This chapter introduces the fundamental concepts of the C++ programming language. You will learn about the history of C++, understand what a compiler is, and write, compile, and execute your first 'Hello, World!' program. The basic structure of a C++ program will also be explained.",
      "topics": [
        "What is C++?",
        "History of C++",
        "Setting up the Environment (Compiler and IDE)",
        "Writing a Simple C++ Program",
        "The \`main()\` Function",
        "Basic Syntax and Structure",
        "Comments in C++"
      ]
    },
    {
      "chapterNumber": 2,
      "title": "Variables, Data Types, and Operators",
      "summary": "This chapter covers the building blocks of C++ programs: variables and data types. You will learn how to declare and initialize variables to store different kinds of data. It also introduces the various operators available in C++ to perform calculations and manipulate data.",
      "topics": [
        "What are Variables?",
        "Fundamental Data Types (int, float, double, char, bool)",
        "Variable Declaration and Initialization",
        "Constants",
        "Arithmetic Operators (+, -, *, /, %)",
        "Assignment Operators (=, +=, -=, etc.)",
        "Comparison Operators (==, !=, <, >, <=, >=)",
        "Logical Operators (&&, ||, !)"
      ]
    },
    {
      "chapterNumber": 3,
      "title": "Control Flow",
      "summary": "This chapter focuses on how to control the execution path of your program. You will learn about conditional statements (if, else if, else) to make decisions and loops (for, while, do-while) to execute a block of code repeatedly.",
      "topics": [
        "Conditional Statements: \`if\`, \`else if\`, \`else\`",
        "Nested \`if\` Statements",
        "The \`switch\` Statement",
        "Loops: \`for\` loop",
        "Loops: \`while\` loop",
        "Loops: \`do-while\` loop",
        "The \`break\` and \`continue\` Statements"
      ]
    },
    {
      "chapterNumber": 4,
      "title": "Functions",
      "summary": "Functions are essential for writing modular and reusable code. This chapter explains how to define and call your own functions. You will also learn about function parameters, return values, and the concept of function scope.",
      "topics": [
        "What is a Function?",
        "Defining and Calling Functions",
        "Function Parameters (Pass by Value)",
        "Return Values",
        "Function Prototypes",
        "Scope of Variables (Local and Global)"
      ]
    },
    {
      "chapterNumber": 5,
      "title": "Arrays and Strings",
      "summary": "This chapter introduces you to derived data types like arrays and strings. You will learn how to store and manipulate collections of data using one-dimensional arrays and how to work with text using the C++ string class.",
      "topics": [
        "One-Dimensional Arrays: Declaration and Initialization",
        "Accessing Array Elements",
        "Iterating through Arrays (using loops)",
        "Introduction to the \`std::string\` Class",
        "Basic String Operations (Concatenation, Length, Accessing Characters)"
      ]
    },
    {
      "chapterNumber": 6,
      "title": "Introduction to Object-Oriented Programming (OOP)",
      "summary": "This chapter provides a gentle introduction to the core concepts of Object-Oriented Programming (OOP), a paradigm that C++ is famous for. You will learn about classes and objects, which are fundamental to building more complex and organized programs.",
      "topics": [
        "What is Object-Oriented Programming?",
        "Classes and Objects",
        "Defining a Simple Class",
        "Creating Objects (Instances of a Class)",
        "Class Members: Attributes (Member Variables) and Methods (Member Functions)",
        "Access Specifiers: \`public\` and \`private\`"
      ]
    }
  ]
}
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `generate a study material
for <c++> for<exam> and
level of difficulty
will be <easy>
of course,
List of Chapters along with summary
for each chapter,
Topic list in each chapter in all result 
in  JSON format`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Responding to Repetition**

I'm focusing on the repetitive nature of this request. The system demands the same output again. I've re-confirmed that the identical JSON response is the correct approach here, given the identical nature of the user input.


`,
        },
        {
          text: `\`\`\`json
{
  "courseTitle": "C++ Exam Study Material",
  "difficulty": "Easy",
  "language": "C++",
  "chapters": [
    {
      "chapterNumber": 1,
      "title": "Introduction to C++",
      "summary": "This chapter introduces the fundamental concepts of the C++ programming language. You will learn about the history of C++, understand what a compiler is, and write, compile, and execute your first 'Hello, World!' program. The basic structure of a C++ program will also be explained.",
      "topics": [
        "What is C++?",
        "History of C++",
        "Setting up the Environment (Compiler and IDE)",
        "Writing a Simple C++ Program",
        "The \`main()\` Function",
        "Basic Syntax and Structure",
        "Comments in C++"
      ]
    },
    {
      "chapterNumber": 2,
      "title": "Variables, Data Types, and Operators",
      "summary": "This chapter covers the building blocks of C++ programs: variables and data types. You will learn how to declare and initialize variables to store different kinds of data. It also introduces the various operators available in C++ to perform calculations and manipulate data.",
      "topics": [
        "What are Variables?",
        "Fundamental Data Types (int, float, double, char, bool)",
        "Variable Declaration and Initialization",
        "Constants",
        "Arithmetic Operators (+, -, *, /, %)",
        "Assignment Operators (=, +=, -=, etc.)",
        "Comparison Operators (==, !=, <, >, <=, >=)",
        "Logical Operators (&&, ||, !)"
      ]
    },
    {
      "chapterNumber": 3,
      "title": "Control Flow",
      "summary": "This chapter focuses on how to control the execution path of your program. You will learn about conditional statements (if, else if, else) to make decisions and loops (for, while, do-while) to execute a block of code repeatedly.",
      "topics": [
        "Conditional Statements: \`if\`, \`else if\`, \`else\`",
        "Nested \`if\` Statements",
        "The \`switch\` Statement",
        "Loops: \`for\` loop",
        "Loops: \`while\` loop",
        "Loops: \`do-while\` loop",
        "The \`break\` and \`continue\` Statements"
      ]
    },
    {
      "chapterNumber": 4,
      "title": "Functions",
      "summary": "Functions are essential for writing modular and reusable code. This chapter explains how to define and call your own functions. You will also learn about function parameters, return values, and the concept of function scope.",
      "topics": [
        "What is a Function?",
        "Defining and Calling Functions",
        "Function Parameters (Pass by Value)",
        "Return Values",
        "Function Prototypes",
        "Scope of Variables (Local and Global)"
      ]
    },
    {
      "chapterNumber": 5,
      "title": "Arrays and Strings",
      "summary": "This chapter introduces you to derived data types like arrays and strings. You will learn how to store and manipulate collections of data using one-dimensional arrays and how to work with text using the C++ string class.",
      "topics": [
        "One-Dimensional Arrays: Declaration and Initialization",
        "Accessing Array Elements",
        "Iterating through Arrays (using loops)",
        "Introduction to the \`std::string\` Class",
        "Basic String Operations (Concatenation, Length, Accessing Characters)"
      ]
    },
    {
      "chapterNumber": 6,
      "title": "Introduction to Object-Oriented Programming (OOP)",
      "summary": "This chapter provides a gentle introduction to the core concepts of Object-Oriented Programming (OOP), a paradigm that C++ is famous for. You will learn about classes and objects, which are fundamental to building more complex and organized programs.",
      "topics": [
        "What is Object-Oriented Programming?",
        "Classes and Objects",
        "Defining a Simple Class",
        "Creating Objects (Instances of a Class)",
        "Class Members: Attributes (Member Variables) and Methods (Member Functions)",
        "Access Specifiers: \`public\` and \`private\`"
      ]
    }
  ]
}
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

   const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  for await (const chunk of response) {
    if (!chunk.candidates || !chunk.candidates[0].content || !chunk.candidates[0].content.parts) {
      continue;
    }
    if (chunk.candidates[0].content.parts[0].text) {
      console.log(chunk.candidates[0].content.parts[0].text);
    }
    if (chunk.candidates[0].content.parts[0].executableCode) {
      console.log(chunk.candidates[0].content.parts[0].executableCode);
    }
    if (chunk.candidates[0].content.parts[0].codeExecutionResult) {
      console.log(chunk.candidates[0].content.parts[0].codeExecutionResult);
    }
  }
}
courseOutlineAiModel();






//   const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,

// }=require("@google/generative-ai");

// const apiKey=process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const genAI=new GoogleGenerativeAI(apiKey);
// const model=genAI.getGenerativeModel({
//   model:"gemini-1.5-flash",
// });

// const generationConfig={
//   temperature:1,
//   topP:0.95,
//   topK:40,
//   maxOutputTokens:8192,
//   responseMimeType:"application/json",
// };

// export const courseOutlineAiModel=model.startChat({
//   generationConfig,
//   history:[
//     {
//       role:"user",
//       parts:[
//         {
//         text:"generate a study material for c++ for exam and level of difficulty will be easy of course,List of Chapters along with summary for each chapter,Topic list in each chapter in JSON format"
//         }
//       ],
//     },
//     {
//       role:"model",
//       parts:[
//          { text:"`\`\`\`json",
//   "courseTitle": "C++ Exam Study Material",
//   "difficulty": "Easy",
//   "language": "C++",
//   "chapters": [
//     {
//       "chapterNumber": 1,
//       "title": "Introduction to C++",
//       "summary": "This chapter introduces the fundamental concepts of the C++ programming language. You will learn about the history of C++, understand what a compiler is, and write, compile, and execute your first 'Hello, World!' program. The basic structure of a C++ program will also be explained.",
//       "topics": [
//         "What is C++?",
//         "History of C++",
//         "Setting up the Environment (Compiler and IDE)",
//         "Writing a Simple C++ Program",
//         "The `main()` Function",
//         "Basic Syntax and Structure",
//         "Comments in C++"
//       ]
//     },
//     {
//       "chapterNumber": 2,
//       "title": "Variables, Data Types, and Operators",
//       "summary": "This chapter covers the building blocks of C++ programs: variables and data types. You will learn how to declare and initialize variables to store different kinds of data. It also introduces the various operators available in C++ to perform calculations and manipulate data.",
//       "topics": [
//         "What are Variables?",
//         "Fundamental Data Types (int, float, double, char, bool)",
//         "Variable Declaration and Initialization",
//         "Constants",
//         "Arithmetic Operators (+, -, *, /, %)",
//         "Assignment Operators (=, +=, -=, etc.)",
//         "Comparison Operators (==, !=, <, >, <=, >=)",
//         "Logical Operators (&&, ||, !)"
//       ]
//     },
//     {
//       "chapterNumber": 3,
//       "title": "Control Flow",
//       "summary": "This chapter focuses on how to control the execution path of your program. You will learn about conditional statements (if, else if, else) to make decisions and loops (for, while, do-while) to execute a block of code repeatedly.",
//       "topics": [
//         "Conditional Statements: `if`, `else if`, `else`",
//         "Nested `if` Statements",
//         "The `switch` Statement",
//         "Loops: `for` loop",
//         "Loops: `while` loop",
//         "Loops: `do-while` loop",
//         "The `break` and `continue` Statements"
//       ]
//     },
//     {
//       "chapterNumber": 4,
//       "title": "Functions",
//       "summary": "Functions are essential for writing modular and reusable code. This chapter explains how to define and call your own functions. You will also learn about function parameters, return values, and the concept of function scope.",
//       "topics": [
//         "What is a Function?",
//         "Defining and Calling Functions",
//         "Function Parameters (Pass by Value)",
//         "Return Values",
//         "Function Prototypes",
//         "Scope of Variables (Local and Global)"
//       ]
//     },
//     {
//       "chapterNumber": 5,
//       "title": "Arrays and Strings",
//       "summary": "This chapter introduces you to derived data types like arrays and strings. You will learn how to store and manipulate collections of data using one-dimensional arrays and how to work with text using the C++ string class.",
//       "topics": [
//         "One-Dimensional Arrays: Declaration and Initialization",
//         "Accessing Array Elements",
//         "Iterating through Arrays (using loops)",
//         "Introduction to the `std::string` Class",
//         "Basic String Operations (Concatenation, Length, Accessing Characters)"
//       ]
//     },
//     {
//       "chapterNumber": 6,
//       "title": "Introduction to Object-Oriented Programming (OOP)",
//       "summary": "This chapter provides a gentle introduction to the core concepts of Object-Oriented Programming (OOP), a paradigm that C++ is famous for. You will learn about classes and objects, which are fundamental to building more complex and organized programs.",
//       "topics": [
//         "What is Object-Oriented Programming?",
//         "Classes and Objects",
//         "Defining a Simple Class",
//         "Creating Objects (Instances of a Class)",
//         "Class Members: Attributes (Member Variables) and Methods (Member Functions)",
//         "Access Specifiers: `public` and `private`"
//       ]
//     }
  
//   ]
// },
        
//       ],
//     },
//   ]
// });
