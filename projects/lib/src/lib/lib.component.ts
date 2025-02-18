import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-lib',
  templateUrl: './lib.component.html',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class LibComponent {
  @Input() label: string = 'Button';
}
