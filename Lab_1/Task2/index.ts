

class Account
{
    constructor(public Acc_no = 1, public Balance = 1000){}

    debitAccount(){}

    creditAccount(){}

    getBalance(){}
     
}

interface IAccount
{
    Date_of_opening:string;

    addCustomer()

    removeCustomer()
}



class Current_Account extends Account implements IAccount 
{
    Date_of_opening: string;

    constructor(Date_of_opening: string, public Interest_rate = 5, Acc_no = 2, Balance = 2000) 
    {
        super(Acc_no, Balance);
        this.Date_of_opening = Date_of_opening;
    }

    addCustomer(){}

    removeCustomer(){}
}


class Saving_Account extends Account implements IAccount 
{
    Date_of_opening: string;

    constructor(Date_of_opening: string, public Min_Balance = 200, Acc_no = 2, Balance = 3000) 
    {
        super(Acc_no, Balance);
        this.Date_of_opening = Date_of_opening;
    }

    addCustomer(){}

    removeCustomer(){}
}

