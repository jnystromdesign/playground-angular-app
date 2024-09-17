# Angular Project with Test API

This project is an Angular application with a test API for getting and adding data. It uses Angular 18 and includes NgRx for state management.

## Project Structure

The project follows a standard Angular structure with additional folders for state management (NgRx) and a test server for API simulation.

- `src/app`: Contains the main application code
  - `core`: Core services
  - `shared`: Shared components and utilities
  - `state`: NgRx state management files
  - `user-form`: User form component
  - `user-list`: User list component
- `test-server`: Contains the test API server files

## Prerequisites

- Node.js (20 or later recommended)
- npm (v9 or later recommended)

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies

## Running the Application

1. Start the Angular development server:

   ```
   npm start
   ```

   The application will be available at `http://localhost:4200`.

2. Start the test API server:
   ```
   npm run test-server:api
   ```
   The test API will be available at `http://localhost:3000`.
   This command also watches for changes in the `test-server/index.js` file and automatically restarts the server when changes are detected.

## Available Scripts

- `npm start`: Start the Angular development server
- `npm run build`: Build the application for production
- `npm test`: Run unit tests
- `npm run test-server:api`: Start the test API server and watch for changes in `test-server/index.js`
- `npm run serve:ssr:playground-app`: Serve the server-side rendered application

## Features

- Angular 18 application
- NgRx for state management
- Test API server for data operations
- User list and user form components
- Hot-reloading test API server for rapid development

## API Endpoints

The test API server provides the following endpoints:

- `GET /users`: Retrieve all users
- `POST /users`: Add a new user

## Development

This project uses:

- Angular 18 for the frontend framework
- NgRx for state management
- RxJS for reactive programming
- Express.js for the test API server
- JSON Server for a full fake REST API
- Node's `--watch` flag for automatic server restarts during development

To add new features or modify existing ones, refer to the Angular and NgRx documentation for best practices. When working on the test API, any changes to `test-server/index.js` will automatically restart the server, allowing for rapid iteration and testing.

## Testing

Run `npm test` to execute the unit tests via Karma.

## Building for Production

Run `npm run build` to build the project for production. The build artifacts will be stored in the `dist/` directory.

## Further Help

To get more help on the Angular CLI, use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
