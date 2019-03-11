var katzDeliLine = []
ticket = []
function takeANumber(katzDeliLine, ticket) {
 for(let i = 0; i<ticket.length; i++){
   ticket.push(i + ticket.length)
  newticket =  ticket.slice(1)

 }
  katzDeliLine.push(ticket);
  return(`Welcome, ${ticket}. You are number ${katzDeliLine.length} in line.`);
}
function nowServing(katzDeliLine,name) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"}
else
return (`Currently serving ${katzDeliLine.shift()}.`)
}

var line = []

function currentLine(line) { 
  var newLine = []   
  for (let i = 0; i < line.length; i++) {
    newLine.push([i + 1]+ ". " + line[i])
  }
  
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    return(`The line is currently: ` + newLine.join(', '));
  }
}