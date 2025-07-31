import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DocumentosPorUfComponent } from './documentos-por-uf/documentos-por-uf.component';
import { FluxoCaixaDiarioSemanaComponent } from './fluxo-caixa-diario-semana/fluxo-caixa-diario-semana.component';
import { VencimentoCertificadoDigitalComponent } from './vencimento-certificado-digital/vencimento-certificado-digital.component';

@Component({
  selector: 'app-pagina-inicial',
  imports: [FluxoCaixaDiarioSemanaComponent, VencimentoCertificadoDigitalComponent, DocumentosPorUfComponent],
  templateUrl: './pagina-inicial.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaInicialPage {}
