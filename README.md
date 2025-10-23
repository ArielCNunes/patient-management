# Patient Management System

A full-stack web application for managing patient records with a React frontend and Spring Boot backend.

![Patient Management UI](https://github.com/user-attachments/assets/2d073f8f-f2b0-4d37-80fc-d4abd71603ad)

## Features

### Backend (Spring Boot)
- RESTful API for patient management (CRUD operations)
- H2 in-memory database for development
- PostgreSQL support for production
- Input validation and error handling
- CORS configuration for frontend integration
- Swagger/OpenAPI documentation
- Endpoints:
  - `GET /patients` - Get all patients
  - `GET /patients/{id}` - Get patient by ID
  - `POST /patients` - Create new patient
  - `PUT /patients/{id}` - Update patient
  - `DELETE /patients/{id}` - Delete patient

### Frontend (React + Vite)
- Modern React UI with hooks
- Patient list with table view
- Age calculation from date of birth
- Create new patient form with validation
- Edit existing patient
- Delete patient with confirmation
- Real-time search/filter by name, email, or address
- Responsive design
- Clean and intuitive user interface

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.5.6
- Spring Data JPA
- H2 Database (dev)
- PostgreSQL (prod)
- Maven
- Swagger/OpenAPI

### Frontend
- React 18
- Vite
- JavaScript (ES6+)
- CSS3
- Fetch API

## Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 16 or higher
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd patient-service
```

2. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```

The backend will start on `http://localhost:4000`

API documentation is available at: `http://localhost:4000/swagger-ui.html`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd patient-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## Usage

1. Start both the backend and frontend servers
2. Open your browser and navigate to `http://localhost:5173`
3. Use the interface to:
   - View all patients in a table
   - Search for patients by name, email, or address
   - Add new patients using the "+ Add New Patient" button
   - Edit existing patients by clicking the "Edit" button
   - Delete patients by clicking the "Delete" button
   - View calculated age based on date of birth

## Screenshots

### Empty State
![Empty State](https://github.com/user-attachments/assets/2ed31758-2b27-4a08-8e8d-dbb6d8ee3f45)

### Add Patient Form
![Add Patient](https://github.com/user-attachments/assets/73b1cf06-4405-4c85-97e1-c89580ecb673)

### Patient List with Data
![Patient List](https://github.com/user-attachments/assets/2d073f8f-f2b0-4d37-80fc-d4abd71603ad)

### Search Functionality
![Search](https://github.com/user-attachments/assets/8109f2f1-fe09-4b0a-a882-ea3772f68e59)

## API Endpoints

### Get All Patients
```
GET http://localhost:4000/patients
```

### Get Patient by ID
```
GET http://localhost:4000/patients/{id}
```

### Create Patient
```
POST http://localhost:4000/patients
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "address": "123 Main Street, New York, NY",
  "dateOfBirth": "1990-05-15",
  "registeredDate": "2025-10-23"
}
```

### Update Patient
```
PUT http://localhost:4000/patients/{id}
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "address": "456 Oak Avenue, Boston, MA",
  "dateOfBirth": "1990-05-15"
}
```

### Delete Patient
```
DELETE http://localhost:4000/patients/{id}
```

## Project Structure

```
patient-management/
├── patient-service/          # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/pm/patientservice/
│   │   │   │       ├── config/          # CORS configuration
│   │   │   │       ├── controller/      # REST controllers
│   │   │   │       ├── dto/             # Data transfer objects
│   │   │   │       ├── exception/       # Exception handlers
│   │   │   │       ├── mapper/          # Entity-DTO mappers
│   │   │   │       ├── model/           # JPA entities
│   │   │   │       ├── repository/      # Data repositories
│   │   │   │       └── service/         # Business logic
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
└── patient-ui/               # React frontend
    ├── src/
    │   ├── components/       # React components
    │   │   ├── PatientForm.jsx
    │   │   ├── PatientForm.css
    │   │   ├── PatientTable.jsx
    │   │   └── PatientTable.css
    │   ├── services/         # API services
    │   │   └── patientService.js
    │   ├── App.jsx           # Main app component
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## Development

### Running Tests

Backend:
```bash
cd patient-service
./mvnw test
```

Frontend:
```bash
cd patient-ui
npm test
```

### Building for Production

Backend:
```bash
cd patient-service
./mvnw clean package
```

Frontend:
```bash
cd patient-ui
npm run build
```

## Future Enhancements

- User authentication and authorization
- Patient medical history tracking
- Appointment scheduling
- Document upload and management
- Advanced filtering and sorting
- Pagination for large datasets
- Export data to CSV/PDF
- Email notifications
- Dark mode support

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
