import Human from "./Human"

class Student extends Human{
    name ="";
    job = "";
    skills = [];
}
const me = new Student();

me.getJob("Web developer");

me.learnNewSkill("React");

me.forgetSkill("React");

me.leaveJob();