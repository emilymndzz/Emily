var events = [
  {
    instruction: "Merge to the left lane.",
    hint: "Look over your shoulder to make sure no cars are in your blind spot.  Turn on your turn signal and steer to the left."
  },
  {
    instruction: "Merge to the right lane.",
    hint: "Look over your shoulder to make sure no cars are in your blind spot.  Turn on your turn signal and steer to the right."
  },
  {
    instruction: "Turn left.",
    hint: "Turn on your turning signal. Make a wide turn, making sure you don't cross into other lanes while turning."
  },
  {
    instruction: "Turn right.",
    hint: "Turn on your turning signal. Steer closer to the right curb, and look over your right shoulder for any pedestrians."
  },
  {
    instruction: "Stop at the stop sign.",
    hint: "Stop behind the white line.  Make sure you completely stop for about 3 seconds."
  },
  {
    instruction: "There is a bicyclist riding in the bike lane to your right.",
    hint: "If possible, turn on your turning signal and merge into the left lane to allow them more room."
  },
  {
    instruction: "Enter the freeway.",
    hint: "Accelerate so you are at or near the speed of traffic."
  },
  {
    instruction: "There is a crash ahead on the right shoulder.",
    hint: "Move out of the occupied lanes in order to give them enough room. Do not rubberneck, just keep driving."
  },
  {
    instruction: "An ambulance is coming up behind you.  It's sirens are on.",
    hint: "Move to the sides of the road and stop completely, in order to get out of their way."
  },
  {
    instruction: "Parallel park on the right-hand side of the road.",
    hint: "Make sure your right-side tires are within 18 inches of the curb."
  },


]

console.log('Hello')

function randomNumber(start, end) {
    return Math.floor(Math.random() * end) + start;
}

function showEvent() {
    // Grab the first event
    var leftTurn = events[randomNumber(0,9)]

    // Put the event instructions in one box
    var instructionsBox = document.querySelector('.instruction')

    var hintBox = document.querySelector('.hint')

        
    
    instructionsBox.innerHTML = leftTurn.instruction
    
    // Put the event hint in another box
    hintBox.innerHTML = leftTurn.hint
    
    // Unhide the boxes

    instructionsBox.classList.remove('hidden')
    hintBox.classList.remove('hidden')
}

setTimeout(showEvent,randomNumber(2000,5000))