import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PaginaInicialFluxoCaixaDiarioSemanaComponent } from './pagina-inicial-fluxo-caixa-diario-semana/pagina-inicial-fluxo-caixa-diario-semana.component';

@Component({
  selector: 'app-pagina-inicial',
  imports: [PaginaInicialFluxoCaixaDiarioSemanaComponent],
  templateUrl: './pagina-inicial.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaInicialPage {}
