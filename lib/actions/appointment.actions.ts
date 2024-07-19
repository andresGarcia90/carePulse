'use server';

import { ID, InputFile, Query } from 'node-appwrite';
import {
  databases,
  DATABASE_ID,
  APPOINTMENT_COLLECTION_ID,
} from '../appwrite.config';
import { parseStringify } from '../utils';

export async function createAppointment(appointment: AppointmentParams) {
  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );
    return parseStringify(newAppointment);
  } catch (error) {
    console.log(error);
  }
}

export async function getAppointment(appointmentId: string) {
  try {
    const appointment = await databases.getDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId
    );
    return parseStringify(appointment);
  } catch (error) {
    console.log(error);
  }
}
