/* Natsu Deguchi*/

const p01 = document.getElementById('p-01');
const p02 = document.getElementById('p-02');
const p03 = document.getElementById('p-03');
const p04 = document.getElementById('p-04');
const p05 = document.getElementById('p-05');
const p06 = document.getElementById('p-06');
const p07 = document.getElementById('p-07');
const p08 = document.getElementById('p-08');
const p09 = document.getElementById('p-09');
const p10 = document.getElementById('p-10');

/*
these data points represent different 
aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN      = 30;
const minimumAgeToPurchase      = 24;
const taxRate                   = 0.10;


/*
these data points represent information
about the current user
NOTE: since this data would in theory be
supplied by the user, all values 
(even numeric) here are strings... 

- use these values in your script below
- change these values when you test your script!
*/
const userName              = "Sara Davis";
const age                   = "27";
const cashOnHandDollarsCDN  = "200";
const quantityOfTickets     = "5";

/*
begin processing...
*/

const totalBeforeTax = ticketCostDollarsCDN * quantityOfTickets;
const totalAfterTax  = (totalBeforeTax * taxRate) + totalBeforeTax;

let addAgeByOne      = age;


p01.innerHTML = "User age:   " + age;
p02.innerHTML = "Ticket Qty: " + quantityOfTickets;
p03.innerHTML = "Cash: $"      + cashOnHandDollarsCDN;

p04.innerHTML = `${userName} says: "LET'S BUY SOME TICKETS TO THE BIG VIRTUAL CONCERT!"`;


if(age >= minimumAgeToPurchase){
    p05.innerHTML = `You are old enough to buy a ticket by 
                    ${age - minimumAgeToPurchase} year(s). Processing with ticket sales...`;

    p06.innerHTML = `Purchasing ${quantityOfTickets} tickets at 
                    $${ticketCostDollarsCDN}: $${totalBeforeTax}`;

    p07.innerHTML = `The total cost after tax: $${totalAfterTax}`; 

    p08.innerHTML = `You have $${cashOnHandDollarsCDN}. Processing with purchase... `;

    if(cashOnHandDollarsCDN > totalAfterTax){
        p09.innerHTML = ` Congratulation! You purchased tickets!`;
    }else{
        p09.innerHTML = `Oops, there is no sufficient money in your account. We cannot proceed your order...`;
    }

    addAgeByOne++;
    p10.innerHTML = `In one year's time, you will be ${addAgeByOne} years old.`;

}else{
    p05.innerHTML = `You are not old enough to buy a ticket... 
                    You need to wait ${minimumAgeToPurchase - age} year(s) to buy a ticket.`;
}
