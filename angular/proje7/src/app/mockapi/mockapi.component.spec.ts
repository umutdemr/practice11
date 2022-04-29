import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockapiComponent } from './mockapi.component';

describe('MockapiComponent', () => {
  let component: MockapiComponent;
  let fixture: ComponentFixture<MockapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
