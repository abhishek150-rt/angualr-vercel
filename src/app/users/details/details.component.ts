import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrenyConverterPipe } from '../../pipes/curreny-converter.pipe';
import { User } from '../../interface/user';

@Component({
  selector: 'app-details',
  imports: [CommonModule, CurrenyConverterPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  @Input() userType: string | null = null;

  @Input() user: User | null = null;

  @Output() getUserById = new EventEmitter();
  counter: number = 0;

  handleClick(id: number | undefined) {
    if (id) this.getUserById.emit(id);
    this.counter++;
  }
}
