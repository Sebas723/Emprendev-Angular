import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGraphComponent } from './users-graph.component';

describe('UsersGraphComponent', () => {
  let component: UsersGraphComponent;
  let fixture: ComponentFixture<UsersGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
