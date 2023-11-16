# Dating App Project

Welcome to the Dating App project repository! This application is a full-stack dating app developed using the latest technologies and frameworks, including .NET 7, ASP.NET Core, Entity Framework, Angular 14, Bootstrap 5, and SQLite.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This dating app project is based on the teachings of Neil Cummings from the Udemy course, providing a hands-on learning experience for building a modern and responsive dating application. The app includes user authentication using Jwt Bearer, a sophisticated backend with .NET 7 and ASP.NET Core, and a dynamic frontend developed with Angular 14 and Bootstrap 5. The SQLite database is used as a temporary storage solution.

## Features

- User registration and authentication
- Profile creation and customization
- Matching algorithm for suggesting potential matches
- Real-time chat functionality
- Responsive and user-friendly interface

## Technology Stack

- **Backend:**
  - .NET 7
  - ASP.NET Core
  - Entity Framework
  - Jwt Bearer Authentication
  - SQLite (momentarily)

- **Frontend:**
  - Angular 14
  - Bootstrap 5

## Getting Started

To get started with the project, make sure you have the following prerequisites installed:

- [.NET 7 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)
- [Visual Studio Code](https://code.visualstudio.com/) or any preferred IDE

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/dating-app.git
```

2. Navigate to the backend and frontend directories and install dependencies:

```bash
cd API
dotnet restore

cd ../client
npm install
```

3. Update database schema:

```bash
cd ../API
dotnet ef database update
```

## Usage

1. Run the backend server:

```bash
cd API
dotnet run
```

2. Run the frontend application:

```bash
cd client
ng serve
```

Visit `http://localhost:4200` in your web browser to access the dating app.

## Contributing

If you would like to contribute to the project, please check the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
