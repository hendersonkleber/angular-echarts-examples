import { ChartComponent } from '@/components/chart/chart.component';
import { LoaderComponent } from '@/components/loader/loader.component';
import { ChartInitOptions, ChartOptions } from '@/utils/echarts';
import { formatCurrency } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-fluxo-caixa-diario-semana',
  imports: [ChartComponent, LoaderComponent],
  host: {
    class:
      'block relative h-full w-full flex flex-col bg-card-background text-card-foreground overflow-hidden rounded-lg shadow ring-1 ring-black/40 dark:ring-white/40 p-4',
  },
  templateUrl: './fluxo-caixa-diario-semana.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FluxoCaixaDiarioSemanaComponent implements OnInit {
  protected readonly carregando = signal<boolean>(false);
  protected readonly options = signal<ChartOptions | null>(null);
  protected readonly rendererOptions = signal<ChartInitOptions | null>({
    renderer: 'canvas',
    height: '400px',
  });

  ngOnInit() {
    this.obterRegistros();
  }

  obterRegistros() {
    this.carregando.set(true);

    const response = {
      pagamentosPrevisto: [
        { data: '2024-12-09', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-10', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-11', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-12', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-13', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-14', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-15', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
      ],
      pagamentosRealizado: [
        { data: '2024-12-09', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-10', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-11', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-12', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-13', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-14', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-15', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
      ],
      recebimentosPrevisto: [
        { data: '2024-12-09', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-10', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-11', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-12', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-13', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-14', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-15', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
      ],
      recebimentosRealizado: [
        { data: '2024-12-09', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-10', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-11', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-12', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-13', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-14', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-15', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
      ],
      saldoPrevisto: [
        { data: '2024-12-09', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-10', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-11', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-12', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-13', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-14', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-15', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
      ],
      saldoRealizado: [
        { data: '2024-12-09', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-10', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-11', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-12', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-13', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-14', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
        { data: '2024-12-15', valor: Math.floor(Math.random() * (25000 + 1)) - 5000 },
      ],
    };

    const datas = [
      ...response.pagamentosPrevisto,
      ...response.pagamentosRealizado,
      ...response.recebimentosPrevisto,
      ...response.recebimentosRealizado,
      ...response.saldoPrevisto,
      ...response.saldoRealizado,
    ].map(item => item.data);

    const datasUnicas = [...new Set(datas)].map(d => DateTime.fromFormat(d, 'yyyy-MM-dd'));

    const options = {
      title: {
        show: true,
        text: 'Fluxo de caixa diário da semana',
        left: 10,
        top: 10,
      },

      tooltip: {
        trigger: 'axis',

        axisPointer: {
          type: 'shadow',
        },
      },

      grid: {
        top: '20%',
        left: '1%',
        right: '1%',
        bottom: '2%',
      },

      legend: {
        show: true,
        top: 10,
        right: 10,
      },

      xAxis: [
        {
          type: 'category',
          data: datasUnicas.map(data => data.toFormat('dd/MM/yyyy')),
          axisLabel: {
            formatter: (data: string) => {
              return DateTime.fromFormat(data, 'dd/MM/yyyy').weekdayShort;
            },
          },
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
          name: 'Despesa prevista',
          type: 'bar',
          color: '#f87171',
          tooltip: {
            valueFormatter: (valor: number) => {
              return formatCurrency(valor, 'pt-BR', 'R$');
            },
          },
          data: response.pagamentosPrevisto.map(v => v.valor),
        },
        {
          name: 'Despesa realizada',
          type: 'bar',
          color: '#dc2626',
          tooltip: {
            valueFormatter: (valor: number) => {
              return formatCurrency(valor, 'pt-BR', 'R$');
            },
          },
          data: response.pagamentosRealizado.map(v => v.valor),
        },
        {
          name: 'Receita prevista',
          type: 'bar',
          color: '#4ade80',
          tooltip: {
            valueFormatter: (valor: number) => {
              return formatCurrency(valor, 'pt-BR', 'R$');
            },
          },
          data: response.recebimentosPrevisto.map(v => v.valor),
        },
        {
          name: 'Receita realizada',
          type: 'bar',
          color: '#16a34a',
          tooltip: {
            valueFormatter: (valor: number) => {
              return formatCurrency(valor, 'pt-BR', 'R$');
            },
          },
          data: response.recebimentosRealizado.map(v => v.valor),
        },
        {
          name: 'Saldo previsto',
          type: 'line',
          color: '#60a5fa',
          tooltip: {
            valueFormatter: (valor: number) => {
              return formatCurrency(valor, 'pt-BR', 'R$');
            },
          },
          data: response.saldoPrevisto.map(v => v.valor),
        },
        {
          name: 'Saldo realizado',
          type: 'line',
          color: '#1d4ed8',
          tooltip: {
            valueFormatter: (valor: number) => {
              return formatCurrency(valor, 'pt-BR', 'R$');
            },
          },
          data: response.saldoRealizado.map(v => v.valor),
        },
      ],
    } as ChartOptions;

    setTimeout(() => {
      this.options.set(options);
      this.carregando.set(false);
    }, 2000);
  }
}
