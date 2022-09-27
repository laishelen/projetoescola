import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

import { ListaalunosComponent } from './components/listaalunos/listaalunos.component';
import { FormularioalunoComponent } from './components/formularioaluno/formularioaluno.component';
import { CropperComponent } from './components/cropper/cropper.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaalunosComponent,
    FormularioalunoComponent,
    CropperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
