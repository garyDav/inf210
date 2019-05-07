import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { AcademyFakeDb } from 'app/fake-db/academy';

@Injectable({
  providedIn: 'root',
})
export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Academy
      'academy-categories': AcademyFakeDb.categories,
      'academy-courses'   : AcademyFakeDb.courses,
      'academy-course'    : AcademyFakeDb.course
    };
  }
}
