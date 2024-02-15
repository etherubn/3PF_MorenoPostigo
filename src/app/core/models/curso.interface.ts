import { Course } from "./course.type";

export interface Curso {
    id: number;
    nombre: Course;
    clases: number;
    disponible:boolean;
  }