import * as echarts from 'echarts/core';

import brasilJson from '@public/geo/brasil-uf.json';

import darkThemeJson from '@public/themes/echarts-dark.json';
import lightThemeJson from '@public/themes/echarts-light.json';

import {
  BarChart,
  EffectScatterChart,
  GaugeChart,
  HeatmapChart,
  LineChart,
  MapChart,
  PieChart,
  RadarChart,
  ScatterChart,
} from 'echarts/charts';

import {
  AriaComponent,
  AxisPointerComponent,
  BrushComponent,
  CalendarComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  DatasetComponent,
  GeoComponent,
  GraphicComponent,
  GridComponent,
  GridSimpleComponent,
  LegendComponent,
  LegendPlainComponent,
  LegendScrollComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  ParallelComponent,
  PolarComponent,
  RadarComponent,
  SingleAxisComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
} from 'echarts/components';

import type {
  BarSeriesOption,
  BoxplotSeriesOption,
  CandlestickSeriesOption,
  CustomSeriesOption,
  EffectScatterSeriesOption,
  FunnelSeriesOption,
  GaugeSeriesOption,
  GraphSeriesOption,
  HeatmapSeriesOption,
  LineSeriesOption,
  LinesSeriesOption,
  MapSeriesOption,
  ParallelSeriesOption,
  PictorialBarSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
  SankeySeriesOption,
  ScatterSeriesOption,
  SunburstSeriesOption,
  ThemeRiverSeriesOption,
  TreeSeriesOption,
  TreemapSeriesOption,
} from 'echarts/charts';

import type {
  AriaComponentOption,
  AxisPointerComponentOption,
  BrushComponentOption,
  CalendarComponentOption,
  DataZoomComponentOption,
  DatasetComponentOption,
  GeoComponentOption,
  GraphicComponentOption,
  GridComponentOption,
  LegendComponentOption,
  MarkAreaComponentOption,
  MarkLineComponentOption,
  MarkPointComponentOption,
  ParallelComponentOption,
  PolarComponentOption,
  RadarComponentOption,
  SingleAxisComponentOption,
  TimelineComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  VisualMapComponentOption,
} from 'echarts/components';

import type { ComposeOption, ECharts, EChartsInitOpts } from 'echarts/core';

import { LabelLayout, UniversalTransition } from 'echarts/features';

import { CanvasRenderer } from 'echarts/renderers';

export type Chart = ECharts;

export type ChartInitOptions = EChartsInitOpts;

export type ChartOptions = ComposeOption<
  | TitleComponentOption
  | AriaComponentOption
  | AxisPointerComponentOption
  | BrushComponentOption
  | CalendarComponentOption
  | DataZoomComponentOption
  | DatasetComponentOption
  | GeoComponentOption
  | GraphicComponentOption
  | GridComponentOption
  | LegendComponentOption
  | MarkAreaComponentOption
  | MarkLineComponentOption
  | MarkPointComponentOption
  | ParallelComponentOption
  | PolarComponentOption
  | RadarComponentOption
  | SingleAxisComponentOption
  | TimelineComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | VisualMapComponentOption
  | BarSeriesOption
  | LineSeriesOption
  | MapSeriesOption
  | PieSeriesOption
  | RadarSeriesOption
  | BoxplotSeriesOption
  | CandlestickSeriesOption
  | CustomSeriesOption
  | EffectScatterSeriesOption
  | FunnelSeriesOption
  | GaugeSeriesOption
  | GraphSeriesOption
  | HeatmapSeriesOption
  | LinesSeriesOption
  | ParallelSeriesOption
  | PictorialBarSeriesOption
  | SankeySeriesOption
  | ScatterSeriesOption
  | SunburstSeriesOption
  | ThemeRiverSeriesOption
  | TreeSeriesOption
  | TreemapSeriesOption
>;

echarts.use([
  GridComponent,
  TitleComponent,
  TooltipComponent,
  AriaComponent,
  AxisPointerComponent,
  BrushComponent,
  CalendarComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  DatasetComponent,
  GeoComponent,
  GraphicComponent,
  LegendComponent,
  LegendPlainComponent,
  LegendScrollComponent,
  GridSimpleComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  ParallelComponent,
  PolarComponent,
  RadarComponent,
  SingleAxisComponent,
  TimelineComponent,
  ToolboxComponent,
  TransformComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,

  LabelLayout,
  UniversalTransition,

  BarChart,
  LineChart,
  MapChart,
  PieChart,
  HeatmapChart,
  GaugeChart,
  RadarChart,

  EffectScatterChart,
  ScatterChart,

  CanvasRenderer,
]);

echarts.registerMap('BRASIL', JSON.stringify(brasilJson));

echarts.registerTheme(lightThemeJson.themeName, lightThemeJson.theme);

echarts.registerTheme(darkThemeJson.themeName, darkThemeJson.theme);

export default echarts;
