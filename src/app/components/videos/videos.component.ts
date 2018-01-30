import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideosComponent implements OnInit {

  id:any;
  apiUrl = environment.apiUrl;
  video1:any;

  constructor(private _videosService:VideosService, private _activatedRoute:ActivatedRoute, public sanitizer: DomSanitizer ) { 
    this.id = _activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this._videosService.getDatos(this.id)
    .subscribe(data=>{
      console.log('desde el component');
      console.log(data);

     this.video1=data;
     $(".cont-videos").html('<video poster="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" width="400" height="400" style="width: 100%" autoplay><source src="'+this.apiUrl+'uploads/'+this.video1+'" type="video/mp4"></video>')
    });



  }

   cambiarVideo(video){
     var src = video;
     $(".cont-videos").html('<video poster="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" width="400" height="400" style="width: 100%" autoplay><source src="'+src+'" type="video/mp4"></video>')
   }

}
