import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loader-chart',
  templateUrl: './loader-chart.component.html',
  styleUrl: './loader-chart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderChartComponent {}
