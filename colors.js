var Body = {
  setColor : function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor : function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}

var Links = {
  setColor : function (color){
    // var links = document.querySelectorAll('a');
    // var i = 0;
    // while(i<links.length){
    //   links[i].style.color = color ;
    //   i=i+1;
    // }
    $('a').css('color',color);
  }
}

function NightDayHandler1(self){
  var target = document.querySelector('body');
  if(self.value === '토글1: 야간모드로 변경'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = '토글1: 주간모드로 변경';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = '토글1: 야간모드로 변경';
    Links.setColor('blue');
  }
}
function NightDayHandler2(self){
  var target = document.querySelector('body');
  if(self.value === '토글2: 야간모드로 변경'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = '토글2: 주간모드로 변경';
    Links.setColor('tomato');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = '토글2: 야간모드로 변경';
    Links.setColor('red');
  }
}
