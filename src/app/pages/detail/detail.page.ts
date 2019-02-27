import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { Song } from '../../models/song.interface';
import { FirestoreService } from '../../services/data/firestore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public song: Observable<Song>;
  songId: string;
  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.songId = this.route.snapshot.paramMap.get('id');
    this.song = this.firestoreService.getSongDetail(this.songId).valueChanges();
  }

  async deleteSong() {
    const alert = await this.alertCtrl.create({
      message: 'Are you sure you want to delete the song?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.firestoreService.deleteSong(this.songId).then(() => {
              this.router.navigateByUrl('');
            });
          },
        },
      ],
    });

    await alert.present();
  }
}
