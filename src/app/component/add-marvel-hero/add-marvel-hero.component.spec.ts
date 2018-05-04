import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarvelHeroComponent } from './add-marvel-hero.component';

describe('AddMarvelHeroComponent', () => {
  let component: AddMarvelHeroComponent;
  let fixture: ComponentFixture<AddMarvelHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarvelHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarvelHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
