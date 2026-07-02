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
    if(Number.isInteger(id) || id <= 0){
        throw new Error("Invalid Id");
    }
}
module.exports = validateAddNote;
