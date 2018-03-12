import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWeaponsComponent } from './list-weapons.component';

describe('ListWeaponsComponent', () => {
  let component: ListWeaponsComponent;
  let fixture: ComponentFixture<ListWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
