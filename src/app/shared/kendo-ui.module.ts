import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogModule, WindowModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DatePickerModule, TimePickerModule } from '@progress/kendo-angular-dateinputs';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { EditorModule } from '@progress/kendo-angular-editor';

const KendoComponents = [
  GridModule,
  ButtonsModule,
  DropDownsModule,
  DialogModule,
  WindowModule,
  InputsModule,
  DatePickerModule,
  TimePickerModule,
  SortableModule,
  EditorModule,
];

@NgModule({
  imports: [KendoComponents],
  exports: [KendoComponents]
})
export class KendoUiModule {
  constructor() {
    console.log(this.constructor.name, "loaded.");
  }
}
