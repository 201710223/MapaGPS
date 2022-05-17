import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup ,Marker } from 'mapbox-gl';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( private placesServices: PlacesService ) { }

  ngAfterViewInit(): void {
    if (!this.placesServices.useLocation) throw Error(' NO hay placesService.userLocation')
 
    const map = new Map({

      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: this.placesServices.useLocation,
      zoom: 15, 
      }); 

    const popup = new Popup()
      .setHTML('<h6> Aqui estoy </h6> <span> Estoy en este lugar del mundo </span>');      

      new Marker({ color: 'red' })
      .setLngLat(this.placesServices.useLocation)
      .setPopup(popup)
      .addTo(map)



  }
}
