import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAuteurComponent } from './ajoutAuteur.component';

describe('LoginComponent', () => {
  let component: AjoutAuteurComponent;
  let fixture: ComponentFixture<AjoutAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAuteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
