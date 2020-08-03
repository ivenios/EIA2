namespace endabgabe2 {




    export class PlaceableObjects {
        type: string;
        x: number;
        y: number;
        color: string;
        scale: number;

        constructor() {
            //;
        }
    
        renderObject(): void {
            //;
        }
        animateObject(): void {
            //;
        }
    
        updateObject(): void {
            this.animateObject();
            this.renderObject();

        }
    
    
    
    }


}