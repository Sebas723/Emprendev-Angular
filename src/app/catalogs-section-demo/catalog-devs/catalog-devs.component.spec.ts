import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDevsComponent } from './catalog-devs.component';

describe('CatalogDevsComponent', () => {
  let component: CatalogDevsComponent;
  let fixture: ComponentFixture<CatalogDevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogDevsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
