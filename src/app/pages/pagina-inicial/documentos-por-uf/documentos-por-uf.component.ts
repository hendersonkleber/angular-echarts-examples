import { ChartComponent } from '@/components/chart/chart.component';
import { LoaderComponent } from '@/components/loader/loader.component';
import { ESTADOS_BRASILEIROS } from '@/constants/estados-brasileiros';
import { ESTADOS_BRASILEIROS_COORDENADAS } from '@/constants/estados-brasileiros-coordenadas';
import { ChartInitOptions, ChartOptions } from '@/utils/echarts';
import { NumeroUtil } from '@/utils/numero';
import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-documentos-por-uf',
  imports: [ChartComponent, LoaderComponent],
  host: {
    class:
      'block relative h-full w-full flex flex-col bg-card-background text-card-foreground overflow-hidden rounded-lg shadow ring-1 ring-black/40 dark:ring-white/40 p-4',
  },
  templateUrl: './documentos-por-uf.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentosPorUfComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly carregando = signal<boolean>(false);

  protected readonly options = signal<ChartOptions | null>(null);
  protected readonly rendererOptions = signal<ChartInitOptions | null>(null);

  ngOnInit(): void {
    this.obterRegistros();
  }

  obterRegistros() {
    this.carregando.set(true);

    const response = [
      { uf: 'AC', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'AL', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'AM', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'AP', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'BA', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'CE', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'DF', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'ES', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'GO', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'MA', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'MG', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'MS', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'MT', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'PA', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'PB', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'PE', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'PI', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'PR', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'RJ', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'RN', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'RO', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'RR', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'RS', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'SC', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'SE', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'SP', quantidade: NumeroUtil.aleatorio(5, 100) },
      { uf: 'TO', quantidade: NumeroUtil.aleatorio(5, 100) },
    ];

    const ufComMaisQuantidade = response.reduce(
      (acc, at) => {
        if (at.quantidade >= acc.quantidade) return at;
        return acc;
      },
      { uf: '', quantidade: 0 }
    );

    const options = {
      title: {
        show: true,
        text: 'Documentos por UF',
      },
      tooltip: {
        trigger: 'item',
      },
      series: {
        name: 'Quantidade de documentos',
        type: 'map',
        roam: 'move',
        map: 'BRASIL',
        center: ESTADOS_BRASILEIROS_COORDENADAS[ufComMaisQuantidade.uf],
        zoom: 2.5,

        label: {
          show: false,
        },

        select: {
          disabled: true,
        },

        emphasis: {
          label: {
            show: false,
          },
        },

        data: response.map(r => {
          const estado = ESTADOS_BRASILEIROS.find(e => e.uf === r.uf);

          return {
            name: estado!.nome,
            value: r.quantidade,
          };
        }),
      },
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
