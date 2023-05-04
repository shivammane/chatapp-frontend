import { Component, Input } from '@angular/core';
import { faArrowLeft, faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-receiver-info',
  templateUrl: './receiver-info.component.html',
  styleUrls: ['./receiver-info.component.css']
})
export class ReceiverInfoComponent {
  backIcon = faArrowLeft
  threeDotMenuIcon = faEllipsisVertical
  searchIcon = faMagnifyingGlass

  count = 0

  @Input()
  element1: any;
  @Input()
  element2: any;
  @Input()
  receiverName: string | null = ''

  close() {
    this.element1.classList.remove("translate-y-[100vh]")
    this.element2.classList.remove("translate-y-[100vh]")
  }
}
