import { SkeletonComponent } from '@/components/skeleton/skeleton.component';
import { NumeroUtil } from '@/utils/numero';
import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal, type OnInit } from '@angular/core';

@Component({
  selector: 'app-financeiro-resumo-despesas',
  imports: [SkeletonComponent, CurrencyPipe],
  host: {
    class:
      'relative h-full w-full flex flex-col bg-white dark:bg-[#404040] overflow-hidden rounded-lg shadow ring-1 ring-red-500',
  },
  templateUrl: './financeiro-resumo-despesas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceiroResumoDespesasComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly resumo = signal<{
    valorTotal: number;
    valorTotalMovimentado: number;
    valorTotalAberto: number;
    valorTotalJuros: number;
    valorTotalAcrescimos: number;
    valorTotalDescontos: number;
  } | null>(null);

  protected readonly carregando = signal<boolean>(false);

  ngOnInit(): void {
    this.registrarEventos();
  }

  registrarEventos() {
    this.carregando.set(true);

    setTimeout(() => {
      this.resumo.set({
        valorTotal: NumeroUtil.aleatorio(0, 100000),
        valorTotalMovimentado: NumeroUtil.aleatorio(0, 50000),
        valorTotalAberto: NumeroUtil.aleatorio(0, 50000),
        valorTotalJuros: NumeroUtil.aleatorio(0, 1000),
        valorTotalAcrescimos: NumeroUtil.aleatorio(0, 1000),
        valorTotalDescontos: NumeroUtil.aleatorio(0, 1000),
      });

      this.carregando.set(false);
    }, 2000);
  }
}
