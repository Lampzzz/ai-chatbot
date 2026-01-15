import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {
  sidebarCollapsed = input<boolean>(false);
  toggleSidebar = output<void>();
}
