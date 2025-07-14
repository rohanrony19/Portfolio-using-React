# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Steps to build project:

Step 1: npm create vite@latest Portfolio -- --template react
Step 2: cd Portfolio
Step 3: npm install -D tailwindcss@3 postcss        autoprefixer
Step 4: npx tailwindcss init -p (add content part as in link->https://v3.tailwindcss.com/docs/guides/vite)
Step 5: Add index.css
Step 6: npm run dev
Step 7: https://fonts.google.com/selection/embed (add embed code inside index.html within head)
Step 8: npm install framer-motion (import it)
Step 9: npm install react-icons --save (https://react-icons.github.io/react-icons/) (import it)
Step 10: for background (https://bg.ibelick.com/)