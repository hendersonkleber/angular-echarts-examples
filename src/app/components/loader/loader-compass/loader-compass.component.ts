import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loader-compass',
  templateUrl: './loader-compass.component.html',
  styleUrl: './loader-compass.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderCompassComponent {}
