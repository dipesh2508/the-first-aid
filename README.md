<img src="https://raw.githubusercontent.com/dipesh2508/the-first-aid/refs/heads/main/src/assets/TheFirstAid.png" alt="App Icon" height="150">

# The First Aid

Check the [Live Demo Here](https://the-first-aid.vercel.app/)


**The First Aid** is a Next.js application that provides a platform for emergency consent granting and healthcare management. This app allows users to securely grant remote consent in emergencies and includes an HRMS (Healthcare Resource Management System) for managing appointments, medical records, and essential healthcare information.

In situations where a patient cannot physically give consent, and no guardian is available, healthcare providers can use The First Aid app to generate a consent form. Registered nominees receive notifications and can remotely authorize the procedure by entering a secure MPIN, which legally authorizes the hospital to proceed with the necessary actions.

## Features

- **Remote Consent Granting**: Nominees receive a notification for emergency consent requests and can securely approve using an MPIN.
- **HRMS (Healthcare Resource Management System)**:
  - Appointment scheduling for patients
  - Access to medical history, prescriptions, and vital medical data for healthcare providers
- **User Dashboard**: Patients can manage nominees and update personal information.
- **Admin Dashboard**: Healthcare administrators can manage patient records, schedule appointments, and monitor consent statuses.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: ShadCN
- **Animations**: Framer Motion
- **Database**: MongoDB
- **Design**: Initial designs created in Figma

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- Node.js >= 16
- MongoDB instance (local or remote)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/dipesh2508/the-first-aid.git
    cd the-first-aid
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Modify the `.env` file in the root directory and add the used environment variables.


### Running the Application

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Database Setup

The application uses MongoDB as its database. Set up your MongoDB instance and add your MongoDB connection string in the `.env` file as `MONGODB_URL`.

## Usage

- **User Registration**: Patients create an account and add nominees (e.g., family members) to receive consent requests in emergencies.
- **Emergency Consent**: When a patient needs emergency assistance but cannot provide consent, the app notifies the nominee to approve the procedure by verifying their MPIN.
- **Healthcare Management**: Healthcare staff can view patient records, schedule appointments, and manage emergency consent requests through the HRMS features.
