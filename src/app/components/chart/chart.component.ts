import { ThemeManager } from '@/services/theme-manager.service';
import echarts, { Chart, ChartInitOptions, ChartOptions } from '@/utils/echarts';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  afterRenderEffect,
  inject,
  input,
  viewChild,
} from '@angular/core';

const DEFAULT_CHART_RENDERER_OPTIONS: ChartInitOptions = { renderer: 'canvas', height: 400 };

@Component({
  selector: 'app-chart',
  template: '<div #chart></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly themeManager = inject(ThemeManager);

  private firstRender = true;
  private instance: Chart | null = null;
  private resizeObserver: ResizeObserver | null = null;

  private readonly element = viewChild.required<ElementRef<HTMLDivElement>>('chart');

  public readonly options = input.required<ChartOptions>();
  public readonly rendererOptions = input(DEFAULT_CHART_RENDERER_OPTIONS, {
    transform: (input: ChartInitOptions | null) => Object.assign(DEFAULT_CHART_RENDERER_OPTIONS, input),
  });

  constructor() {
    // Atualiza as opções do gráfico
    afterRenderEffect(() => {
      const options = this.options();

      if (this.firstRender) return;

      if (this.instance) this.instance.setOption(options, true);
    });

    // Atualiza o tema do gráfico quando mudar o tema da aplicação
    afterRenderEffect(() => {
      const theme = this.themeManager.theme();

      if (this.firstRender) return;

      if (this.instance) this.instance.setTheme(theme);
    });

    // Executa uma vez após a primeira renderização
    afterNextRender(() => {
      this.createChart();
      this.firstRender = false;
    });

    // Destroi o gráfico e remove observaveis
    this.destroyRef.onDestroy(() => this.destroy());
  }

  private createChart() {
    // Elemento HTML onde vai ficar o gráfico
    const element = this.element().nativeElement;

    // Opções de gráfico e renderização
    const options = this.options();
    const rendererOptions = this.rendererOptions();

    // Caso tiver um gráfico destroi
    this.destroy();

    // Cria novo gráfico
    const chart = echarts.init(element, this.themeManager.getTheme(), rendererOptions);

    // seta as opções no novo gráfico
    chart.setOption(options);

    // Persiste a instancia do gráfico localmente
    this.instance = chart;

    // Cria um observavel de redimensionamente, caso tiver que atualizar tamanhos do gráfico
    this.createResizeObserver();
  }

  // Observar redimensioamente do gráfico, caso tiver que renderizar novamente
  private createResizeObserver() {
    const resizeObserver = new ResizeObserver(() => {
      const { height, width } = this.element().nativeElement.getBoundingClientRect();

      this.instance?.resize({ height, width });
    });

    resizeObserver.observe(this.element().nativeElement);
    this.resizeObserver = resizeObserver;
  }

  // Executado para parar de observar redimensionamento e excluir a instancia atual do gráfico
  private destroy() {
    this.resizeObserver?.unobserve(this.element().nativeElement);

    this.instance?.clear();
    this.instance?.dispose();

    this.instance = null;
  }
}
