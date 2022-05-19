
let bigBang= Date.now();
let frameStart = 0;
let frame=0;


/**
 * 
 * @param {number} framePerSecond 
 * @param {(frame:number,gameTime:number,eachFrameTime:number)=>VoidFunction} onAnimate 
 */
export function runAnimation(framePerSecond,onAnimate){
  const eachFrameTime = 1000 / framePerSecond;

  if(Date.now()>=eachFrameTime+frameStart){
    frameStart=Date.now();
    frame++;
    const gameTime = Date.now()-bigBang;
    onAnimate(frame,gameTime,eachFrameTime)
  }

  window.requestAnimationFrame(()=>runAnimation(framePerSecond,onAnimate))
}
