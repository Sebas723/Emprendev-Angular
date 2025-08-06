import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNavbarComponent } from './catalog-navbar.component';

describe('CatalogNavbarComponent', () => {
  let component: CatalogNavbarComponent;
  let fixture: ComponentFixture<CatalogNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
