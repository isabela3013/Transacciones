import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ListboxModule} from 'primeng/listbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesPipe } from './Pipes/pipes.pipe';
import { IntegracionErrorComponent } from './componentes/integracion-error/integracion-error.component';
import { HeaderComponent } from './componentes/estilo/header/header.component';
import { FooterComponent } from './componentes/estilo/footer/footer.component';
import { ComparacionComponent } from './componentes/comparacion/comparacion.component';
import { MenubarModule } from 'primeng/menubar';
import { FiltrotablePipe } from './filtrotable.pipe';
import { Filtrotable1Pipe } from './filtrotable1.pipe';
import { FiltroerrorPipe } from './pipes/filtroerror.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesPipe,
    IntegracionErrorComponent,
    HeaderComponent,
    FooterComponent,
    ComparacionComponent,
    FiltrotablePipe,
    Filtrotable1Pipe,
    FiltroerrorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    TabMenuModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ListboxModule,
    MultiSelectModule,
    OverlayPanelModule,
    DynamicDialogModule,
    ToastModule,
    MenubarModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
