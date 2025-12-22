# GEMINI.md

## Project Overview

This is a modern, single-page landing page for a product or service named "Lumeo". The frontend is built using **React** and **Vite**, with a strong emphasis on a visually rich and interactive user experience. It heavily utilizes 3D graphics and animations, leveraging **Three.js** and `@react-three/fiber`. The styling is handled by **Tailwind CSS**.

The application structure is component-based, with clear separation of concerns. Routing is managed by **React Router DOM**, currently defining a home page and a privacy policy page.

### Key Technologies

*   **Framework:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **3D Rendering:** [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router DOM](https://reactrouter.com/en/main)
*   **Animation:** [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)

## Building and Running the Project

The project uses `npm` as the package manager. The following scripts are defined in `package.json`:

*   **To install dependencies:**
    ```bash
    npm install
    ```

*   **To run the development server:**
    ```bash
    npm run dev
    ```
    This will start a local development server, typically at `http://localhost:5173`.

*   **To build for production:**
    ```bash
    npm run build
    ```
    This command bundles the application into the `dist` directory for deployment.

*   **To preview the production build:**
    ```bash
    npm run preview
    ```
    This command starts a local server to preview the production-ready build.

*   **To run the linter:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Component-Based Architecture:** The project is structured around reusable React components located in `src/components`. Larger page-level components are in `src/pages`.
*   **Styling:** Utility-first CSS is implemented with Tailwind CSS.
*   **3D Models:** 3D models (like the `.glb` file) are managed within the `public/models` and integrated into the application via React components (e.g., `src/components/models/Model2.jsx`).
*   **ESLint:** The project uses ESLint for code quality and consistency. The configuration is in `eslint.config.js`. It's recommended to run `npm run lint` before committing changes.
