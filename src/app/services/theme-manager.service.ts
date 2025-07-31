import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { Subject } from 'rxjs';

export const THEME_LOCAL_STORAGE_KEY = 'theme_preference';
export const DARK_MODE_CLASS_NAME = 'dark';
export const LIGHT_MODE_CLASS_NAME = 'light';
export const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

export type Theme = 'light' | 'dark';

function preferedScheme(): 'dark' | 'light' {
  return window.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches ? 'dark' : 'light';
}

@Injectable({ providedIn: 'root' })
export class ThemeManager {
  private readonly document = inject(DOCUMENT);
  private readonly plataformID = inject(PLATFORM_ID);

  readonly theme = signal<Theme>(this.getThemeFromLocalStorage() ?? preferedScheme());
  readonly themeChanged$ = new Subject<void>();

  constructor() {
    if (!isPlatformBrowser(this.plataformID)) {
      return;
    }

    this.loadThemePreference();
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.updateLocalStorage(theme);
    this.updateDocumentClasses(theme);
  }

  getTheme(): 'dark' | 'light' {
    return this.theme();
  }

  private loadThemePreference() {
    const themeSaved = this.getThemeFromLocalStorage();
    const theme = themeSaved ?? preferedScheme();

    this.theme.set(theme);
    this.updateDocumentClasses(theme);
  }

  private getThemeFromLocalStorage(): Theme | null {
    return (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme | null) ?? null;
  }

  private updateLocalStorage(theme: Theme) {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }

  private updateDocumentClasses(theme: 'dark' | 'light'): void {
    const documentoClasslist = this.document.documentElement.classList;

    if (theme === 'dark') {
      documentoClasslist.remove(LIGHT_MODE_CLASS_NAME);
      documentoClasslist.add(DARK_MODE_CLASS_NAME);
    } else {
      documentoClasslist.remove(DARK_MODE_CLASS_NAME);
      documentoClasslist.add(LIGHT_MODE_CLASS_NAME);
    }

    this.themeChanged$.next();
  }
}
