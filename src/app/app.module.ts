import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './common-components/header/header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SideNavigationComponent } from './common-components/side-navigation/side-navigation.component';
import { AddContainerComponent } from './container/add-container/add-container.component';
import { ListContainerComponent } from './container/list-container/list-container.component';
import { UpdateContainerComponent } from './container/update-container/update-container.component';
import { ViewContainerComponent } from './container/view-container/view-container.component';
import { AddPipelineComponent } from './pipeline/add-pipeline/add-pipeline.component';
import { ListPipelineComponent } from './pipeline/list-pipeline/list-pipeline.component';
import { AddExecutionComponent } from './execution/add-execution/add-execution.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import 'hammerjs';
@NgModule({
  declarations: [ 
    AppComponent, 
    LoginComponent, HomePageComponent,HeaderComponent, FooterComponent, SideNavigationComponent, AddContainerComponent, ListContainerComponent, UpdateContainerComponent, ViewContainerComponent, AddPipelineComponent, ListPipelineComponent, AddExecutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    MatChipsModule,
    MatExpansionModule,
    MatCheckboxModule,
    DragDropModule,
    MatBadgeModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
