import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionComponent } from './profesion.component';

describe('ProfesionComponent', () => {
  let component: ProfesionComponent;
  let fixture: ComponentFixture<ProfesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
