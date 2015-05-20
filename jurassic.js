// Just to note, to make a comment in your javascript code you can simply start the line with a double forward slash

// Part 1: Opening Scene

// 1. Create an object called park. This object should have 3 properties: people, dinosaurs, and power. People and dinosaurs should be set to empty arrays and power should be set to true.

var park = {
    people: [],
    dinosaurs: [],
    power: true
}


// 2. Now lets create some dinosaurs. Below is an object named rex with a stomach property and a hungry property. Make another object called raptor that has the same properties, except the raptor already ate a peon's shoe and s/he is not hungry anymore. Push all of the dinosaurs into the park's dinosaur array.

var rex = {
	stomach: [],
	hungry: true
}

var raptor = {
    stomach: [],
    hungry: false
}

park.dinosaurs.push({rex})
park.dinosaurs.push({raptor})
// 3. Lets now create some people. The people we will need for the intro are the disposable_peon, hammond, dennis, and muldoon. All will have a name and a profession property. Muldoon will also have a rescue ability property, which we will set to the number 10. Push everyone into the people array in the park property.

var disposable_peon = {
    name: "",
    profession: ""
}
var hammond = {
    name: "",
    profession: ""
}
var dennis = {
    name: "",
    profession: ""
}
var muldoon = {
    name: "",
    profession: "",
    rescue_ability: 10
}

park.people.push({disposable_peon})
park.people.push({hammond})
park.people.push({dennis})
park.people.push({muldoon})
// 4. Now, no matter how much we may love the peon, he's scripted to be eaten as they are bringing the raptor onto the island. Below is an imcomplete conditional statement. Change the properties of the objects in order to meet the conditions.

muldoon.rescue_ability -= 1
raptor.hungry = true

if(raptor.hungry && muldoon.rescue_ability < 10){
	console.log("Raaaar..CHOMP!");
	// push the disposable peon into the stomach of the raptor
    raptor.stomach.push({disposable_peon})
	// bonus: take the disposable peon out of the people array in the park object. hint: look up the splice method for arrays.
	// Depending on the order in which you pushed the peon into the array, can you use a different method to take him out?
	park.people.splice(0,1)
} else {
	console.log("CUT! we need to do a retake! The peon is still alive!");
}


// Part 2: Who Turned Off the Lights!?

// 1. Unfortunately for us, a lot more characters now get introducted. Let's create some more people objects. We're going to need people objects for hammond, malcom, grant, sattler, lex, tim, and gennaro. Use the same base people object described above. You can leave out the profession for lex and tim, as they are children. Make gennaro have two additional properties called catch_phrase and relief and set them equal to 'AHHHHHH!' and 'Phewww', respectively. Push everyone into the park's people array. 


var malcom = {
    name: "",
    profession: ""
}
park.people.push({malcom})

var grant = {
    name: "",
    profession: ""
}
park.people.push({grant})

var sattler= {
    name: "",
    profession: ""
}
park.people.push({sattler})

var lex = {
    name: "",
    profession: ""
}
park.people.push({lex})

var tim = {
    name: "",
    profession: ""
}
park.people.push({tim})

var gennaro  = {
    name: "",
    profession: "",
    catch_phrase: "AHHHH!",
    relief: "Whew!"
}
park.people.push({gennaro})

// 3. Lex and tim are grandchildren of hammond. Let's reflect that in our code. Create 2 new properties on hammond called grandaughter and grandson and set them equal to lex and tim.

hammond.granddaughter = ({lex});
hammond.grandson = ({tim});

// Well that was a lot, you should be very familiar with writing objects.

// 4. Oh no! Who could have known? Add a property to dennis labeled treachery and set it equal to true.
dennis.treachery = true;

// Write a conditional that tests whether or not dennis is treacherous, and if so, set the park's power property to false.
if (dennis.treachery === true) {
    park.power = false;
}

// 4. Looks like the power is off and the security fences are down. Rex got out of his cage and is heading towards Gennaro! Write a conditional to check whether or not rex is hungry and the power is off. If so, push gennaro into rex's stomach and log his catch_phrase. If not, log gennaro's relief.
if (!park.power && rex.hungry) {
    console.log(gennaro.catch_phrase);
    rex.stomach.push({gennaro});
} else {
    console.log(gennaro.relief)
}


// Bonus: refactor the conditional above (if you haven't already) to not use any equal signs).


// Bonus 2: access the rex object from the park's dinosaur array instead of it's variable name.  
park.dinosaurs[0]
