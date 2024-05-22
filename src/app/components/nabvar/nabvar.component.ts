import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NabvarComponent { }
