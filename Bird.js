class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    
    
    if(this.body.velocity.x>10&&this.body.position.x>210){
      this.trajectory.push([this.body.position.x,this.body.position.y]);
    }

    for(var i=0;i<this.trajectory.length;i++){
      image(this.smoke, this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}

/*
var i = 0;
i = i + 1;
i < trajectory.length


trajectory[0][0], trajectory[0][1]
trajectory[1][0], trajectory[1][1]
trajectory[2][0], trajectory[2][1]
trajectory[3][0], trajectory[3][1]
.
.
trajectory[length-1][0], trajectory[length-1][1]
*/
