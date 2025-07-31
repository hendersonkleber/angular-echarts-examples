import { Theme, ThemeManager } from '@/services/theme-manager.service';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly themeManager = inject(ThemeManager);

  public readonly theme = computed(() => {
    return this.themeManager.theme();
  });

  changeTheme(theme: Theme) {
    this.themeManager.setTheme(theme === 'dark' ? 'light' : 'dark');
  }
}
