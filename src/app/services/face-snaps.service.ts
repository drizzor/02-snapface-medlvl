import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: "Mon super titre",
            description: "Une description courte, mais éfficace",
            createdDate: new Date(),
            snaps: 9,
            imageUrl: "https://placehold.co/400x200/5A5A5A/FFFFFF",
            location: "Mon jardin",
            isSnapped: false,
        },
        {
            id: 2,
            title: "Wouf",
            description: "Qu'il est beau le toutou !",
            createdDate: new Date(),
            snaps: 350,
            imageUrl: "https://placehold.co/400x200/5A5A5A/FFFFFF",
            isSnapped: false,
        },
        {
            id: 3,
            title: "Ma nouvelle voiture",
            description: "Je ne suis pas un mytho",
            createdDate: new Date(),
            snaps: 50,
            imageUrl: "https://placehold.co/400x200/5A5A5A/FFFFFF",
            isSnapped: false,
        },
        {
            id: 4,
            title: "Mon poste bidon",
            description: "J'ai pas d'idée",
            createdDate: new Date(),
            snaps: 0,
            imageUrl: "https://placehold.co/400x200/5A5A5A/FFFFFF",
            isSnapped: false,
        },
        {
            id: 5,
            title: "Occaecat velit nostrud",
            description: "Occaecat consectetur esse est nisi quis nisi deserunt anim qui sit ullamco.",
            createdDate: new Date(),
            snaps: 3,
            imageUrl: "https://placehold.co/400x200/5A5A5A/FFFFFF",
            isSnapped: false,
        },
        {
            id: 6,
            title: "Et velit esse velit",
            description: "Est occaecat dolore magna sit aliquip.",
            createdDate: new Date(),
            snaps: 7,
            imageUrl: "https://placehold.co/400x200/5A5A5A/FFFFFF",
            isSnapped: true,
        },
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(search => search.id === faceSnapId);
        if (!faceSnap) throw new Error('FaceSnap not found!')
        else return faceSnap;
    }

    snapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.isSnapped ? faceSnap.snaps-- : faceSnap.snaps++;
    }
}