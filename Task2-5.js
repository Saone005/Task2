//TASK5


function reverseWordOrder(sentence) {
    return sentence.split(" ")   //Splits the sentence into words
      .reverse()                //Reverses the words
      .join(" ")               //Joins the words back together
  }
  
  console.log(reverseWordOrder("javascript öyrənmək maraqlidir"))
