

const validateopeAccount = (payload ) => {

    if(!payload?.email){
        throw 'email is not found'
    }

    if(!payload?.password){
        throw 'password is not found'
    }

    if(!payload?.dob){
        throw 'date of birth is not found'
    }

    if(!payload?.name){
        throw 'name is not found'
    }

    if(!payload?.mobile){
        throw 'mobile number is not found'
    }

    if(!payload?.address){
        throw 'address is not found'
    }
}

const validateupdateKYC = (payload) => {
    if(!payload?.email){
        throw 'email is not found'
    }

    if(!payload?.password){
        throw 'password is not found'
    }

    if(!payload?.adharNo){
        throw 'adharNo is not found'
    }

    if(!payload?.panNo){
        throw 'PanNo is not found'
    }
}

const validatedepositMoney = (payload) => {
    if(!payload?.email){
        throw 'email is not found'
    }

    if(!payload?.password){
        throw 'password is not found'
    }

    if(!payload?.amount){
        throw 'amount is not found'
    }
}
const validatewithdrawMoney = (payload) => {
    if(!payload?.email){
        throw 'email is not found'
    }

    if(!payload?.password){
        throw 'password is not found'
    }

    if(!payload?.amount){
        throw 'amount is not found'
    }

}
const validatetransferMoney = (payload) => {
    if(!payload?.email){
        throw 'email is not found'
    }

    if(!payload?.password){
        throw 'password is not found'
    }

    if(!payload?.amount){
        throw 'amount is not found'
    }

    if(!payload?.toId){
        throw 'toId is not found'
    }

}
const validatereceiveMoney = (payload) => {
    if(!payload?.email){
        throw 'email is not found'
    }

    if(!payload?.password){
        throw 'password is not found'
    }

    if(!payload?.amount){
        throw 'amount is not found'
    }

    if(!payload?.fromId){
        throw 'fromId is not found'
    }

}
const validateprintStatement = (payload) => {
    if(!payload?.email){
        throw 'email is not found'
    }

    if(!payload?.password){
        throw 'password is not found'
    }

}
const validatecloseAccount = (payload) => {
    if(!payload?.email){
        throw 'email is not found'
    }

    if(!payload?.password){
        throw 'password is not found'
    }

}

export  {
    validateopeAccount,
    validateupdateKYC,
    validatedepositMoney,
    validatewithdrawMoney,
    validatetransferMoney,
    validatereceiveMoney,
    validateprintStatement,
    validatecloseAccount,
}
