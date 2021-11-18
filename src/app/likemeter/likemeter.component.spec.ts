import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikemeterComponent } from './likemeter.component';

describe('LikemeterComponent', () => {
  let component: LikemeterComponent;
  let fixture: ComponentFixture<LikemeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikemeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikemeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
