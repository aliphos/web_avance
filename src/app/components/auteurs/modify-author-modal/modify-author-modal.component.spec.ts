import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAuthorModalComponent } from './modify-author-modal.component';

describe('ModifyAuthorModalComponent', () => {
  let component: ModifyAuthorModalComponent;
  let fixture: ComponentFixture<ModifyAuthorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAuthorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAuthorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
