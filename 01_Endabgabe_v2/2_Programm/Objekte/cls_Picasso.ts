namespace endabgabe2 {


    export class Picasso extends MovingCompany {
        dcolor: string;
        dscale: number;
        drotation: number;

        constructor() {
            super();
        }

        renderObject(): void {
            //;
        }

        animateObject(): void {
            //; 

        }

        alterObject(): void {
            //;
        }
    
        updateObject(): void {
            this.renderObject();
            this.animateObject();
            this.alterObject();
        }



    }



}