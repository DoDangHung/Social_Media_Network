<!-- @format -->

# Social Media Platform

A modern social media platform allowing users to create posts, interact through comments, and express reactions. Built with React for the frontend and Express.js for the backend.

## Features

- User authentication and authorization
- Create and manage posts
- Comment system
- Reaction system (emotions/likes)
- Rich text editor with emoji support
- File upload capabilities
- Interactive charts and analytics
- Responsive design

## Technology Stack

### Frontend

- **React (v18.3.1)**: Core framework for building the user interface
- **Material UI (v6.2.0)**: Component library for modern UI design
- **React Router (v7.0.2)**: For handling client-side routing
- **Chart.js/React-Chartjs-2**: Data visualization components
- **React-Quill**: Rich text editor with emoji support
- **Axios**: HTTP client for API requests
- **Bootstrap/React-Bootstrap**: Additional styling and components
- **SASS**: Advanced styling and theming
- **JWT-Decode**: Token handling for authentication

### Backend

- **Express.js**: Web application framework
- **MySQL2**: Database management
- **Sequelize**: ORM for database operations
- **JWT**: Authentication and authorization
- **Bcrypt**: Password hashing
- **Multer**: File upload handling
- **Joi**: Data validation
- **Cors**: Cross-origin resource sharing
- **Dotenv**: Environment configuration

## Getting Started

### Prerequisites

- Node.js (v18.20.4)
- MySQL Database
- npm or yarn package manager

### Installation

1. Install frontend dependencies:

```bash
cd MonFilm
npm install
npm run dev
```

2. Install backend dependencies:

```bash
using node v18.20.4
cd MonFilm_Backend
npm install
cd src
Running Migrations: npx sequelize-cli db:migrate
npm start
```

3. Configure environment variables:
   Create `.env` file in backend directory with:

```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
JWT_SECRET=your_secret_key
```

4. Start the development servers:

Frontend:

```bash
cd MonFilm
npm run dev
```

Backend:

```bash
cd MonFilm_Backend
npm start
```

## API Endpoints

- `POST /api/auth/register`: User registration
- `GET /api/auth/get-all-users`: Get All User
- `POST /api/auth/login`: User authentication
- `GET /api/posts`: Fetch posts
- `POST /api/posts`: Create new post
- `POST /api/comments/posts/:postId/comments`: Add comment
- `POST /api/comment/:commentId`: Add reaction

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.Social Network Application
This is a simple social networking platform where users can share posts, comment on posts, and react to both posts and comments. The application features a user-friendly interface and supports common social networking functionalities.
