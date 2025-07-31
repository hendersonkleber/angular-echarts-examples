import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';
import { LoaderChartComponent } from './loader-chart/loader-chart.component';
import { LoaderCompassComponent } from './loader-compass/loader-compass.component';
import { LoaderTruckComponent } from './loader-truck/loader-truck.component';

@Component({
  selector: 'app-loader',
  imports: [LoaderChartComponent, LoaderTruckComponent, LoaderCompassComponent],
  host: {
    '[class.spinner-local]': '!fixedInViewport()',
    '[class.spinner-fixed]': 'fixedInViewport()',
  },
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  public readonly type = input<'truck' | 'chart' | 'compass'>('compass');
  public readonly fixedInViewport = input(false, { transform: booleanAttribute });
}
