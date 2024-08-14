import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnoCallsComponent } from './inno-calls.component';

describe('InnoCallsComponent', () => {
  let component: InnoCallsComponent;
  let fixture: ComponentFixture<InnoCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnoCallsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnoCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
