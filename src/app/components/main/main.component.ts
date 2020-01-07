import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DescriptionParams } from 'src/app/models/descriptionParams';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ApiService]
})
export class MainComponent implements OnInit {
  isShow: boolean;
  item: DescriptionParams;
  title: string;
  desc: string;
  topPosToStartShowing = 100;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.isShow = false;
    this.getTitle();
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    scrollPosition >= this.topPosToStartShowing ? this.isShow = true : this.isShow = false;
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  getTitle() {
    this.api.getTitleAndDesc().subscribe(resp => {
      this.item = resp[0];
    }, error => console.log(error))
  }

}