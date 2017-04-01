const led = require('./lib/led.js');

module.exports = {
  rainbow: function() {
    //35 Colors For Each LED
    var colors = [
      '#ecff00',
      '#c1ff00',
      '#91ff00',
      '#56ff00',
      '#28ff00',
      '#02ff00',
      '#00ff1c',
      '#00ff43',
      '#00ff78',
      '#00ffa7',
      '#00ffd6',
      '#00fff7',
      '#00efff',
      '#00c0ff',
      '#008aff',
      '#0052ff',
      '#0024ff',
      '#0001ff',
      '#1b00ff',
      '#4600ff',
      '#7000ff',
      '#a100ff',
      '#cc00ff',
      '#f000ff',
      '#f000ff',
      '#ff00bd',
      '#ff008f',
      '#ff004f',
      '#ff0012',
      '#ff0700',
      '#ff2b00',
      '#ff5c00',
      '#ff9500',
      '#ffcb00',
      '#fff700',
    ];

    var colorFill = [];//Second array to slowly fill iris with color
    var counter = 0;

    setInterval(function(){
      if(counter < 35){//Transfer colors over
        colorFill[counter] = colors[counter];
        counter++;
      }
      else{//Shift array for rotation effect
        colorFill.unshift(colorFill[34]);
        colorFill.pop();
      }
      led(colorFill).render();//Update current Lights
    }, 15);
  }
};
