import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type SkeletonShapes = 'list' | 'chart' | 'card' | 'longtext' | 'video' | 'image' | 'square' | 'rectangle' | 'circle';
type SkeletonSizes = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-skeleton',
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skeleton.component.html',
})
export class SkeletonComponent {
  shape = input<SkeletonShapes>('rectangle');
  size = input<SkeletonSizes>('md');
}
