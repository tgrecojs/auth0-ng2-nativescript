"use strict";
// >> listview-angular-data-item
var DataItem = (function () {
    function DataItem(id, name, description, title, text, image, selected) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.title = title;
        this.text = text;
        this.image = image;
        this.selected = selected;
    }
    return DataItem;
}());
exports.DataItem = DataItem;
// << listview-angular-data-item 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YUl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksa0JBQW1CLEVBQVcsRUFBUyxJQUFhLEVBQVMsV0FBb0IsRUFBUyxLQUFjLEVBQVMsSUFBYSxFQUFTLEtBQWMsRUFBUyxRQUFrQjtRQUE3SixPQUFFLEdBQUYsRUFBRSxDQUFTO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUFTLFNBQUksR0FBSixJQUFJLENBQVM7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUNoTCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksNEJBQVE7QUFJckIsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gbGlzdHZpZXctYW5ndWxhci1kYXRhLWl0ZW1cbmV4cG9ydCBjbGFzcyBEYXRhSXRlbSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGlkPzogbnVtYmVyLCBwdWJsaWMgbmFtZT86IHN0cmluZywgcHVibGljIGRlc2NyaXB0aW9uPzogc3RyaW5nLCBwdWJsaWMgdGl0bGU/OiBzdHJpbmcsIHB1YmxpYyB0ZXh0Pzogc3RyaW5nLCBwdWJsaWMgaW1hZ2U/OiBzdHJpbmcsIHB1YmxpYyBzZWxlY3RlZD86IGJvb2xlYW4pIHtcbiAgICB9XG59XG4vLyA8PCBsaXN0dmlldy1hbmd1bGFyLWRhdGEtaXRlbSJdfQ==