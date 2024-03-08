// export default function Todo({task, isDone}){

//     return (
//         <li>Task: {task}</li>
//     )
// }


// conditional rendering option 1 :
// export default function Todo({task, isDone}){

//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }else{
//         return <li>Work one: {task}</li>
//     }
// }

// consitional rendaring option 2:
// export default function Todo({task, isDone}){

//    if(isDone){
//     return <li>Finished: {task}</li>
//    }else{
//     return <li>Work one: {task}</li>
//    }
// }

// conditional rendaraing 3 ternary operator
//  export default function Todo({task, isDone}){
//     return(
//         <li>{isDone ? 'Finished': 'Worker on'} : {task}</li>
//     )
       
//     }


// conditional rendering option 4 : &&
// export default function Todo({task, isDone}){

//     return (
//         <li>{task} {isDone && ': done'}</li>
//     )

    // }

// conditional rendering option 5 : ||
// export default function Todo({task, isDone}){

//     return (
//         <li>{task} {isDone || ': Do id'}</li>
//     )

// }

// conditional renderantg option 
export default function Todo({task, isDone}){

    let listItem;
    if(isDone){
        listItem = <li>Finish : {task}</li>
    }else{
       listItem = <li>Work on : {task}</li>
    }
    return listItem;
}
