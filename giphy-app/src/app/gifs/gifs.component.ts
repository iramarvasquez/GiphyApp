import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  gifs: any = [];
  pics!: string;

  constructor(private route: ActivatedRoute, private gifsService: GifsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.pics = params['pics'];

      this.gifsService.getGifs(this.pics).subscribe(gifs => {
        this.gifs = gifs;
      });
    });

  }

}