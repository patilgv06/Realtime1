import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public previous:any;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(this.previous,"---------",this.previous!=null)
      this.previous = params['type'];
      console.log(this.previous,"---------",this.previous!=null)
  });
  }


  previousRoute(){
    if(this.previous!=null && this.previous==='Old'){
      this.route.navigate(['dashboard']);
    }else{
      this.route.navigate(['settings']);
    }
  }

}
