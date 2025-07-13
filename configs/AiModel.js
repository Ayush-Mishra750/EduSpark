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



// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';


  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY
  });
  const tools = [
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
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `generate a study material
for c++ for  exam and
level of difficulty
will be  easy with summary
of course,
List of Chapters along with summary
for each chapter,
Topic list in each chapter in JSON format
`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Begin Researching C++**

I've started gathering foundational information by searching for "C++ beginner study guide for exams" and "easy C++ course outline." My initial focus is on identifying common beginner concepts and key areas emphasized in exam preparation materials. I'm hoping to distill a concise, focused learning path.


**Defining Learning Objectives**

I'm now diving deeper, breaking down the initial search results to pinpoint the core C++ beginner topics. My plan is to zero in on the common chapter structures and build concise summaries for each, using focused searches like "C++ [chapter name] summary for beginners." I aim to build a structured foundation.


**Refining Study Focus**

I've moved past the initial search and am now analyzing the structured content from Codecademy, GeeksforGeeks, W3Schools, and Saylor Academy. These resources offer great course outlines to adapt for exam preparation. I'm focusing on their key topics.


**Developing Detailed Outlines**

I've moved on from the broad scope and am now pinpointing deeper chapter summaries. Initial results provided the building blocks, but now I'm crafting more granular overviews. The aim is to enrich the outlines with comprehensive explanations. I'm also preparing to structure the detailed topic lists in JSON format. The next step is a deep dive into each chapter to get precise content.


**Collecting Introductory Material**

I've assembled a solid base of information from my Google searches. I've successfully gathered overviews and summaries for introductory chapters, covering "Introduction to C++," "Variables and Data Types," and "Control Flow." I have a good foothold in these preliminary subjects now.


**Deepening Topic Coverage**

I'm expanding my resources now. I've compiled overviews and summaries for initial chapters, like "Introduction to C++," "Variables and Data Types," and "Control Flow." I have a good base in these preliminary subjects. I also have enough information for more advanced subjects like functions and OOP. I'm focusing on more detailed explanations for more complicated topics to ensure this study guide is complete.


**Gathering Detailed Summaries**

I've assembled a solid base of information, but now I'm focusing on "Object-Oriented Programming," "Pointers and References," and "File Handling." I aim for more beginner-friendly explanations in these areas. I need to make them comprehensive for exam preparation, but accessible. Once those are done, I'll compile everything, structure the JSON topic lists, and present the final study material.


**Analyzing The Summaries**

I've compiled summaries for C++ concepts like OOP, pointers, references, and file handling. My main focus is crafting accessible explanations. Currently, I'm reviewing the structure and flow to ensure optimal clarity. I'm aiming to make them truly useful for novice C++ learners.


**Consolidating Source Data**

I've finished gathering the necessary information. My focus shifts to synthesizing the beginner-friendly summaries for "Object-Oriented Programming," "Pointers and References," and "File Handling." I have multiple sources for each, which will enable me to create comprehensive summaries. I'm now ready to move forward with the requested study materials.


`,
        },
        {
          text: `Here is a study material for a C++ exam at an easy difficulty level.

## C++ Exam Study Material (Easy Difficulty)

This study material is designed to provide a foundational understanding of C++ for beginners. It covers the essential concepts needed to pass an entry-level exam. Each chapter includes a summary and a list of key topics in JSON format.

---

### **Chapter 1: Introduction to C++**

**Summary:** This chapter introduces the C++ programming language, its history, and its fundamental characteristics. C++ is a powerful, general-purpose programming language that supports procedural, object-oriented, and generic programming paradigms. It is an extension of the C language and is widely used for developing systems software, game engines, and high-performance applications. This section will cover the basic syntax for writing a C++ program, including how to compile and run your first "Hello, World!" application. You will also learn about the importance of the \`main()\` function, which is the entry point of every C++ program.

\`\`\`json
{
  "chapter": 1,
  "title": "Introduction to C++",
  "topics": [
    "What is C++?",
    "History of C++",
    "Features of C++",
    "Procedural vs. Object-Oriented Programming",
    "Setting up the programming environment (IDE and Compiler)",
    "Writing a simple 'Hello, World!' program",
    "Compiling and running a C++ program",
    "Basic syntax and structure of a C++ program",
    "The \`main()\` function"
  ]
}
\`\`\`

---

### **Chapter 2: Variables and Data Types**

**Summary:** This chapter covers the basics of storing and manipulating data in C++. Variables are named storage locations in memory that hold values of a specific data type. C++ has several built-in data types, including \`int\` for integers, \`float\` and \`double\` for floating-point numbers, \`char\` for single characters, and \`bool\` for true/false values. You will learn how to declare, initialize, and assign values to variables. Understanding data types is crucial as it determines the type of data a variable can hold and the operations that can be performed on it.

\`\`\`json
{
  "chapter": 2,
  "title": "Variables and Data Types",
  "topics": [
    "What are variables?",
    "Declaring variables",
    "Initializing variables",
    "Basic data types: int, float, double, char, bool",
    "The \`string\` data type",
    "Constants and their use",
    "Type casting (implicit and explicit)",
    "Input and Output streams (\`cin\` and \`cout\`)"
  ]
}
\`\`\`

---

### **Chapter 3: Operators and Control Flow**

**Summary:** This chapter explains how to perform operations on data and control the flow of execution in a C++ program. Operators are symbols that perform operations on operands. This includes arithmetic operators (+, -, *, /), relational operators (==, !=, <, >), and logical operators (&&, ||, !). Control flow statements allow you to make decisions and repeat actions. The \`if-else\` statement is used for conditional execution, while \`for\` and \`while\` loops are used for iteration.

\`\`\`json
{
  "chapter": 3,
  "title": "Operators and Control Flow",
  "topics": [
    "Arithmetic operators",
    "Relational operators",
    "Logical operators",
    "Assignment operators",
    "Increment and decrement operators",
    "Conditional statements: \`if\`, \`else if\`, \`else\`",
    "The \`switch\` statement",
    "Loops: \`for\` loop, \`while\` loop, \`do-while\` loop",
    "\`break\` and \`continue\` statements"
  ]
}
\`\`\`

---

### **Chapter 4: Functions**

**Summary:** Functions are blocks of code that perform a specific task and can be reused throughout a program. This chapter covers how to define and call functions. You will learn about function parameters, which allow you to pass data into a function, and return values, which allow functions to send data back. Functions help in organizing code into modular and manageable pieces, which improves readability and reusability.

\`\`\`json
{
  "chapter": 4,
  "title": "Functions",
  "topics": [
    "What are functions?",
    "Defining and calling functions",
    "Function parameters (arguments)",
    "Return values from functions",
    "Function prototypes (declarations)",
    "Pass by value vs. Pass by reference",
    "Default arguments",
    "Function overloading"
  ]
}
\`\`\`

---

### **Chapter 5: Arrays and Strings**

**Summary:** This chapter introduces two fundamental data structures: arrays and strings. An array is a collection of elements of the same data type stored in contiguous memory locations. Strings are sequences of characters. C++ provides two ways to work with strings: C-style character arrays and the more modern \`std::string\` class. You will learn how to declare, initialize, and access elements in both one-dimensional and two-dimensional arrays, as well as perform basic string manipulations.

\`\`\`json
{
  "chapter": 5,
  "title": "Arrays and Strings",
  "topics": [
    "One-dimensional arrays",
    "Initializing arrays",
    "Accessing array elements",
    "Two-dimensional arrays",
    "C-style strings (character arrays)",
    "The \`std::string\` class",
    "Basic string operations (concatenation, length, etc.)"
  ]
}
\`\`\`

---

### **Chapter 6: Pointers and References**

**Summary:** This chapter explains two powerful features of C++: pointers and references. A pointer is a variable that stores the memory address of another variable. References, on the other hand, are aliases for existing variables. Understanding pointers is crucial for dynamic memory allocation and for working with certain data structures. References are often used in function parameters to allow the function to modify the original variable. Both are used to indirectly access and manipulate data in memory.

\`\`\`json
{
  "chapter": 6,
  "title": "Pointers and References",
  "topics": [
    "What are pointers?",
    "Declaring and initializing pointers",
    "The address-of operator (\`&\`)",
    "The dereference operator (\`*\`)",
    "Pointers and arrays",
    "What are references?",
    "Declaring and initializing references",
    "Differences between pointers and references",
    "Using pointers and references in functions"
  ]
}
\`\`\`

---

### **Chapter 7: Object-Oriented Programming (OOP)**

**Summary:** Object-Oriented Programming is a paradigm that structures a program around "objects" rather than functions and logic. This chapter introduces the core concepts of OOP: classes, objects, encapsulation, inheritance, and polymorphism. A class is a blueprint for creating objects, which are instances of a class. Encapsulation is the bundling of data and the methods that operate on that data into a single unit. Inheritance allows a new class (derived class) to inherit properties and methods from an existing class (base class). Polymorphism allows objects of different classes to be treated as objects of a common base class, enabling code to be more flexible and extensible.

\`\`\`json
{
  "chapter": 7,
  "title": "Object-Oriented Programming (OOP)",
  "topics": [
    "Introduction to OOP",
    "Classes and Objects",
    "Access specifiers: \`public\`, \`private\`, \`protected\`",
    "Constructors and Destructors",
    "Member functions and data members",
    "Encapsulation",
    "Inheritance (single and multiple)",
    "Polymorphism (function overloading and virtual functions)"
  ]
}
\`\`\`

---

### **Chapter 8: File Handling**

**Summary:** This chapter covers the basics of file input and output (I/O) in C++. File handling allows a program to read data from and write data to files on a disk. C++ uses stream classes to handle file operations. The \`ofstream\` class is used for writing to files, \`ifstream\` for reading from files, and \`fstream\` for both reading and writing. You will learn how to open, read, write, and close files.

\`\`\`json
{
  "chapter": 8,
  "title": "File Handling",
  "topics": [
    "What is file handling?",
    "Stream classes for file I/O: \`ofstream\`, \`ifstream\`, \`fstream\`",
    "Opening a file (\`open()\` function)",
    "Writing to a file (\`<<\` operator)",
    "Reading from a file (\`>>\` operator)",
    "Closing a file (\`close()\` function)",
    "Checking for file open errors"
  ]
}\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `give me in json format
`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Crafting JSON Study Material**

I'm currently structuring the study material as a root JSON object to hold all elements. My focus is on defining a clear key for the study content, ensuring it's comprehensive but accessible for easy-level C++ exam preparation. I'm exploring different organizational methods to maintain clarity within the JSON structure.


**Structuring Study Content**

I've decided on the core JSON structure for the easy C++ study material. It will begin with a root object housing an array of chapter objects. Each chapter will include number, title, a brief summary, and a topics array, aiming for a streamlined and easy-to-understand format. I'm now focusing on populating the data with the necessary information for all eight chapters, ensuring clarity for beginners.


**Developing Chapter Outlines**

I'm now diving into the specifics of each chapter.  I'm creating the skeleton for chapters 1 through 8, including titles, short summaries, and topic lists for each. I'm aiming for concise yet comprehensive content that aligns with the easy difficulty level for C++ exam prep. The objective is to make all the information easily digestible for learners.


`,
        },
        {
          text: `\`\`\`json
{
  "course": "C++ for Beginners",
  "difficulty": "Easy",
  "summary": "This study material provides a foundational understanding of C++ for beginners. It covers the essential concepts needed to pass an entry-level exam, including basic syntax, data types, control flow, functions, and an introduction to object-oriented programming.",
  "chapters": [
    {
      "chapter_number": 1,
      "chapter_title": "Introduction to C++",
      "summary": "This chapter introduces the C++ programming language, its history, and its fundamental characteristics. It covers the basic syntax for writing, compiling, and running a simple C++ program. The main() function, as the entry point of every program, is also explained.",
      "topics": [
        "What is C++?",
        "History of C++",
        "Features of C++",
        "Procedural vs. Object-Oriented Programming",
        "Setting up the programming environment (IDE and Compiler)",
        "Writing a simple 'Hello, World!' program",
        "Compiling and running a C++ program",
        "Basic syntax and structure of a C++ program",
        "The \`main()\` function"
      ]
    },
    {
      "chapter_number": 2,
      "chapter_title": "Variables and Data Types",
      "summary": "This chapter covers the basics of storing and manipulating data. It explains how to declare and initialize variables and introduces fundamental data types such as int, float, char, and bool. The concept of constants and type casting is also covered.",
      "topics": [
        "What are variables?",
        "Declaring variables",
        "Initializing variables",
        "Basic data types: int, float, double, char, bool",
        "The \`string\` data type",
        "Constants and their use",
        "Type casting (implicit and explicit)",
        "Input and Output streams (\`cin\` and \`cout\`)"
      ]
    },
    {
      "chapter_number": 3,
      "chapter_title": "Operators and Control Flow",
      "summary": "This chapter explains how to perform operations on data and control the flow of execution. It covers various operators (arithmetic, relational, logical) and control flow statements like if-else for decision making and for/while loops for iteration.",
      "topics": [
        "Arithmetic operators",
        "Relational operators",
        "Logical operators",
        "Assignment operators",
        "Increment and decrement operators",
        "Conditional statements: \`if\`, \`else if\`, \`else\`",
        "The \`switch\` statement",
        "Loops: \`for\` loop, \`while\` loop, \`do-while\` loop",
        "\`break\` and \`continue\` statements"
      ]
    },
    {
      "chapter_number": 4,
      "chapter_title": "Functions",
      "summary": "Functions are reusable blocks of code that perform a specific task. This chapter covers how to define, call, and pass data to functions using parameters. It also explains how functions can return values and introduces concepts like function overloading.",
      "topics": [
        "What are functions?",
        "Defining and calling functions",
        "Function parameters (arguments)",
        "Return values from functions",
        "Function prototypes (declarations)",
        "Pass by value vs. Pass by reference",
        "Default arguments",
        "Function overloading"
      ]
    },
    {
      "chapter_number": 5,
      "chapter_title": "Arrays and Strings",
      "summary": "This chapter introduces two fundamental data structures. Arrays are collections of elements of the same data type. Strings are sequences of characters. You will learn to declare, initialize, and access elements in arrays and perform basic string manipulations.",
      "topics": [
        "One-dimensional arrays",
        "Initializing arrays",
        "Accessing array elements",
        "Two-dimensional arrays",
        "C-style strings (character arrays)",
        "The \`std::string\` class",
        "Basic string operations (concatenation, length, etc.)"
      ]
    },
    {
      "chapter_number": 6,
      "chapter_title": "Pointers and References",
      "summary": "This chapter explains two powerful features of C++. A pointer is a variable that stores the memory address of another variable, while a reference is an alias for an existing variable. Both are used to indirectly access and manipulate data in memory.",
      "topics": [
        "What are pointers?",
        "Declaring and initializing pointers",
        "The address-of operator (\`&\`)",
        "The dereference operator (\`*\`)",
        "Pointers and arrays",
        "What are references?",
        "Declaring and initializing references",
        "Differences between pointers and references",
        "Using pointers and references in functions"
      ]
    },
    {
      "chapter_number": 7,
      "chapter_title": "Object-Oriented Programming (OOP)",
      "summary": "This chapter introduces the core concepts of OOP: classes, objects, encapsulation, inheritance, and polymorphism. A class acts as a blueprint for objects. These concepts help in creating modular, reusable, and organized code.",
      "topics": [
        "Introduction to OOP",
        "Classes and Objects",
        "Access specifiers: \`public\`, \`private\`, \`protected\`",
        "Constructors and Destructors",
        "Member functions and data members",
        "Encapsulation",
        "Inheritance",
        "Polymorphism"
      ]
    },
    {
      "chapter_number": 8,
      "chapter_title": "File Handling",
      "summary": "This chapter covers the basics of file input and output (I/O) in C++. File handling allows a program to read data from and write data to files. It introduces the stream classes (\`ofstream\`, \`ifstream\`, \`fstream\`) used for these operations.",
      "topics": [
        "What is file handling?",
        "Stream classes for file I/O: \`ofstream\`, \`ifstream\`, \`fstream\`",
        "Opening a file (\`open()\` function)",
        "Writing to a file (\`<<\` operator)",
        "Reading from a file (\`>>\` operator)",
        "Closing a file (\`close()\` function)",
        "Checking for file open errors"
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
    console.log(chunk.text);
  }


main();
