import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  host: {
    class: 'block h-screen min-h-screen max-h-screen bg-gray-100 flex flex-col',
    role: 'application',
  },
  template: `
    <app-header />

    <main class="flex-grow relative overflow-auto">
      <router-outlet />
    </main>

    <app-footer />
  `,
})
export class App {}
