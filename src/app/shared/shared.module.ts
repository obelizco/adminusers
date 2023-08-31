import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';


@NgModule({
    imports:[CommonModule],
    exports: [FilterUserByNamePipe],
    declarations:[FilterUserByNamePipe]
})
export class SharedModule {
}
