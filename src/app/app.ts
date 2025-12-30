import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { downloadDocument } from './download-document';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <button (click)="downloadClick()">Download Document</button> `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('broken-module-mocking');

  downloadClick() {
    downloadDocument('htttp://test.dev');
  }
}
