import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../components/layout/sidebar/sidebar';
import { MainContent } from '../../components/layout/main-content/main-content';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Sidebar, MainContent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  sidebarCollapsed = signal(false);

  onSidebarToggle(collapsed: boolean) {
    this.sidebarCollapsed.set(collapsed);
  }

  toggleSidebar() {
    this.sidebarCollapsed.update((value) => !value);
  }
}
