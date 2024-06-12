# RefactorMate - Your Code Refactoring Companion

RefactorMate is a code refactoring tool that harnesses the capabilities of the GPT-3.5-turbo model from OpenAI to streamline and enhance your coding experience. Whether you're a seasoned developer looking to optimize your code or a beginner learning the ropes, RefactorMate is here to make your coding journey smoother and more efficient.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies) 
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Demo Video](#demo-video)
- [Contributing](#contributing)

## This Project featured in the following Open-Source Programs
<br>
<img alt="GSSoC" src="https://raw.githubusercontent.com/GirlScriptSummerOfCode/MentorshipProgram/master/GSsoc%20Type%20Logo%20Black.png#gh-light-mode-only" width=87%>
<img alt="GSSoC" src="https://user-images.githubusercontent.com/63473496/213306279-338f7ce9-9a9f-4427-8c2a-3e344874498f.png#gh-dark-mode-only"/>

<img alt="CodePeak" src="https://github.com/harmeetsingh11/RefactorMate/assets/130365071/dff42135-655e-4387-b5a2-713d13b888c6" width=87%>


## Features

### 1. Code Refactoring Made Easy

RefactorMate simplifies the code refactoring process. Just input your code, and let the GPT-3.5-turbo model analyze and suggest improvements. The intelligent suggestions provided by the model aim to enhance readability, improve performance, and adhere to best coding practices.

### 2. Seamless Integration with ChatGPT

Our app seamlessly integrates with ChatGPT, providing an interactive and user-friendly interface. Communicate with ChatGPT to refine your refactoring preferences, ask questions about the suggested changes, or seek additional guidance on coding practices.

### 3. Language Agnostic

RefactorMate supports a wide range of programming languages. Whether you're coding in Python, JavaScript, Java, C++, or any other language, RefactorMate is designed to accommodate your needs.

### 4. Learn as You Refactor

RefactorMate is not just a tool; it's a learning companion. Gain insights into coding best practices, understand the rationale behind suggested changes, and enhance your coding skills with each refactoring session.


## Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) - Make sure to install a version that is compatible with the project.
- [Git](https://git-scm.com/) - Version control system.
- [pnpm](https://pnpm.io/) - Fast, disk efficient Node.js package manager.

#### Install `pnpm` using npm
```sh
npm install -g pnpm
```

After installation, verify the `pnpm` version to ensure it was installed correctly:
```sh
pnpm --version
```
  
## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)

## Dependencies

### Dependencies

- **@types/node**: ^20.14.2
  - Description: TypeScript definitions for Node.js.
- **cors**: ^2.8.5
  - Description: Middleware to enable CORS (Cross-Origin Resource Sharing) in your Express app.
- **dotenv**: ^16.4.5
  - Description: Loads environment variables from a .env file into process.env.
- **express**: ^4.19.2
  - Description: Fast, unopinionated, minimalist web framework for Node.js.
- **openai**: ^4.49.0
  - Description: OpenAI API client for interacting with the GPT model.
- **react**: ^18.3.1
  - Description: A JavaScript library for building user interfaces.
- **react-dom**: ^18.3.1
  - Description: React package for working with the DOM.
- **react-syntax-highlighter**: ^15.5.0
  - Description: Syntax highlighting component for React using `react-syntax-highlighter`.
- **ts-node**: ^10.9.2
  - Description: TypeScript execution environment and REPL for Node.js.

### Development Dependencies

- **@types/cors**: ^2.8.17
  - Description: TypeScript definitions for the `cors` package.
- **@types/express**: ^4.17.21
  - Description: TypeScript definitions for the `express` package.
- **@types/react**: ^18.3.3
  - Description: TypeScript definitions for React.
- **@types/react-dom**: ^18.3.0
  - Description: TypeScript definitions for React DOM.
- **@types/react-syntax-highlighter**: ^15.5.13
  - Description: TypeScript definitions for `react-syntax-highlighter`.
- **@typescript-eslint/eslint-plugin**: ^7.12.0
  - Description: ESLint plugin for TypeScript.
- **@typescript-eslint/parser**: ^7.12.0
  - Description: ESLint parser for TypeScript.
- **@vitejs/plugin-react**: ^4.3.0
  - Description: Vite plugin for React.
- **autoprefixer**: ^10.4.19
  - Description: PostCSS plugin to parse CSS and add vendor prefixes automatically.
- **eslint**: ^9.4.0
  - Description: A pluggable and configurable linter tool for identifying and fixing problems in JavaScript code.
- **eslint-plugin-react-hooks**: ^4.6.2
  - Description: ESLint plugin for React hooks.
- **eslint-plugin-react-refresh**: ^0.4.7
  - Description: ESLint plugin for React Refresh.
- **postcss**: ^8.4.38
  - Description: A tool for transforming styles with JavaScript plugins.
- **tailwindcss**: ^3.4.4
  - Description: A utility-first CSS framework.
- **typescript**: ^5.4.5
  - Description: A superset of JavaScript that compiles to clean JavaScript output.
- **vite**: ^5.2.13
  - Description: A blazing-fast build tool that scales to large projects.


## Installation

Follow these steps to get your project up and running locally:

### 1. Clone the Repository

Open your terminal and clone the project repository:

```bash
git clone https://github.com/harmeetsingh11/RefactorMate.git
```
### 2. Navigate to the Project Directory
Move to the Project directory:

```bash
cd .\RefactorMate\
```

### 3. Install Dependencies
Install the dependencies using `pnpm`:

```bash
pnpm install
```
### 4. Get OpenAI API Key

Get API Key [here](https://openai.com/product)

Configure API key in `.env` file 

```ts
VITE_OPENAI_API_KEY = <YOUR_OPENAI_API_KEY>
```

### 5. Run the Client (Frontend)
Start the frontend application:

```bash
pnpm run frontend
```
The client will be accessible at http://localhost:5173 by default.

### 6. Run the Server (Backend)
Start the backend:

```bash
pnpm run backend
```
The server will be running at `PORT:8000`

## Screenshots

![home](public/screenshots/home.png)
![benefits](public/screenshots/benefits.png)
![refactor](public/screenshots/Refactor.png)

## Demo video



https://github.com/harmeetsingh11/RefactorMate/assets/130365071/7166b29e-71d5-4ff9-9b45-92f5fd63c91d



## Contributing

>⚠️Before contributing to this project, be sure to read and adhere to the [Contributing Guidelines](https://github.com/harmeetsingh11/RefactorMate/blob/main/CONTRIBUTING.md).

Thank you for considering contributing to [RefactorMate](https://github.com/harmeetsingh11/RefactorMate). We welcome and appreciate contributions from the community! 

If you find a bug, have a feature request, or would like to contribute in any way, feel free to open an issue or submit a pull request. Whether you're fixing a typo or adding a new feature, your efforts are valued, and together we can make this project even better. Thank you for considering contributing to [RefactorMate](https://github.com/harmeetsingh11/RefactorMate)!
