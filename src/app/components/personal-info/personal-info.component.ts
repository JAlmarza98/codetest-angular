import { Component, OnInit, Input } from '@angular/core';
import { InfoUsersService} from '../../services/info-users.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input() i?:number;
  user: any = {};

  constructor(public infoUser: InfoUsersService) { }

  ngOnInit(): void {
    this.user= this.infoUser.getPersonalData( this.i );
  }

}
