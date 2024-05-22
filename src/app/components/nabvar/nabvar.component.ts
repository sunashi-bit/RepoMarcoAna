import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  styleUrl: './nabvar.component.css',
  templateUrl: './nabvar.component.html',
  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NabvarComponent { }
