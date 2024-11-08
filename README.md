# VITE-YU-GI-OH

## Descrizione

Questo progetto, realizzato con **Vite** e **Vue 3**, utilizza l'API di Yu-Gi-Oh! per mostrare un elenco dinamico di carte del gioco. All'avvio dell'applicazione, viene eseguita una richiesta AJAX per ottenere i dati delle carte, che vengono poi visualizzate sotto forma di card. Per migliorare l’esperienza utente, il numero di carte caricate può essere limitato tramite i parametri `num` e `offset`.

### Funzionalità principali

- **Visualizzazione carte**: recupero e visualizzazione dinamica delle carte Yu-Gi-Oh! utilizzando un componente per ciascuna card.
- **Filtraggio per archetipo**: una select dinamica permette di filtrare i risultati delle carte in base all’archetipo, popolando le opzioni tramite un’ulteriore chiamata all'API.
- **Loader**: componente di caricamento visualizzato fino a quando i dati non sono pronti.

### Bonus

- **Contatore di risultati**: componente aggiuntivo che mostra il numero totale di risultati ottenuti dalla ricerca.

### Tecnologie utilizzate

- **Vite** per la configurazione e l'esecuzione del progetto.
- **Vue 3** per la gestione dinamica dei componenti e dello stato.
- **AJAX** per interagire con l’API di Yu-Gi-Oh!.
