var startingvalue;
var updatedvalue;
var word;
$("#reset").hide();
$("#correct").hide();

const English = [
  [
    "John ate an apple before afternoon",
    "before afternoon John ate an apple",
    "John before afternoon ate an apple",
  ],
  [
    "some students like to study in the night",
    "at night some students like to study",
  ],
  ["John and Mary went to church", "Mary and John went to church"],
  [
    "John went to church after eating",
    "after eating John went to church",
    "John after eating went to church",
  ],
   ["did he go to market", "he did go to market"],
  [
    "the woman who called my sister sells cosmetics",
    "the woman who sells cosmetics called my sister",
    "my sister who sells cosmetics called the woman",
    "my sister who called the woman sells cosmetics",
  ],
  [
    "John goes to the library and studies",
    "John studies and goes to the library",
  ],
   ["John ate an apple so did she", "she ate an apple so did John"],
   [
    "the teacher returned the book after she noticed the error",
    "the teacher noticed the error after she returned the book",
    "after the teacher returned the book she noticed the error",
    "after the teacher noticed the error she returned the book",
    "she returned the book after the teacher noticed the error",
    "she noticed the error after the teacher returned the book",
    "after she returned the book the teacher noticed the error",
    "after she noticed the error the teacher returned the book",
  ],
 [
    "I told her that I bought a book yesterday",
    "I told her yesterday that I bought a book",
    "yesterday I told her that I bought a book",
    "I bought a book that I told her yesterday",
    "I bought a book yesterday that I told her",
    "yesterday I bought a book that I told her",
  ],
];
const Hindi = [[
  "राम और श्याम बाजार गयें",
  "राम और श्याम गयें बाजार",
  "बाजार गयें राम और श्याम",
  "गयें बाजार राम और श्याम",
],
[
  "राम सोया और श्याम भी",
  "श्याम सोया और राम भी",
  "सोया श्याम और राम भी",
  "सोया राम और श्याम भी",
],
[
  "मैंने उसे बताया कि राम सो रहा है",
  "मैंने उसे बताया कि सो रहा है राम",
  "उसे मैंने बताया कि राम सो रहा है",
  "उसे मैंने बताया कि सो रहा है राम",
  "मैंने बताया उसे कि राम सो रहा है",
  "मैंने बताया उसे कि सो रहा है राम",
  "उसे बताया मैंने कि राम सो रहा है",
  "उसे बताया मैंने कि सो रहा है राम",
  "बताया मैंने उसे कि राम सो रहा है",
  "बताया मैंने उसे कि सो रहा है राम",
  "बताया उसे मैंने कि राम सो रहा है",
  "बताया उसे मैंने कि सो रहा है राम",
],
[
  "राम खाकर सोया",
  "खाकर राम सोया",
  "राम सोया खाकर",
  "खाकर सोया राम",
  "सोया राम खाकर",
  "सोया खाकर राम",
],
[
  "बिल्लियों को मारकर कुत्ता सो गया",
  "मारकर बिल्लियों को कुत्ता सो गया",
  "बिल्लियों को मारकर सो गया कुत्ता",
  "मारकर बिल्लियों को सो गया कुत्ता",
  "कुत्ता सो गया बिल्लियों को मारकर",
  "कुत्ता सो गया मारकर बिल्लियों को",
  "सो गया कुत्ता बिल्लियों को मारकर",
  "सो गया कुत्ता मारकर बिल्लियों को",
],
[
  "एक लाल किताब वहाँ है",
  "एक लाल किताब है वहाँ",
  "वहाँ है एक लाल किताब",
  "है वहाँ एक लाल किताब",
],
[
  "एक बड़ी सी किताब वहाँ है",
  "एक बड़ी सी किताब है वहाँ",
  "बड़ी सी एक किताब वहाँ है",
  "बड़ी सी एक किताब है वहाँ",
  "वहाँ है एक बड़ी सी किताब",
  "वहाँ है बड़ी सी एक किताब",
  "है वहाँ एक बड़ी सी किताब",
  "है वहाँ बड़ी सी एक किताब",
] ];
let Erandom,Hrandom;
function funtio() {
 selection = document.getElementById("selectlang");
 let store = "";
  if (selection.value === "English") {
    document.getElementById("form_sentence").innerHTML =
      "<b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>" +
      "</br>" +
      "<i>(select the buttons in proper order)</i>";
    Erandom = Math.floor(Math.random() * English.length);
    document.getElementById("formed_sentence").innerHTML = " ";
    document.getElementById("print").innerHTML = " ";
    document.getElementById("reform").innerHTML = " ";
    document.getElementById("check").innerHTML = "";
    $("#reset").hide();
    $("#correct").hide();
    let Value = English[Erandom][0];
    word = shuffle(Value);
    startingvalue = 0;
    updatedvalue = 0;
    for (i = 0; i <= word.length - 1; i++) {
       temp =
        "<button  id='btn" +
        i +
        "' onclick='reply_click(this.id,this.value)' value='" +
        word[i] +
        "'>" +
        word[i] +
        "</button>  ";
      store += temp;
      updatedvalue++;
    }
    document.getElementById("btnval").innerHTML = store;
  }
  else if (selection.value === "Hindi") {
    document.getElementById("form_sentence").innerHTML =
      "<b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>" +
      "</br>" +
      "<i>(select the buttons in proper order)</i>";
    Hrandom = Math.floor(Math.random() * English.length);
    document.getElementById("formed_sentence").innerHTML = " ";
    document.getElementById("print").innerHTML = " ";
    document.getElementById("reform").innerHTML = " ";
    document.getElementById("check").innerHTML = "";
    $("#reset").hide();
    $("#correct").hide();
    let Value = Hindi[Hrandom][0];
    word = shuffle(Value);
    startingvalue = 0;
    updatedvalue = 0;
    for (i = 0; i <= word.length - 1; i++) {
       temp =
        "<button  id='btn" +
        i +
        "' onclick='reply_click(this.id,this.value)' value='" +
        word[i] +
        "'>" +
        word[i] +
        "</button>  ";
      store += temp;
      updatedvalue++;
    }
    document.getElementById("btnval").innerHTML = store;
  }
  else {
    document.getElementById("form_sentence").innerHTML = "";
    document.getElementById("val").innerHTML = "";
    document.getElementById("formed_sentence").innerHTML = "";
    document.getElementById("print").innerHTML = "";
    document.getElementById("reform").innerHTML = "";
    document.getElementById("check").innerHTML=""
    $("#reset").hide();
  }
}
function shuffle(sentence) {
  var words = sentence.split(" ");
  var j, x, i;
  for (i = words.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = words[i];
    words[i] = words[j];
    words[j] = x;
  }
  return words;
}
function reply_click(clicked_id,clicked_value) {
  document.getElementById("formed_sentence").innerHTML =
    "<b>Formed Sentence</b>"+" <i>(after selecting words)</i>";
  document.getElementById("print").innerHTML += clicked_value + " ";
  $("#reset").show();
  document.getElementById(clicked_id).style.display = "none";
  startingvalue++;
  if(updatedvalue == startingvalue){
    $("#correct").show()
  //sentence=document.getElementById("print").innerHTML;
  //alert(sentence);
  }
}
function reformation() {
  for (i = 0; i <= word.length - 1; i++) {
    document.getElementById("btn" + i).style.display = "";
  }
  document.getElementById("formed_sentence").innerHTML = "";
  document.getElementById("print").innerHTML = "  ";
  document.getElementById("reform").innerHTML = "";
  document.getElementById("check").innerHTML = ""
  startingvalue = 0;
  $("#reset").hide();
  $("#correct").hide()
}
function correctsent() {
  let check_sentence=document.getElementById("print").innerHTML
    str_sentence=check_sentence.toString();
  console.log(str_sentence);
   if (selection.value=="English") {
     for(value in English[Erandom]){
      value=English[Erandom]
      var count=value.length;
      console.log(count);
      for(var i=0;i<count;i++){
        let  temp=value[i]
        console.log(temp);
        if(temp==str_sentence){
          document.getElementById(check).innerHTML="correct sentence";
          break;
        }
        else {
          document.getElementById(check).innerHTML="Wrong";
  }
}
}}
else if (selection.value==Hindi) {
  for(value in Hindi[Hrandom]){
   value=Hindi[Hrandom]
           console.log(value);
   var count=value.length;
   console.log(count);
   for(var i=0;i<count;i++){
     temp=count[i]
     if(temp==check_sentence){
      consile.log(temp);
       document.getElementById(check).innerHTML="correct sentence";
       break;     }
     else {
       document.getElementById(check).innerHTML="Wrong";
}
}
}}
}
