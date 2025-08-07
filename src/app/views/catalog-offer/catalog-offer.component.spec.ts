import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogOfferComponent } from './catalog-offer.component';

describe('CatalogOfferComponent', () => {
  let component: CatalogOfferComponent;
  let fixture: ComponentFixture<CatalogOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
