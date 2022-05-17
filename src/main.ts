import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiY29va2llY2FydG9vbnMiLCJhIjoiY2wxankwYTUzMjU0YjNlbnNoODg2b2EzbSJ9.vSYcDbAdqqe8yhQk46GVzg';


if (!navigator.geolocation){
  alert('Navegador no soporta la geolocalizacion');
  throw new Error('El navegador no soporta el gelocalizador');
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
