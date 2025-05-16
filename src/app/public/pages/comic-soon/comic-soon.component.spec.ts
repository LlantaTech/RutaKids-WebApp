import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ComicSoonComponent } from './comic-soon.component';
import { BehaviorSubject } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";

describe('ComicSoonComponent', () => {
  let component: ComicSoonComponent;
  let fixture: ComponentFixture<ComicSoonComponent>;
  let themeServiceMock: any;

  beforeEach(async () => {
    themeServiceMock = {
      isToggled$: new BehaviorSubject(false),
      toggleRTLEnabledTheme: jasmine.createSpy('toggleRTLEnabledTheme'),
      isRTLEnabled: () => false
    };

    await TestBed.configureTestingModule({
      imports: [ComicSoonComponent, NoopAnimationsModule],
      providers: [
        { provide: CustomizerSettingsService, useValue: themeServiceMock },
        { provide: ActivatedRoute, useValue: {} } // <- esta línea resuelve el error
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ComicSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe limpiar el intervalo al destruirse', () => {
    const win = typeof window !== 'undefined' ? window : { clearInterval: () => {} };
    const clearSpy = spyOn(win, 'clearInterval');
    component.ngOnDestroy();
    expect(clearSpy).toHaveBeenCalled();
  });

});
