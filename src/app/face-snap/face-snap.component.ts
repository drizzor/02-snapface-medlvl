import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router) { }

  ngOnInit() { }

  onSnap() {
    if (!this.faceSnap.isSnapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.faceSnap.isSnapped = true;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.faceSnap.isSnapped = false;
    }
  }

  onViewFaceSnap(): void {
    this.router.navigateByUrl('facesnaps/' + this.faceSnap.id);
  }
}
