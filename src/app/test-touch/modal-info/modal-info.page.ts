import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController , NavParams } from '@ionic/angular';
@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  element;

  constructor(private modalCtrl: ModalController, private navParams: NavParams) {
    const element = navParams.get("element");
    console.log('element:', element);
    this.element = element;
   }

   isPlaying = false;
   progress = 0;

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Esta función se llama después de que Angular ha inicializado completamente la vista del componente.
    // Aseguramos que audioPlayer está definido antes de intentar usarlo.
    if(this.audioPlayer?.nativeElement){
      this.audioPlayer.nativeElement.onloadeddata = () => this.audioLoaded();
      this.audioPlayer.nativeElement.ontimeupdate = () => this.updateProgress();
    }
   
  }

  togglePlayPause() {
    const audio = this.audioPlayer.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    const audio = this.audioPlayer.nativeElement;
    this.progress = (audio.currentTime / audio.duration) * 100;
  }

  audioLoaded() {
    this.isPlaying = false;
  }

  seek(e: any) {
    const audio = this.audioPlayer.nativeElement;
    const ratio = e.offsetX / e.target.offsetWidth;
    audio.currentTime = ratio * audio.duration;
  }


  closeModal() {
    this.modalCtrl.dismiss();
  }
}
