import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isPortModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showPortModal(){
    if(this.isPortModal == true){
      this.hidePortModal();
    }
    else{
      this.isPortModal = true;
    }
  }

  hidePortModal(){
    this.isPortModal = false;
  }

}
