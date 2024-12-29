# JSBook

JSBook is an interactive and versatile platform that allows developers to:

- Store notes for personal or collaborative use.
- Write and execute React code with live output rendering on the side.
- Experiment with new packages and create dynamic documentation.

The project uses a monorepo setup powered by **Lerna** and incorporates various powerful packages and tools.

---

## Features

### 1. **Real-Time React Code Execution**
Write React code in an editor and instantly see the output rendered on the right side. Perfect for prototyping components, testing libraries, or teaching React concepts.

### 2. **Note Storage**
Store and organize notes alongside your code. Ideal for creating detailed documentation or brainstorming ideas.

### 3. **Interactive Documentation**
Use the platform to create interactive documentation for projects, allowing others to explore and experiment with your code examples.

---

## Technologies Used

### Core Packages
- **[esbuild-wasm](https://github.com/evanw/esbuild)**: For super-fast bundling and code execution.
- **[jscodeshift](https://github.com/facebook/jscodeshift)**: Enables seamless code transformations and manipulation.
- **[monaco-editor](https://microsoft.github.io/monaco-editor/)**: Provides a robust, feature-rich code editor interface.
- **[react-split](https://github.com/nathancahill/split)**: Enables resizable panes, enhancing the user interface for split-screen code and output views.
- **[prettier](https://prettier.io/)**: Ensures consistent and clean code formatting across the project.

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/jsbook.git
   cd jsbook
   ```

2. **Install Dependencies**
   Use Lerna to bootstrap the packages:
   ```bash
   npx lerna bootstrap
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

---

## Usage

### Writing Notes
- Use the left pane to create and manage your notes.

### Writing and Executing React Code
- Type your React code in the editor.
- Watch the live output update instantly on the right side.

### Resizing Panes
- Drag the divider between the editor and output pane to adjust their sizes. This functionality is powered by **react-split**.

---

## Contribution

We welcome contributions to make JSBook even better! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- **[Lerna](https://lerna.js.org/)** for managing the monorepo architecture.
- **[esbuild](https://esbuild.github.io/)** for its unparalleled speed in bundling and execution.
- **[monaco-editor](https://microsoft.github.io/monaco-editor/)** for the excellent code editor experience.
- **[react-split](https://github.com/nathancahill/split)** for seamless resizable panes.
- **[Prettier](https://prettier.io/)** for ensuring clean and readable code.

---

## Screenshots

![JSBook Editor](https://via.placeholder.com/800x400.png?text=JSBook+Editor)

*Example of the interactive editor and live preview.*
