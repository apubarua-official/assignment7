const student = [
    {name: 'Apu Barua', roll: 1, age: 10, className: 3, gender: 'Male', location: 'Mohakhali', addmissionFees: 3000},
    {name: 'Joti Rahman', roll: 2, age: 10, className: 3, gender: 'Male', location: 'Bashabo', addmissionFees: 3000},
    {name: 'Arifa Akhter', roll: 3, age: 12, className: 4, gender: 'Female', location: 'Farmgate', addmissionFees: 4000},
    {name: 'Bristy Roy', roll: 4, age: 11, className: 3, gender: 'Female', location: 'Mirpur', addmissionFees: 3000},
    {name: 'Zakaria Khan', roll: 5, age: 10, className: 3, gender: 'Male', location: 'Mirpur', addmissionFees: 3000},
    {name: 'Fahad Hasan', roll: 6, age: 10, className: 3, gender: 'Male', location: 'Mohakhali', addmissionFees: 3000},
    {name: 'Ovey Hasan', roll: 7, age: 10, className: 3, gender: 'Male', location: 'Kilgaon', addmissionFees: 3000},
    {name: 'Rabiul Awal', roll: 8, age: 14, className: 5, gender: 'Male', location: 'Mohakhali', addmissionFees: 5000},
    {name: 'Alamghir Islam', roll: 9, age: 10, className: 3, gender: 'Male', location: 'Karwan Bazar', addmissionFees: 3000},
    {name: 'Sohidul Islam', roll: 10, age: 30, className: 5, gender: 'Male', location: 'Mirpur DOHS', addmissionFees: 5000},
    {name: 'Galib Bro', roll: 11, age: 10, className: 3, gender: 'Male', location: 'Bangla Motor', addmissionFees: 3000},
    {name: 'Fahim Hasan', roll: 12, age: 13, className: 4, gender: 'Male', location: 'Mirpur-10', addmissionFees: 4000},
    {name: 'Saiful Islam', roll: 13, age: 10, className: 3, gender: 'Male', location: 'Karwan Bazar', addmissionFees: 3000},
    {name: 'Muyeen Hossian', roll: 14, age: 12, className: 4, gender: 'Male', location: 'Savar', addmissionFees: 4000},
    {name: 'Shafiqul Islam', roll: 15, age: 10, className: 3, gender: 'Male', location: 'Mohakhali', addmissionFees: 3000},
    {name: 'Sahriar Hossain', roll: 16, age: 11, className: 4, gender: 'Male', location: 'Savar', addmissionFees: 4000},
    {name: 'Imtiaz Morshed', roll: 17, age: 19, className: 5, gender: 'Male', location: 'Gulshan', addmissionFees: 5000},
    {name: 'Jubayer Hossain', roll: 18, age: 15, className: 5, gender: 'Male', location: 'Mohakhali', addmissionFees: 5000},
    {name: 'Udoy Hossain', roll: 19, age: 70, className: 5, gender: 'Male', location: 'Gulshani', addmissionFees: 5000},
    {name: 'Shakib Khan', roll: 20, age: 10, className: 3, gender: 'Male', location: 'Gulshan', addmissionFees: 3000},
    {name: 'Ifteraj Bro', roll: 21, age: 10, className: 3, gender: 'Male', location: 'Mohakhali', addmissionFees: 3000},
    {name: 'Md. Nobi', roll: 22, age: 10, className: 3, gender: 'Male', location: 'Mohakhali', addmissionFees: 3000},
    {name: 'Dip Barua', roll: 23, age: 30, className: 3, gender: 'Male', location: 'Gulshan', addmissionFees: 3000},
    {name: 'Topu Barua', roll: 24, age: 10, className: 3, gender: 'Male', location: 'Banani', addmissionFees: 3000},
    {name: 'Sagar Biswas', roll: 25, age: 13, className: 4, gender: 'Male', location: 'Ajompur', addmissionFees: 4000},
    {name: 'Sujon Shil', roll: 26, age: 12, className: 4, gender: 'Male', location: 'Mohakhali', addmissionFees: 4000},
    {name: 'Samson Rahman', roll: 27, age: 15, className: 5, gender: 'Male', location: 'Banani', addmissionFees: 5000},
    {name: 'David Smith', roll: 28, age: 14, className: 5, gender: 'Male', location: 'Banani', addmissionFees: 5000},
    {name: 'Ridwan Islam', roll: 29, age: 16, className: 5, gender: 'Male', location: 'Banani', addmissionFees: 5000},
    {name: 'Tareque Rahman', roll: 30, age: 18, className: 5, gender: 'Male', location: 'Ajompur', addmissionFees: 5000},
];

let addmissionFee = 0;

for(item of student){

    // Total Addmission Fees 
    addmissionFee += item.addmissionFees;

    //===============================================================================

    // Find all Female students 
    // if(item.gender == 'Female'){
    //     console.log(`
    //     Name:       ${ item.name }
    //     Roll:       ${ item.roll }
    //     Age:        ${ item.age }
    //     Class:      ${ item.className}
    //     Gender:     ${ item.gender}
    //     Location:   ${ item.location}
    //     `);
    // }

    //===============================================================================

    // Find Class Wise Student Result [ Here I find out all class 3 students ]
    // if(item.className == 3){
    //     console.log(`
    //     Name:       ${ item.name }
    //     Class:      ${ item.className }
    //     `);
    // }

    //===============================================================================

    // Find Location Wise Student Result [Here I find out Student Name & Location whice situated by Mohakhali]
    // if(item.location == 'Mohakhali'){
    //     console.log(`
    //     Name:       ${ item.name }
    //     Class:      ${ item.location }
    //     `);
    // }

     //===============================================================================

    //  Find student between 10-25 age 
    if( item.age >= 10 && item.age <= 25){
        console.log(`
            Name:       ${ item.name }
            Age:        ${ item.age }
            Class:      ${ item.className }
        `);
    }

}

console.log(`
Total Addmission Fees: ${ addmissionFee };
`);