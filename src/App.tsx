import React, { useState } from "react";

import java_icon from "./assets/img/java_icon.png";
import python_icon from "./assets/img/python_icon.png";
import js_icon from "./assets/img/js_icon.png";
import html_icon from "./assets/img/html_icon.png";

type CardProps = {
  title: string;
  color: string;
  list: string[];
};

type CardIconProps = {
  card: CardProps;
  icons: string[];
};

type CardSections = {
  card: CardProps;
  sections: string[];
  text: string[][];
};

type ThemeSelectorProps = {
  color: string;
  handler: React.ChangeEventHandler<HTMLSelectElement>;
};

function App() {
  // HANDLER FOR THEME CHANGER
  const [theme, setTheme] = useState<string>("1");

  function themeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setTheme(event.target.value);
  }

  let colors: string[];

  if (theme === "1") {
    colors = [
      "blue-background",
      "green-background",
      "red-background",
      "purple-background",
    ];
  } else {
    colors = [
      "black-background",
      "grey-background",
      "black-background",
      "grey-background",
    ];
  }

  // Competencias ----------------------------------------------------------------
  const competencias = ["Java", "Python", "HTML", "JavaScript"];
  const competencias_icon = [java_icon, python_icon, html_icon, js_icon];

  const cardCompetencias: CardProps = {
    title: "Competencias",
    color: colors[1],
    list: competencias,
  };

  // Formación Académica ----------------------------------------------------------------
  const estudios = ["Universidad de León - Ingería Informática (3er año)"];

  // Experiencia profesional ----------------------------------------------------------------
  const experiencia = ["Desarrollo en Andorid Studio"];

  const seciones = [
    "Duración",
    "Sector de la empresa",
    "Área de actividad del puesto",
    "Tipo de contrato",
    "Descripción del puesto",
  ];

  const prac_1 = [
    "01/07/2024 - 31/07/2024",
    "Agricultura y Ganadería",
    "IT",
    "Formación Práctica, Prácticas estudiante extracurriculares",
    "Desarollo de widgets que informan del estado de embalses para una aplicación de movil Android",
  ];

  const text = [prac_1];

  const cardExperiencia: CardProps = {
    title: "Experiencia Profesional",
    color: colors[3],
    list: experiencia,
  };

  return (
    <>
      <ThemeSelector color={colors[0]} handler={themeHandler} />
      <TitleCard name="dportc01" color={colors[0]} />
      <CardIcons card={cardCompetencias} icons={competencias_icon} />
      <Card title="Formación Académica" color={colors[2]} list={estudios} />
      <CardExperience card={cardExperiencia} sections={seciones} text={text} />
    </>
  );
}

function TitleCard({ name, color }: { name: string; color: string }) {
  return (
    <div className={"title " + color}>
      <h1>{name}</h1>
      Estudiante de ingeniería informática
    </div>
  );
}

function generateList(list: string[]) {
  const content = list.map((entry, i) => {
    return <li key={"title " + i}>{entry}</li>;
  });

  return content;
}

function generateIconList(list: string[], icon: string[]) {
  const content = list.map((entry, i) => {
    return (
      <li key={"title " + i}>
        {entry} <img src={icon[i]} />
      </li>
    );
  });

  return content;
}

function Card({ title, color, list }: CardProps) {
  return (
    <div className={"card " + color}>
      <h2>{title}</h2>
      <ul>{generateList(list)}</ul>
    </div>
  );
}

function CardIcons({ card, icons }: CardIconProps) {
  return (
    <div className={"card " + card.color}>
      <h2>{card.title}</h2>
      <ul>{generateIconList(card.list, icons)}</ul>
    </div>
  );
}

function generateSublist(list: string[], sections: string[], texts: string[][]) {
  const content = list.map((entry, i) => {
    return (
      <li key={"title " + i}>
        {entry} <ul>{sublist(sections, texts[i])}</ul>
      </li>
    );
  });

  function sublist(section: string[], text: string[]) {
    const sublist = section.map((entry, i) => {
      return (
        <li key={"section " + i}>
          <strong>{entry}: </strong>
          {text[i]}
        </li>
      );
    });

    return sublist;
  }

  return content;
}

function CardExperience({ card, sections, text }: CardSections) {
  return (
    <div className={"card " + card.color}>
      <h2>{card.title}</h2>
      <ul>{generateSublist(card.list, sections, text)}</ul>
    </div>
  );
}

function ThemeSelector({ color, handler }: ThemeSelectorProps) {
  return (
    <div className={color}>
      Tema
      <select name="Tema" onChange={handler}>
        <option value="1">Por defecto</option>
        <option value="2">Oscuro</option>
      </select>
    </div>
  );
}

export default App;
