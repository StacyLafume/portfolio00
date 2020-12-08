class Employee {
    constructor(firstName, lastName, workEthic, technicalSkill) {
        this.lastName = lastName
        this.firstName = firstName
        this.workEthic = workEthic
        this.technicalSkill = technicalSkill

   }
}
const input = document.getElementById('company');
const button = document.getElementById('button');
const sentence = document.getElementById('sentence')

const stacy = new Employee ('Stacy', 'Lafume', 'hard worker', [' Javascript',' React',' Node JS', '  Mongo DB', ])

const getCompany = (company) => {
    return company
} 


button.addEventListener('click',()=>{

  const companyValue = input.value; 
  if (companyValue === '') return alert('Please Enter a Company Name')
  const company = getCompany(companyValue)
  console.log(`${stacy.firstName} ${stacy.lastName} will be a  ${stacy.workEthic}, at your ${company}! Skills ${stacy.firstName} has: ${stacy.technicalSkill}`)
  sentence.innerHTML = `${stacy.firstName} ${stacy.lastName} will be a  ${stacy.workEthic}, at ${company}! Skills ${stacy.firstName} has: ${stacy.technicalSkill}`

});






