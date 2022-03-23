import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyLivreModalComponent } from './modify-livre-modal.component';

describe('ModifyAuthorModalComponent', () => {
  let component: ModifyLivreModalComponent;
  let fixture: ComponentFixture<ModifyLivreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyLivreModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyLivreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
