function validateAddNote(command,title,content,tags){
    if(!title){
        throw new Error("title is required");
        return false;
    }
    if(!content){
        throw new Error("content is required.");
        return false;
    }
    if(!tags){
        throw new Error("tags are required");
        return false;
    }
    return true;
}
function validateId(id){
    if(!id){
        throw new Error("you should provide  the valide Id");
    }
    if(!Number.isInteger(id)){
        throw new Error("The Id should be Integer.");
    }
    if(id <= 0 ){
        throw new Error("the should be greater than 0");
    }  
    return true;
}
module.exports = {validateAddNote,validateId};
