var background1;
var path;
var hero;

function preload(){
  
   bagImg=loadImage("images/bg1.png");
   bg12=loadImage("images/bg1.png")
   chidle=loadAnimation("png/idle1.png","png/idle2.png","png/idle3.png","png/idle4.png","png/idle5.png","png/idle6.png","png/idle7.png","png/idle8.png","png/idle9.png","png/idle10.png");
   chlidle=loadAnimation("png/idle21.png","png/idle22.png","png/idle23.png","png/idle24.png","png/idle25.png","png/idle26.png","png/idle27.png","png/idle28.png","png/idle29.png","png/idle210.png");
   chwalk=loadAnimation("png/run1.png","png/run2.png","png/run3.png","png/run4.png","png/run5.png","png/run6.png","png/run7.png","png/run8.png");
   chwalkleft=loadAnimation("png/run21.png","png/run22.png","png/run23.png","png/run24.png","png/run25.png","png/run26.png","png/run27.png","png/run28.png");
   st1=loadImage("images/st1.png");
   st2=loadImage("images/st2.png");
   st3=loadImage("images/st3.png");
   st4=loadImage("images/st4.png");
   st5=loadImage("images/st5.png");
   st6=loadImage("images/st6.png");
   st7=loadImage("images/st7.png");
   ladder=loadImage("images/lad.png")
   statue=loadImage("images/stat.png")
   decstone=loadImage("images/decstone.png");
   si2=loadImage("images/sign2.png");
  si3=loadImage("images/sign3.png");

  }


function setup() {
  createCanvas(3268,520);

  chwalk.frameDelay=2
  chwalkleft.frameDelay=2

  bag1=createSprite(600,200,1250,520);
  bag1.addImage(bagImg);
  bag12=createSprite(1934,200,1250,520);
  bag12.addImage(bg12);
  bag13=createSprite(3268,200,1250,520);
  bag13.addImage(bg12);
  sign2=createSprite(320,107,20,40);
  sign2.addImage(si2);
  sign2.scale=0.5
  sign3=createSprite(1120,290,20,40);
  sign3.addImage(si3);
  sign3.scale=0.5

  hero=createSprite(110,355,27,27);
  hero.addAnimation("idle",chidle);
  hero.addAnimation("running",chwalk)
  hero.addAnimation("idleleft",chlidle);
  hero.addAnimation("runningleft",chwalkleft);
  hero.scale=0.16;
  sto1=createSprite(295,425,20,20)
  sto1.addImage(st2);
  sto1.scale=0.5;
  sto2=createSprite(231,425,20,20)
  sto2.addImage(st1);
  sto2.scale=0.5
  sto3=createSprite(167,425,20,20)
  sto3.addImage(st1);
  sto3.scale=0.5
  sto4=createSprite(103,425,20,20)
  sto4.addImage(st1);
  sto4.scale=0.5
  sto5=createSprite(39,425,20,20)
  sto5.addImage(st1);
  sto5.scale=0.5
  sto6=createSprite(30,425,20,20)
  sto6.addImage(st1);
  sto6.scale=0.5
  sto7=createSprite(30,487,20,20)
  sto7.addImage(st3);
  sto7.scale=0.5;
  sto8=createSprite(39,487,20,20)
  sto8.addImage(st3);
  sto8.scale=0.5
  sto9=createSprite(103,487,20,20)
  sto9.addImage(st3);
  sto9.scale=0.5;
  sto10=createSprite(167,487,20,20)
  sto10.addImage(st3);
  sto10.scale=0.5;
  sto11=createSprite(231,487,20,20)
  sto11.addImage(st3);
  sto11.scale=0.5
  sto12=createSprite(245,487,20,20)
  sto12.addImage(st3);
  sto12.scale=0.5;
  sto13=createSprite(295,487,20,20)
  sto13.addImage(st4);
  sto13.scale=0.5
 
  sto14=createSprite(496,130,20,20)
  sto14.addImage(st5);
  sto14.scale=0.5;
  sto15=createSprite(560,130,20,20)
  sto15.addImage(st6);
  sto15.scale=0.5;
  sto16=createSprite(624,130,100,120)
  sto16.addImage(st7);
  sto16.scale=0.5;

  sto17=createSprite(494,470,100,120)
  sto17.addImage(st5);
  sto17.scale=0.5;
  sto18=createSprite(554,470,100,120)
  sto18.addImage(st6);
  sto18.scale=0.5;
  sto19=createSprite(614,470,100,120)
  sto19.addImage(st6);
  sto19.scale=0.5;
  sto20=createSprite(674,470,100,120)
  sto20.addImage(st6);
  sto20.scale=0.5;
  sto21=createSprite(734,470,100,120)
  sto21.addImage(st6);
  sto21.scale=0.5;
  sto22=createSprite(794,470,100,120)
  sto22.addImage(st7);
  sto22.scale=0.5;

  lad1=createSprite(614,410,95,20)
  lad1.addImage(ladder);
  lad1.scale=0.5
  lad2=createSprite(614,360,95,20)
  lad2.addImage(ladder);
  lad2.scale=0.5
  lad3=createSprite(614,310,95,20)
  lad3.addImage(ladder);
  lad3.scale=0.5
  lad4=createSprite(614,260,95,20)
  lad4.addImage(ladder);
  lad4.scale=0.5
  lad5=createSprite(614,210,95,20)
  lad5.addImage(ladder);
  lad5.scale=0.5;
  lad6=createSprite(614,160,95,20)
  lad6.addImage(ladder);
  lad6.scale=0.5
  lad7=createSprite(614,110,95,20)
  lad7.addImage(ladder);
  lad7.scale=0.5

  stat1=createSprite(734,377,200,160)
  stat1.addImage(statue);
  stat1.scale=0.5;

  sto23=createSprite(100,160,100,120)
  sto23.addImage(st5);
  sto23.scale=0.5;
  sto24=createSprite(160,160,100,120)
  sto24.addImage(st6);
  sto24.scale=0.5;
  sto25=createSprite(220,160,100,120)
  sto25.addImage(st6);
  sto25.scale=0.5;
  sto26=createSprite(280,160,100,120)
  sto26.addImage(st6);
  sto26.scale=0.5;
  sto28=createSprite(340,160,100,120)
  sto28.addImage(st7);
  sto28.scale=0.5;

  sto29=createSprite(820,180,100,120)
  sto29.addImage(st5);
  sto29.scale=0.5;
  sto30=createSprite(880,180,100,120)
  sto30.addImage(st6);
  sto30.scale=0.5;
  sto31=createSprite(940,180,100,120)
  sto31.addImage(st6);
  sto31.scale=0.5;
  sto32=createSprite(1000,180,100,120)
  sto32.addImage(st6);
  sto32.scale=0.5;
  sto33=createSprite(1060,180,100,120)
  sto33.addImage(st7);
  sto33.scale=0.5;

  decstone1=createSprite(880,130,60,100);
  decstone1.addImage(decstone);
  decstone1.scale=0.42

  stn1=createSprite(880,350,100,120)
  stn1.addImage(st5);
  stn1.scale=0.5;
  stn2=createSprite(940,350,100,120)
  stn2.addImage(st6);
  stn2.scale=0.5;
  stn3=createSprite(1000,350,100,120)
  stn3.addImage(st6);
  stn3.scale=0.5;
  stn4=createSprite(1060,350,100,120)
  stn4.addImage(st6);
  stn4.scale=0.5;
  stn5=createSprite(1120,350,100,120)
  stn5.addImage(st7);
  stn5.scale=0.5;

  lad8=createSprite(990,290,95,20)
  lad8.addImage(ladder);
  lad8.scale=0.5
  lad9=createSprite(990,240,95,20)
  lad9.addImage(ladder);
  lad9.scale=0.5
  lad10=createSprite(990,190,95,20)
  lad10.addImage(ladder);
  lad10.scale=0.5
  lad11=createSprite(990,140,95,20)
  lad11.addImage(ladder);
  lad11.scale=0.5

  stn6=createSprite(1060,450,100,120)
  stn6.addImage(st5);
  stn6.scale=0.5;
  stn7=createSprite(1120,450,100,120)
  stn7.addImage(st6);
  stn7.scale=0.5;
  stn8=createSprite(1180,450,100,120)
  stn8.addImage(st6);
  stn8.scale=0.5;
  stn9=createSprite(1240,450,100,120)
  stn9.addImage(st7);
  stn9.scale=0.5;

  stn10=createSprite(1400,450,100,120)
  stn10.addImage(st5);
  stn10.scale=0.5;
  stn11=createSprite(1460,450,100,120)
  stn11.addImage(st6);
  stn11.scale=0.5;
  stn12=createSprite(1520,450,100,120)
  stn12.addImage(st6);
  stn12.scale=0.5;
  stn13=createSprite(1580,450,100,120)
  stn13.addImage(st7);
  stn13.scale=0.5;

  stn14=createSprite(1460,265,100,120)
  stn14.addImage(st5);
  stn14.scale=0.5;
  stn15=createSprite(1520,265,100,120)
  stn15.addImage(st6);
  stn15.scale=0.5;
  stn16=createSprite(1580,265,100,120)
  stn16.addImage(st6);
  stn16.scale=0.5;
  stn17=createSprite(1640,265,100,120)
  stn17.addImage(st6);
  stn17.scale=0.5;
  stn18=createSprite(1700,265,100,120)
  stn18.addImage(st7);
  stn18.scale=0.5;

  lad12=createSprite(1490,390,95,20)
  lad12.addImage(ladder);
  lad12.scale=0.5
  lad13=createSprite(1490,340,95,20)
  lad13.addImage(ladder);
  lad13.scale=0.5
  lad14=createSprite(1490,290,95,20)
  lad14.addImage(ladder);
  lad14.scale=0.5
  lad15=createSprite(1490,240,95,20)
  lad15.addImage(ladder);
  lad15.scale=0.5






  
}

function draw() {
  background("green");

 
  if(keyDown(LEFT_ARROW)){
    
    hero.changeAnimation("runningleft",chwalkleft);
    hero.x-=7
  }
  else if(keyWentUp(LEFT_ARROW)){
      hero.changeAnimation("idleleft",chlidle)
  }
   if(keyDown(RIGHT_ARROW)){
 
    hero.changeAnimation("running",chwalk);  
    hero.x+=7
  }
  else if(keyWentUp(RIGHT_ARROW)){
    hero.changeAnimation("idle",chidle)
  }

  drawSprites();
 
}
  
 
 
  

  
