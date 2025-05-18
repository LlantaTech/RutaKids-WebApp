import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

declare const google: any;

@Component({
  selector: 'app-map-selector',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './map-selector.component.html',
  styleUrls: ['./map-selector.component.scss']
})
export class MapSelectorComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  @Output() addressSelected = new EventEmitter<{
    address: string;
    coordinates: { lat: number; lng: number };
  }>();

  address: string = '';
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=places`;
    script.defer = true;
    script.onload = () => this.initMap();
    document.head.appendChild(script);
  }

  initMap(): void {
    if (!this.isBrowser) return;

    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: -12.0464, lng: -77.0428 },
        zoom: 12
      }
    );

    const autocomplete = new google.maps.places.Autocomplete(
      this.searchInput.nativeElement,
      {
        componentRestrictions: { country: 'pe' },
        fields: ['geometry', 'formatted_address']
      }
    );

    const marker = new google.maps.Marker({ map });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
        alert('No se encontró la ubicación seleccionada');
        return;
      }

      map.setCenter(place.geometry.location);
      map.setZoom(15);
      marker.setPosition(place.geometry.location);

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      this.address = place.formatted_address;
      this.addressSelected.emit({
        address: this.address,
        coordinates: { lat, lng }
      });

      console.log('📍 Coordenadas:', lat, lng);
    });
  }
}
