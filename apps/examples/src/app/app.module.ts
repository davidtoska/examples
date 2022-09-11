import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Route, RouterModule } from '@angular/router';
import { ObjectComponent } from './pages/object/object.component';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ROUTES } from './constants';
import { GridComponent } from './pages/grid/grid.component';
import { AbsolutePositioningComponent } from './pages/absolute-positioning/absolute-positioning.component';
import { AbsComponentComponent } from './components/abs-component/abs-component.component';

const routes: Route[] = [
  { path: ROUTES.rxjs, component: HomeComponent },
  { path: ROUTES.object, component: ObjectComponent },
  { path: ROUTES.grid, component: GridComponent },
  { path: ROUTES.absolutePositioning, component: AbsolutePositioningComponent },
  { path: '**', redirectTo: ROUTES.grid },
];
@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    ObjectComponent,
    HomeComponent,
    GridComponent,
    AbsolutePositioningComponent,
    AbsComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
