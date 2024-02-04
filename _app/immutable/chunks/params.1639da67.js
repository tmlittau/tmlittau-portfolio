import{w as me,b as ge}from"./paths.131a5e5b.js";const ce="@riadh-adrani-theme",fe=e=>{localStorage.setItem(ce,JSON.stringify(e))},de=me(!1),ie=e=>de.update(v=>{var m;const w=typeof e=="boolean"?e:!v;return fe(w),(m=document.querySelector(":root"))==null||m.setAttribute("data-theme",w?"dark":"light"),w}),mn=()=>{const e=localStorage.getItem(ce);e?ie(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ie(!0):ie(!1)},oe=e=>`${ge}/logos/${e}`,n=(e,v)=>v?{dark:oe(v),light:oe(e)}:oe(e),d={AWS:n("aws.svg"),Bootstrap:n("bootstrap.svg"),C:n("c.svg"),Cpp:n("cpp.svg"),Celery:n("celery.svg"),Django:n("django.svg"),FastApi:n("fastapi"),Flask:n("flask.svg"),Go:n("go.svg"),Kafka:n("kafka.svg"),Neo4j:n("neo4j.svg"),Nginx:n("nginx.svg"),Numpy:n("numpy.svg"),Pandas:n("pandas.svg"),RabbitMQ:n("rabbitmq.svg"),Rust:n("rust.svg","rust-dark.png"),Scrapy:n("scrapy.png"),Selenium:n("selenium.svg"),Docker:n("docker.svg"),Kubernetes:n("kubernetees.svg"),Csharp:n("csharp.svg"),Xamarin:n("xamarin.svg"),TypeScript:n("ts.png"),VueJs:n("vue.png"),ReactJs:n("react.svg"),Dart:n("dart.png"),Kotlin:n("kotlin.png"),Python:n("python.png"),NodeJs:n("node.png"),Deno:n("deno.png","deno-dark.png"),Svelte:n("svelte.png"),ExpressJs:n("express.png"),JavaScript:n("js.png"),Fastify:n("fastify.svg","fastify-dark.png"),NestJs:n("nest.svg"),Quasar:n("quasar.svg"),SolidJs:n("solid.svg"),Electron:n("electron.png"),Flutter:n("flutter.svg"),Java:n("java.png"),AdonisJs:n("adonis.png"),Android:n("android.png"),Angular:n("angular.png"),PostgreSQL:n("postgres.png"),Firebase:n("firebase.png"),Sass:n("sass.png"),Unknown:n("no-img.svg"),MongoDB:n("mongodb.svg"),Redis:n("redis.svg"),Tailwind:n("tailwind.svg"),HTML:n("html.svg"),Premiere:n("premiere.svg"),Photoshop:n("photoshop.svg"),CSS:n("css.svg"),AfterEffects:n("after-effects.svg"),Illustrator:n("illustrator.svg"),Nuxt:n("nuxt.png"),Vite:n("vite.png"),Vitest:n("vitest.svg"),Jest:n("jest.png"),Unocss:n("unocss.svg"),Ruvy:n("ruvy.svg"),Postcss:n("postcss.svg"),Tensorflow:n("tensorflow.svg"),SQL:n("sql.png"),PyTorch:n("pytorch.svg"),OpenCV:n("opencv.svg"),DSTL:n("dstl.png"),trilitec:n("trilitec.png"),LHIND:n("lhind.svg"),QT:n("qt.svg"),ROS:n("ros.svg"),DFKI:n("dfki.svg"),ROOT:n("root.png"),Uppsala:n("uppsala.svg"),Bremen:n("bremen.png"),UKE:n("uke.svg"),OpenGL:n("opengl.svg"),GameDevTV:n("gamedevtv.png"),UnrealEngine:n("unreal.svg"),Blender:n("blender.png")};let ue;de.subscribe(e=>ue=e);const gn=e=>typeof e=="string"?e:ue?e.dark:e.light,ye=[{degree:"Master of Science in Computational Science",description:"Master in Computational Science with a focus on Data Science and Machine Learning.",location:"Sweden",logo:d.Uppsala,name:"",organization:"Uppsala University",period:{from:new Date(2017,8,1),to:new Date(2019,5,1)},shortDescription:"",slug:"master-computational-science",subjects:["Python","C++","Algorithms and Data structures","Machine Learning","Data Science","Statistics","Mathematics","Project Management","OpenGL","Computer Graphics","Numerical Methods","Optimization"]},{degree:"Bachelor of Science in Physics",description:"Bachelor in Physics with a focus on theoretical physics and thesis in theoretical neurophysics.",location:"Germany",logo:d.Bremen,name:"",organization:"University of Bremen",period:{from:new Date(2020,0,1),to:new Date(2022,5,1)},shortDescription:"",slug:"bachelor-physics",subjects:["Physics","Algorithm","Algebra","Python","C","English","Theoretical Computer Science"]}],ve=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,be=`# Angular Web Framework

## Introduction
Angular is a popular web framework developed and maintained by Google. It is used for building dynamic and scalable web applications. In this guide, we will explore the key features and concepts of Angular.

## History
Angular was first released by Google in 2010 as AngularJS. It quickly gained popularity among developers due to its powerful features and ease of use. However, as web development evolved, AngularJS faced some limitations, leading to the development of Angular.

In 2016, Google released Angular 2, a complete rewrite of AngularJS. Angular 2 introduced a component-based architecture and improved performance. Since then, Angular has continued to evolve with regular updates and releases.

## Key Features
- TypeScript: Angular is built using TypeScript, a statically typed superset of JavaScript. TypeScript provides better tooling, type checking, and code organization.
- Component-based architecture: Angular follows a component-based architecture, where the application is divided into reusable and independent components.
- Dependency Injection: Angular provides a powerful dependency injection system, making it easier to manage dependencies and write testable code.
- Reactive programming: Angular leverages reactive programming with RxJS to handle asynchronous operations and manage data streams.
- Angular CLI: Angular CLI is a command-line interface that provides a set of tools for creating, building, and testing Angular applications.

## Conclusion
Angular is a mature and powerful web framework that offers a wide range of features and tools for building modern web applications. Its component-based architecture, dependency injection, and reactive programming capabilities make it a popular choice among developers. With regular updates and a strong community support, Angular continues to evolve and stay relevant in the ever-changing web development landscape.
`,we=`# C Programming Language

C is a general-purpose programming language that was developed in the early 1970s by Dennis Ritchie at Bell Labs. It is a high-level language known for its efficiency, portability, and low-level programming capabilities.

## Domains of Usage

C has influenced many other programming languages and is widely used in various domains, including:
- System programming
- Embedded systems
- Application development

## Origins and Standards

C was initially created to develop the Unix operating system, which played a significant role in its popularity. Over the years, C has evolved and standardized through various versions, with the most widely used being the ANSI C standard (C89/C90) and the ISO C standard (C99/C11).

## Features and Capabilities

C provides a rich set of features, including:
- Low-level memory manipulation
- Structured programming constructs
- A large standard library

It allows direct access to memory addresses, making it suitable for system-level programming. C also supports procedural programming paradigms, making it easy to organize code into reusable functions.

## Relevance and Popularity

Despite being a relatively old language, C remains relevant and widely used today. Its simplicity, efficiency, and close-to-the-hardware nature make it a popular choice for developing performance-critical applications and operating systems.

## Example

\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
\`\`\`
`,Se=`# C++ Programming Language

## Introduction
C++ is a general-purpose programming language that was developed as an extension of the C programming language. It was designed to provide a higher level of abstraction and support for object-oriented programming.

## History
C++ was created by Bjarne Stroustrup in the early 1980s at Bell Labs. Stroustrup wanted to add features to the C language that would make it more suitable for large-scale software development. He introduced the concept of classes, which allowed for the implementation of object-oriented programming principles.

## Features
C++ combines the low-level capabilities of C with high-level abstractions, making it a powerful and versatile language. Some of its key features include:
- Object-oriented programming support
- Strong type checking
- Template metaprogramming
- Exception handling
- Standard Template Library (STL)
- Operator overloading
- Multiple inheritance

## Code Example
\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

`,ke=`# Golang

## Introduction

Golang, also known as Go, is an open-source programming language developed by Google. It was designed to be efficient, reliable, and easy to use. Go combines the performance of a compiled language with the simplicity and readability of a dynamic language.

## History

Go was created by Robert Griesemer, Rob Pike, and Ken Thompson at Google in 2007. The initial development of Go started as an experiment to address the challenges faced by large-scale software development at Google. The team aimed to create a language that would be fast, productive, and scalable.

Go was officially announced to the public in November 2009, and the first stable version, Go 1, was released in March 2012. Since then, Go has gained popularity among developers for its simplicity, strong support for concurrency, and efficient execution.

## Key Features

Go offers several key features that make it a popular choice for building software:

### Simplicity

Go has a simple and minimalistic syntax, making it easy to read and write. It avoids unnecessary complexity and provides a clean and straightforward approach to programming.

### Concurrency

Go has built-in support for concurrency through goroutines and channels. Goroutines are lightweight threads that allow concurrent execution, while channels enable safe communication and synchronization between goroutines.

### Performance

Go is a compiled language that produces highly optimized machine code. It offers fast execution times and efficient memory management, making it suitable for building high-performance applications.

### Standard Library

Go comes with a rich standard library that provides a wide range of functionality, including networking, file I/O, encryption, and more. The standard library is well-documented and follows consistent design principles.

## Conclusion

Go is a powerful programming language that combines simplicity, performance, and concurrency. Its popularity continues to grow, and it is widely used in various domains, including web development, system programming, and cloud computing.

## Code Example

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`
`,Te=`# JavaScript

## Introduction

JavaScript is a high-level, interpreted programming language that is primarily used for adding interactivity to web pages. It was created by Brendan Eich in 1995 and has since become one of the most popular programming languages in the world.

## History

JavaScript was originally developed by Brendan Eich at Netscape Communications Corporation. It was initially named "Mocha" and later renamed to "LiveScript" before finally settling on "JavaScript" to capitalize on the popularity of Java at the time.

In 1996, Netscape submitted JavaScript to the European Computer Manufacturers Association (ECMA) for standardization. This led to the creation of the ECMAScript standard, which is the official specification for the language. ECMAScript is often used interchangeably with JavaScript, although JavaScript is just one implementation of the ECMAScript standard.

Over the years, JavaScript has evolved significantly. The release of ECMAScript 6 (ES6) in 2015 introduced many new features and improvements to the language, making it more powerful and expressive. Since then, new versions of ECMAScript have been released regularly, with each version bringing new features and enhancements.

## Features

JavaScript is a versatile language with a wide range of features, including:

- Dynamic typing: JavaScript is dynamically typed, meaning that variables can hold values of any type and their types can change at runtime.
- Object-oriented programming: JavaScript supports object-oriented programming paradigms, allowing developers to create and manipulate objects.
- Functional programming: JavaScript also supports functional programming concepts, such as higher-order functions and closures.
- Asynchronous programming: JavaScript has built-in support for asynchronous programming using promises and async/await, making it well-suited for handling asynchronous tasks.

## Conclusion

JavaScript has come a long way since its inception and has become an essential language for web development. Its versatility, wide adoption, and continuous evolution make it a powerful tool for building interactive and dynamic web applications.

## Code Example

\`\`\`js
// Example code for sending JSON via POST request

const data = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
};

fetch("https://api.example.com/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(result => {
        console.log("Response:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
\`\`\`
`,Ie=`# TypeScript

## Introduction

TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It was developed by Microsoft and first released in October 2012. TypeScript adds optional static typing, classes, interfaces, and other features to JavaScript, making it a powerful tool for building large-scale applications.

## History

TypeScript was created by Anders Hejlsberg, the lead architect of C# and creator of Delphi and Turbo Pascal. Hejlsberg and his team at Microsoft developed TypeScript to address the challenges of building complex JavaScript applications. By adding static typing and advanced language features, TypeScript aimed to improve developer productivity, code maintainability, and tooling support.

## Key Features

- **Static Typing**: TypeScript introduces static typing, allowing developers to define types for variables, function parameters, and return values. This helps catch type-related errors during development and provides better tooling support.

- **Classes and Interfaces**: TypeScript supports object-oriented programming concepts like classes, interfaces, inheritance, and access modifiers. This enables developers to write more structured and maintainable code.

- **Type Inference**: TypeScript has a powerful type inference system that can automatically infer types based on the context. This reduces the need for explicit type annotations and makes the code more concise.

- **Advanced Tooling**: TypeScript provides rich tooling support, including code editors with intelligent autocompletion, refactoring, and error checking. It integrates well with popular IDEs like Visual Studio Code, enhancing the developer experience.

## Differences from JavaScript

While TypeScript is a superset of JavaScript, it introduces some key differences:

- **Static Typing**: TypeScript allows developers to define types, whereas JavaScript is dynamically typed. This helps catch type-related errors early and provides better code documentation.

- **Strict Null Checking**: TypeScript introduces strict null checking, which helps prevent null and undefined errors. In JavaScript, these values are often used unintentionally, leading to runtime errors.

- **ES6+ Support**: TypeScript supports the latest ECMAScript features, including arrow functions, classes, modules, and more. It can compile down to older JavaScript versions for compatibility.

- **Optional Static Typing**: TypeScript allows developers to gradually introduce static typing to existing JavaScript codebases. This means you can start using TypeScript in a JavaScript project without having to rewrite everything at once.

## Code Example

\`\`\`ts
// Import the necessary modules
import axios from 'axios';

// Define the JSON data
const jsonData = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
};

// Send the POST request
axios.post('/api/endpoint', jsonData)
    .then(response => {
        console.log('Request successful:', response.data);
    })
    .catch(error => {
        console.error('Request failed:', error);
    });
\`\`\``,De=`# Python

## Introduction
Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability and has a design philosophy that emphasizes code readability, making it a popular choice for beginners and experienced developers alike.

## History
Python was conceived in the late 1980s by Guido van Rossum, a Dutch programmer. Guido wanted to create a language that was easy to learn and use, while still being powerful and expressive. He named it after the British comedy group Monty Python, as he was a fan of their work.

The first version of Python, Python 0.9.0, was released in February 1991. It was designed to be an easy-to-use scripting language, with a syntax that emphasized readability. Over the years, Python has evolved and gained popularity, becoming one of the most widely used programming languages in the world.

## Features
Python offers a wide range of features that make it a versatile and powerful programming language:

- **Simple and Readable Syntax:** Python's syntax is designed to be easy to read and understand, making it a great choice for beginners and experienced developers alike.
- **Dynamic Typing:** Python uses dynamic typing, which means that you don't need to declare the type of a variable before using it. This allows for more flexibility and faster development.
- **Large Standard Library:** Python comes with a large standard library that provides a wide range of modules and functions for various tasks, such as file handling, networking, and web development.
- **Cross-platform Compatibility:** Python is available on multiple platforms, including Windows, macOS, and Linux, making it a versatile choice for developing applications that can run on different operating systems.
- **Extensive Third-party Libraries:** Python has a vibrant ecosystem of third-party libraries and frameworks, such as NumPy, Pandas, and Django, which provide additional functionality and make it easier to develop complex applications.

## Conclusion
Python's simplicity, readability, and versatility have contributed to its widespread adoption and popularity among developers. Whether you're a beginner or an experienced programmer, Python offers a powerful and flexible platform for building a wide range of applications.

## Code Example

\`\`\`python
phrase = 'hello, world'

word_list = [word for word in phrase.split(', ')]

for word in word_list:
    print(word)
\`\`\`
`,Ce=`# SQL (Structured Query Language)

SQL is a programming language used for managing and manipulating relational databases. It provides a standardized way to interact with databases, allowing users to store, retrieve, update, and delete data.

## History of SQL

SQL was first developed in the early 1970s by Donald D. Chamberlin and Raymond F. Boyce at IBM. It was initially called SEQUEL (Structured English Query Language) and was designed to manipulate and retrieve data from IBM's System R database management system.

In the late 1970s, the name was changed to SQL to avoid trademark conflicts. SQL gained popularity and became an ANSI (American National Standards Institute) standard in 1986. Since then, it has been widely adopted by database vendors and is now the de facto standard for relational databases.

## Key Features of SQL

SQL offers several key features that make it a powerful language for working with databases:

### 1. Data Definition Language (DDL)

DDL statements in SQL are used to define and manage the structure of databases. These statements allow users to create, modify, and delete database objects such as tables, indexes, and views.

### 2. Data Manipulation Language (DML)

DML statements in SQL are used to manipulate data within the database. Users can insert, update, and delete records in tables using DML statements.

### 3. Data Query Language (DQL)

DQL statements in SQL are used to retrieve data from the database. The SELECT statement is the most commonly used DQL statement, allowing users to query and retrieve specific data based on specified criteria.

### 4. Data Control Language (DCL)

DCL statements in SQL are used to control access to the database. These statements allow users to grant or revoke permissions on database objects, ensuring data security and integrity.

## Conclusion

SQL has revolutionized the way we interact with databases, providing a powerful and standardized language for managing and manipulating data. Its rich set of features and wide adoption make it an essential skill for anyone working with relational databases.
`,Me=`# PostgreSQL

## Introduction

PostgreSQL is a powerful open-source relational database management system (RDBMS) known for its robustness, scalability, and extensibility. It offers a wide range of features and is widely used in various applications, from small-scale projects to large enterprise systems.

## History

PostgreSQL, originally named POSTGRES, was developed at the University of California, Berkeley in the 1980s. It was created as a research project led by Professor Michael Stonebraker and his team. The goal was to build a database system that addressed the limitations of existing systems at the time.

In 1996, the project was renamed PostgreSQL to reflect its support for SQL (Structured Query Language). Since then, it has continued to evolve and gain popularity due to its adherence to SQL standards, advanced features, and active community support.

## Key Features

- **ACID Compliance**: PostgreSQL ensures Atomicity, Consistency, Isolation, and Durability, making it suitable for critical applications that require data integrity.

- **Extensibility**: It provides a flexible architecture that allows users to define custom data types, operators, and functions, enabling the development of specialized solutions.

- **Advanced Data Types**: PostgreSQL supports a wide range of data types, including arrays, JSON, XML, and geometric types, allowing for efficient storage and retrieval of complex data.

- **Concurrency Control**: It offers various mechanisms for managing concurrent access to the database, such as multi-version concurrency control (MVCC), which ensures high performance and data consistency.

- **Full Text Search**: PostgreSQL includes powerful full-text search capabilities, enabling efficient searching and indexing of textual data.

## Community and Ecosystem

PostgreSQL has a vibrant and active community of developers, users, and contributors. The community provides extensive documentation, tutorials, and forums for support. Additionally, there is a rich ecosystem of extensions, tools, and frameworks built around PostgreSQL, further enhancing its capabilities.

## Conclusion

PostgreSQL has emerged as a leading open-source RDBMS, offering a feature-rich and reliable solution for managing data. Its history of continuous development, adherence to standards, and strong community support make it a popular choice for a wide range of applications.
`,Le=`# Django Python Library

## Introduction
Django is a high-level Python web framework that enables rapid development of secure and scalable web applications. It follows the Model-View-Controller (MVC) architectural pattern and emphasizes the principle of "Don't Repeat Yourself" (DRY).

## History
Django was created by Adrian Holovaty and Simon Willison while working at the Lawrence Journal-World newspaper in 2003. It was initially developed to meet the newspaper's fast-paced deadlines and to simplify the process of building web applications. Django was released as an open-source project in July 2005 and has since gained widespread popularity in the Python community.

## Features
Django offers a wide range of features that make web development efficient and enjoyable. Some of its key features include:

### Object-Relational Mapping (ORM)
Django provides a powerful ORM that allows developers to interact with the database using Python objects. This abstraction layer simplifies database operations and eliminates the need to write raw SQL queries.

### URL Routing
Django's URL routing system allows developers to map URLs to specific views or functions. This makes it easy to create clean and user-friendly URLs for different pages of a web application.

### Template Engine
Django's template engine provides a convenient way to separate the presentation logic from the business logic. It allows developers to define reusable templates and dynamically render them with data.

### Authentication and Authorization
Django provides built-in authentication and authorization mechanisms, making it easy to handle user authentication, permissions, and access control.

### Admin Interface
Django's admin interface is a powerful tool that automatically generates a user-friendly interface for managing database records. It allows developers to quickly create, update, and delete records without writing custom code.

## Conclusion
Django has become one of the most popular web frameworks for Python due to its simplicity, scalability, and extensive feature set. It has been widely adopted by developers and organizations worldwide for building robust and secure web applications.
`,xe=`# PyTorch

## Introduction
PyTorch is an open-source machine learning library developed by Facebook's AI Research lab. It provides a flexible and efficient framework for building and training deep learning models.

## History
PyTorch was first released in October 2016 by Facebook. It was developed as a successor to Torch, a popular machine learning library in the Lua programming language. PyTorch was designed to address some of the limitations of Torch and provide a more Pythonic interface for deep learning.

## Features
- Dynamic computational graph: PyTorch uses a dynamic computational graph, which allows for more flexibility and easier debugging compared to static graph frameworks.
- GPU acceleration: PyTorch provides seamless integration with GPUs, enabling faster training and inference on large-scale datasets.
- Extensive ecosystem: PyTorch has a rich ecosystem of libraries and tools that support various tasks in machine learning, such as computer vision, natural language processing, and reinforcement learning.
- Easy debugging: PyTorch's dynamic nature makes it easier to debug and understand the behavior of the model during training.
- Pythonic interface: PyTorch provides a Pythonic interface that makes it easy to write and understand deep learning code.

## Getting Started
To get started with PyTorch, you can follow the official documentation and tutorials available on the PyTorch website. The documentation provides detailed explanations of the library's features and guides on how to use them effectively.

## Conclusion
PyTorch has gained popularity among researchers and practitioners due to its flexibility, ease of use, and extensive community support. It continues to evolve and improve, making it a powerful tool for building and training deep learning models.

## Code Example
Simple Example of a Multilayer Perceptron built in PyTorch.

\`\`\`python
import torch
import torch.nn as nn

# Define the MLP model
class MLP(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(MLP, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

# Create an instance of the MLP model
input_size = 10
hidden_size = 20
output_size = 2
model = MLP(input_size, hidden_size, output_size)

# Define the input data
input_data = torch.randn(1, input_size)

# Forward pass through the model
output = model(input_data)

# Print the output
print(output)
\`\`\``,Pe=`# TensorFlow

## Introduction
TensorFlow is an open-source machine learning framework developed by Google. It provides a comprehensive ecosystem of tools, libraries, and resources for building and deploying machine learning models.

## Key Features
- **Flexibility**: TensorFlow supports a wide range of platforms, including desktops, servers, mobile devices, and even specialized hardware like GPUs and TPUs.
- **Scalability**: TensorFlow allows you to scale your models from running on a single device to distributed systems with ease.
- **High-level APIs**: TensorFlow provides high-level APIs like Keras, which simplifies the process of building and training neural networks.
- **Visualization**: TensorFlow includes tools for visualizing and understanding your models, such as TensorBoard.
- **Community and Support**: TensorFlow has a large and active community, offering extensive documentation, tutorials, and support resources.

## Components
### TensorFlow Core
TensorFlow Core is the foundational library of TensorFlow. It provides the building blocks for defining and executing computational graphs, which represent machine learning models.

### Keras
Keras is a high-level API built on top of TensorFlow. It provides a user-friendly interface for building and training deep learning models. Keras is known for its simplicity and ease of use.

### TensorFlow Extended (TFX)
TFX is a production-ready platform for deploying and managing machine learning models at scale. It includes components for data ingestion, preprocessing, model training, serving, and monitoring.

### TensorFlow Lite
TensorFlow Lite is a lightweight version of TensorFlow designed for mobile and embedded devices. It enables efficient deployment of machine learning models on resource-constrained platforms.

## Conclusion
TensorFlow is a powerful and versatile machine learning framework that empowers developers to build and deploy state-of-the-art models. With its extensive ecosystem and user-friendly APIs, TensorFlow is a popular choice for both beginners and experienced machine learning practitioners.
`,ze=`# Pandas Python Library

## Introduction
Pandas is a powerful open-source data manipulation and analysis library for Python. It provides data structures and functions to efficiently manipulate structured data, such as tabular data, time series, and more.

## History
Pandas was created by Wes McKinney while working at AQR Capital Management in 2008. McKinney developed the library to address the limitations of existing data analysis tools in Python. He wanted to create a tool that could handle large datasets and provide a flexible and intuitive way to work with data.

## Key Features
Pandas offers a wide range of features that make it a popular choice for data analysis tasks:

### Data Structures
Pandas provides two primary data structures: Series and DataFrame. A Series is a one-dimensional labeled array, while a DataFrame is a two-dimensional labeled data structure, similar to a table in a relational database.

### Data Manipulation
Pandas offers a rich set of functions for manipulating and transforming data. It provides methods for filtering, sorting, aggregating, merging, and reshaping data, making it easy to perform complex data operations.

### Missing Data Handling
Pandas provides robust tools for handling missing data. It allows you to easily identify, filter, and fill missing values in your datasets, ensuring that your analysis is not affected by incomplete or inconsistent data.

### Time Series Analysis
Pandas has extensive support for working with time series data. It provides functions for resampling, shifting, and rolling window calculations, making it easy to analyze and visualize time-based data.

### Integration with Other Libraries
Pandas seamlessly integrates with other popular Python libraries, such as NumPy, Matplotlib, and scikit-learn. This allows you to leverage the power of these libraries in conjunction with Pandas for advanced data analysis and visualization tasks.

## Conclusion
Pandas has become the go-to library for data manipulation and analysis in Python. Its intuitive syntax, powerful features, and extensive documentation make it a valuable tool for both beginners and experienced data scientists.
`,je=`# NumPy

## Introduction
NumPy is a powerful Python library for numerical computing. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays efficiently. NumPy is widely used in scientific computing, data analysis, and machine learning.

## History
NumPy was first created by Travis Olliphant in 2005 as an open-source project. It was initially inspired by the desire to have a more efficient way to perform numerical computations in Python. NumPy was designed to overcome the limitations of the built-in Python data structures and provide a high-performance alternative for numerical operations.

## Features
- Multi-dimensional array objects: NumPy provides a powerful \`ndarray\` object that allows efficient storage and manipulation of large arrays.
- Mathematical functions: NumPy includes a comprehensive collection of mathematical functions, such as trigonometric functions, exponential functions, and linear algebra operations.
- Broadcasting: NumPy supports broadcasting, which allows operations between arrays of different shapes and sizes.
- Integration with other libraries: NumPy seamlessly integrates with other popular Python libraries, such as SciPy, Pandas, and Matplotlib, making it a fundamental building block for scientific computing.
`,Ae=`# Celery Python Library

Celery is a distributed task queue library for Python that allows you to run tasks asynchronously across multiple workers or machines. It is commonly used for handling background tasks, such as sending emails, processing data, or performing long-running computations.
`,Ee=`# Root Data Analysis Framework

## Introduction

The Root Data Analysis Framework is a powerful software toolkit used for data analysis in high-energy physics experiments. It provides a comprehensive set of tools and libraries for processing, analyzing, and visualizing large datasets.

## Features

The Root framework offers several key features that make it a popular choice among researchers and scientists:

- **Data Processing**: Root provides efficient algorithms and data structures for processing large datasets, including support for parallel computing and distributed processing.

- **Data Analysis**: With Root, users can perform complex data analysis tasks, such as fitting models to experimental data, calculating statistical quantities, and performing hypothesis testing.

- **Visualization**: Root includes a wide range of visualization tools, allowing users to create high-quality plots, histograms, and 3D visualizations of their data. It supports interactive graphics and provides an intuitive interface for exploring and interpreting data.

- **Data I/O**: Root supports various data formats commonly used in high-energy physics experiments, including ROOT files, ASCII files, and HDF5. It provides efficient I/O operations for reading and writing data, making it easy to work with large datasets.
`,Oe=`# QT Framework

## Introduction
The QT Framework is a cross-platform application development framework that allows developers to create high-quality applications with ease. It provides a comprehensive set of tools, libraries, and APIs for building desktop, mobile, and embedded applications.

## Features
- Cross-platform compatibility: QT supports multiple operating systems, including Windows, macOS, Linux, Android, and iOS.
- Rich set of UI controls: QT offers a wide range of pre-built UI controls, such as buttons, menus, dialogs, and more, making it easy to create visually appealing interfaces.
- Signal and slot mechanism: QT's signal and slot mechanism enables easy communication between different components of an application, promoting modularity and reusability.
- Internationalization and localization: QT provides built-in support for internationalization and localization, allowing developers to create applications that can be easily translated into different languages.
- Database integration: QT offers seamless integration with various database systems, making it straightforward to store and retrieve data from databases.
- Extensive documentation and community support: QT has a vast community of developers who actively contribute to its development and provide support through forums, documentation, and online resources.

## Getting Started
To start developing applications with QT, follow these steps:

1. Install QT: Download and install the QT framework from the official website.
2. Set up your development environment: Configure your IDE or text editor to work with QT.
3. Create a new project: Use the QT project wizard to create a new project or import an existing one.
4. Write your code: Use the QT APIs and libraries to build your application's functionality.
5. Build and run your application: Compile your code and run the application to see it in action.

## Resources
- Official QT website: [https://www.qt.io/](https://www.qt.io/)
- QT documentation: [https://doc.qt.io/](https://doc.qt.io/)
- QT forums: [https://forum.qt.io/](https://forum.qt.io/)

## Conclusion
The QT Framework is a powerful and versatile tool for developing cross-platform applications. With its extensive features, ease of use, and strong community support, it is an excellent choice for developers looking to build high-quality applications for various platforms.
`,$e=`# ROS (Robot Operating System)

## Introduction
ROS (Robot Operating System) is an open-source framework for building robot software. It provides a collection of tools, libraries, and conventions that simplify the development of complex robotic systems.

## Key Features
- **Distributed Computing**: ROS enables distributed computing by allowing multiple processes to run on different machines and communicate with each other.
- **Message Passing**: ROS uses a publish-subscribe messaging system, allowing nodes to send and receive messages asynchronously.
- **Package Management**: ROS uses a package-based system for organizing and sharing code, making it easy to reuse and distribute software components.
- **Visualization Tools**: ROS provides various visualization tools for debugging and monitoring robot behavior, such as RViz and rqt.

## Architecture
ROS follows a distributed architecture, consisting of multiple nodes that communicate with each other through messages. Nodes can be written in different programming languages and run on different machines, enabling modularity and scalability.

## Communication
ROS uses a publish-subscribe model for communication between nodes. Nodes can publish messages to a topic, and other nodes can subscribe to that topic to receive the messages. This decoupled communication model allows for flexible and modular system design.

## Tools and Libraries
ROS provides a rich set of tools and libraries to support robot development, including:
- **ROS Core**: The core infrastructure of ROS, responsible for managing communication between nodes.
- **ROS Packages**: Pre-built packages that provide common functionality, such as sensor drivers, robot models, and navigation algorithms.
- **RViz**: A 3D visualization tool for displaying sensor data, robot models, and other visualizations.
- **rqt**: A graphical user interface framework for creating custom robot control panels and visualizations.
- **Gazebo**: A physics-based simulator that allows developers to test and validate robot behavior in a virtual environment.

## Community and Ecosystem
ROS has a large and active community of developers, researchers, and robot enthusiasts. The ROS ecosystem includes a wide range of libraries, tools, and resources contributed by the community, making it easy to find support and leverage existing solutions.

## Conclusion
ROS is a powerful framework for building robot software, providing a flexible and modular architecture, rich set of tools, and a vibrant community. Whether you're developing a small hobby robot or a large-scale industrial system, ROS can help you accelerate development and bring your robotic ideas to life.
`,He=`# OpenCV Library

## Introduction
OpenCV (Open Source Computer Vision Library) is an open-source computer vision and machine learning software library. It provides a wide range of functions and algorithms for image and video processing, object detection and recognition, feature extraction, and more.

## Features
OpenCV offers a comprehensive set of features, including:

- Image and video I/O
- Image processing and manipulation
- Object detection and tracking
- Feature extraction and matching
- Camera calibration and 3D reconstruction
- Machine learning algorithms
- Deep learning integration
- Graphical user interface (GUI) tools

## Supported Platforms
OpenCV is cross-platform and can be used on various operating systems, including:

- Windows
- macOS
- Linux
- Android
- iOS
`,Re=`# Electron Framework

## Introduction
Electron is a popular framework that allows developers to build cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript. While Electron is primarily associated with JavaScript, there are also options available for using Electron with other programming languages, including Golang.

## Benefits of Using Electron with Golang
By combining Electron with Golang, developers can leverage the power and efficiency of the Go programming language while still enjoying the rich UI capabilities and cross-platform compatibility provided by Electron. Some benefits of using Electron with Golang include:

- **Performance**: Golang's efficient runtime and concurrency model can help improve the performance of Electron applications.
- **Security**: Golang's strong typing and memory safety features can enhance the security of Electron applications.
- **Developer Productivity**: Golang's simplicity and ease of use can contribute to faster development cycles and increased productivity.

## Getting Started
To start building Electron applications with Golang, follow these steps:

1. Install Node.js and npm (Node Package Manager) if you haven't already.
2. Install Electron globally by running \`npm install -g electron\`.
3. Set up a new Golang project or navigate to an existing one.
4. Install the necessary Golang dependencies for Electron integration.
5. Create the main Electron entry point file in Golang.
6. Write your Golang code to interact with Electron APIs and handle UI events.
7. Build and package your Electron application using the appropriate tools for your target platform.
`,Ge=`# OpenGL

## Introduction
OpenGL is a powerful graphics library that allows developers to create high-performance 2D and 3D graphics applications. It provides a set of functions and tools for rendering complex scenes, handling user input, and interacting with the graphics hardware.

## Key Features
- Cross-platform: OpenGL is supported on multiple operating systems, including Windows, macOS, and Linux.
- Hardware acceleration: OpenGL leverages the capabilities of modern graphics hardware to achieve fast and efficient rendering.
- Extensibility: The OpenGL API is designed to be extensible, allowing developers to add custom functionality through extensions.
- Wide industry adoption: OpenGL is widely used in various industries, including gaming, virtual reality, scientific visualization, and computer-aided design.

## Rendering Pipeline
The OpenGL rendering pipeline consists of several stages that transform geometric data into pixels on the screen. These stages include vertex processing, primitive assembly, rasterization, and fragment processing.

## Shaders
Shaders are small programs written in a specialized language (such as GLSL) that run on the GPU. They define how vertices and fragments are processed during the rendering pipeline, allowing developers to implement custom lighting, texturing, and other effects.

## Buffer Objects
Buffer objects in OpenGL are used to store and manipulate data on the GPU. They provide efficient memory management and allow for high-performance data transfers between the CPU and GPU.

## Texturing
OpenGL supports various texture mapping techniques, allowing developers to apply images or patterns to 3D objects. Texturing adds realism and detail to rendered scenes.

## Advanced Techniques
- Framebuffer objects: Used for off-screen rendering and post-processing effects.
- Vertex buffer objects: Efficiently store vertex data on the GPU.
- Geometry shaders: Perform operations on entire primitives, such as generating additional geometry.
- Tessellation shaders: Dynamically subdivide geometry for increased detail.

## Conclusion
OpenGL is a versatile graphics library that enables developers to create visually stunning applications across different platforms. Its wide industry adoption, extensibility, and hardware acceleration make it a popular choice for graphics programming.
`,Ue=`# CSS (Cascading Style Sheets)

## Introduction
CSS (Cascading Style Sheets) is a styling language used to describe the presentation of a document written in HTML (Hypertext Markup Language). It provides a way to control the appearance of web pages, including layout, colors, fonts, and other visual aspects.

## History
CSS was first proposed by Håkon Wium Lie in 1994, while he was working at CERN (European Organization for Nuclear Research). It was developed as a solution to the limitations of HTML in terms of styling and layout. The first CSS specification, CSS1, was released in 1996, followed by CSS2 in 1998 and CSS3 in 1999. Since then, CSS has undergone several updates and enhancements, with CSS3 being the latest major version.

## How CSS Works
CSS works by applying styles to HTML elements. It uses selectors to target specific elements and declarations to define the styles to be applied. Selectors can be based on element names, classes, IDs, attributes, and more. Declarations consist of a property and a value, specifying how the selected elements should be styled.

## CSS Syntax

\`\`\`css
/* Selects all paragraphs and sets the font color to red */
p {
    color: red;
}

/* Selects all headings with class "title" and sets the font size to 24px */
h1.title {
    font-size: 24px;
}

/* Selects all elements with the class "button" and sets the background color to blue */
.button {
    background-color: blue;
}
\`\`\``,Fe=`# HTML: Hypertext Markup Language

HTML (Hypertext Markup Language) is the standard markup language for creating web pages and applications. It provides the structure and content of a webpage, defining the elements and their relationships.

## History of HTML

HTML was first introduced by Tim Berners-Lee in 1991 as a means to share scientific information among researchers. The initial version, HTML 1.0, was a simple language with limited capabilities. Over the years, HTML has evolved through various versions, each introducing new features and improvements.

### HTML 2.0

HTML 2.0, released in 1995, introduced several new elements and attributes, including tables, image maps, and form elements. This version laid the foundation for more complex web page layouts and interactivity.

### HTML 3.2

HTML 3.2, released in 1997, brought significant enhancements to the language. It introduced support for frames, which allowed multiple web pages to be displayed within a single browser window. Additionally, new form elements and multimedia capabilities were introduced.

### HTML 4.01

HTML 4.01, released in 1999, further expanded the capabilities of HTML. It introduced support for cascading style sheets (CSS), which enabled developers to separate the presentation of a webpage from its structure. This version also introduced scripting support through JavaScript.

### HTML5

HTML5, the latest major version of HTML, was released in 2014. It introduced a wide range of new features and improvements, including semantic elements, multimedia support, canvas for drawing graphics, and enhanced form controls. HTML5 also introduced the concept of web APIs, allowing web applications to access device-specific features.

## Conclusion

HTML has come a long way since its inception, evolving into a powerful and versatile language for creating web pages and applications. Its continuous development and adoption of new standards have played a crucial role in shaping the modern web.

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
\`\`\``,Ne=`# Tailwind CSS Framework

## Introduction
Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. It provides a set of pre-defined utility classes that you can use to style your HTML elements.

## History
Tailwind CSS was created by Adam Wathan, Jonathan Reinink, David Hemphill, and Steve Schoger. It was first released in November 2017 and has gained popularity among developers due to its unique approach to styling.

## Key Features
- **Utility-First Approach**: Tailwind CSS focuses on providing a wide range of utility classes that you can apply directly to your HTML elements, allowing for rapid prototyping and customization.
- **Responsive Design**: Tailwind CSS includes responsive utility classes that make it easy to create responsive layouts for different screen sizes.
- **Customization**: Tailwind CSS is highly customizable. You can configure the framework to include only the utility classes you need, reducing the overall file size.
- **Developer Experience**: Tailwind CSS provides a comprehensive set of documentation and resources, making it easy for developers to get started and learn the framework.

## Getting Started
To start using Tailwind CSS in your project, you can follow these steps:

1. Install Tailwind CSS using a package manager like npm or yarn.
2. Include the Tailwind CSS stylesheet in your HTML file.
3. Start using the utility classes provided by Tailwind CSS in your HTML elements.

## Example Usage
Here's an example of how you can use Tailwind CSS classes to style a button:

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click me
</button>
\`\`\``,Be=`# Docker

## Introduction

Docker is an open-source platform that allows developers to automate the deployment and management of applications using containerization. It provides a lightweight and portable environment for running software, making it easier to build, ship, and run applications across different environments.

## History

Docker was first introduced by Solomon Hykes and his team at dotCloud in 2013. It was initially developed as an internal project to solve the problem of deploying applications in a consistent and reproducible manner. The project gained popularity quickly and was open-sourced in March 2013.

## Key Concepts

### Containers

Containers are the fundamental building blocks of Docker. They are lightweight, isolated environments that encapsulate an application and its dependencies. Containers provide a consistent and reproducible environment, ensuring that the application runs the same way across different systems.

### Images

Images are the templates used to create containers. They contain everything needed to run an application, including the code, runtime, libraries, and system tools. Docker images are stored in a registry and can be easily shared and distributed.

### Dockerfile

A Dockerfile is a text file that contains instructions for building a Docker image. It specifies the base image, the dependencies, and the commands to run when the image is created. Dockerfiles allow developers to define the environment and configuration of their applications in a declarative way.

## Benefits of Docker

- **Portability**: Docker allows applications to run consistently across different environments, from development to production.

- **Isolation**: Containers provide a high level of isolation, ensuring that applications do not interfere with each other.

- **Scalability**: Docker makes it easy to scale applications horizontally by running multiple instances of containers.

- **Efficiency**: Docker's lightweight architecture and efficient resource utilization make it an ideal choice for deploying and managing applications.

## Conclusion

Docker has revolutionized the way applications are built, shipped, and run. Its containerization technology has made it easier for developers to create and deploy applications in a consistent and reproducible manner. With its growing ecosystem and community support, Docker continues to be a popular choice for modern application development and deployment.
`,_e=`# Redis

## Introduction

Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. It is known for its high performance, scalability, and versatility. Redis supports various data structures such as strings, lists, sets, hashes, and more, making it a popular choice for many applications.

## History

Redis was created by Salvatore Sanfilippo, also known as "antirez," in 2009. Salvatore initially developed Redis as a personal project to solve specific problems he encountered while working on a startup. He wanted a simple and efficient way to handle real-time data processing and caching.

Redis gained popularity quickly due to its simplicity and performance. It became widely adopted by developers and organizations looking for a fast and reliable data store. Over the years, Redis has evolved and added new features, making it even more powerful and flexible.

## Features

Redis offers several key features that make it a preferred choice for many use cases:

- **In-Memory Data Storage**: Redis stores data in memory, allowing for extremely fast read and write operations.

- **Data Structures**: Redis supports various data structures such as strings, lists, sets, hashes, sorted sets, and more. This flexibility enables developers to model their data efficiently.

- **Persistence**: Redis provides options for data persistence, allowing data to be saved to disk and loaded back into memory when needed.

- **Pub/Sub Messaging**: Redis supports publish/subscribe messaging, enabling real-time communication between different components of an application.

- **Replication and High Availability**: Redis supports replication, allowing data to be replicated across multiple nodes for increased availability and fault tolerance.

- **Lua Scripting**: Redis allows developers to write Lua scripts that can be executed on the server, enabling complex operations and transactions.

## Conclusion

Redis has become a popular choice for developers and organizations looking for a fast, scalable, and versatile data store. Its simplicity, performance, and rich feature set make it suitable for a wide range of use cases, from caching to real-time analytics. Whether you're building a small application or a large-scale system, Redis can be a valuable tool in your software stack.
`,Je=`# Unreal Engine

Unreal Engine is a powerful and widely-used game development engine created by Epic Games. It provides developers with a comprehensive suite of tools and features to create high-quality and visually stunning games for various platforms.

## Features

Unreal Engine offers a wide range of features that make it a popular choice among game developers:

- **Real-time rendering**: Unreal Engine utilizes advanced rendering techniques to deliver realistic and immersive visuals in real-time.

- **Blueprint visual scripting**: With its intuitive visual scripting system called Blueprint, developers can create gameplay mechanics, AI behaviors, and interactive elements without writing code.

- **Asset pipeline**: Unreal Engine provides a robust asset pipeline that allows developers to import and manage various types of assets, including 3D models, textures, animations, and audio files.

- **Physics simulation**: The engine includes a powerful physics simulation system that enables realistic interactions between objects, such as collisions, gravity, and complex simulations.

- **Multiplatform support**: Unreal Engine supports multiple platforms, including PC, consoles, mobile devices, and virtual reality (VR) headsets, allowing developers to reach a wide audience.

## Community and Resources

Unreal Engine has a vibrant and supportive community of developers, artists, and enthusiasts. Here are some valuable resources for learning and getting help with Unreal Engine:

- **Documentation**: The official Unreal Engine documentation provides comprehensive guides, tutorials, and reference materials to help developers learn and use the engine effectively.

- **Forums and communities**: There are various online forums and communities where developers can ask questions, share knowledge, and collaborate with other Unreal Engine users.

- **Marketplace**: The Unreal Engine Marketplace offers a vast collection of assets, plugins, and tools created by the community, which can be used to enhance game development workflows.

- **Learning resources**: Epic Games provides a range of learning resources, including video tutorials, sample projects, and online courses, to help developers improve their skills and stay up-to-date with the latest features.

## Conclusion

Unreal Engine is a powerful and versatile game development engine that empowers developers to create visually stunning and immersive games for various platforms. With its extensive features, supportive community, and abundant learning resources, Unreal Engine is a popular choice for both indie developers and AAA studios.
`,Qe=`# Blender

## Introduction

Blender is a free and open-source 3D computer graphics software toolset. It is widely used for creating animated films, visual effects, art, 3D printed models, interactive 3D applications, and video games.

## Features

Blender offers a wide range of features that make it a powerful tool for 3D modeling, animation, rendering, and more. Some of its key features include:

- **Modeling**: Blender provides a comprehensive set of modeling tools for creating and editing 3D models.
- **Animation**: It supports keyframe animation, skeletal animation, and non-linear animation through its built-in animation system.
- **Rendering**: Blender has a powerful rendering engine that supports both CPU and GPU rendering, allowing users to create high-quality images and animations.
- **Simulation**: It includes various simulation tools for physics-based animation, such as cloth simulation, fluid simulation, and particle systems.
- **Compositing**: Blender's node-based compositing system enables users to combine and manipulate different elements to create complex visual effects.
- **Scripting**: It has a built-in Python scripting interface, allowing users to automate tasks and extend Blender's functionality.

## User Interface

Blender has a unique and customizable user interface that may take some time to get used to. It consists of multiple editor types, such as the 3D Viewport, Timeline, Node Editor, and more. Users can arrange and customize these editors according to their workflow preferences.

## Community and Support

Blender has a large and active community of users and developers. There are numerous online resources, tutorials, forums, and documentation available to help users learn and troubleshoot any issues they may encounter.

## Conclusion

Blender is a powerful and versatile 3D computer graphics software toolset. With its extensive features, customizable user interface, and strong community support, it is a popular choice among artists, designers, and developers for creating stunning 3D content.
`,y=e=>e,pe=[y({slug:"python",color:"yellow",description:De,logo:d.Python,name:"Python"}),y({slug:"c",color:"blue",description:we,logo:d.C,name:"C"}),y({slug:"cpp",color:"blue",description:Se,logo:d.Cpp,name:"C++"}),y({slug:"go",color:"blue",description:ke,logo:d.Go,name:"Golang"}),y({slug:"sql",color:"blue",description:Ce,logo:d.SQL,name:"SQL"}),y({slug:"postgres",color:"blue",description:Me,logo:d.PostgreSQL,name:"PostgreSQL"}),y({slug:"django",color:"green",description:Le,logo:d.Django,name:"Django"}),y({slug:"pytorch",color:"red",description:xe,logo:d.PyTorch,name:"Pytorch"}),y({slug:"tensorflow",color:"orange",description:Pe,logo:d.Tensorflow,name:"Tensorflow"}),y({slug:"pandas",color:"red",description:ze,logo:d.Pandas,name:"Pandas"}),y({slug:"numpy",color:"blue",description:je,logo:d.Numpy,name:"Numpy"}),y({slug:"celery",color:"green",description:Ae,logo:d.Celery,name:"Celery"}),y({slug:"root",color:"blue",description:Ee,logo:d.ROOT,name:"Root"}),y({slug:"qt",color:"green",description:Oe,logo:d.QT,name:"Qt"}),y({slug:"ros",color:"blue",description:$e,logo:d.ROS,name:"ROS"}),y({slug:"opencv",color:"blue",description:He,logo:d.OpenCV,name:"OpenCV"}),y({slug:"electron",color:"blue",description:Re,logo:d.Electron,name:"Electron"}),y({slug:"opengl",color:"blue",description:Ge,logo:d.OpenGL,name:"OpenGL"}),y({slug:"css",color:"blue",description:Ue,logo:d.CSS,name:"CSS"}),y({slug:"html",color:"orange",description:Fe,logo:d.HTML,name:"HTML"}),y({slug:"javascript",color:"yellow",description:Te,logo:d.JavaScript,name:"Javascript"}),y({slug:"svelte",color:"orange",description:ve,logo:d.Svelte,name:"Svelte"}),y({slug:"angular",color:"red",description:be,logo:d.Angular,name:"Angular"}),y({slug:"ts",color:"blue",description:Ie,logo:d.TypeScript,name:"Typescript"}),y({slug:"tailwind",color:"blue",description:Ne,logo:d.Tailwind,name:"Tailwind"}),y({slug:"docker",color:"blue",description:Be,logo:d.Docker,name:"Docker"}),y({slug:"redis",color:"red",description:_e,logo:d.Redis,name:"Redis"}),y({slug:"unreal",color:"blue",description:Je,logo:d.UnrealEngine,name:"Unreal Engine"}),y({slug:"blender",color:"orange",description:Qe,logo:d.Blender,name:"Blender"})],P=(...e)=>pe.filter(v=>e.includes(v.slug));var G=(e=>(e.GitHub="github",e.StackOverflow="stackoverflow",e.Twitter="twitter",e.Linkedin="linkedin",e.Email="email",e.Facebook="facebook",e.Youtube="youtube",e.Freelancermap="freelancermap",e))(G||{}),W=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e.StudentJob="Student Job",e))(W||{});const qe=`# Freelance Data Scientist / Software Developer

In the following section the projects I worked on are listed.

## Projects

### Project 1: EV Charging Station Price Consolidation Web Service
- Description: Developed a web service to consolidate EV charging station prices from various sources with different protocols.
- Technologies Used: Python with Django, PostgreSQL, and KendoUI.
- Deployment: AWS.

### Project 2: Virtualization Management System for Hardware and Software Testing
- Description: Worked on a large legacy codebase written in Python to develop a virtualization management system for testing and simulating different hardware and software setups.
- Responsibilities: Wrote unit and integration tests, added new features to improve user experience.
- Technologies Used: Python with Django and Celery, PostgreSQL as a database, Redis, Jenkins, Docker Swarm.
- CI/CD: Azure DevOps.`,We=`# Data Scientist at the Institute of Neuropathology, UKE

During my time as a Data Scientist at the Institute of Neuropathology at the University Medical Center Hamburg-Eppendorf (UKE), I had the opportunity to contribute to cutting-edge research in the field of neurolopathology with a focus on familial Alzheimer's disease. My role involved supporting the scientific staff with the analysis of patient data and the development of tools for the image analysis of immunohistochemical images.

## Analysis of Patient Data

One of my primary responsibilities was to analyze patient data to extract meaningful insights. This involved working closely with the research team to understand their requirements and objectives. I utilized various statistical and machine learning techniques to analyze large datasets and identify patterns, trends, and correlations. By uncovering valuable insights from the data, I was able to contribute to the advancement of knowledge in the field of neuropathology.

## Development of Image Analysis Tools

In addition to analyzing patient data, I also played a key role in the development of tools for the image analysis of immunohistochemical images. These tools were designed to automate and streamline the analysis process, saving valuable time for the scientific staff. I worked closely with domain experts to understand their requirements and developed custom algorithms and software solutions to accurately analyze and interpret the images. The tools I developed not only improved the efficiency of the research process but also enhanced the accuracy and reliability of the results.

## Publication

One of the highlights of my work at the UKE was the publication that resulted from my contributions. The research project I was involved in led to a publication titled "Title of Publication" in a prestigious journal. This publication showcased the impact of our work and contributed to the scientific community's understanding of neurology. The publication can be accessed at [https://doi.org/10.1002/alz.069409](https://doi.org/10.1002/alz.069409).

Working at the Institute of Neuropathology at the UKE was an enriching experience that allowed me to apply my skills as a Data Scientist to advance the field of bioinformatics. I am proud of the contributions I made and the impact they had on the scientific community.
`,Ve=`# trilitec GmbH Startup

## Introduction

During my time at trilitec GmbH, I had the privilege of serving as the Lead Data Scientist. This role allowed me to apply my expertise in machine learning methods to analyze millimeter-wave radar data. Additionally, I had the opportunity to lead a talented team of developers, gaining valuable experience in managing and guiding a group towards success.

## Responsibilities

As the Lead Data Scientist, my primary responsibilities included:

- Applying machine learning techniques to analyze millimeter-wave radar data.
- Developing and implementing algorithms to extract meaningful insights from the data.
- Collaborating with cross-functional teams to integrate data-driven solutions into the company's products and services.
- Mentoring and guiding a team of developers, fostering a collaborative and innovative work environment.

## Achievements

During my tenure, I achieved several notable accomplishments, including:

- Successfully implementing machine learning models that significantly improved the accuracy and efficiency of data analysis.
- Leading the development of innovative algorithms that enabled the identification of patterns and anomalies in millimeter-wave radar data.
- Collaborating with the product team to integrate data-driven insights into the company's offerings, resulting in enhanced performance and customer satisfaction.
- Mentoring and nurturing the professional growth of team members, fostering a culture of continuous learning and development.

## Conclusion

My experience as the Lead Data Scientist at trilitec GmbH was both challenging and rewarding. It provided me with the opportunity to apply my skills in machine learning and lead a team of talented developers. I am proud of the accomplishments we achieved together and the impact we made in the field of millimeter-wave radar data analysis.

`,Ye=`# Technology Consultant at Lufthansa Industry Solutions

## Introduction

After completing my studies, I had the opportunity to work as a Technology Consultant at Lufthansa Industry Solutions GmbH. During my time there, I deepened my knowledge in the practical application of machine learning algorithms and explored new areas of software development.

## Machine Learning Expertise

As a Technology Consultant, I had the privilege of working on projects that involved the implementation of machine learning algorithms. I gained hands-on experience in developing and deploying machine learning models, as well as optimizing their performance. This allowed me to further enhance my skills in data analysis, feature engineering, and model evaluation.

## Software Development Exploration

In addition to my work in machine learning, I also had the chance to explore new areas of software development. This included working with cutting-edge technologies, such as cloud computing and containerization. I collaborated with cross-functional teams to design and develop scalable software solutions that met the needs of our clients.

## Conclusion

My time as a Technology Consultant at Lufthansa Industry Solutions was invaluable in terms of expanding my knowledge and skills in both machine learning and software development. I am grateful for the opportunities I had to work on challenging projects and collaborate with talented professionals in the field.
`,Ke=`# Internship at DFKI RIC

## Introduction

During my internship at the DFKI RIC in Bremen, I had the opportunity to work on an exciting project involving surface detection in autonomous vehicles. This project aimed to utilize Inertial Measurement Units (IMU) and a TurtleBot to collect training data on different surfaces and train a set of models for surface prediction.

## Project Description

The main goal of the project was to develop a proof of concept study on surface detection. The study involved collecting training data using IMU sensors while the TurtleBot was moving on various surfaces. This data was then used to train a set of LSTM models, which are a type of recurrent neural network.

## Methodology

To achieve the project goals, the following steps were followed:

1. Data Collection: The TurtleBot was equipped with IMU sensors to collect data while traversing different surfaces. The data included various parameters such as acceleration, orientation, and velocity.

2. Model Training: The collected data was used to train a set of LSTM models. These models were trained to predict the surface the vehicle was currently moving on based on the IMU data.

3. Model Evaluation: The trained models were evaluated by comparing their predictions with the actual surface data. The model that provided the closest match to the real surface was considered the most accurate.

## Results and Conclusion

Through this project, we successfully developed a proof of concept study on surface detection in autonomous vehicles. The trained LSTM models showed promising results in predicting the surface based on IMU data. This project opens up possibilities for further research and development in the field of autonomous vehicle navigation.

## Conclusion

My internship at DFKI RIC provided me with valuable hands-on experience in working on a real-world project in the field of autonomous vehicles. I gained insights into data collection, model training, and evaluation techniques. This experience has further fueled my passion for machine learning and its applications in the automotive industry.
`,Xe=`# Project at the Institute of Nuclear Physics, Uppsala University

## Introduction

During my Master's studies at Uppsala University, I had the opportunity to work on an exciting project at the Institute of Nuclear Physics. The goal of this project was to develop and implement a machine learning algorithm for discrimination of signal and background data obtained at the BESIII spectrometer in China. In this project, I focused on utilizing a Bayesian Neural Network due to its unique properties.

## Methodology

To achieve the project's objectives, I followed a systematic approach. First, I conducted a comprehensive literature review to gain a deep understanding of the BESIII spectrometer and the challenges associated with signal-background discrimination. This allowed me to identify the most suitable machine learning technique for the task.

Based on my research, I chose to implement a Bayesian Neural Network (BNN) due to its ability to handle uncertainty and provide probabilistic predictions. The BNN was trained using a labeled dataset consisting of both signal and background data. I utilized advanced techniques such as dropout regularization and variational inference to improve the model's performance and robustness.

## Results and Impact

The implementation of the Bayesian Neural Network yielded promising results. The model achieved a high accuracy in discriminating signal from background data, surpassing the performance of traditional machine learning algorithms. The probabilistic nature of the BNN also allowed for uncertainty estimation, providing valuable insights into the reliability of the predictions.

The successful development and implementation of this machine learning algorithm have significant implications for the field of nuclear physics. It enhances our ability to analyze experimental data obtained from the BESIII spectrometer, leading to a better understanding of fundamental particles and their interactions.

## Conclusion

Working on this project at the Institute of Nuclear Physics was a rewarding experience. It allowed me to apply my knowledge of machine learning techniques to a real-world problem in the field of nuclear physics. The project's success highlights the potential of Bayesian Neural Networks in improving signal-background discrimination and advancing scientific research.
`,Ze=[{slug:"freelance software-developer",company:"Self-employed",description:qe,contract:W.SelfEmployed,type:"Software Development",location:"Hamburg, Germany / Bremen, Germany",period:{from:new Date(2022,9,1)},skills:P("angular","ts","python","css","html","js","django","sql","postgres","docker","redis","celery"),name:"Freelance Data Scientist / Software Developer",color:"green",links:[],logo:d.DSTL,shortDescription:"Data Science and Web development for customers."},{slug:"data-scientist",company:"Self-employed",description:We,contract:W.SelfEmployed,type:"Data Science",location:"Hamburg, Germany",period:{from:new Date(2021,0,10),to:new Date(2022,8,1)},skills:P("python","sql","postgres","docker","redis","celery","pandas","pytorch","numpy","golang","opencv"),name:"Data Scientist",color:"blue",links:[],logo:d.UKE,shortDescription:"Data Analytics and Machine Learning Services for customers."},{slug:"co-founder",company:"trilitec GmbH",description:Ve,contract:W.FullTime,type:"Data Science",location:"Osterholz-Scharmbeck, Germany",period:{from:new Date(2020,2,10),to:new Date(2021,8,1)},skills:P("python","sql","postgres","docker","pandas","pytorch","numpy","clang","cpp","opencv"),name:"Co-Founder",color:"blue",links:[],logo:d.trilitec,shortDescription:"Leading the Data Science and Software Development department at trilitec Startup."},{slug:"technology-consultant",company:"Lufthansa Industry Solutions GmbH",description:Ye,contract:W.FullTime,type:"Data Science",location:"Hamburg, Germany",period:{from:new Date(2019,8,10),to:new Date(2020,2,1)},skills:P("python","sql","postgres","docker","pandas","pytorch","numpy","javascript","css","html"),name:"Technology Consultant",color:"blue",links:[],logo:d.LHIND,shortDescription:"Consulting customers in the field of software development and data science."},{slug:"intern",company:"DFKI GmbH",description:Ke,contract:W.Internship,type:"Research Internship",location:"Bremen, Germany",period:{from:new Date(2019,1,10),to:new Date(2019,6,1)},skills:P("python","tensorflow","qt","ros","cpp","clang"),name:"Intern",color:"blue",links:[],logo:d.DFKI,shortDescription:"Developing a new generation of autonomous driving software."},{slug:"student-researcher",company:"Institute for nuclear physics at Uppsala University",description:Xe,contract:W.StudentJob,type:"Research Internship",location:"Uppsala, Sweden",period:{from:new Date(2018,10,1),to:new Date(2019,0,1)},skills:P("python","tensorflow","root"),name:"Student Researcher",color:"red",links:[],logo:d.Uppsala,shortDescription:"Development and implementation of a Bayesian Neural Network for the analysis of nuclear physics data."}],en=`# Accounting Tool

## Overview
The accounting tool is a web-based application designed to streamline and automate financial management processes for my business. It provides a comprehensive set of features to help me manage customers, track expenses, generate invoices, and ensure compliance with accounting standards. It also helps doing the taxes by providing an overview of earnings and finally profit.

## Key Features
- **CRM**: The tool allows users to record customers, income, expenses, and orders. It provides a user-friendly interface for entering transaction details and supports multiple currencies.
- **Expense Tracking**: Users can easily track and categorize expenses, helping them monitor spending patterns and identify areas for cost optimization. The tool also supports attaching receipts and invoices to expense records.
- **Reporting and Taxes**: The accounting tool offers a range of pre-built reports and customizable dashboards to provide insights into financial performance. Users can generate tax reports to get a quick overview of expenses, incomes and profit.
- **User Permissions and Security**: The tool offers role-based access control, allowing me to define user roles and permissions. 

## Benefits
- **Time Savings**: By automating accounting processes and providing intuitive interfaces, the accounting tool saves time for my business, allowing me to focus on core operations.
- **Accuracy and Reliability**: With built-in validation checks and automated calculations, the tool minimizes errors and ensures correct documentation.
- **Financial Visibility**: The tool provides real-time visibility into financial data, enabling myself to make informed decisions and monitor my financial health.

## Conclusion
The accounting tool is a powerful solution for my business to streamline my accounting processes. With its comprehensive features, user-friendly interface, and focus on accuracy and ease of use, it empowers me to effectively manage my finances, make informed decisions and keep an overview of my customers and expenses.
`,nn=`# Character Sheet Web Application

## Overview
The Character Sheet Web Application is a project built using Svelte and Django. It provides a user-friendly interface for creating and managing character sheets for tabletop role-playing games in the Wizarding World. The application allows users to create, edit, and delete character sheets, as well as track various attributes and abilities of their characters.

## Features
- User Authentication: The application includes a user authentication system, allowing users to create accounts and securely log in.
- Character Creation: Users can create new character sheets by providing basic information such as name, race, class, and background.
- Attribute Tracking: The application provides a user-friendly interface for tracking various attributes of characters, such as strength, dexterity, intelligence, and more.
- Ability Management: Users can add, edit, and remove abilities for their characters, allowing them to keep track of special skills, spells, or other unique abilities.
- Character Sheet Templates: The application includes a pre-defined character sheet template for a tabletop role-playing game in the Wizarding World of Harry Potter.
- Responsive Design: The web application is designed to be responsive and mobile-friendly, ensuring a seamless experience across different devices.

## Technologies Used
- Svelte: The front-end of the application is built using the Svelte framework, which provides a reactive and efficient way to build user interfaces.
- Django: The back-end of the application is built using Django, a high-level Python web framework that follows the model-view-controller (MVC) architectural pattern.
- SQLite: The application uses SQLite as the database management system to store and retrieve character sheet data. This decision was made due to its light weight and portability.

## Repository
The source code for the frontend of the Character Sheet Web Application can be found in the following GitHub repository: [https://github.com/tmlittau/character-sheet](https://github.com/tmlittau/character-sheet)

Feel free to explore the repository for more details on the implementation and to contribute to the project if you're interested!`,tn=`# Game Engine (C++)

## Introduction
My most recent challenge I started in 2024 is the development of my own 3D Game Engine. 

## (WIP)
Since the Engine is quite early in development, there is not much to show yet, so please check in later for an updated description of my experience on this journey.`,an=`# Flyfe Game

## Overview

Flyfe is a game developed for the GameDev.tv Game Jam 2022. In this game, players take on the role of a small space fly living on an asteroid. The asteroid is not only moving towards a black hole but also has a limited lifespan. Players must explore the asteroid's four biomes and make strategic choices to develop new technologies and skills. The ultimate goal is to reach a technological level that allows the player to leave the asteroid and save themselves.

## Gameplay

The gameplay in Flyfe revolves around exploration, decision-making, and resource management. Players must navigate through the asteroid's biomes, encountering various challenges and obstacles along the way. They have a fixed period to develop their skills and technologies before their fly's lifespan ends. Each generation of flies offers the player the opportunity to choose a new skillset, adding depth and replayability to the game.

## Team and Credits

Flyfe was developed by a team of four game dev beginners. We would like to express our gratitude to our friend Alex for providing the awesome voiceover for the game. Additionally, we would like to thank our friend Kay for assisting us with testing the game.

## Conclusion

Flyfe is an exciting and challenging game that combines exploration, strategy, and resource management. With its unique concept and engaging gameplay, it offers players an immersive experience as they strive to save themselves from the impending doom of the asteroid. We hope you enjoy playing Flyfe and look forward to your feedback!
`,on=`# Image Labelling Tool for Neuropathological Image Analysis

## Introduction

The Image Labelling Tool is a software application developed for the Institute of Neuropathology at the University Medical Center Hamburg-Eppendorf (UKE). Its primary purpose is to assist in the analysis of brain tissue images from Alzheimer's patients.

## Features

### Protein Deposit Labelling

One of the key features of the tool is the ability to label protein deposits in brain tissue images. This allows researchers to identify and categorize different types of protein deposits, which is crucial for understanding the pathology of Alzheimer's disease.

### Region of Interest (ROI) Drawing

The tool also provides functionality to draw polygonal Regions of Interest (ROI) on the images. These ROIs can be used to quantify the spatial frequency of the different protein deposits, providing valuable insights into their distribution patterns.

## Benefits

### Standardized Analysis

The tool promotes standardized analysis by providing consistent labelling and ROI drawing methods. This ensures that different researchers working on the same dataset can achieve comparable results, enhancing the reliability and reproducibility of the analysis.

### Data Labelling

The main purpose of this tool was to provide a way to quickly label image data in order to feed supervised learning algorithms such as Convolutional Neural Networks.

## Conclusion

The Image Labelling Tool developed for the Institute of Neuropathology at the UKE is a powerful software application that streamlines the analysis of brain tissue images in Alzheimer's research. Its features and benefits contribute to more efficient and standardized analysis, ultimately advancing the ability to integrate machine learning algorithms into the image analysis.
`,sn=`# Project Description: IMU Analyzer

## Introduction
The purpose of my internship at the DFKI in Bremen was to research the possibility of predicting different types of surfaces a Robot is driving on by analyzing data obtained from an Inertial Measurement Unit (IMU). This Proof of Concept ultimately could lead to autonomous vehicles reacting to different weather conditions such as frozen or wet roads by simply comparing data from IMUs to different prediction models.

## Methodology
In this project, I utilized a set of LSTM (Long Short-Term Memory) models to predict IMU data of the different surfaces. LSTM models are a type of recurrent neural network that are well-suited for sequence prediction tasks. By training these models on labeled IMU data, I aimed to develop a reliable method for surface prediction.

## Tool Development
To support the data analysis, I built a tool using Python in combination with QT. This tool not only offered the possibility to analyze the IMU data but also generate synthetic data based on the obtained data. By generating synthetic data, I aimed to increase the amount of training data available for the LSTM models, thereby improving their accuracy and performance.

The tool also provided different movement sequences which were sent to the Turtle Bot using the Robot Operating System (ROS).

## Conclusion
Through this project, I aimed to demonstrate the feasibility of predicting different surfaces using IMU data and LSTM models. By successfully developing a tool for data analysis and synthetic data generation, I contributed to the advancement of autonomous vehicle technology and the potential for improved safety on the roads.
`,rn=`To finish a course in Computer Graphics I had to show a PBR textured object. In order to do that I built a model viewer in C++ using OpenGL to show different attributes of the model such as diffuse, metalness, specular and ambient occlusion texture. 
# University Project in Computer Graphics

## Introduction
For my Master's degree at Uppsala University, I completed a university project in the field of Computer Graphics. The project focused on developing a model viewer using C++ and OpenGL.

## Objective
The main objective of the project was to showcase my understanding of Computer Graphics concepts and techniques, specifically in the area of physically-based rendering (PBR). 

## Implementation
I implemented a model viewer application that allowed users to load and interact with 3D models. The application utilized OpenGL for rendering and supported various PBR attributes such as diffuse, metalness, specular, and ambient occlusion textures.

## Features
The model viewer application included the following features:
- Loading and rendering of 3D models
- Real-time manipulation of camera position and orientation
- Support for different PBR attributes for realistic rendering
- Interactive controls for adjusting material properties

## Conclusion
Through this university project, I gained valuable hands-on experience in implementing Computer Graphics concepts and techniques. The model viewer application served as a practical demonstration of my knowledge and skills in the field of Computer Graphics.

`,ln=`# Bayesian Neural Network for BESIII Spectrometer Data Analysis

## Introduction
I developed a Bayesian Neural Network (BNN) for the Institute of Nuclear Physics to analyze data from the BESIII Spectrometer in China. The BNN is a powerful machine learning model that combines the flexibility of neural networks with the ability to quantify uncertainty.

## Data Analysis
The BNN was trained on a large dataset of experimental data collected by the BESIII Spectrometer. It was designed to predict various properties and characteristics of particle collisions based on input features such as energy, momentum, and particle type.

## Probabilistic Predictions
One of the key advantages of the BNN is its ability to provide probabilistic predictions. Unlike traditional neural networks that output a single value, the BNN outputs a probability distribution over possible outcomes. This allows for a more comprehensive analysis of the data and enables the quantification of uncertainty in the predictions.

## Validation and Performance
The BNN has been extensively validated and tested using cross-validation techniques. It has demonstrated excellent performance in accurately predicting various properties of particle collisions, providing valuable insights into the behavior of particles in the BESIII Spectrometer.

## Conclusion
Overall, the Bayesian Neural Network I built for the Institute of Nuclear Physics has proven to be a valuable tool for analyzing data from the BESIII Spectrometer, contributing to our understanding of particle physics and the behavior of particles in high-energy collisions.
`,cn=[{slug:"character-sheet",color:"green",description:nn,shortDescription:"Character Sheet developed in Python using Django.",links:[{to:"https://github.com/tmlittau/character-sheet",label:"GitHub"}],logo:d.DSTL,name:"Character Sheet",period:{from:new Date(2022,9,1),to:new Date(2023,0,1)},skills:P("python","django","sql","svelte","javascript","css","html"),type:"Web based Character Sheet for Pen and Paper Games",screenshots:[{label:"Character Creator when first logging in",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/cs_project/charcreator_demo.jpg?raw=true"},{label:"Character Sheet with all the information",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/cs_project/charactersheet_demo.jpg?raw=true"}]},{slug:"accounting-tool",color:"green",description:en,shortDescription:"Accounting Tool developed in Python using Django.",links:[{to:"https://github.com/tmlittau/accounting_backend",label:"GitHub Backend"},{to:"https://github.com/tmlittau/accounting_frontend",label:"GitHub Frontend"}],logo:d.DSTL,name:"Accounting Tool",period:{from:new Date(2022,9,1),to:new Date(2023,0,1)},skills:P("python","django","sql","postgres","docker","redis"),type:"Web based Accounting Tool for a small business",screenshots:[{label:"Tax Form to calculate yearly taxes",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/at_project/eur_demo.jpg?raw=true"},{label:"VAT Declaration Form to calculate quarterly/monthly VAT",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/at_project/ustva_demo.jpg?raw=true"},{label:"Support for different Users",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/at_project/user_management.jpg?raw=true"},{label:"New Invoice Entry",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/at_project/new_invoice.jpg?raw=true"},{label:"New Customer Entry",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/at_project/new_customer_entry.jpg?raw=true"}]},{slug:"game-engine",color:"blue",description:tn,shortDescription:"Game Engine developed in C++ using OpenGL.",links:[],logo:d.Unknown,name:"Game Engine",period:{from:new Date(2024,0,1)},skills:P("cpp","opengl"),type:"Game Engine"},{slug:"game-jam-2022",color:"green",description:an,shortDescription:"GameDev.tv GameJam 2022",links:[{to:"https://physikar.itch.io/flyfe",label:"itch.io"},{to:"https://www.youtube.com/watch?v=AKiOL-J0yak",label:"YouTube"}],logo:d.GameDevTV,name:"GameDev.tv Game Jam 2022",period:{from:new Date(2022,4,20),to:new Date(2022,4,31)},skills:P("cpp","unreal","blender"),type:"Game Development",screenshots:[{label:"Main Menu",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/flyfe_project/0.png?raw=true"},{label:"Obstacles to limit progression",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/flyfe_project/1.png?raw=true"},{label:'Player Base with "nesting grounds"',src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/flyfe_project/2.png?raw=true"},{label:"Ore to collect and build with",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/flyfe_project/3.png?raw=true"},{label:"Fiber plants to collect and build with",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/flyfe_project/4.png?raw=true"}]},{slug:"image-labelling-tool",color:"blue",description:on,shortDescription:"Image Labelling Tool developed in Golang using Electron for the GUI.",links:[],logo:d.UKE,name:"Image Labelling Tool",period:{from:new Date(2021,9,1),to:new Date(2022,8,1)},skills:P("golang","electron","typescript","css","html"),type:"Data Analysis Tool for Labelling Images",screenshots:[{label:"Example of the GUI",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/lt_project/roi_labelling.jpg?raw=true"}]},{slug:"imu-analyzer",color:"blue",description:sn,shortDescription:"IMU Analyzer developed in Python using PyQT.",links:[{to:"https://github.com/tmlittau/legacy_portfolio",label:"GitHub"}],logo:d.DFKI,name:"IMU Analyzer",period:{from:new Date(2019,1,1),to:new Date(2019,4,1)},skills:P("python","qt","ros"),type:"Analysis Tool for IMU Data",screenshots:[{label:"Example of the GUI",src:"https://raw.githubusercontent.com/tmlittau/legacy_portfolio/main/IMU_Analyzer/IMU_Analyzer.png"}]},{slug:"bayesian-neural-network",color:"red",description:ln,shortDescription:"Bayesian Neural Network developed in Python using PyTorch.",links:[{to:"https://github.com/tmlittau/legacy_portfolio",label:"GitHub"}],logo:d.Uppsala,name:"Bayesian Neural Network",period:{from:new Date(2018,10,1),to:new Date(2019,0,5)},skills:P("python","tensorflow","root"),type:"Data Analysis Script",screenshots:[{label:"Project Poster",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/bnn_project/Project09_poster.pdf?raw=true"}]},{slug:"model-viewer",color:"#ff3e00",description:rn,shortDescription:"Model Viewer developed in C++ using OpenGL.",links:[{to:"https://github.com/tmlittau/legacy_portfolio",label:"GitHub"}],logo:d.Uppsala,name:"Model Viewer",period:{from:new Date(2018,0,15),to:new Date(2018,5,1)},skills:P("cpp","opengl"),type:"Computer Graphics Demo Project",screenshots:[{label:"Example of the Model Viewer",src:"https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/mv_project/model_viewer_demo.jpg?raw=true"}]}];var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},se={},dn={get exports(){return se},set exports(e){se=e}};(function(e,v){(function(w,m){e.exports=m()})(he,function(){var w=1e3,m=6e4,k=36e5,D="millisecond",C="second",$="minute",U="hour",A="day",F="week",z="month",N="quarter",j="year",E="date",B="Invalid Date",Z=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ae={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var i=["th","st","nd","rd"],t=s%100;return"["+s+(i[(t-20)%10]||i[t]||i[0])+"]"}},H=function(s,i,t){var r=String(s);return!r||r.length>=i?s:""+Array(i+1-r.length).join(t)+s},ee={s:H,z:function(s){var i=-s.utcOffset(),t=Math.abs(i),r=Math.floor(t/60),a=t%60;return(i<=0?"+":"-")+H(r,2,"0")+":"+H(a,2,"0")},m:function s(i,t){if(i.date()<t.date())return-s(t,i);var r=12*(t.year()-i.year())+(t.month()-i.month()),a=i.clone().add(r,z),u=t-a<0,p=i.clone().add(r+(u?-1:1),z);return+(-(r+(t-a)/(u?a-p:p-a))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:z,y:j,w:F,d:A,D:E,h:U,m:$,s:C,ms:D,Q:N}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},_="en",g={};g[_]=ae;var l="$isDayjsObject",o=function(s){return s instanceof T||!(!s||!s[l])},f=function s(i,t,r){var a;if(!i)return _;if(typeof i=="string"){var u=i.toLowerCase();g[u]&&(a=u),t&&(g[u]=t,a=u);var p=i.split("-");if(!a&&p.length>1)return s(p[0])}else{var b=i.name;g[b]=i,a=b}return!r&&a&&(_=a),a||!r&&_},h=function(s,i){if(o(s))return s.clone();var t=typeof i=="object"?i:{};return t.date=s,t.args=arguments,new T(t)},c=ee;c.l=f,c.i=o,c.w=function(s,i){return h(s,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var T=function(){function s(t){this.$L=f(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[l]=!0}var i=s.prototype;return i.parse=function(t){this.$d=function(r){var a=r.date,u=r.utc;if(a===null)return new Date(NaN);if(c.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var p=a.match(Z);if(p){var b=p[2]-1||0,S=(p[7]||"0").substring(0,3);return u?new Date(Date.UTC(p[1],b,p[3]||1,p[4]||0,p[5]||0,p[6]||0,S)):new Date(p[1],b,p[3]||1,p[4]||0,p[5]||0,p[6]||0,S)}}return new Date(a)}(t),this.init()},i.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},i.$utils=function(){return c},i.isValid=function(){return this.$d.toString()!==B},i.isSame=function(t,r){var a=h(t);return this.startOf(r)<=a&&a<=this.endOf(r)},i.isAfter=function(t,r){return h(t)<this.startOf(r)},i.isBefore=function(t,r){return this.endOf(r)<h(t)},i.$g=function(t,r,a){return c.u(t)?this[r]:this.set(a,t)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(t,r){var a=this,u=!!c.u(r)||r,p=c.p(t),b=function(q,x){var J=c.w(a.$u?Date.UTC(a.$y,x,q):new Date(a.$y,x,q),a);return u?J:J.endOf(A)},S=function(q,x){return c.w(a.toDate()[q].apply(a.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(x)),a)},I=this.$W,L=this.$M,O=this.$D,V="set"+(this.$u?"UTC":"");switch(p){case j:return u?b(1,0):b(31,11);case z:return u?b(1,L):b(0,L+1);case F:var Q=this.$locale().weekStart||0,Y=(I<Q?I+7:I)-Q;return b(u?O-Y:O+(6-Y),L);case A:case E:return S(V+"Hours",0);case U:return S(V+"Minutes",1);case $:return S(V+"Seconds",2);case C:return S(V+"Milliseconds",3);default:return this.clone()}},i.endOf=function(t){return this.startOf(t,!1)},i.$set=function(t,r){var a,u=c.p(t),p="set"+(this.$u?"UTC":""),b=(a={},a[A]=p+"Date",a[E]=p+"Date",a[z]=p+"Month",a[j]=p+"FullYear",a[U]=p+"Hours",a[$]=p+"Minutes",a[C]=p+"Seconds",a[D]=p+"Milliseconds",a)[u],S=u===A?this.$D+(r-this.$W):r;if(u===z||u===j){var I=this.clone().set(E,1);I.$d[b](S),I.init(),this.$d=I.set(E,Math.min(this.$D,I.daysInMonth())).$d}else b&&this.$d[b](S);return this.init(),this},i.set=function(t,r){return this.clone().$set(t,r)},i.get=function(t){return this[c.p(t)]()},i.add=function(t,r){var a,u=this;t=Number(t);var p=c.p(r),b=function(L){var O=h(u);return c.w(O.date(O.date()+Math.round(L*t)),u)};if(p===z)return this.set(z,this.$M+t);if(p===j)return this.set(j,this.$y+t);if(p===A)return b(1);if(p===F)return b(7);var S=(a={},a[$]=m,a[U]=k,a[C]=w,a)[p]||1,I=this.$d.getTime()+t*S;return c.w(I,this)},i.subtract=function(t,r){return this.add(-1*t,r)},i.format=function(t){var r=this,a=this.$locale();if(!this.isValid())return a.invalidDate||B;var u=t||"YYYY-MM-DDTHH:mm:ssZ",p=c.z(this),b=this.$H,S=this.$m,I=this.$M,L=a.weekdays,O=a.months,V=a.meridiem,Q=function(x,J,K,ne){return x&&(x[J]||x(r,u))||K[J].slice(0,ne)},Y=function(x){return c.s(b%12||12,x,"0")},q=V||function(x,J,K){var ne=x<12?"AM":"PM";return K?ne.toLowerCase():ne};return u.replace(R,function(x,J){return J||function(K){switch(K){case"YY":return String(r.$y).slice(-2);case"YYYY":return c.s(r.$y,4,"0");case"M":return I+1;case"MM":return c.s(I+1,2,"0");case"MMM":return Q(a.monthsShort,I,O,3);case"MMMM":return Q(O,I);case"D":return r.$D;case"DD":return c.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return Q(a.weekdaysMin,r.$W,L,2);case"ddd":return Q(a.weekdaysShort,r.$W,L,3);case"dddd":return L[r.$W];case"H":return String(b);case"HH":return c.s(b,2,"0");case"h":return Y(1);case"hh":return Y(2);case"a":return q(b,S,!0);case"A":return q(b,S,!1);case"m":return String(S);case"mm":return c.s(S,2,"0");case"s":return String(r.$s);case"ss":return c.s(r.$s,2,"0");case"SSS":return c.s(r.$ms,3,"0");case"Z":return p}return null}(x)||p.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(t,r,a){var u,p=this,b=c.p(r),S=h(t),I=(S.utcOffset()-this.utcOffset())*m,L=this-S,O=function(){return c.m(p,S)};switch(b){case j:u=O()/12;break;case z:u=O();break;case N:u=O()/3;break;case F:u=(L-I)/6048e5;break;case A:u=(L-I)/864e5;break;case U:u=L/k;break;case $:u=L/m;break;case C:u=L/w;break;default:u=L}return a?u:c.a(u)},i.daysInMonth=function(){return this.endOf(z).$D},i.$locale=function(){return g[this.$L]},i.locale=function(t,r){if(!t)return this.$L;var a=this.clone(),u=f(t,r,!0);return u&&(a.$L=u),a},i.clone=function(){return c.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},s}(),M=T.prototype;return h.prototype=M,[["$ms",D],["$s",C],["$m",$],["$H",U],["$W",A],["$M",z],["$y",j],["$D",E]].forEach(function(s){M[s[1]]=function(i){return this.$g(i,s[0],s[1])}}),h.extend=function(s,i){return s.$i||(s(i,T,h),s.$i=!0),h},h.locale=f,h.isDayjs=o,h.unix=function(s){return h(1e3*s)},h.en=g[_],h.Ls=g,h.p={},h})})(dn);const te=se;var re={},un={get exports(){return re},set exports(e){re=e}};(function(e,v){(function(w,m){e.exports=m()})(he,function(){var w,m,k=1e3,D=6e4,C=36e5,$=864e5,U=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A=31536e6,F=2628e6,z=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,N={years:A,months:F,days:$,hours:C,minutes:D,seconds:k,milliseconds:1,weeks:6048e5},j=function(g){return g instanceof ee},E=function(g,l,o){return new ee(g,o,l.$l)},B=function(g){return m.p(g)+"s"},Z=function(g){return g<0},R=function(g){return Z(g)?Math.ceil(g):Math.floor(g)},ae=function(g){return Math.abs(g)},H=function(g,l){return g?Z(g)?{negative:!0,format:""+ae(g)+l}:{negative:!1,format:""+g+l}:{negative:!1,format:""}},ee=function(){function g(o,f,h){var c=this;if(this.$d={},this.$l=h,o===void 0&&(this.$ms=0,this.parseFromMilliseconds()),f)return E(o*N[B(f)],this);if(typeof o=="number")return this.$ms=o,this.parseFromMilliseconds(),this;if(typeof o=="object")return Object.keys(o).forEach(function(s){c.$d[B(s)]=o[s]}),this.calMilliseconds(),this;if(typeof o=="string"){var T=o.match(z);if(T){var M=T.slice(2).map(function(s){return s!=null?Number(s):0});return this.$d.years=M[0],this.$d.months=M[1],this.$d.weeks=M[2],this.$d.days=M[3],this.$d.hours=M[4],this.$d.minutes=M[5],this.$d.seconds=M[6],this.calMilliseconds(),this}}return this}var l=g.prototype;return l.calMilliseconds=function(){var o=this;this.$ms=Object.keys(this.$d).reduce(function(f,h){return f+(o.$d[h]||0)*N[h]},0)},l.parseFromMilliseconds=function(){var o=this.$ms;this.$d.years=R(o/A),o%=A,this.$d.months=R(o/F),o%=F,this.$d.days=R(o/$),o%=$,this.$d.hours=R(o/C),o%=C,this.$d.minutes=R(o/D),o%=D,this.$d.seconds=R(o/k),o%=k,this.$d.milliseconds=o},l.toISOString=function(){var o=H(this.$d.years,"Y"),f=H(this.$d.months,"M"),h=+this.$d.days||0;this.$d.weeks&&(h+=7*this.$d.weeks);var c=H(h,"D"),T=H(this.$d.hours,"H"),M=H(this.$d.minutes,"M"),s=this.$d.seconds||0;this.$d.milliseconds&&(s+=this.$d.milliseconds/1e3,s=Math.round(1e3*s)/1e3);var i=H(s,"S"),t=o.negative||f.negative||c.negative||T.negative||M.negative||i.negative,r=T.format||M.format||i.format?"T":"",a=(t?"-":"")+"P"+o.format+f.format+c.format+r+T.format+M.format+i.format;return a==="P"||a==="-P"?"P0D":a},l.toJSON=function(){return this.toISOString()},l.format=function(o){var f=o||"YYYY-MM-DDTHH:mm:ss",h={Y:this.$d.years,YY:m.s(this.$d.years,2,"0"),YYYY:m.s(this.$d.years,4,"0"),M:this.$d.months,MM:m.s(this.$d.months,2,"0"),D:this.$d.days,DD:m.s(this.$d.days,2,"0"),H:this.$d.hours,HH:m.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:m.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:m.s(this.$d.seconds,2,"0"),SSS:m.s(this.$d.milliseconds,3,"0")};return f.replace(U,function(c,T){return T||String(h[c])})},l.as=function(o){return this.$ms/N[B(o)]},l.get=function(o){var f=this.$ms,h=B(o);return h==="milliseconds"?f%=1e3:f=h==="weeks"?R(f/N[h]):this.$d[h],f||0},l.add=function(o,f,h){var c;return c=f?o*N[B(f)]:j(o)?o.$ms:E(o,this).$ms,E(this.$ms+c*(h?-1:1),this)},l.subtract=function(o,f){return this.add(o,f,!0)},l.locale=function(o){var f=this.clone();return f.$l=o,f},l.clone=function(){return E(this.$ms,this)},l.humanize=function(o){return w().add(this.$ms,"ms").locale(this.$l).fromNow(!o)},l.valueOf=function(){return this.asMilliseconds()},l.milliseconds=function(){return this.get("milliseconds")},l.asMilliseconds=function(){return this.as("milliseconds")},l.seconds=function(){return this.get("seconds")},l.asSeconds=function(){return this.as("seconds")},l.minutes=function(){return this.get("minutes")},l.asMinutes=function(){return this.as("minutes")},l.hours=function(){return this.get("hours")},l.asHours=function(){return this.as("hours")},l.days=function(){return this.get("days")},l.asDays=function(){return this.as("days")},l.weeks=function(){return this.get("weeks")},l.asWeeks=function(){return this.as("weeks")},l.months=function(){return this.get("months")},l.asMonths=function(){return this.as("months")},l.years=function(){return this.get("years")},l.asYears=function(){return this.as("years")},g}(),_=function(g,l,o){return g.add(l.years()*o,"y").add(l.months()*o,"M").add(l.days()*o,"d").add(l.hours()*o,"h").add(l.minutes()*o,"m").add(l.seconds()*o,"s").add(l.milliseconds()*o,"ms")};return function(g,l,o){w=o,m=o().$utils(),o.duration=function(c,T){var M=o.locale();return E(c,{$l:M},T)},o.isDuration=j;var f=l.prototype.add,h=l.prototype.subtract;l.prototype.add=function(c,T){return j(c)?_(this,c,1):f.bind(this)(c,T)},l.prototype.subtract=function(c,T){return j(c)?_(this,c,-1):h.bind(this)(c,T)}}})})(un);const pn=re;te.extend(pn);const fn=(e,v=new Date)=>{let w=0,m=0,k=0;return v.getFullYear()!==e.getFullYear()?(k=v.getMonth(),m=(v.getFullYear()-e.getFullYear()-1)*12,w=12-e.getMonth()):w=v.getMonth()-e.getMonth(),w+m+k+1},yn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],vn=(e,v)=>`${e} | ${v}`;function bn(e,v=new Date(Date.now()+1e3*60*60*24)){const w=te(e),m=te(v),k=te.duration(m.diff(w));let D=0,C="day";return k.as("days")<=7?(C="day",D=k.as("days")):k.as("months")<=1?(C="week",D=k.as("weeks")):k.as("years")<=1?(C="month",D=k.as("months")):(C="year",D=k.as("years")),D=Math.trunc(D),`${Math.trunc(D)} ${C}${D>1?"s":""}`}function wn(e,v){const w=["logo","links","color","screenshots"];return v=v.toLowerCase(),e.filter(m=>le(m,v,w))}function le(e,v,w=[]){return Array.isArray(e)?e.some(m=>le(m,v)):typeof e=="object"&&e!==null?e instanceof Date?[e.toString().toLowerCase(),e.toLocaleDateString("default",{month:"long",year:"numeric"}).toLowerCase(),e.toLocaleDateString("default",{day:"numeric",month:"long",year:"numeric"}).toLowerCase(),e.toLocaleDateString("en-US").toLowerCase(),e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}).toLowerCase()].some(k=>k.includes(v)):Object.keys(e).some(m=>!w.includes(m)&&le(e[m],v)):e.toString().toLowerCase().includes(v)}var X=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(X||{});const Sn="Tim Littau Portfolio",kn={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills",Education:"Education"},Tn=e=>{switch(e){case G.GitHub:return X.GitHub;case G.Linkedin:return X.LinkedIn;case G.Email:return X.Email;case G.Freelancermap:return X.Job}},In={title:"Home",name:"Tim",lastName:"LITTAU",description:"Data Scientist by education, Software Developer by nature.",links:[{platform:G.GitHub,link:"https://github.com/tmlittau"},{platform:G.Linkedin,link:"https://www.linkedin.com/in/tim-littau-a63510251/"},{platform:G.Email,link:"projects@tmlittau.com"},{platform:G.Freelancermap,link:"https://www.freelancermap.de/profil/tim-littau"}]},Dn={title:"Projects",items:cn},Cn={title:"Experiences",items:Ze},Mn={title:"Skills",items:pe},Ln={title:"Resumé",item:"cv_littau.pdf"},xn={title:"Search"},Pn={items:ye,title:"Education"};export{Pn as E,In as H,X as I,pe as M,kn as N,Dn as P,Ln as R,xn as S,Sn as T,ie as a,Tn as b,bn as c,yn as d,Cn as e,Ze as f,gn as g,he as h,fn as i,cn as j,wn as k,Mn as l,mn as o,de as t,vn as u};