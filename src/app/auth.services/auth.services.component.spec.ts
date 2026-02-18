import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthServicesComponent } from './auth.services.component';

describe('AuthServicesComponent', () => {
  let component: AuthServicesComponent;
  let fixture: ComponentFixture<AuthServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
