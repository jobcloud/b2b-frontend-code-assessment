import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { ProductTypePipe} from './pipes/product-type.pipe';
import { LanguageLevelPipe} from './pipes/language-level.pipe'
import { JobsApiEffects } from "./effects/jobs.effect";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: ListComponent}
     ]),
    EffectsModule.forFeature([JobsApiEffects])
  ],
  declarations: [
    JobsListComponent,
    ListComponent,
    CreateComponent,
    ProductTypePipe,
    LanguageLevelPipe

  ]
})
export class JobsModule {}
