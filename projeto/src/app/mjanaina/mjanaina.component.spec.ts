import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjanainaComponent } from './mjanaina.component';

describe('MjanainaComponent', () => {
  let component: MjanainaComponent;
  let fixture: ComponentFixture<MjanainaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjanainaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjanainaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
