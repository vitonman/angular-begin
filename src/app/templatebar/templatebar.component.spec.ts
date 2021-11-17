import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatebarComponent } from './templatebar.component';

describe('TemplatebarComponent', () => {
  let component: TemplatebarComponent;
  let fixture: ComponentFixture<TemplatebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
