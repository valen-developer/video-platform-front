import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsAccordionComponent } from './sections-accordion.component';

describe('SectionsAccordionComponent', () => {
  let component: SectionsAccordionComponent;
  let fixture: ComponentFixture<SectionsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
