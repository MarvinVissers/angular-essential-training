import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Appcomponent } from '.app.component';

@NgModule({
    import: [
        BrowserModule
    ],
    declarations: [
        Appcomponent
    ],
    bootstrap: [
        Appcomponent
    ]
})

export class AppModule {
    
}