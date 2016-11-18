import { Component } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "./dataItem";
import { ExampleService } from "./example.service";
import { ListViewEventData } from "nativescript-telerik-ui/listview";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    styles: [`
        label {
            height: 50;
            border-width: 2;
            border-color: black;
        },
        .odd {
            background-color: red;
        }    
        .even {
            background-color: blue;
        }
    `]
})
export class AppComponent {
    public dataItems;

    constructor(private _dataItemService: ExampleService) {
    }

    get items(): ObservableArray<DataItem> {
        return this.dataItems;
    }

    ngOnInit() {
        this.dataItems = new ObservableArray(this._dataItemService.getItems());
    }
    public onItemReordered(args: ListViewEventData) {
        console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
    }
}
