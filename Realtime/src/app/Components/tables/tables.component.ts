import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  
  headers=[ 'Id' , 'Name','Age', 'Gender','Country']
rows=[
  {
    "Id":1,
    "Name":'vishal',
    "Age":26,
    "Gender":'Male',
    "Country":'India'

  }, 
  {
    "Id":2,
    "Name":'Ronny',
    "Age":31,
    "Gender":'Male',
    "Country":'Thailand'

  },
  {
    "Id":3,
    "Name":'Tom',
    "Age":45,
    "Gender":'Male',
    "Country":'UK'

  },
    {
    "Id":4,
    "Name":'lisa',
    "Age":22,
    "Gender":'Female',
    "Country":'Southkorea'

  }, 
   {
    "Id":5,
    "Name":'sam',
    "Age":23,
    "Gender":'Male',
    "Country":'USA'

  }, 
   {
    "Id":6,
    "Name":'Badri',
    "Age":34,
    "Gender":'Male',
    "Country":'Keneya'

  }, 
   {
    "Id":7,
    "Name":'Norkiya',
    "Age":26,
    "Gender":'Male',
    "Country":'SouthAfrica'

  },
   {
    "Id":8,
    "Name":'Raussal',
    "Age":26,
    "Gender":'Male',
    "Country":'Westindies'

  },  
  {
    "Id":9,
    "Name":'kiaran',
    "Age":35,
    "Gender":'Male',
    "Country":'Australia'

  },
    {
    "Id":10,
    "Name":'Shikhar',
    "Age":29,
    "Gender":'Male',
    "Country":'France'

  },
  {
    "Id":11,
    "Name":'Abd',
    "Age":38,
    "Gender":'Male',
    "Country":'China'

  }

 
]

constructor() { }

ngOnInit(): void {
}
}
