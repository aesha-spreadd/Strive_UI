# storybook_components

Creating a component library like "storybook_components" with predefined responsive components involves several steps. Below is a basic guide on how you can structure your project using React, webpack, babel, eslint, and Storybook.

### Step 1: Project Setup

npx create-react-app storybook_components

### Step 2: Install Dependencies

```bash
npm install --save react react-dom
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server eslint eslint-loader style-loader css-loader
npm install --save-dev @storybook/react @storybook/addon-actions @storybook/addon-links
```

### Step 3: Configure Babel and ESLint

### Step 5: Webpack Configuration

### Step 6: Create Components

Create your predefined components inside the `src/components` directory.

### Step 7: Create Storybook Config

Create a `.storybook` directory in the root and add a `main.js` file:
module.exports = {
stories: ['../src/**/*.stories.js'],
addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};

### Step 8: Create Stories

Create `.stories.js` files for each component inside the `src/components` directory.

### Step 9: Start Storybook

you can run `npm run storybook` to start the Storybook development server.

### Step 10: Build the Library

Add a build script to your `package.json`:
"scripts": {
"build": "webpack --mode production"
}
Now, you can run `npm run build` to build your component library.
