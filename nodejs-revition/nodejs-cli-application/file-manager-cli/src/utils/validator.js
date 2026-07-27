const fs = require('fs');
const path = require('path');
function validateCreateCommand(filename,content){
    if(!filename){
        throw new Error("filename is required");
        return false;
    }
    if(content == undefined){
        throw new Error("content is require");
        return false;
    }
    return true;
}
function validateReadFile(filename){
    if(!filename){
        throw new Error("filename is required.");   
        return false;
    }
    return true;
}

function validateFileRename(oldFilename,newFilename){
    if(!oldFilename){
        throw new Error("Old filename is required");
        return false;
    }
    if(!newFilename){
        throw new Error("New filename is required");
        return false;
    }
    return true;
}
module.exports = {validateCreateCommand,validateReadFile,validateFileRename};
