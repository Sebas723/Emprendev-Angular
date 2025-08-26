import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUsersGraphComponent } from './new-users-graph.component';

describe('NewUsersGraphComponent', () => {
  let component: NewUsersGraphComponent;
  let fixture: ComponentFixture<NewUsersGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUsersGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUsersGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
