import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ComingSoonComponent } from './coming-soon.component';
import { BehaviorSubject } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";

describe('ComicSoonComponent', () => {
  let component: ComingSoonComponent;
  let fixture: ComponentFixture<ComingSoonComponent>;
  let themeServiceMock: any;

  beforeEach(async () => {
    themeServiceMock = {
      isToggled$: new BehaviorSubject(false),
      toggleRTLEnabledTheme: jasmine.createSpy('toggleRTLEnabledTheme'),
      isRTLEnabled: () => false
    };

    await TestBed.configureTestingModule({
      imports: [ComingSoonComponent, NoopAnimationsModule],
      providers: [
        { provide: CustomizerSettingsService, useValue: themeServiceMock },
        { provide: ActivatedRoute, useValue: {} } // <- esta línea resuelve el error
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe limpiar el intervalo al destruirse', () => {
    const clearSpy = spyOn(window, 'clearInterval');
    component.ngOnDestroy();
    expect(clearSpy).toHaveBeenCalled();
  });

});
