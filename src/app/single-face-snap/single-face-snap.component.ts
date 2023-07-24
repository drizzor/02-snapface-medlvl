import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // le '+' avant this permet de transformer la valeur en nombre car ici il s'agit du paramètre repris depuis la barre de navigation (un string) et je souhaite obtenir un nombre
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (!this.faceSnap.isSnapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.faceSnap.isSnapped = true;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.faceSnap.isSnapped = false;
    }
  }

}
