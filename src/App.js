import { useState } from "react";
import KubiWelcome  from "./screens/KubiWelcome";
import KubiHome     from "./screens/KubiHome";
import KubiMap      from "./screens/KubiMap";
import KubiExercise from "./screens/KubiExercise";
import KubiIA       from "./screens/KubiIA";

export default function App() {
  const [screen, setScreen] = useState("welcome");

  return (
    <>
      {screen === "welcome" && (
        <KubiWelcome onNext={() => setScreen("home")} />
      )}

      {screen === "home" && (
        <KubiHome
          userName="Maria"
          onContinue={() => setScreen("map")}
          onTalk={() => setScreen("ia")}
        />
      )}

      {screen === "map" && (
        <KubiMap
          onBack={() => setScreen("home")}
          onNext={() => setScreen("home")}
          onMic={() => setScreen("ia")}
          onExercise={() => setScreen("exercise")}
        />
      )}

      {screen === "exercise" && (
        <KubiExercise
          desafio="Desafio 01"
          instrucao="Leia a Frase Abaixo"
          frase="Eu gosto de assistir TV"
          status="done"
          score={10}
          onBack={() => setScreen("map")}
          onNext={() => setScreen("map")}
          onMic={() => setScreen("ia")}
        />
      )}

      {screen === "ia" && (
        <KubiIA
          question="Olá! O que você quer dizer?"
          userSaid='"Mi qui pelo app"'
          hasError={true}
          corrected='"Me guie pelo app"'
          onRetry={() => setScreen("ia")}
          onSend={() => setScreen("home")}
        />
      )}
    </>
  );
}
