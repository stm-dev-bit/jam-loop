# JAM LOOP

JAM LOOP is a [React](https://reactjs.org/) and [Next.js](https://nextjs.org/) application integrated with the CRUD API from [crudcrud.com](https://crudcrud.com/). It allows users to create, read, update, and delete campaigns. The application also includes basic authentication using local storage.

## Getting Started

### Install dependencies

First, install the project dependencies:

```bash
yarn install
```

Next, set up the environment variables:

Create a .env file in the root directory and add the following:
```.env
NEXT_PUBLIC_API_URL=https://crudcrud.com/api/14d153c073fd46899a800705e3f78c0b
```

Finally, run the development server:

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

### Available Scripts

- `yarn dev`: Starts the development server with hot-reloading enabled.
- `yarn build`: Compiles the application into an optimized production build.
- `yarn start`: Runs the production build of the application.
- `yarn lint`: Lints the codebase using ESLint to enforce coding standards.

## Suggestions for Improvement

- Implement Middleware for Authentication: We can add Next.js middleware to better protect routes by ensuring only authenticated users can access certain pages.
- Enhance Error Handling: Improve error messages on the UI for a better user experience.
- Implement Unit Tests: Add unit tests to ensure components and logic function correctly.
- Enhance Security Practices: Upgrade authentication to use JWT with HTTP-only cookies for improved security.
- Improve UI/UX Design: Focus on refining the user interface and making it more responsive and visually consistent.
