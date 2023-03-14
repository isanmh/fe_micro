// Mapping List data dari object / array
import React from "react";

// membuat data array / object
const foods = [
  {
    nama: "Nasi Goreng",
    harga: 10000,
  },
  {
    nama: "Mie Goreng",
    harga: 12000,
  },
  {
    nama: "Soto",
    harga: 15000,
  },
  {
    nama: "Mie Ayam",
    harga: 7000,
  },
];

// fungsi reduce
const total_bayar = foods.reduce((total, food) => total + food.harga, 0);

const Map = () => {
  return (
    // membuat list dengan map
    <div>
      <h2>Daftar Makanan</h2>
      <ul>
        {foods.map((food, index) => {
          return (
            <li key={index}>
              {index + 1}. {food.nama} - Harga : {food.harga}
            </li>
          );
        })}
      </ul>

      <h2>Map Fillters Harga yang lebih dari 11.000</h2>
      <ul>
        {foods
          .filter((food) => food.harga > 11000)
          .map((food, index) => {
            return (
              <li key={index}>
                {index + 1}. {food.nama} - Harga : {food.harga}
              </li>
            );
          })}
      </ul>

      <h3>Total Harga = {total_bayar}</h3>
    </div>
  );
};

export default Map;
