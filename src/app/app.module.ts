import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppCompoment } from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppCompoment
    ],
    bootstrap: [
        AppCompoment
    ]
}) 
export class AppModule {}