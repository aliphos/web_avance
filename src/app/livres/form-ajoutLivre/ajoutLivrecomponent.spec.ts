import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLivrecomponent } from './ajoutLivrecomponent';

describe('LoginComponent', () => {
  let component: AjoutLivrecomponent;
  let fixture: ComponentFixture<AjoutLivrecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutLivrecomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutLivrecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
