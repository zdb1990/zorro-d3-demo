import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactPageComponent } from './react-page.component';

describe('ReactPageComponent', () => {
  let component: ReactPageComponent;
  let fixture: ComponentFixture<ReactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
