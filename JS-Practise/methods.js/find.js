const people =[
    {
        name:'Manvith',
        occupation:'SDE'
    },
    {
        name:'Tarun',
        occupation:'SDE'
    },

    {
        name:'Venkatsai',
        occupation:'devops',

    },
    {
        name:'vignesh',
        occupation:'ux designer'
    }
];

function isSDE (person){
    return person.occupation === 'SDE';
}

console.log(people.reverse().find(isSDE).name);


/*returns the value of the first element that passes a test. 
find the targeted element present or not
if present, return value.

*/