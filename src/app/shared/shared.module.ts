import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NumberPipe } from './number.pipe';
import { GridsterModule } from 'angular-gridster2';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        GridsterModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        NumberPipe,
        GridsterModule
    ],
    declarations: [
        NumberPipe
    ],
    providers: [],
})
export class SharedModule { }
