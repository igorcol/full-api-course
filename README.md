# REST API Project

This project is a REST API built using Node.js, Express, and TypeScript. 

It was developed as part of a learning journey to deepen my understanding of REST APIs, TypeScript, and database integration.

 Through this project, I aimed to explore best practices in backend development, improve my TypeScript skills, and experiment with data validation and testing methodologies.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Yup**: JavaScript schema builder for value parsing and validation.
- **Jest**: A JavaScript testing framework focused on simplicity.

## Project Structure

```
📦 project-root
├── 📂 src
│   ├── 🟦 index.ts         # Setup server on the correct port
│   ├── 📂 server
│   │   ├── 🟦 index.ts     # Main server configuration and initialization
│   │   ├── 📂 controllers  # Handles API logic
│   │   ├── 📂 database     # (empty)
│   │   ├── 📂 routes       # Defines API endpoints
│   │   ├── 📂 shared       # Shared utilities and helper functions
├── 📂 tests                # Jest test files
```

## Getting Started

1. **Clone the repository**:
    ```sh
    git clone https://github.com/igorcol/full-api-course.git
    cd full-api-course
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    npm start
    ```

4. **Run tests**:
    ```sh
    npm test 
    ```

## License

This project is licensed under the MIT License.
