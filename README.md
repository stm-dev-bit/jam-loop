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

### Login
There are two users that can use to login
- john@gmail.com : 123
- doe@gmail.com : 456

## Available Scripts

- `yarn dev`: Starts the development server with hot-reloading enabled.
- `yarn build`: Compiles the application into an optimized production build.
- `yarn start`: Runs the production build of the application.
- `yarn lint`: Lints the codebase using ESLint to enforce coding standards.

## Suggestions for Improvement

### Implement Middleware for Authentication
 We can add Next.js middleware to better protect routes by ensuring only authenticated users can access certain pages.
- Next.js Middleware: Implement middleware in Next.js to check for an authentication token or session before allowing access to specific routes. This can be done by intercepting requests and validating the user's credentials.
- Redirects: If the user is not authenticated, the middleware can redirect them to a login page or an appropriate error page.
- Security: This ensures that sensitive pages, such as those for managing campaigns, are only accessible to authorized users.
Provide more informative and user-friendly error messages.
### Enhance Error Handling
- UI Notifications: Implement a global error handling mechanism that catches errors from API calls and displays appropriate error messages to the user. For example, if an API call fails due to network issues, the user should see a message like "Network error, please try again later."
- Graceful Degradation: Ensure that the application fails gracefully, providing the user with alternative actions or retry options.
- Logging: Add error logging for developers, which can include sending error details to a logging service or displaying them in the console during development.
  
### Implement Unit Tests
Ensure that the application's components and logic behave as expected.

- Testing Library: Use a testing library like Jest along with React Testing Library to write unit tests for your components and hooks.
- Coverage: Focus on critical parts of the application such as the authentication flow, campaign creation/updating forms, and any custom hooks.
- Continuous Integration: Integrate unit tests into your CI/CD pipeline so that tests are automatically run whenever new code is pushed.
### Enhance Security Practices
Strengthen the application’s security to better protect user data.
- JWT Authentication: Upgrade the authentication method to use JWT (JSON Web Tokens). JWTs can be stored in HTTP-only cookies, which helps prevent XSS (Cross-Site Scripting) attacks.
- Token Expiration: Implement token expiration and refresh tokens to enhance security.
- HTTPS: Ensure that the application is always served over HTTPS to encrypt data in transit.
### Improve UI/UX Design
Make the user interface more visually appealing and easier to use.
- Design System: Consider implementing a design system or adopting a UI framework like Material-UI to ensure consistency across the application.
- Responsiveness: Enhance the responsiveness of the design so that it works well on various screen sizes, including mobile devices.
- Accessibility: Ensure that the application is accessible to all users, including those with disabilities. This includes using proper ARIA attributes, ensuring sufficient color contrast, and enabling keyboard navigation.
- User Feedback: Implement subtle animations, tooltips, and real-time validation to improve the user experience when interacting with forms and other interactive elements.
- Improved Input Components: For fields such as "Target Geo", "Inventory/Publishers", and "Screens/Devices", instead of using simple text inputs, consider using dropdown selects or multi-select components.
- Dropdown and Multi-Select Components: These components enhance the user experience by reducing input errors, guiding the user with predefined options, and making the form more interactive and user-friendly.

