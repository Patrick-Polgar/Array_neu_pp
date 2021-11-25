

/*
Aufgabe:
<html><head></head><body><h1></h1><p></p></body></html>

  ---->

<html>
  <head>
  </head>
  <body>
    <h1>
    </h1>
    <p>
    </p>
  </body>
</html>

--> return : "\n"  
--> Tab: "\t"


Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html", "head", "head", "body", "h1", "h1", "p", "p", "body", "html"];
let stack = [];
let counter = 0;

output(getHTML());
function getHTML() {

  let htmlStr = "";

  for (let i = 0; i < tags.length; i++) {
    if (isOpenTag(tags[i])) {
      htmlStr += getTags(tags[i], "open");
    } else {
      htmlStr += getTags(tags[i], "close");
    }
  }

  return htmlStr;
}

// Modul: open || close ?
function isOpenTag(tag) {

  const cond = (tag != stack[stack.length - 1]); // tag liegt oben!

  if (cond) {
    stack.push(tag);
    return true;
  } else {
    stack.pop();
    return false;
  }
}

// Modul: Zusammenbau: <tagStr> --> Tests:
function getTags(tag, op) {
  switch (op) {
    case "open":
      if (counter == 0) {
        counter++;
        return controls[0] + tag + controls[2] + "\n";
      }
      else {
        let result = "";
        for (let i = 0; i < counter; i++) {
          result += "\t";
        }
        counter++;
        return result + controls[0] + tag + controls[2] + "\n";
      }
    case "close":
      if (counter == 0) {
        return controls[1] + tag + controls[2] + "\n";
      }
      else {
        let result = "";
        for (let i = 0; i < counter-1; i++) {
          result += "\t";
        }
        counter--;
        return result + controls[1] + tag + controls[2] + "\n";
      }
    default:
      return "#!";
  }
}

// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
  console.log(outputData);
}