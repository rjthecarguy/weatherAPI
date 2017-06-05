import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


	posts: any;
	city: any;

  constructor(public navCtrl: NavController , public http: Http) {

  	this.http.get('http://api.apixu.com/v1/current.json?key=c43696cc263744d4afe185513172705&q=34.06,-117.18').map(res => res.json()).subscribe(data => {
        this.posts = data;

        console.log(data);

        this.posts = data.current.feelslike_f;
        this.city = data.location.name;
    });



  }

}
