import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { tap, interval, take, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    // Ici sera passé un bool qui permettra l'arrêt de l'observable
    this.destroy$ = new Subject<boolean>();

    // Limiter l'Observable à une ou plusieurs valeurs avec l'opérateur take :
    interval(1000).pipe(
      // take(5),
      takeUntil(this.destroy$),
      tap(value => console.log(value))
    ).subscribe();
  }

  // Lorsque j'ai besoin de toutes l'émission de l'Observable et donc le garder en vie, mais sans connaitre à l'avance le nombre d'occurence.
  // Je vais alors détruire l'observable avec le hook si dessous, il est à l'inverse de ngOntInit car s'execute lorsque le component est détruit. 
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
