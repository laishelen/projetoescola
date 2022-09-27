import { Component, OnInit,Input } from '@angular/core';
import { FormularioalunoComponent } from '../formularioaluno/formularioaluno.component';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit {

    imageChangedEvent: any = '';
    croppedImage: any = '';

    constructor(private formularioalunoComponent:FormularioalunoComponent) { }

    ngOnInit(): void {
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }

    imageLoaded() {
    }

    cropperReady() {
    }

    loadImageFailed() {
    }

    showImage(){
    }

    guardarFoto(){
        this.formularioalunoComponent.detalhealuno.Foto=this.croppedImage;
        this.croppedImage='';
        this.imageChangedEvent='';
    }
}
