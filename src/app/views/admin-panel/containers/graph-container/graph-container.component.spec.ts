import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphContainerComponent } from './graph-container.component';

describe('GraphContainerComponent', () => {
  let component: GraphContainerComponent;
  let fixture: ComponentFixture<GraphContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
