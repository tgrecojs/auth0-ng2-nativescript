import {Component} from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "./dataItem";
import { ExampleService } from "./service.module";
import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    styles : [`
        label {
            background: orange;
        }
    `]
})
export class AppComponent {
    public counter: number = 16;
    public _dataItems;


       constructor(private _dataItemService: ExampleService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getItems());
    }
     public onItemReordered(args: ListViewEventData) {
        console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
