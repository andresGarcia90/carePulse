# A HealthCare Management System
### This is a clone for [javascriptmastery/healthcare](https://github.com/adrianhajdin/healthcare)

## Table of Contents
----
1. [Introduction](https://github.com/andresGarcia90/carePulse#introduction)
2. [Tech Stack](https://github.com/andresGarcia90/carePulse#tech-stack)
3. [Features](https://github.com/andresGarcia90/carePulse#features)
4. [Quick Start](https://github.com/andresGarcia90/carePulse#quick-start)

### Introduction
----------------
This is a management application that allow for patients to register, book and manage their appointments.

### Tech Stack
----
- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN

### Features
👉 Register as a Patient: Users can sign up and create a personal profile as a patient.

👉 Book a New Appointment with Doctor: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.

👉 Manage Appointments on Admin Side: Administrators can efficiently view and handle all scheduled appointments.

👉 Confirm/Schedule Appointment from Admin Side: Admins can confirm and set appointment times to ensure they are properly scheduled.

👉 Cancel Appointment from Admin Side: Administrators have the ability to cancel any appointment as needed.

👉 Manage and Track Application Performance Using Sentry: The application uses Sentry to monitor and track its performance and detect any errors.

### Quick start

Cloning the Repository

git clone https://github.com/adrianhajdin/healthcare.git
cd healthcare



Installation

Install the project dependencies using npm:
```
npm install
```

Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:
```
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```

Running the Project

```
npm run dev
```