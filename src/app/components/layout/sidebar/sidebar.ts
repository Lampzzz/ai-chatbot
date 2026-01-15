import { Component, signal, output, input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, Chat } from 'src/app/interface/types';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  collapsed = input<boolean>(false);
  isCollapsed = signal(false);
  toggleEvent = output<boolean>();

  constructor() {
    effect(() => {
      this.isCollapsed.set(this.collapsed());
    });
  }

  chats = signal<Chat[]>([
    { id: 1, title: 'Angular AI ChatApp Plan' },
    { id: 2, title: 'Adding Rules in Cursor' },
    { id: 3, title: 'Learning How to Learn' },
    { id: 4, title: 'Sentence Enhancement Req...' },
    { id: 5, title: 'React vs Angular Comparison' },
    { id: 6, title: 'TypeScript Best Practices' },
  ]);

  projects = signal<Project[]>([
    { id: 1, name: 'GitHub' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'Skin Care' },
  ]);

  toggleSidebar() {
    const newState = !this.isCollapsed();
    this.toggleEvent.emit(newState);
  }
}
