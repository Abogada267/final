import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosDetailComponent } from './alumnos-detail.component';

describe('AlumnosDetailComponent', () => {
  let component: AlumnosDetailComponent;
  let fixture: ComponentFixture<AlumnosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
