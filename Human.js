
class  Human{
    name ="";
    job = "";
    skills = [];

    constructor(){

    }
    getJob(newJob)
    {
          this.job = newJob;
          console.log(this.job);
    }
    leaveJob(){
        this.job = "unemployed";
        console.log(this.job);
    }
    learnNewSkill(skill){
        this.skills.push(skill);
        console.log(this.skills);
    }
    forgetSkill(skill){
        const i = this.skills.findIndex(e=>e == skill);
        this.skills.splice(i);
       console.log(this.skills);
    }
}

export default Human