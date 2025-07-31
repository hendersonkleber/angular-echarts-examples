import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DocumentosPorUfComponent } from './documentos-por-uf/documentos-por-uf.component';
import { FinanceiroRegistrosPorDiaComponent } from './financeiro-registros-por-dia/financeiro-registros-por-dia.component';
import { FinanceiroResumoDespesasComponent } from './financeiro-resumo-despesas/financeiro-resumo-despesas.component';
import { FinanceiroResumoReceitasComponent } from './financeiro-resumo-receitas/financeiro-resumo-receitas.component';
import { FluxoCaixaDiarioSemanaComponent } from './fluxo-caixa-diario-semana/fluxo-caixa-diario-semana.component';
import { VencimentoCertificadoDigitalComponent } from './vencimento-certificado-digital/vencimento-certificado-digital.component';

@Component({
  selector: 'app-pagina-inicial',
  imports: [
    FluxoCaixaDiarioSemanaComponent,
    VencimentoCertificadoDigitalComponent,
    DocumentosPorUfComponent,
    FinanceiroRegistrosPorDiaComponent,
    FinanceiroResumoDespesasComponent,
    FinanceiroResumoReceitasComponent,
  ],
  templateUrl: './pagina-inicial.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaInicialPage {}
