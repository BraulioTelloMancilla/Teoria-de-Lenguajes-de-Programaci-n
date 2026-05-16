contract(contract1).
breach(contract1).

penalty_applicable(X) :-
    contract(X),
    breach(X).
