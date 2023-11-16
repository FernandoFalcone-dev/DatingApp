# Dating App Project

Welcome to the Dating App project repository! This application is a comprehensive dating platform developed based on the insights from Neil Cummings' Udemy course. It offers a hands-on learning experience for building a modern and responsive dating application, incorporating a sophisticated tech stack.

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

The dating app is crafted using cutting-edge technologies and frameworks, showcasing the latest advancements in web and backend development. This project covers various aspects of a dating application.

## Features

- **User Authentication:** Secure registration and authentication process.
- **Profile Customization:** Personalize your profile to stand out.
- **Matching Algorithm:** Receive suggestions for potential matches.
- **Real-time Chat:** Connect with matches through a dynamic chat interface.
- **Responsive Interface:** Enjoy a seamless experience on any device.

## Technology Stack

- **Backend:**
  - **.NET 7:** The backend foundation for robust server-side development.
  - **ASP.NET Core:** A high-performance, open-source framework for building modern, cloud-based, and internet-connected applications.
  - **Entity Framework:** Simplifies database operations and interactions.
  - **Jwt Bearer Authentication:** Ensures secure and authenticated communication.
  - **SQLite:** A temporary database solution for efficient data storage.

- **Frontend:**
  - **Angular 14:** A powerful frontend framework for building dynamic and responsive web applications.
  - **Bootstrap 5:** The world's most popular front-end open-source toolkit for designing and customizing responsive and mobile-first sites.

## Getting Started

To get started with the project, make sure you have the following prerequisites installed:

- [.NET 7 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)
- [Visual Studio Code](https://code.visualstudio.com/) or any preferred IDE

## Installation

1. Clone the repository:

```bash
git clone https://github.com/FernandoFalcone-dev/DatingApp.git
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
