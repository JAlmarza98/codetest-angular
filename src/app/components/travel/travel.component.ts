import { Component, OnInit, Input } from '@angular/core';
import { InfoUsersService} from '../../services/info-users.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  @Input() i?:number;
  travel: any = {}

  constructor(public infoUser: InfoUsersService) { }

  ngOnInit(): void {
    this.travel= this.infoUser.getTravelData( this.i );
  }

}
