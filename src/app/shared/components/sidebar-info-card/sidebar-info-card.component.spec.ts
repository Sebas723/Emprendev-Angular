import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInfoCardComponent } from './sidebar-info-card.component';

describe('SidebarInfoCardComponent', () => {
  let component: SidebarInfoCardComponent;
  let fixture: ComponentFixture<SidebarInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
