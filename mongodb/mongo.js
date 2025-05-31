[
  {
    $match: {
      fullname:"Mrigaank"
    }
  }
]
// mongo match pipleing
[
  {
    $group: {
      _id:"$email"
    }
  }
]//group by feature
[
  {
    $group: {
      _id:null,
      averageage:{
        $avg:"cart"
      }
    }
  }
]

[
  {
    $group: {
      _id: "email",
     count:{
       $sum:1
     }
    }
  }
] //coutning grouping


[
  {
    $group: {
      _id: "fullname",
     count:{
       $sum:1
     }
    },
  },
  {
    $sort: {
      count:1
    }
  }
  

  
] //sort

