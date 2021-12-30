import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { SideBarComponent } from './pages/admin/side-bar/side-bar.component';
import { AllClientComponent } from './pages/admin/all-client/all-client.component';
import { AddClientComponent } from './pages/admin/add-client/add-client.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserdetailsComponent } from './pages/admin/userdetails/userdetails.component';
import { DepositeDialogComponent } from './pages/admin/deposite-dialog/deposite-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HistoryDetailComponent } from './pages/admin/history-detail/history-detail.component';
import { DuelistComponent } from './pages/admin/duelist/duelist.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    WelcomeComponent,
    SideBarComponent,
    AllClientComponent,
    AddClientComponent,
    UserdetailsComponent,
    DepositeDialogComponent,
    HistoryDetailComponent,
    DuelistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground : true
    }),
    MatSidenavModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
