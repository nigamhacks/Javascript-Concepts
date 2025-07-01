
function Circle(radius) {
    let color='red';
    this.radius = radius;

    let defaultLocation={x:0, y:0};
    // this.computOptimumLocation= function(){
    //     //...
    // }
        this.getDefaultlocation =function(){
            return defaultLocation;
        };
    this.draw = function () {

    
        // this.computOptimumLocation(0.1);
        //if you want use new Circle Object then, 
        //defaultLocation
        //this.radius
        console.log('draw');
    };
    //We use Object for defining the getter or setter
        Object.defineProperty(this,'defaultLocation',{
            //getter
            get:function(){
                return defaultLocation;
            },
            //setter
            set:function(value){
                if(!value.x ||!value.y)
                defaultLocation=value;
                throw new Error('Invalid Location');
            }
        });
    
}
   
const circle = new Circle(1); 
circle.defaultLocation=1;
circle.draw();

