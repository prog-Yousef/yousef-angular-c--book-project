import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageSideNavComponent } from './components/page-side-nav/page-side-nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    PageSideNavComponent,
    PageNotFoundComponent, // Deklarera endast komponenter, direktiv eller pipes här
  ],
  imports: [
    CommonModule, // Lägg CommonModule här, inte i declarations
    MaterialModule,
  ],
  exports: [
    CommonModule, // Exportera så att andra moduler kan använda det
    MaterialModule,
    PageHeaderComponent, // Exportera också din komponent
  ],
})
export class SharedModule {}
