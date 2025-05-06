

  //TASK2

  let sampleNews = "As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen";
  
  
  function numberofspace(text) {    //Here we create a variable called count, which will keep track of how many spaces we find. It’s initialized to 0
    let space = 0
  
    for (let i = 0; i < text.length; i++) {  //The for loop goes through each character in the text string, from the first character (i = 0) to the last (i < text.length)

      if (text[i] === ' ') {    //On each iteration of the loop, we check if the current character (text[i]) is a space ' '. If it is, we increase the count by 1
        space++;
      }
    }
    return space   //After the loop finishes, the function returns the total number of spaces found
  }
  
  console.log(numberofspace(sampleNews))



