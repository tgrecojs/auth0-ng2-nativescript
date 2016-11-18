// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ExampleService } from './example.service';
/** Import LISTVIEW_DIRECTIVES from nativescript-telerik-ui/listview/angular */
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui/listview/angular';


@NgModule({
    declarations: [
        LISTVIEW_DIRECTIVES,
        AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    providers: [ExampleService]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);