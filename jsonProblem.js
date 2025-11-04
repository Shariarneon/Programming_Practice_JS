const vehicles = [
    {
        name: "BMW",
        type: "car",
        wheel: 4,
    },
    {
        name: "Honda",
        type: "Car",
        wheel: 4,
    },
    {
        name: "Hero",
        type: "Bike",
        wheel: 2,
    },
];

function readJson() {
    console.log(vehicles[1] ['name']);
}

readJson();