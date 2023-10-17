Visualizzare in pagina 5 numeri casuali (anche tramite alert).
Da lì parte un timer di 30 secondi. (durante il quale i numero non devono essere visibili all’utente)
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

- creare la funzione per creare 5 numeri casuali
- stampare in un alert i 5 numeri
- setTimeOut a 30 secondi, dopo di che
    - ciclo for da 5 iterazioni che stampa un prompt
    - PER OGNI prompt recuperare il valore e confrontarlo con l'array di numeri 
    - SE è presente
        - allora aumenta il punteggio di 1 