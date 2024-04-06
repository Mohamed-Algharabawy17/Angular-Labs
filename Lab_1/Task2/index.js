class Account {
    constructor(Acc_no = 1, Balance = 1000) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAccount() { }
    creditAccount() { }
    getBalance() { }
}
class Current_Account extends Account {
    constructor(Date_of_opening, Interest_rate = 5, Acc_no = 2, Balance = 2000) {
        super(Acc_no, Balance);
        this.Interest_rate = Interest_rate;
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() { }
    removeCustomer() { }
}
class Saving_Account extends Account {
    constructor(Date_of_opening, Min_Balance = 200, Acc_no = 2, Balance = 3000) {
        super(Acc_no, Balance);
        this.Min_Balance = Min_Balance;
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() { }
    removeCustomer() { }
}
