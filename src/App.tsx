import React from "react";
import { Button } from "./Button";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 space-y-6">
      <div className="space-x-3">
        <Button>Botón primario</Button>
        <Button variant="outline">Botón outline</Button>
        <Button variant="destructive">Botón destructivo</Button>
      </div>

      <div className="space-x-3">
        <Button rounded>Primario redondeado</Button>
        <Button variant="outline" rounded>Outline redondeado</Button>
        <Button variant="destructive" rounded>Destructivo redondeado</Button>
      </div>
    </main>
  );
}
