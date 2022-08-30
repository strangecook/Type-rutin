export const getDayOfDiffer = (DateA: Date, DateB: Date):boolean =>{
    const todayYear = DateA.getFullYear()
    const todayMonth = DateA.getMonth()
    const todayDay = DateA.getDate()
  
    const textYear = DateB.getFullYear()
    const textMonth = DateB.getMonth()
    const textDay = DateB.getDate()

    if(todayYear===textYear && todayMonth===textMonth && todayDay === textDay){
        return true
    }else{
        return false
    }
}

export const something ="haha"