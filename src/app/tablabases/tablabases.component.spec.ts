import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablabasesComponent } from './tablabases.component';

describe('TablabasesComponent', () => {
  let component: TablabasesComponent;
  let fixture: ComponentFixture<TablabasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablabasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablabasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
