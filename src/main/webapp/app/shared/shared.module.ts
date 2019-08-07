import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FsrSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FsrSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FsrSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FsrSharedModule {
  static forRoot() {
    return {
      ngModule: FsrSharedModule
    };
  }
}
