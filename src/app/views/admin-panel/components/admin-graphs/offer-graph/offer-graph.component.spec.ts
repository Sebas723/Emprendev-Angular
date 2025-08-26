import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferGraphComponent } from './offer-graph.component';

describe('OfferGraphComponent', () => {
  let component: OfferGraphComponent;
  let fixture: ComponentFixture<OfferGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
