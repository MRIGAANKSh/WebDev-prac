[
    {
//first stage
    },{
//sexond stage
    }
]

//gensder count 
[
    {
        $group:{
            _id:"gender",
            gendercount:{
                $sum:1
            }
        }
        
    }
]


//highest regis user countbta dega ......
[
    {
        $group:{
            _id:"company.location.country",
            usercount:{
                $sun:1
            }

        }
    },
    {
        $sort:{
            usercount:-1
        }
    },
    {
        $limit:1
    }
]

//unique data ll
[
    {
        $group:{
            _id:"$eyeColor"
        }
    }
]

///arrays in aggreagation pipeline in mongodb
[
    {
        $unwind:{
            path:"$tags"
        }
    },{
        $group:{
            _id:"$_id",
            numberoftags:{
                $sum:1
            }
        }
    },
    {
        $group:{
            _id:null,
            avarageNumberofTags:{
                $avg:"$averagenumbeoftgs"
            }
        }
    }
]
//filtrATION

[
{
    $match:{
        tags:"enim"
    }
},
{
    $count:'userenimtags'
}
]


//name and ages WITH CONDITION OK
[
    {
        $match:{
            isactive:false,tags:"velit"
        }
    // },{
    //     $match:{
    //     }
     },{
        $projects:{
            name:1,
            age:1//this will show only details in projects which staisy above match codition....
        }
     }
]