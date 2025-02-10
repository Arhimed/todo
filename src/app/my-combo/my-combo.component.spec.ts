import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComboComponent } from './my-combo.component';

describe('MyComboComponent', () => {
  let component: MyComboComponent;
  let fixture: ComponentFixture<MyComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
