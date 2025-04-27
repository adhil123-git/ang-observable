import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  dummydata: any[] = [];

  constructor(private userService: UserService) {}

  showdata() {
    this.userService.getdummydata().subscribe((data: any[]) => {
      this.dummydata = data;
      console.log(this.dummydata);
    });
  }
}
