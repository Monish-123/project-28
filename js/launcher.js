class Launcher{
  constructor(body,point){
      var options = {
          bodyA : body,
          pointB : point,
          stiffness : 0.004,
          length:1
      }
      this.bodyA = body;
      this.pointB = point;
      this.launcher = Constraint.create(options)
      World.add(world,this.launcher)
  }
  fly(){
      this.launcher.bodyA=null;
  }
  attach(body){
      this.launcher.bodyA=body
  }
  display(){
      if(this.launcher.bodyA){
          var pointA = this.bodyA.position;
          strokeWeight(2)
          line(pointA.x,pointA.y,this.pointB.x,this.pointB.y)
      }
  }
}