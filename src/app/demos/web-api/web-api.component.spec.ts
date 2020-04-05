import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAPIComponent } from './web-api.component';

describe('WebAPIComponent', () => {
  let component: WebAPIComponent;
  let fixture: ComponentFixture<WebAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
