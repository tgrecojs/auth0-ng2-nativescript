import { NgModule } from '@angular/core';
import { ExampleService } from './example.service';

@NgModule({

})
export class ServicesModule {
    static forRoot(){
        return {
            ngModule: ServicesModule,
            providers: [ExampleService] 
        }
    }
}

export {
    ExampleService
}