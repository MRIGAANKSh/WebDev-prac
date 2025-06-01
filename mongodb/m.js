//lookup pipleine

[
    {
        $lookup:{
            from:"authors",
            localfild:"author_id",
            foregignfield:"_id",
            as:"author_details"
        }
    },
    {
        $addfield:{
            author_details:{
                $first:"$author_details"
            }
        }
    }
]