import React, { useState, useEffect } from "react";

const ImmagineEFraseDelGiorno = () => {
  const [immagineDelGiorno, setImmagineDelGiorno] = useState("");
  const [fraseDelGiorno, setFraseDelGiorno] = useState("");
  const [dataCorrente, setDataCorrente] = useState("");

  // Funzione per ottenere la data in formato italiano
  const getDataItaliana = () => {
    const oggi = new Date();
    const opzioni = { day: "numeric", month: "long" };
    return oggi.toLocaleDateString("it-IT", opzioni);
  };

  // Funzione per ottenere un'immagine casuale da Unsplash
  const fetchImmagineCasuale = async () => {
    const accessKey = "LEcv0ki86flKwQo4wNkNWc2dH5khK4P1NI955iGu6mg"; // Sostituisci con la tua chiave API
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${accessKey}`
      );
      const data = await response.json();
      setImmagineDelGiorno(data.urls.regular); // Usa l'URL dell'immagine
    } catch (error) {
      console.error("Errore nel caricamento dell'immagine:", error);
    }
  };

  // Funzione per ottenere una frase casuale da Quotes API
  const fetchFraseCasuale = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setFraseDelGiorno(data.content); // Usa il contenuto della frase
    } catch (error) {
      console.error("Errore nel caricamento della frase:", error);
    }
  };

  // Effetto per aggiornare il componente alla mezzanotte italiana
  useEffect(() => {
    // Imposta la data corrente
    setDataCorrente(getDataItaliana());
// Ottieni l'immagine e la frase iniziali
    fetchImmagineCasuale();
    fetchFraseCasuale();

    // Calcola il tempo rimanente fino alla mezzanotte italiana
    const oggi = new Date();
    const mezzanotte = new Date(oggi);
    mezzanotte.setHours(24, 0, 0, 0); // Imposta a mezzanotte

    const tempoRimanente = mezzanotte - oggi;

    // Imposta un timeout per aggiornare il componente alla mezzanotte
    const timeoutId = setTimeout(() => {
      setDataCorrente(getDataItaliana());
      fetchImmagineCasuale();
      fetchFraseCasuale();
    }, tempoRimanente);

    // Pulisci il timeout quando il componente viene smontato
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Oggi è il {dataCorrente}</h2>
      {immagineDelGiorno && (
        <img
          src={immagineDelGiorno}
          alt="Immagine del giorno"
          style={{ width: "400px", height: "200px", margin: "10px" }}
        />
      )}
      {fraseDelGiorno && (
        <p style={{ fontSize: "1.2em", marginTop: "10px" }}>{fraseDelGiorno}</p>
      )}
    </div>
  );
};

export default ImmagineEFraseDelGiorno;