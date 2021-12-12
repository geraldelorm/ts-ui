import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomodalComponent } from './portfoliomodal.component';

describe('PortfoliomodalComponent', () => {
  let component: PortfoliomodalComponent;
  let fixture: ComponentFixture<PortfoliomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
