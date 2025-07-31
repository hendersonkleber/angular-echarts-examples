import { ChartComponent } from '@/components/chart/chart.component';
import { LoaderComponent } from '@/components/loader/loader.component';
import { ChartInitOptions, ChartOptions } from '@/utils/echarts';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, inject, signal } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-vencimento-certificado-digital',
  imports: [ChartComponent, LoaderComponent],
  host: {
    class:
      'block relative h-full w-full flex flex-col bg-card-background text-card-foreground overflow-hidden rounded-lg shadow ring-1 ring-black/40 dark:ring-white/40 p-4',
  },
  templateUrl: './vencimento-certificado-digital.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VencimentoCertificadoDigitalComponent implements OnInit {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly carregando = signal<boolean>(false);
  protected readonly options = signal<ChartOptions | null>(null);
  protected readonly rendererOptions = signal<ChartInitOptions | null>(null);

  ngOnInit() {
    this.obterRegistros();
  }

  obterRegistros() {
    this.carregando.set(true);

    const dataVencimento = DateTime.now().plus({ month: 4 }).startOf('day');
    const dataHoje = DateTime.now().startOf('day');
    const diasVencimento = dataVencimento.diff(dataHoje, 'days').days;

    const options = {
      title: {
        show: true,
        text: 'Vencimento do certificado digital',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          min: 0,
          max: 375,

          pointer: {
            show: false,
          },

          progress: {
            show: diasVencimento > 0 ? true : false,
            overlap: false,
            roundCap: true,
            clip: false,
          },

          axisLine: {
            show: true,
            roundCap: true,
            lineStyle: {
              width: 20,
            },
          },

          splitLine: {
            show: false,
            length: 10,
          },

          axisTick: {
            show: false,
          },

          axisLabel: {
            show: false,
            distance: 50,
          },

          data: [
            {
              value: diasVencimento,
              name: 'Dias para vencer o certificado',
              title: {
                show: false,
                offsetCenter: ['0%', '0%'],
              },
              detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '0%'],
              },
            },
          ],

          detail: {
            fontSize: 24,
            formatter: value => {
              if (value > 1) {
                return `Restam ${value} dias`;
              }

              if (value === 1) {
                return `Resta ${value} dia`;
              }

              return 'Certificado vencido!';
            },
          },
        },
      ],
    } as ChartOptions;

    const rendererOptions = {
      renderer: 'canvas',
      width: this.elementRef.nativeElement.offsetWidth - 32,
      height: this.elementRef.nativeElement.offsetHeight - 32,
    } as ChartInitOptions;

    setTimeout(() => {
      this.options.set(options);
      this.rendererOptions.set(rendererOptions);
      this.carregando.set(false);
    }, 2000);
  }
}
