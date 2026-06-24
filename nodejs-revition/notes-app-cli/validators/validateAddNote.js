function validateAddNote(title,content,tags,command){
    if(!command  || command.toLowerCase() != "add"){
        throw new Error("command  is required");
    }
    if(!title){
        throw new Error("title is required");
    }
    if(!content){
        throw new Error("content is required.");
    }
    if(!tags){
        throw new Error("tags are required");
    }
    return true;
}
module.exports = validateAddNote;
