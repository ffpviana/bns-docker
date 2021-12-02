use admin
db.createUser({
    user: 'bns_eqpi_loja', 
    pwd: 'bns_eqpi_loja', 
    roles: ["root"]
    }
);

use bns_eqpi_loja
db.createUser({user: 'bns_eqpi_loja', pwd: 'bns_eqpi_loja', roles: [{role: 'readWrite', db: 'bns_eqpi_loja'}]})


// db.createUser({user: 'root', pwd: 'root', roles: [{role: 'readWrite', db: 'bns_eqpi_loja'}]})
// db.auth("bns_eqpi_loja","bns_eqpi_loja")