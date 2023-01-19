import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule} from '@ngrx/store';
import { reducers } from 'src/app/store/play.reducers-map';

import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers)
      ], 
      declarations: [ PanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


