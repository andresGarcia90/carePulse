<h2 align="center">A HealthCare Management System</h2>
<h3 align="center"> This is a clone for <a href="https://github.com/adrianhajdin/healthcare"> javascriptmastery/healthcare </a> <h3>

## Table of Contents
----
1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>
----------------
This is a management application that allow for patients to register, book and manage their appointments.

## <a name="tech-stack">Tech Stack</a>
----
- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN

## <a name="features">Features</a>
👉 Register as a Patient: Users can sign up and create a personal profile as a patient.

👉 Book a New Appointment with Doctor: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.

👉 Manage Appointments on Admin Side: Administrators can efficiently view and handle all scheduled appointments.

👉 Confirm/Schedule Appointment from Admin Side: Admins can confirm and set appointment times to ensure they are properly scheduled.

👉 Cancel Appointment from Admin Side: Administrators have the ability to cancel any appointment as needed.

👉 Manage and Track Application Performance Using Sentry: The application uses Sentry to monitor and track its performance and detect any errors.

## <a name="quick-start">Quick Start</a>

Cloning the Repository

git clone https://github.com/adrianhajdin/healthcare.git
cd healthcare



Installation

Install the project dependencies using npm:

```bash
npm install
```

Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

```env
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

```bash
npm run dev
```