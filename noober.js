// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  // Store each variable in the memory
  let passengerFirst = ride.passengerDetails.first
  let passengerLast = ride.passengerDetails.last
  let passengerPhone = ride.passengerDetails.phoneNumber
  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city
  let pickupState = ride.pickupLocation.state
  let pickupZip = ride.pickupLocation.zip
  let dropoffAddress = ride.dropoffLocation.address
  let dropoffCity = ride.dropoffLocation.city
  let dropoffState = ride.dropoffLocation.state
  let dropoffZip = ride.dropoffLocation.zip

  // Write conditional for 1) Noober purple else if passenger > 3 then Noober XL, else Noober X. 
  let serviceLevel
  if (ride.purpleRequested == true) {
    serviceLevel = `Purple`
  } else if (ride.numberOfPassengers > 3) {
    serviceLevel = `XL`
  } else {
    serviceLevel = `X`
  }

  // Write passenger details, pickup and dropoff details in human readable format. 
  console.log(`Noober ${serviceLevel} Passenger: ${passengerFirst} ${passengerLast} - ${passengerPhone}. Pick up at ${pickupAddress}, ${pickupCity}, ${pickupState}, ${pickupZip}. 
  Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState}, ${dropoffZip}.`)
  
  // 🔥 YOUR CODE ENDS HERE 🔥
})
