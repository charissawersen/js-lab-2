randomDamage = () => Math.floor(Math.random() * 10);
// console.log(randomDamage());
let chooseOption = (opt1, opt2) =>
{
    let randNum = Math.round(Math.random() * 1);
    // console.log(randNum);
    return randNum === 0 ? 'opt1' : 'opt2';
}
// console.log(chooseOption())
let attackPlayer = health =>
{
    return health - randomDamage();
}
// console.log(attackPlayer(8));
logHealth = (player, health) => console.log(`${player} health: ${health}`);
// logHealth('Charissa', 10);
logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);
// logDeath('Charissa', 'Loser'); 
isDead = health => health <= 0 ? true : false;
// console.log(isDead(0));
function fight(player1, player2, player1Health, player2Health)
{
    while (true)
    {
        let attacker = chooseOption(player1, player2);
        if (attacker == player1)
        {
            player2Health == attackPlayer(player2Health);
            logHealth(player2, player2Health);
            isDead(player2Health) == true; {
                logDeath(player1, player2)
            };
            break;
        } else
        {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            isDead(player1Health) == true; {
                logDeath(player2, player1)
            };
            break;

        }
    };

};
fight("Charissa", "Mitch", 100, 100);


