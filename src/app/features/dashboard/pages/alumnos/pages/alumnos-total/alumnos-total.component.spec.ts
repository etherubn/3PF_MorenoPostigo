import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosTotalComponent } from './alumnos-total.component';
import { MockProvider } from "ng-mocks"
import { AlumnosService } from '../../service/alumnos.service';
import { of } from 'rxjs';

describe("Prueba de alumnosTotalComponent", () => {
  let component: AlumnosTotalComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosTotalComponent],
      providers: [
        MockProvider(AlumnosService, {
          getAlumnos: () => of([
            {
              id:10,
              nombre:"Raul",
              apellido:"Gomez",
              email:"afsf@gmail.com",
              course:{
                id:1,
                nombre:"React",
                clases:25,
                disponible:true
              }
            },
            {
              id:11,
              nombre:"Rafael",
              apellido:"Aver",
              email:"arf@gmail.com",
              course:{
                id:1,
                nombre:"React",
                clases:25,
                disponible:true
              }
            }
          ])
        })
      ]
    })

    component = TestBed.createComponent(AlumnosTotalComponent).componentInstance
  })

  it("Ls ")
});
