import React from "react";
import CreditCard from "./components/CreditCard";
import { cards, countryPopulation, userCard } from "./data/data";
import Rating from "./components/Rating";
import CardUser from "./components/CardUser";
import ButtonList from "./components/ButtonList";
import GraphicPopulation from "./components/GraphicPopulation";
import ButtonPlus from "./components/ButtonPlus";
import ButtonReset from "./components/ButtonReset";
import ButtonMinus from "./components/ButtonMinus";

const App = () => {
  ////////////javaScriptcards
  const acc = 0;
  /////////// HTML (lo que se renderiza)
  return (
    <div className="flex flex-col justify-center items-center gap-[12px] ">
      {/* <p className="flex text-white w- h-32 border-slate-500 justify-center items-center bg-[#4DA799] text-7xl">
        qlq
      </p>
      <Button></Button> */}
      <div className="flex">
        {cards.map((card, i) => {
          return (
            <CreditCard
              key={i}
              type={card.type}
              number={card.number}
              expirationMonth={card.expirationMonth}
              expirationYear={card.expirationYear}
              bank={card.bank}
              owner={card.owner}
              cssClass={card.cssClass}
            />
          );
        })}
      </div>
      <div>
        {userCard.map((user, i) => {
          return (
            <CardUser
              key={i}
              name={user.name}
              rating={user.rating}
              gender={user.gender}
              job={user.job}
              city={user.city}
            />
          );
        })}
      </div>
      <div>
        <ButtonList num={31} />
      </div>

      <div>
        {countryPopulation.map((country, i) => {
          return (
            <GraphicPopulation
              key={i}
              country={country.country}
              population={country.population}
            />
          );
        })}
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div>{acc}</div>
        <div className="flex">
          <div className="bg-[#25A745]">
            <ButtonPlus acc={acc} />
          </div>
          <div className="bg-[#FFC008]">
            <ButtonReset acc={acc} />
          </div>
          <div className="bg-[#DC3547]">
            <ButtonMinus acc={acc} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
