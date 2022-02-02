export const sortComments = (comments = []) => {
    let sortCom = [];

    for ( let i = 0; i < comments.length; i++) {
        for (let j = i + 1; j < comments.length; j++) {
            if(comments[i].id === j) {
                sortCom.push(comments[i]) 
            } else if (comments[j].parent === i) {
                sortCom.push(comments[j])
            } 
        }

    }
    sortCom.pop()
    // console.log(sortCom);
    
  return sortCom;
};
