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

//most recent regis 
[
  {
    $sort:{
      regis:-1
    }
  },
  {$limit:4},
  {
    $projects:{
      name:1,
      regis:1
    }
  }
]

//categorize by fav fruit

[
  {
    $group:{
      _id:"$favfruit",
      users:{
        $push:"$name"
      }
    }
  }
]

//a tag as second tag in users 

[
{
  $match:{
    "tags.1":"ads"
  },

},{  
    count:"secondtag"
  }
]

//all matchall
[
{
  $match:{
    tags:{
      $all:["enim","id"]
    }
  }
}
]

[
{
  $match:{
    "company.location":"usa"
  },
  
},
{
  count:"usacompany"
}
]