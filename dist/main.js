/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/modules/addItem.js ***!
  \********************************/

function addItems(){
    class List{
        constructor(item){
            this.item=item
        }
    }
    class UI{
        static addItemToList(task){
            const list= document.querySelector("#tasks");

            const row= document.createElement("div");
            row.classList.add("row", "mt-1");

            row.innerHtml=`
                        <div class="col-sm-8" id="list-content">
                            <input type="text" class="form-control" readonly>
                        </div>
                        <div class="col-sm-4" id="list-btns">
                            <button class="btn btn-info"  id="edit"><i class="ri-pencil-fill"></i></button>
                            <button class="btn btn-danger" id="delete"><i class="ri-delete-bin-fill"></i></button>
                        </div>`

            list.appendChild(row);
        }
    }

    document.querySelector("#form").addEventListener("submit",(e)=>{
        
        e.preventDefault();
        const task= document.querySelector("#form-input").value;

        const item= new List(task);

        UI.addItemToList(item);        
    })
}

addItems();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2FkZEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIGFkZEl0ZW1zKCl7XHJcbiAgICBjbGFzcyBMaXN0e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGl0ZW0pe1xyXG4gICAgICAgICAgICB0aGlzLml0ZW09aXRlbVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsYXNzIFVJe1xyXG4gICAgICAgIHN0YXRpYyBhZGRJdGVtVG9MaXN0KHRhc2spe1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgcm93PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcIm10LTFcIik7XHJcblxyXG4gICAgICAgICAgICByb3cuaW5uZXJIdG1sPWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04XCIgaWQ9XCJsaXN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVhZG9ubHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIiBpZD1cImxpc3QtYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiICBpZD1cImVkaXRcIj48aSBjbGFzcz1cInJpLXBlbmNpbC1maWxsXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgaWQ9XCJkZWxldGVcIj48aSBjbGFzcz1cInJpLWRlbGV0ZS1iaW4tZmlsbFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG5cclxuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLChlKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB0YXNrPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0taW5wdXRcIikudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW09IG5ldyBMaXN0KHRhc2spO1xyXG5cclxuICAgICAgICBVSS5hZGRJdGVtVG9MaXN0KGl0ZW0pOyAgICAgICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5hZGRJdGVtcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==