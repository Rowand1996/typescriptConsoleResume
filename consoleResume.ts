function displayName(name:string,career:string,description:string){
    
    console.log("Name: " + name.toUpperCase());

    console.log("Career: " + career);

    console.log("Description: " + description);
}

displayName("rowan laws-douglas","Full Stack Developer / Student","i like turtles");

console.log("\n \n");

console.log("My Interests(not my interests): ");
console.log("* " + "Fall TV (the best)");
console.log("* " + "Locomotives");
console.log("* " + "Observing awkward situations");
console.log("* " + "Film soundtracks");

console.log("\n \n");

console.log("My Previous Experience (fake not real): ");
function displayPosition(jobTitle:string,companyName:string,description:string) {
    console.log("* " + jobTitle + " at " + companyName + " - " + description);
}
displayPosition("Math, Chemisty, Physics, Biology, and English tutor","Some School","Tutored students in those areas.");
displayPosition("Undergraduate Teaching Assistant","University of Georgia"," Helped grade assignments,awnser question, held lab hours, and held office hours for Java and C++ Computer Science classes.");
displayPosition("Lead Programmer for iBeacon Experiment","Georgia Museum of Art"," Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.");
console.log("\n \n");

function displaySkill(skillName:string,value:boolean) {
    if(value === true){
        console.log("* BAM: " + skillName);
    }
    else{
        console.log("* " + skillName);
    }
}
console.log("My Skills(not my skills): ");
displaySkill("French",false);
displaySkill("Trombone",true);
displaySkill("Java",false);
displaySkill("C / C++",false);
displaySkill("Objective-C / Swift",true);
displaySkill("Opera Singing",true);
displaySkill("Python",false);
displaySkill("Javascript",false);
displaySkill("TypeScript",true);