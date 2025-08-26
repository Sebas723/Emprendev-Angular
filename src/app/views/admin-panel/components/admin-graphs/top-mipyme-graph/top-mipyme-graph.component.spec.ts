import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMipymeGraphComponent } from './top-mipyme-graph.component';

describe('TopMipymeGraphComponent', () => {
  let component: TopMipymeGraphComponent;
  let fixture: ComponentFixture<TopMipymeGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMipymeGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMipymeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
