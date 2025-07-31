import { ChartComponent } from '@/components/chart/chart.component';
import { LoaderComponent } from '@/components/loader/loader.component';
import { ChartInitOptions, ChartOptions } from '@/utils/echarts';
import { NumeroUtil } from '@/utils/numero';
import { formatCurrency } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, type OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-financeiro-registros-por-dia',
  imports: [ChartComponent, LoaderComponent],
  host: {
    class:
      'relative h-full w-full flex flex-col p-4 bg-white dark:bg-[#404040] overflow-hidden rounded-lg shadow ring-1 ring-black/40 dark:ring-white/40',
  },
  templateUrl: './financeiro-registros-por-dia.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceiroRegistrosPorDiaComponent implements OnInit {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly carregando = signal<boolean>(false);

  protected readonly options = signal<ChartOptions | null>(null);
  protected readonly rendererOptions = signal<ChartInitOptions | null>(null);

  ngOnInit(): void {
    this.obterRegistros();
  }

  obterRegistros() {
    this.carregando.set(true);

    const dataInicio = DateTime.now().startOf('month');
    const dataTermino = DateTime.now().endOf('month');

    const diff = dataTermino.diff(dataInicio, 'days').days;

    const financeiros: {
      receitas: { data: string; valor: number }[];
      despesas: { data: string; valor: number }[];
    } = {
      receitas: [],
      despesas: [],
    };

    for (let index = 1; index <= diff; index++) {
      const data = dataInicio.plus({ day: index });

      financeiros.receitas.push({
        data: data.toFormat('yyyy-MM-dd'),
        valor: NumeroUtil.aleatorio(100, 5000),
      });

      financeiros.despesas.push({
        data: data.toFormat('yyyy-MM-dd'),
        valor: NumeroUtil.aleatorio(100, 5000),
      });
    }

    const datas = [...financeiros.receitas, ...financeiros.despesas].map(item => item.data);

    const datasUnicas = [...new Set(datas)].map(d => DateTime.fromFormat(d, 'yyyy-MM-dd'));

    const options = {
      title: {
        show: true,
        text: 'Valor de financeiros por dia',
        subtext: 'Filtrado por data de competência',
        top: 10,
        left: 10,
      },

      grid: {
        top: '20%',
        left: '2%',
        right: '2%',
        bottom: '15%',
        outerBoundsMode: 'same',
        outerBoundsContain: 'axisLabel',
      },

      tooltip: {
        trigger: 'axis',
      },

      legend: {
        top: 0,
        right: 0,
      },

      dataZoom: [
        {
          left: '8%',
          right: '8%',
          show: true,
          realtime: false,
          start: 0,
          end: 100,
        },
        {
          type: 'inside',
          realtime: false,
          start: 0,
          end: 100,
        },
      ],

      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: datasUnicas.map(data => data.toFormat('dd/LL/yyyy')),
        },
      ],

      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: (valor: number) => {
              return formatCurrency(valor, 'pt-BR', 'R$');
            },
          },
        },
      ],

      series: [
        {
          name: 'Receitas',
          type: 'line',
          color: '#22c55e',
          tooltip: {
            valueFormatter: (valor: number) => {
              return formatCurrency(valor, 'pt-BR', 'R$');
            },
          },
          data: financeiros.receitas.map(v => v.valor),
        },

        {
          name: 'Despesas',
          type: 'line',
          color: '#ef4444',
          tooltip: {
            valueFormatter: (valor: number) => {
              return formatCurrency(valor, 'pt-BR', 'R$');
            },
          },
          data: financeiros.despesas.map(v => v.valor),
        },
      ],
    } as ChartOptions;

    const rendererOptions = {
      renderer: 'canvas',
      width: this.elementRef.nativeElement.offsetWidth - 32,
      height: this.elementRef.nativeElement.offsetHeight - 32,
    } as ChartInitOptions;

    setTimeout(() => {
      this.rendererOptions.set(rendererOptions);
      this.options.set(options);
      this.carregando.set(false);
    }, 2000);
  }
}
