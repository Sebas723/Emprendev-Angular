import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogsSectionDemoComponent } from './catalogs-section-demo.component';

describe('CatalogsSectionDemoComponent', () => {
  let component: CatalogsSectionDemoComponent;
  let fixture: ComponentFixture<CatalogsSectionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogsSectionDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogsSectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
