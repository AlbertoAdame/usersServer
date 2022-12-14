import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/users.interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {

  user!:User;
  paramsSubscription!: Subscription; //Admiracion pq no lo he inicializado, aunque esté demtrp de ngOnInit/ngOndestroy
  //pero ahí no lo reconoce, entonces ponemos la exclamación para decirle que entendemos lo que pasa

  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      email: this.route.snapshot.params['email']
    };

    this.paramsSubscription= this.route.params
  .subscribe(
    (updatedParams) => {
      this.user.id = updatedParams['id'];
      this.user.name = updatedParams['name'];
      this.user.email = updatedParams['email'];
    }
  );
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
