import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ReviewComponent } from './review/review.component';



const routes: Routes = [
  { path: '' , redirectTo: '/mainLoad',pathMatch: 'full'},
  {
    path: "mainLoad",
    loadChildren: () =>
      import("./upload/upload.module").then(m => m.uploadModule)
  },
  {
    path: "formPage",
    loadChildren: () =>
      import("./course/course.module").then(m => m.courseModule)
  },
  { path: 'review' , component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
