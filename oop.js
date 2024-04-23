class Person {

    _name;
    _dateOfBirth;
    _placeOfBirth;
  
    constructor(name, dateOfBirth, placeOfBirth){
      this._name = name;
      this._dateOfBirth = dateOfBirth;
      this._placeOfBirth = placeOfBirth;
      
    }
  
    get name(){
      return this._name;
    }
    
    set name(name){
      this._name = name;
    }
  
    get dateOfBirth(){
      return this._dateOfBirth;
    }
  
    talk(){
      return `Hi my name is ${this._name} and I was born in ${this._placeOfBirth}.`;
    }
    
  }
  
  class AdaStaff extends Person {
  
    _role;
    _base;
  
    constructor(name, dateOfBirth, placeOfBirth, role, base){
  
      super(name, dateOfBirth, placeOfBirth);
      this._role = role;
      this._base = base;
    }
  
    get base(){
      return this._base;
    }
    
    set base(base){
      this._base = base;
    }
  
    get role(){
      return this._role;
    }
    
    set role(role){
      this._role = role;
    }
  
    talk(){
      return `Hi my name is ${this._name}. I work in ${this._base} and my role is ${this._role}.`;
    }
    
    
  }

  class AdaStudent extends Person {
  
    _company;
    _pathway;
    _base;
  
    constructor(name, dateOfBirth, placeOfBirth, company, pathway, base){
  
      super(name, dateOfBirth, placeOfBirth);
      this._company = company;
      this._pathway = pathway;
      this._base = base;
    }
  
    get company(){
      return this._company;
    }

    set company(company){
      this._company;
    }
  
    get pathway(){
      return this._pathway;
    }
    
    set pathway(pathway){
      this._role = pathway;
    }

    get base(){
      return this._base;
    }
    
    set base(base){
      this._base = base;
    }
  
    talk(){
      return `Hi my name is ${this._name}. I work at ${this._company} in ${this._base} and I am studying ${this._pathway} at Ada college.`;
    }
    
    sleep(){
      return `Zzzzz...`;
    }
    
  }

  class AdaVisior extends Person {

    _reasonForVisit;
    _durationOfVisit;

    constructor(name, dateOfBirth, placeOfBirth, reasonForVisit, durationOfVisit){

      super(name, dateOfBirth, placeOfBirth);
      this._reasonForVisit = reasonForVisit;
      this._durationOfVisit = durationOfVisit;
    }

    get reasonForVisit(){
      return this._reasonForVisit;
    }

    set reasonForVisit(reasonForVisit){
      this._reasonForVisit;
    }

    get durationOfVisit(){
      return this._durationOfVisit;
    }

    set durationOfVisit(durationOfVisit){
      this._durationOfVisit
    }

    talk(){
      return `Hi, my name is ${this._name}. My reason for visit is: '${this._reasonForVisit}'. The expected duration of my visit is ${this._durationOfVisit}.`
    }
  }

  class Cohort {

    _cohortCode;
      
      constructor(cohortCode){
    
        this._cohortCode = cohortCode;
        this.cohort = [];  
      }
      
      add(Student){
        this.cohort.push(Student)
        return this.cohort.length;
      }

      remove(studentName){
        for (let i = 0; i < this.cohort.length; i++) {
          if (this.cohort[i].name === studentName) {
            this.cohort.splice(i,1); 
            return "Student removed from cohort.";
          }
        }  
        return "Student not found.";
      }

      search(studentName){
        for (let i = 0; i < this.cohort.length; i++) {
          if (this.cohort[i].name === studentName) {
            return `${studentName} is part of the cohort ${this._cohortCode}`;
          }
        }  
        return "Student not found.";
      }
      
      search2(studentName){
        for (let index of this.cohort){
          if (index.name === studentName) {
            return `${studentName} is part of the cohort ${this._cohortCode}`;
          }
        }  
        return "Student not found.";
      }
      
      
      listStudents(){
        for (let i = 0; i < this.cohort.length; i++){
          console.log(this.cohort[i].name);
        }
      }
    }  
    
  


  const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");

  const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
  const lily = new AdaStaff("Lily Padenga", "01/01/1998", "Lincoln", "Lecturer", "Manchester");

  const nathan = new AdaStudent("Nathan Williams", "07/04/1995", "Tameside", "Booking.com", "Software Engineering", "Manchester");
  

  const tim = new AdaVisior("Tim Turner", "03/07/1985", "Manchester", "Installation of projector", "3 Hours")
  
  
   //Create a new instance of Cohort called april24
   const april24 = new Cohort("24-04-LDN-MCR");
   april24.add(nathan);
   april24.add(new AdaStudent("Callum Busuttil", "01/02/1997", "Manchester", "Booking.com", "Software Engineering", "Manchetser"));
  //  console.log(april24.remove("Callum Busuttil"));
  // console.log(april24.search("Nathan Williams"));
  
  console.log(april24.search2("Nathan Williams"))
  console.log(AdaStudent._company);


  
  //  april24.listStudents();




  



 // //Create an AdaStudent object
   // const sumilA = new AdaStudent("Sumil Aryin", "22/12/2002", "London", "PwC", "TC", 2024);
   // //Add sumilA to the april24 cohort array
   // april24.add(sumilA);
   // //Create a new Ada student and add them to the array all in one line
   // april24.add(new AdaStudent("Jess Fryer", "02/02/1998", "Manchester", "PwC", "TC", 2024))
   //Check the contents of the array.
   // console.log(april24);
   


  // console.log(steve);
  // console.log(aqil);
  // console.log(steve.talk());
  // console.log(aqil.talk());
  // console.log(steve);

  // console.log(nathan.talk());
  // console.log(nathan.sleep());
  // console.log(tim.talk());
