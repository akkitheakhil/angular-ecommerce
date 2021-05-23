import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsEmptyPipe } from './utils/pipes/is-empty.pipe';
import { CategoryButtonComponent } from './components/category-button/category-button.component';

const components = [ CategoryButtonComponent ];
const pipe = [ IsEmptyPipe]

@NgModule({
  declarations: [
    ...components,
    ...pipe
  ],
  imports: [
    CommonModule
  ],
  exports: [...components,
    ...pipe]
})
export class SharedModule { }
