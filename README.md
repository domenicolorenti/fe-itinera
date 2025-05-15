# Itinera Frontend

![Itinera Home Page](public/Home-itinera.png)

Itinera is a composable application designed for searching and reviewing restaurants, bars, and other venues. This frontend application is built to interact with multiple backend services, providing a seamless user experience for venue discovery and reviews.

## 🚀 Features

- Search functionality for restaurants, bars, and other venues
- Review system for venues
- Responsive and modern user interface
- Integration with multiple backend services
- Real-time updates and interactions

## 🛠️ Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: 
  - Material-UI (MUI)
  - Tailwind CSS
  - Styled Components
- **Routing**: React Router DOM
- **Date Handling**: Day.js
- **Testing**: Jest, React Testing Library

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd fe-itinera
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn start
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

The project follows a modular architecture, with the frontend designed to communicate with multiple backend services based on the type of request. The main components are organized in the `src` directory.

## 🔄 Backend Integration

The frontend is designed to interact with 5 different backend services, each handling specific functionalities:
- Venue search and discovery
- User authentication and management
- Review and rating system
- Content management
- Analytics and reporting

## 🐳 Docker Support

The project includes a Dockerfile for containerization. To build and run the Docker container:

```bash
docker build -t itinera-frontend .
docker run -p 3000:3000 itinera-frontend
```

## 🧪 Testing

Run the test suite:
```bash
yarn test
```

## 📝 Scripts

- `yarn start`: Start the development server
- `yarn build`: Build the production version
- `yarn test`: Run tests
- `yarn eject`: Eject from Create React App

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Authors

- Domenico Lorenti

## 🙏 Acknowledgments

- Thanks to all contributors and mentors who helped in the development of this project
- Special thanks to the academic institution for supporting this thesis project
