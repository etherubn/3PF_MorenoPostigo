import { Course } from "./course.type";
import { Curso } from "./curso.interface";

export interface Alumno {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    course: Curso
  }