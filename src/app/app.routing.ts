import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { StudentListComponent } from './student-list/student-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'student-list',
    component: StudentListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
