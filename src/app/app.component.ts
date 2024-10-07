import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrige "styleUrl" a "styleUrls"
})
export class AppComponent  {
  showWarning() {
    alert('Tienes que esperar a que sea ese día amor!😍'); // Muestra un mensaje de advertencia
  }
}
