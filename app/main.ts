// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui-pro/listview/angular';
import { ServicesModule } from './service.module';

@NgModule({
    declarations: [
        LISTVIEW_DIRECTIVES,
        AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, 
    ServicesModule.forRoot()]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);